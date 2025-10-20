import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clients-manage',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './clients-manage.component.html',
  styleUrls: ['./clients-manage.component.scss']
})
export class ClientsManageComponent {
  clients = [
    {
      id: 1,
      name: 'TechCorp Solutions',
      logo: '🏢',
      industry: 'Technology',
      activeJobs: 8,
      totalHires: 24,
      status: 'Active',
      contact: 'Sarah Johnson',
      email: 'sarah@techcorp.com',
      phone: '+1 (555) 123-4567',
      since: '2023-01-15'
    },
    {
      id: 2,
      name: 'Global Finance Inc',
      logo: '💼',
      industry: 'Finance',
      activeJobs: 5,
      totalHires: 18,
      status: 'Active',
      contact: 'Michael Chen',
      email: 'mchen@globalfinance.com',
      phone: '+1 (555) 234-5678',
      since: '2023-03-20'
    },
    {
      id: 3,
      name: 'HealthPlus Medical',
      logo: '🏥',
      industry: 'Healthcare',
      activeJobs: 12,
      totalHires: 45,
      status: 'Active',
      contact: 'Dr. Emily Rodriguez',
      email: 'erodriguez@healthplus.com',
      phone: '+1 (555) 345-6789',
      since: '2022-11-10'
    },
    {
      id: 4,
      name: 'RetailMax Group',
      logo: '🛍️',
      industry: 'Retail',
      activeJobs: 3,
      totalHires: 12,
      status: 'Active',
      contact: 'James Wilson',
      email: 'jwilson@retailmax.com',
      phone: '+1 (555) 456-7890',
      since: '2023-06-05'
    },
    {
      id: 5,
      name: 'EduTech Academy',
      logo: '📚',
      industry: 'Education',
      activeJobs: 0,
      totalHires: 8,
      status: 'Inactive',
      contact: 'Lisa Anderson',
      email: 'landerson@edutech.com',
      phone: '+1 (555) 567-8901',
      since: '2023-02-28'
    }
  ];

  searchQuery = '';
  selectedIndustry = 'all';
  selectedStatus = 'all';
  
  currentPage = 1;
  itemsPerPage = 25;

  get filteredClients() {
    return this.clients.filter(client => {
      const matchesSearch = client.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                          client.contact.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesIndustry = this.selectedIndustry === 'all' || client.industry === this.selectedIndustry;
      const matchesStatus = this.selectedStatus === 'all' || client.status === this.selectedStatus;
      return matchesSearch && matchesIndustry && matchesStatus;
    });
  }

  get totalClients() {
    return this.filteredClients.length;
  }

  get totalPages() {
    return Math.ceil(this.totalClients / this.itemsPerPage);
  }

  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.totalClients);
  }

  get paginatedClients() {
    return this.filteredClients.slice(this.startIndex, this.endIndex);
  }

  get pageNumbers() {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  onItemsPerPageChange() {
    this.currentPage = 1;
  }

  viewClient(id: number) {
    console.log('View client:', id);
  }
}
