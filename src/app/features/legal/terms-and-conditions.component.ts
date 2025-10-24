import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="legal-page">
      <div class="legal-container">
        <div class="legal-header">
          <h1>Terms and Conditions</h1>
          <p class="last-updated">Last Updated: January 2025</p>
        </div>

        <div class="legal-content">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using TalentForge ("the Platform"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the Platform.</p>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>TalentForge is a multi-tenant SaaS recruitment platform that connects recruiters, candidates, and client companies. The Platform provides tools for job posting, candidate management, application tracking, and placement management.</p>
          </section>

          <section>
            <h2>3. User Accounts</h2>
            <h3>3.1 Registration</h3>
            <p>You must register for an account to access certain features. You agree to provide accurate, current, and complete information during registration.</p>
            
            <h3>3.2 Account Security</h3>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
            
            <h3>3.3 Account Types</h3>
            <ul>
              <li><strong>Candidates:</strong> Job seekers creating profiles and applying to positions</li>
              <li><strong>Recruiters:</strong> Professionals managing job postings and candidates</li>
              <li><strong>Tenant Admins:</strong> Organization administrators managing team members</li>
            </ul>
          </section>

          <section>
            <h2>4. Subscription and Billing</h2>
            <h3>4.1 Subscription Plans</h3>
            <p>Paid subscriptions are available for recruiting organizations. Subscription fees are billed in advance on a monthly or annual basis.</p>
            
            <h3>4.2 Payment Terms</h3>
            <p>All fees are non-refundable except as required by law. You authorize us to charge your payment method for all fees incurred.</p>
            
            <h3>4.3 Cancellation</h3>
            <p>You may cancel your subscription at any time. Cancellation will be effective at the end of the current billing period.</p>
          </section>

          <section>
            <h2>5. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Violate any laws or regulations</li>
              <li>Post false, misleading, or fraudulent information</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Attempt to gain unauthorized access to the Platform</li>
              <li>Use automated systems to access the Platform without permission</li>
              <li>Interfere with or disrupt the Platform's operation</li>
            </ul>
          </section>

          <section>
            <h2>6. Content and Intellectual Property</h2>
            <h3>6.1 User Content</h3>
            <p>You retain ownership of content you submit (resumes, job postings, etc.). By submitting content, you grant us a license to use, store, and display it as necessary to provide the service.</p>
            
            <h3>6.2 Platform Content</h3>
            <p>The Platform and its original content, features, and functionality are owned by TalentForge and protected by copyright, trademark, and other intellectual property laws.</p>
          </section>

          <section>
            <h2>7. Recruitment-Specific Terms</h2>
            <h3>7.1 Candidate Data</h3>
            <p>Recruiters must obtain proper consent before uploading candidate information. You warrant that you have the right to share all candidate data on the Platform.</p>
            
            <h3>7.2 Job Postings</h3>
            <p>All job postings must comply with equal employment opportunity laws. Discriminatory postings based on race, gender, age, religion, disability, or other protected characteristics are prohibited.</p>
            
            <h3>7.3 Background Checks</h3>
            <p>Any background checks or screening must comply with the Fair Credit Reporting Act (FCRA) and applicable local laws. You are responsible for obtaining proper authorization.</p>
            
            <h3>7.4 Placement Fees</h3>
            <p>Commission and placement fee structures are defined in separate agreements. TalentForge facilitates but does not guarantee placements.</p>
          </section>

          <section>
            <h2>8. Privacy and Data Protection</h2>
            <p>Your use of the Platform is subject to our Privacy Policy. We collect, use, and protect your personal information in accordance with applicable data protection laws including GDPR, CCPA, and other regional regulations.</p>
            
            <h3>8.1 Data Retention</h3>
            <p>Candidate data is retained according to our data retention policy and applicable legal requirements. Users can request data deletion subject to legal obligations.</p>
          </section>

          <section>
            <h2>9. Prohibited Activities</h2>
            <p>You may not use the Platform to:</p>
            <ul>
              <li>Engage in discriminatory hiring practices</li>
              <li>Misrepresent job opportunities or compensation</li>
              <li>Solicit candidates for illegal activities</li>
              <li>Share candidate data without authorization</li>
              <li>Circumvent the Platform to avoid fees</li>
              <li>Scrape or harvest data without permission</li>
            </ul>
          </section>

          <section>
            <h2>10. Termination</h2>
            <p>We reserve the right to suspend or terminate your account if you violate these Terms or engage in conduct that we deem harmful to the Platform or other users. Upon termination, you must cease using the Platform and may lose access to your data.</p>
          </section>

          <section>
            <h2>11. Disclaimers</h2>
            <p>THE PLATFORM IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE THAT THE PLATFORM WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE. WE DO NOT WARRANT THE ACCURACY OF CANDIDATE INFORMATION OR GUARANTEE SUCCESSFUL PLACEMENTS.</p>
          </section>

          <section>
            <h2>12. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, TALENTFORGE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE PLATFORM. THIS INCLUDES DAMAGES RELATED TO HIRING DECISIONS, CANDIDATE QUALITY, OR FAILED PLACEMENTS.</p>
          </section>

          <section>
            <h2>13. Indemnification</h2>
            <p>You agree to indemnify and hold TalentForge harmless from any claims arising from your use of the Platform, including claims related to employment decisions, discrimination, or violation of employment laws.</p>
          </section>

          <section>
            <h2>14. Governing Law</h2>
            <p>These Terms are governed by the laws of the jurisdiction where TalentForge is incorporated, without regard to conflict of law principles.</p>
          </section>

          <section>
            <h2>15. Contact Information</h2>
            <p>For questions about these Terms, please contact us at:</p>
            <p>
              <strong>Email:</strong> legal&#64;talentforge.com<br>
              <strong>Address:</strong> TalentForge Inc.
            </p>
          </section>
        </div>

        <div class="legal-footer">
          <a routerLink="/auth/login" class="btn-back">← Back to Login</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .legal-page { min-height: 100vh; background: #f8fafc; padding: 2rem; }
    .legal-container { max-width: 900px; margin: 0 auto; background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 3rem; }
    .legal-header { text-align: center; margin-bottom: 3rem; padding-bottom: 2rem; border-bottom: 2px solid #e2e8f0; }
    .legal-header h1 { font-size: 2.5rem; font-weight: 700; color: #0f172a; margin: 0 0 0.5rem 0; }
    .last-updated { color: #64748b; font-size: 0.875rem; }
    .legal-content { line-height: 1.8; color: #475569; }
    .legal-content section { margin-bottom: 2.5rem; }
    .legal-content h2 { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin: 0 0 1rem 0; }
    .legal-content h3 { font-size: 1.125rem; font-weight: 600; color: #1e293b; margin: 1.5rem 0 0.75rem 0; }
    .legal-content p { margin: 0 0 1rem 0; }
    .legal-content ul { margin: 0 0 1rem 1.5rem; padding: 0; }
    .legal-content li { margin-bottom: 0.5rem; }
    .legal-content strong { color: #0f172a; font-weight: 600; }
    .legal-footer { margin-top: 3rem; padding-top: 2rem; border-top: 2px solid #e2e8f0; text-align: center; }
    .btn-back { background: #0066ff; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; transition: all 0.2s; display: inline-block; }
    .btn-back:hover { background: #0052cc; }
    @media (max-width: 768px) {
      .legal-page { padding: 1rem; }
      .legal-container { padding: 1.5rem; }
      .legal-header h1 { font-size: 1.75rem; }
    }
  `]
})
export class TermsAndConditionsComponent {}
