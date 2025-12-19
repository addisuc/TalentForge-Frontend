import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-manual',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-manual.component.html',
  styleUrls: ['./user-manual.component.scss']
})
export class UserManualComponent implements OnInit {
  @ViewChild('contentArea') contentArea!: ElementRef;
  
  manualContent = '';
  loading = true;
  sections: { id: string; title: string; level: number }[] = [];
  roleName = '';
  searchTerm = '';
  activeSection = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const role = this.route.snapshot.queryParams['role'];
    this.loadManual(role);
  }

  loadManual(role: string) {
    let manualFile = '';
    switch(role) {
      case 'CANDIDATE':
        manualFile = 'candidate-user-manual.md';
        this.roleName = 'Candidate';
        break;
      case 'RECRUITER':
        manualFile = 'recruiter-user-manual.md';
        this.roleName = 'Recruiter';
        break;
      case 'CLIENT':
        manualFile = 'client-user-manual.md';
        this.roleName = 'Client';
        break;
      case 'PLATFORM_ADMIN':
      case 'PLATFORM_SUPER_ADMIN':
      case 'SUPER_ADMIN':
        manualFile = 'platform-admin-user-manual.md';
        this.roleName = 'Platform Admin';
        break;
      default:
        manualFile = 'candidate-user-manual.md';
        this.roleName = 'User';
    }

    this.http.get(`/assets/docs/${manualFile}`, { responseType: 'text' })
      .subscribe({
        next: (markdown) => {
          this.parseMarkdown(markdown);
          this.loading = false;
        },
        error: (err) => {
          console.error('Failed to load manual:', err);
          this.manualContent = '<div class="error-message"><h2>⚠️ Manual Not Available</h2><p>We couldn\'t load the user manual. Please contact support.</p></div>';
          this.loading = false;
        }
      });
  }

  parseMarkdown(markdown: string) {
    const lines = markdown.split('\n');
    let html = '';
    let inList = false;
    let inCodeBlock = false;
    let codeContent = '';
    let listType = '';
    
    lines.forEach((line) => {
      // Code blocks
      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          html += `<pre><code>${this.escapeHtml(codeContent)}</code></pre>`;
          codeContent = '';
          inCodeBlock = false;
        } else {
          if (inList) { html += `</${listType}>`; inList = false; }
          inCodeBlock = true;
        }
        return;
      }
      
      if (inCodeBlock) {
        codeContent += line + '\n';
        return;
      }
      
      // Headers
      const h1Match = line.match(/^#\s+(.+)$/);
      const h2Match = line.match(/^##\s+(.+)$/);
      const h3Match = line.match(/^###\s+(.+)$/);
      const h4Match = line.match(/^####\s+(.+)$/);
      
      if (h1Match) {
        if (inList) { html += `</${listType}>`; inList = false; }
        const title = this.cleanText(h1Match[1]);
        const id = this.generateId(title);
        this.sections.push({ id, title, level: 1 });
        html += `<h1 id="${id}" class="section-header">${this.formatText(h1Match[1])}</h1>`;
      } else if (h2Match) {
        if (inList) { html += `</${listType}>`; inList = false; }
        const title = this.cleanText(h2Match[1]);
        const id = this.generateId(title);
        this.sections.push({ id, title, level: 2 });
        html += `<h2 id="${id}" class="section-header">${this.formatText(h2Match[1])}</h2>`;
      } else if (h3Match) {
        if (inList) { html += `</${listType}>`; inList = false; }
        const title = this.cleanText(h3Match[1]);
        const id = this.generateId(title);
        this.sections.push({ id, title, level: 3 });
        html += `<h3 id="${id}" class="section-header">${this.formatText(h3Match[1])}</h3>`;
      } else if (h4Match) {
        if (inList) { html += `</${listType}>`; inList = false; }
        html += `<h4>${this.formatText(h4Match[1])}</h4>`;
      }
      // Numbered lists
      else if (line.match(/^\d+\.\s+(.+)$/)) {
        if (inList && listType !== 'ol') { html += `</${listType}>`; inList = false; }
        if (!inList) { html += '<ol>'; inList = true; listType = 'ol'; }
        const content = line.replace(/^\d+\.\s+/, '');
        html += `<li>${this.formatText(content)}</li>`;
      }
      // Bullet lists
      else if (line.match(/^[-*]\s+(.+)$/)) {
        if (inList && listType !== 'ul') { html += `</${listType}>`; inList = false; }
        if (!inList) { html += '<ul>'; inList = true; listType = 'ul'; }
        const content = line.replace(/^[-*]\s+/, '');
        html += `<li>${this.formatText(content)}</li>`;
      }
      // Horizontal rule
      else if (line.match(/^---+$/)) {
        if (inList) { html += `</${listType}>`; inList = false; }
        html += '<hr>';
      }
      // Empty line
      else if (line.trim() === '') {
        if (inList) { 
          html += `</${listType}>`; 
          inList = false; 
        }
      }
      // Regular paragraph
      else if (line.trim()) {
        if (inList) { 
          html += `</${listType}>`; 
          inList = false; 
        }
        html += `<p>${this.formatText(line)}</p>`;
      }
    });
    
    if (inList) html += `</${listType}>`;
    this.manualContent = html;
  }

  cleanText(text: string): string {
    return text.replace(/\*\*/g, '').replace(/\*/g, '').replace(/`/g, '').trim();
  }

  formatText(text: string): string {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/\[(.+?)\]\(#.+?\)/g, '<span class="toc-link-text">$1</span>')
      .replace(/\[(.+?)\]\(http(.+?)\)/g, '<a href="http$2" target="_blank">$1</a>');
  }

  escapeHtml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  generateId(text: string): string {
    return text.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  scrollToSection(id: string) {
    this.activeSection = id;
  }

  searchManual() {
    if (!this.searchTerm.trim()) return;
    
    const content = document.querySelector('.content');
    if (!content) return;
    
    const text = content.textContent || '';
    const searchLower = this.searchTerm.toLowerCase();
    const index = text.toLowerCase().indexOf(searchLower);
    
    if (index !== -1) {
      const allElements = content.querySelectorAll('h1, h2, h3, p, li');
      for (let i = 0; i < allElements.length; i++) {
        const el = allElements[i] as HTMLElement;
        if (el.textContent?.toLowerCase().includes(searchLower)) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.style.backgroundColor = '#fff3cd';
          setTimeout(() => { el.style.backgroundColor = ''; }, 2000);
          break;
        }
      }
    }
  }

  printManual() {
    window.print();
  }

  goBack() {
    window.history.back();
  }
}
