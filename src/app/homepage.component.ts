import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="homepage">
      <nav class="navbar">
        <div class="container">
          <div class="logo">TalentForge</div>
          <div class="nav-links">
            <a routerLink="/auth/login">Sign In</a>
            <button class="btn-nav" routerLink="/auth/register">Get Started</button>
          </div>
        </div>
      </nav>

      <header class="hero">
        <div class="container">
          <div class="hero-badge">🚀 Trusted by 500+ Companies Worldwide</div>
          <h1>Find & Hire Top Talent<br><span class="gradient-text">10x Faster</span></h1>
          <p class="hero-subtitle">AI-powered recruitment platform that connects you with pre-vetted candidates, automates screening, and accelerates your hiring pipeline.</p>
          <div class="cta-buttons">
            <button class="btn-primary" routerLink="/auth/register">Start Free Trial</button>
            <button class="btn-secondary" routerLink="/auth/login">Watch Demo</button>
          </div>
          <p class="hero-note">✓ No credit card required  ✓ 14-day free trial  ✓ Cancel anytime</p>
        </div>
      </header>

      <section class="stats">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-item" *ngFor="let stat of stats">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </section>

      <section class="features">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">FEATURES</span>
            <h2>Everything You Need to Hire Smarter</h2>
            <p>Streamline your entire recruitment process from sourcing to onboarding</p>
          </div>
          <div class="features-grid">
            <div class="feature-card" *ngFor="let feature of features">
              <div class="feature-icon">{{ feature.icon }}</div>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="benefits">
        <div class="container">
          <div class="benefits-content">
            <div class="benefits-text">
              <span class="section-badge">WHY TALENTFORGE</span>
              <h2>Reduce Time-to-Hire by 70%</h2>
              <ul class="benefits-list">
                <li *ngFor="let benefit of benefits">
                  <span class="check-icon">✓</span>
                  <div>
                    <strong>{{ benefit.title }}</strong>
                    <p>{{ benefit.description }}</p>
                  </div>
                </li>
              </ul>
              <button class="btn-primary" routerLink="/auth/register">Start Hiring Today</button>
            </div>
            <div class="benefits-visual">
              <div class="visual-card">📊 Real-time Analytics</div>
              <div class="visual-card">🎯 Smart Matching</div>
              <div class="visual-card">⚡ Instant Screening</div>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="container">
          <h2>Ready to Transform Your Hiring?</h2>
          <p>Join thousands of companies already hiring better with TalentForge</p>
          <button class="btn-primary-large" routerLink="/auth/register">Start Your Free Trial</button>
        </div>
      </section>

      <footer class="footer">
        <div class="container">
          <p>&copy; 2024 TalentForge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .homepage {
      min-height: 100vh;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      color: #1a1a1a;
      background: #ffffff;
    }

    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid #e5e7eb;
      padding: 20px 0;
      z-index: 1000;
    }

    .navbar .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .nav-links {
      display: flex;
      gap: 30px;
      align-items: center;
    }

    .nav-links a {
      color: #4b5563;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
    }

    .nav-links a:hover {
      color: #0066ff;
    }

    .btn-nav {
      background: #0066ff;
      color: white;
      padding: 10px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }

    .btn-nav:hover {
      background: #0052cc;
      transform: translateY(-1px);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .hero {
      padding: 160px 0 100px;
      text-align: center;
      background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
    }

    .hero-badge {
      display: inline-block;
      background: #eff6ff;
      color: #0066ff;
      padding: 8px 20px;
      border-radius: 50px;
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 24px;
    }

    h1 {
      font-size: 4rem;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 24px;
      color: #0f172a;
      letter-spacing: -2px;
    }

    .gradient-text {
      background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: #64748b;
      max-width: 700px;
      margin: 0 auto 40px;
      line-height: 1.7;
    }

    .cta-buttons {
      display: flex;
      gap: 16px;
      justify-content: center;
      margin-bottom: 24px;
    }

    .btn-primary, .btn-secondary {
      padding: 16px 32px;
      border: none;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }

    .btn-primary {
      background: #0066ff;
      color: white;
      box-shadow: 0 4px 14px rgba(0, 102, 255, 0.3);
    }

    .btn-primary:hover {
      background: #0052cc;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 102, 255, 0.4);
    }

    .btn-secondary {
      background: white;
      color: #0f172a;
      border: 2px solid #e2e8f0;
    }

    .btn-secondary:hover {
      border-color: #0066ff;
      color: #0066ff;
      transform: translateY(-2px);
    }

    .hero-note {
      color: #94a3b8;
      font-size: 0.875rem;
    }

    .stats {
      padding: 60px 0;
      background: white;
      border-top: 1px solid #f1f5f9;
      border-bottom: 1px solid #f1f5f9;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
      text-align: center;
    }

    .stat-number {
      font-size: 3rem;
      font-weight: 800;
      color: #0066ff;
      margin-bottom: 8px;
    }

    .stat-label {
      color: #64748b;
      font-size: 1rem;
    }

    .features {
      padding: 100px 0;
      background: #f8fafc;
    }

    .section-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .section-badge {
      display: inline-block;
      color: #0066ff;
      font-size: 0.875rem;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 16px;
    }

    .section-header h2 {
      font-size: 2.75rem;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 16px;
    }

    .section-header p {
      font-size: 1.125rem;
      color: #64748b;
      max-width: 600px;
      margin: 0 auto;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }

    .feature-card {
      background: white;
      padding: 40px;
      border-radius: 16px;
      border: 1px solid #e2e8f0;
      transition: all 0.3s;
    }

    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
      border-color: #0066ff;
    }

    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }

    .feature-card h3 {
      font-size: 1.375rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 12px;
    }

    .feature-card p {
      color: #64748b;
      line-height: 1.7;
    }

    .benefits {
      padding: 100px 0;
      background: white;
    }

    .benefits-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
    }

    .benefits-text h2 {
      font-size: 2.75rem;
      font-weight: 800;
      color: #0f172a;
      margin: 16px 0 32px;
    }

    .benefits-list {
      list-style: none;
      margin-bottom: 40px;
    }

    .benefits-list li {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;
    }

    .check-icon {
      width: 24px;
      height: 24px;
      background: #0066ff;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-weight: 700;
    }

    .benefits-list strong {
      display: block;
      color: #0f172a;
      font-size: 1.125rem;
      margin-bottom: 4px;
    }

    .benefits-list p {
      color: #64748b;
      line-height: 1.6;
    }

    .benefits-visual {
      display: grid;
      gap: 20px;
    }

    .visual-card {
      background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
      color: white;
      padding: 40px;
      border-radius: 16px;
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 102, 255, 0.2);
    }

    .cta-section {
      padding: 100px 0;
      background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
      text-align: center;
      color: white;
    }

    .cta-section h2 {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 16px;
    }

    .cta-section p {
      font-size: 1.25rem;
      margin-bottom: 40px;
      opacity: 0.95;
    }

    .btn-primary-large {
      background: white;
      color: #0066ff;
      padding: 18px 48px;
      border: none;
      border-radius: 10px;
      font-size: 1.125rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .btn-primary-large:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    }

    .footer {
      padding: 40px 0;
      background: #0f172a;
      color: #94a3b8;
      text-align: center;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
      }
      
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .features-grid {
        grid-template-columns: 1fr;
      }
      
      .benefits-content {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      
      .cta-buttons {
        flex-direction: column;
      }
    }
  `]
})
export class HomepageComponent {
  stats = [
    { number: '500+', label: 'Companies Hiring' },
    { number: '50K+', label: 'Active Candidates' },
    { number: '70%', label: 'Faster Hiring' },
    { number: '95%', label: 'Success Rate' }
  ];

  features = [
    {
      icon: '🎯',
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms analyze skills, experience, and culture fit to connect you with the perfect candidates instantly.'
    },
    {
      icon: '⚡',
      title: 'Automated Screening',
      description: 'Save 80% of screening time with intelligent resume parsing, skill assessments, and automated interview scheduling.'
    },
    {
      icon: '📊',
      title: 'Real-Time Analytics',
      description: 'Track every metric that matters with comprehensive dashboards, pipeline insights, and predictive hiring analytics.'
    },
    {
      icon: '🔍',
      title: 'Talent Pool Management',
      description: 'Build and nurture your talent pipeline with smart segmentation, engagement tracking, and automated outreach.'
    },
    {
      icon: '🤝',
      title: 'Collaborative Hiring',
      description: 'Streamline team collaboration with shared feedback, interview scorecards, and unified candidate evaluation.'
    },
    {
      icon: '🔗',
      title: 'Seamless Integration',
      description: 'Connect with 100+ tools including LinkedIn, Indeed, ATS systems, HRIS, and communication platforms.'
    }
  ];

  benefits = [
    {
      title: 'Pre-Vetted Talent Pool',
      description: 'Access thousands of pre-screened, qualified candidates ready to interview immediately.'
    },
    {
      title: 'Smart Automation',
      description: 'Automate repetitive tasks like resume screening, email follow-ups, and interview scheduling.'
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Make better hiring decisions with predictive analytics and AI-powered candidate insights.'
    },
    {
      title: 'Compliance & Security',
      description: 'Enterprise-grade security with GDPR compliance and SOC 2 Type II certification.'
    }
  ];
}