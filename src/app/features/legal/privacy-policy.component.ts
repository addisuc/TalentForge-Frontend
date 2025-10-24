import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="legal-container">
      <div class="legal-content">
        <h1>Privacy Policy</h1>
        <p class="last-updated">Last Updated: January 2025</p>

        <section>
          <h2>1. Information We Collect</h2>
          <h3>1.1 Candidate Information</h3>
          <p>For job seekers: name, contact details, resume, work history, education, skills, certifications, references, and application materials.</p>
          <h3>1.2 Recruiter Information</h3>
          <p>For recruiters: company details, contact information, job postings, candidate interactions, and billing information.</p>
          <h3>1.3 Automatically Collected Data</h3>
          <p>IP address, device information, browser type, usage patterns, and interaction data through cookies and analytics tools.</p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Facilitate job matching and recruitment services</li>
            <li>Enable communication between candidates and recruiters</li>
            <li>Process applications and manage hiring workflows</li>
            <li>Conduct background checks (with consent)</li>
            <li>Improve our AI matching algorithms</li>
            <li>Send relevant job alerts and notifications</li>
            <li>Comply with legal obligations and prevent fraud</li>
          </ul>
        </section>

        <section>
          <h2>3. Information Sharing and Disclosure</h2>
          <h3>3.1 With Employers</h3>
          <p>When you apply for a job, your profile and application materials are shared with the hiring company and their authorized recruiters.</p>
          <h3>3.2 With Service Providers</h3>
          <p>We share data with background check providers, payment processors, cloud hosting services, and analytics platforms under strict confidentiality agreements.</p>
          <h3>3.3 Legal Requirements</h3>
          <p>We may disclose information to comply with legal obligations, court orders, or government requests.</p>
          <h3>3.4 Business Transfers</h3>
          <p>In case of merger, acquisition, or sale, your information may be transferred to the new entity.</p>
        </section>

        <section>
          <h2>4. Data Retention</h2>
          <p>Candidate profiles are retained for 3 years of inactivity unless deletion is requested. Job postings are archived after 90 days of closure. Billing records are kept for 7 years per legal requirements.</p>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>We implement industry-standard security measures including encryption (AES-256), secure data centers (SOC 2 Type II certified), regular security audits, access controls, and employee training to protect your information.</p>
        </section>

        <section>
          <h2>6. Your Privacy Rights</h2>
          <h3>6.1 GDPR Rights (EU Users)</h3>
          <p>Right to access, rectification, erasure, data portability, restriction of processing, and objection to processing.</p>
          <h3>6.2 CCPA Rights (California Users)</h3>
          <p>Right to know what data is collected, right to deletion, right to opt-out of sale (we do not sell data), and non-discrimination rights.</p>
          <h3>6.3 Exercising Rights</h3>
          <p>Contact privacy&#64;talentforge.com to exercise your rights. We respond within 30 days.</p>
        </section>

        <section>
          <h2>7. Cookies and Tracking</h2>
          <p>We use essential cookies (authentication, security), functional cookies (preferences, settings), analytics cookies (Google Analytics, usage tracking), and marketing cookies (job recommendations). You can manage cookie preferences in your browser settings.</p>
        </section>

        <section>
          <h2>8. International Data Transfers</h2>
          <p>Your data may be processed in countries outside your residence. We use Standard Contractual Clauses and ensure adequate protection mechanisms for international transfers.</p>
        </section>

        <section>
          <h2>9. Children's Privacy</h2>
          <p>Our Platform is not intended for users under 16. We do not knowingly collect data from children.</p>
        </section>

        <section>
          <h2>10. Changes to Privacy Policy</h2>
          <p>We may update this policy periodically. Material changes will be notified via email or platform notification 30 days in advance.</p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <p>For privacy concerns, contact us at privacy&#64;talentforge.com</p>
        </section>

        <div class="actions">
          <button class="btn-secondary" (click)="goBack()">Close</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .legal-container { min-height: 100vh; background: #f8fafc; padding: 2rem; }
    .legal-content { max-width: 800px; margin: 0 auto; background: white; padding: 3rem; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    h1 { font-size: 2rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem; }
    .last-updated { color: #64748b; font-size: 0.875rem; margin-bottom: 2rem; }
    section { margin-bottom: 2rem; }
    h2 { font-size: 1.25rem; font-weight: 600; color: #0f172a; margin-bottom: 0.75rem; }
    h3 { font-size: 1rem; font-weight: 600; color: #1e293b; margin: 1rem 0 0.5rem 0; }
    ul { margin: 0.5rem 0 1rem 1.5rem; padding: 0; }
    li { margin-bottom: 0.5rem; color: #475569; line-height: 1.6; }
    p { color: #475569; line-height: 1.6; margin-bottom: 0.75rem; }
    .actions { margin-top: 3rem; display: flex; gap: 1rem; }
    .btn-secondary { padding: 12px 24px; border: 1px solid #e2e8f0; background: white; color: #475569; border-radius: 8px; font-weight: 600; cursor: pointer; }
    .btn-secondary:hover { background: #f8fafc; }
  `]
})
export class PrivacyPolicyComponent {
  goBack() {
    window.close();
  }
}
