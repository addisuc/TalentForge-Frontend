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
          <div class="logo">
            <svg class="logo-icon" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- T (Talent) -->
              <g class="logo-t">
                <path d="M6 8 L26 8" stroke="#0066ff" stroke-width="4.5" stroke-linecap="round"/>
                <path d="M16 8 L16 36" stroke="#0066ff" stroke-width="4.5" stroke-linecap="round"/>
              </g>
              
              <!-- Forge Connection (center) -->
              <g class="logo-forge">
                <circle cx="32" cy="22" r="8" stroke="url(#logo-gradient)" stroke-width="3.5" fill="none"/>
                <circle cx="32" cy="22" r="3" fill="url(#logo-gradient)"/>
                <!-- Connection sparks -->
                <circle cx="32" cy="14" r="1.5" fill="#00d4ff" opacity="0.8"/>
                <circle cx="32" cy="30" r="1.5" fill="#00d4ff" opacity="0.8"/>
                <circle cx="24" cy="22" r="1.5" fill="#0066ff" opacity="0.8"/>
                <circle cx="40" cy="22" r="1.5" fill="#00d4ff" opacity="0.8"/>
              </g>
              
              <!-- F (Future) -->
              <g class="logo-f">
                <path d="M48 8 L48 36" stroke="#00d4ff" stroke-width="4.5" stroke-linecap="round"/>
                <path d="M48 8 L62 8" stroke="#00d4ff" stroke-width="4.5" stroke-linecap="round"/>
                <path d="M48 20 L58 20" stroke="#00d4ff" stroke-width="4.5" stroke-linecap="round"/>
              </g>
              
              <!-- Flow lines -->
              <path d="M16 22 L24 22" stroke="#0066ff" stroke-width="2" stroke-linecap="round" opacity="0.4" stroke-dasharray="2 2"/>
              <path d="M40 22 L48 22" stroke="#00d4ff" stroke-width="2" stroke-linecap="round" opacity="0.4" stroke-dasharray="2 2"/>
              
              <defs>
                <linearGradient id="logo-gradient" x1="24" y1="14" x2="40" y2="30" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#0066ff"/>
                  <stop offset="50%" stop-color="#0088ff"/>
                  <stop offset="100%" stop-color="#00d4ff"/>
                </linearGradient>
              </defs>
            </svg>
            <span>TalentForge</span>
          </div>
          <div class="nav-actions">
            <div class="nav-links">
              <a routerLink="/client-login" class="nav-link client-portal">
                <span class="link-icon">🏢</span>
                <span>Client Portal</span>
              </a>
              <a routerLink="/auth/login" class="nav-link sign-in">
                <span class="link-icon">🔐</span>
                <span>Sign In</span>
              </a>
            </div>
            <button class="btn-nav" routerLink="/auth/register">
              <span>Get Started Free</span>
              <span class="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </nav>

      <header class="hero">
        <div class="hero-bg"></div>
        <div class="container">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="badge-dot"></span>
              <span>AI-Powered Recruitment Platform</span>
            </div>
            <h1 class="hero-title">
              Hire Top Talent<br>
              <span class="gradient-text">10x Faster</span>
            </h1>
            <p class="hero-subtitle">The smartest way to find, screen, and hire exceptional candidates. Powered by AI, trusted by thousands of companies worldwide.</p>
            <div class="cta-group">
              <button class="btn-hero-primary" routerLink="/auth/register">
                <span>Get Started Free</span>
                <span class="btn-arrow">→</span>
              </button>
              <div class="hero-stats-inline">
                <div class="inline-stat">
                  <span class="stat-num">2,500+</span>
                  <span class="stat-txt">Companies</span>
                </div>
                <div class="inline-stat">
                  <span class="stat-num">150K+</span>
                  <span class="stat-txt">Candidates</span>
                </div>
                <div class="inline-stat">
                  <span class="stat-num">98%</span>
                  <span class="stat-txt">Success Rate</span>
                </div>
              </div>
            </div>
            <div class="hero-trust">
              <span>✓ Free 30-day trial</span>
              <span>✓ No credit card required</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
          <div class="hero-visual">
            <div class="platform-preview">
              <div class="preview-window">
                <div class="window-header">
                  <div class="window-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <div class="window-title">TalentForge Platform</div>
                </div>
                <div class="window-content">
                  <div class="content-sidebar">
                    <div class="sidebar-item active">Dashboard</div>
                    <div class="sidebar-item">Jobs</div>
                    <div class="sidebar-item">Candidates</div>
                    <div class="sidebar-item">Analytics</div>
                  </div>
                  <div class="content-main">
                    <div class="content-row">
                      <div class="content-block">
                        <div class="block-label">Time-to-Hire</div>
                        <div class="block-value">12 Days</div>
                      </div>
                      <div class="content-block">
                        <div class="block-label">Cost Savings</div>
                        <div class="block-value">$45K</div>
                      </div>
                      <div class="content-block">
                        <div class="block-label">Quality Score</div>
                        <div class="block-value">94%</div>
                      </div>
                    </div>
                    <div class="content-table">
                      <div class="table-row">
                        <div class="row-text">Senior Software Engineer</div>
                      </div>
                      <div class="table-row">
                        <div class="row-text">Product Manager</div>
                      </div>
                      <div class="table-row">
                        <div class="row-text">Data Scientist</div>
                      </div>
                      <div class="table-row">
                        <div class="row-text">UX Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="trust-badge">
                <div class="badge-icon">✓</div>
                <div class="badge-text">Enterprise-Grade Security</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section class="stats">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-item" *ngFor="let stat of stats">
              <div class="stat-icon">{{ stat.icon }}</div>
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
              <div class="stat-trend">{{ stat.trend }}</div>
            </div>
          </div>
        </div>
      </section>

      <section class="features" id="features">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">PLATFORM CAPABILITIES</span>
            <h2>End-to-End Recruitment Suite</h2>
            <p>Everything you need to source, screen, interview, and hire top talent</p>
          </div>
          <div class="features-grid">
            <div class="feature-card" *ngFor="let feature of features">
              <div class="feature-icon-wrapper">
                <div class="feature-icon">{{ feature.icon }}</div>
              </div>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
              <a class="feature-link">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      <section class="solutions" id="solutions">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">SOLUTIONS</span>
            <h2>Built for Every Hiring Team</h2>
          </div>
          <div class="solutions-grid">
            <div class="solution-card" *ngFor="let solution of solutions">
              <div class="solution-icon">{{ solution.icon }}</div>
              <h3>{{ solution.title }}</h3>
              <p>{{ solution.description }}</p>
              <ul class="solution-features">
                <li *ngFor="let item of solution.features">✓ {{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="workflow">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">HOW IT WORKS</span>
            <h2>Hire in 4 Simple Steps</h2>
          </div>
          <div class="workflow-steps">
            <div class="workflow-step" *ngFor="let step of workflowSteps; let i = index">
              <div class="step-number">{{ i + 1 }}</div>
              <div class="step-icon">{{ step.icon }}</div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="benefits">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">WHY CHOOSE US</span>
            <h2>Built for Modern Hiring Teams</h2>
            <p>Everything you need to streamline your recruitment process and hire top talent faster</p>
          </div>
          <div class="benefits-grid">
            <div class="benefit-card" *ngFor="let benefit of benefits">
              <div class="benefit-icon">{{ benefit.icon }}</div>
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.description }}</p>
              <div class="benefit-stats">
                <span class="stat-highlight">{{ benefit.stat }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pricing" id="pricing">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">PRICING</span>
            <h2>Simple, Transparent Pricing</h2>
            <p>Start free, scale as you grow</p>
          </div>
          <div class="pricing-grid">
            <div class="pricing-card" *ngFor="let plan of pricingPlans" [class.featured]="plan.featured">
              <div class="plan-badge" *ngIf="plan.featured">MOST POPULAR</div>
              <h3>{{ plan.name }}</h3>
              <div class="plan-price">
                <span class="price-currency">$</span>
                <span class="price-amount">{{ plan.price }}</span>
                <span class="price-period">/month</span>
              </div>
              <p class="plan-description">{{ plan.description }}</p>
              <ul class="plan-features">
                <li *ngFor="let feature of plan.features">✓ {{ feature }}</li>
              </ul>
              <button class="btn-plan" [class.btn-plan-featured]="plan.featured" routerLink="/auth/register">{{ plan.cta }}</button>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="cta-content">
          <div class="container">
            <div class="cta-inner">
              <h2>Ready to Revolutionize Your Hiring?</h2>
              <p>Join 2,500+ companies hiring smarter with TalentForge</p>
              <div class="cta-actions">
                <button class="btn-cta-primary" routerLink="/auth/register">
                  Start Free Trial
                  <span class="btn-arrow">→</span>
                </button>
              </div>
              <div class="cta-trust">
                <span>✓ Free 30-day trial</span>
                <span>✓ No credit card required</span>
                <span>✓ Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-links">
              <div class="footer-column">
                <h4>Product</h4>
                <a>Features</a>
                <a>Pricing</a>
                <a>Integrations</a>
                <a>API</a>
              </div>
              <div class="footer-column">
                <h4>Company</h4>
                <a>About</a>
                <a>Careers</a>
                <a>Blog</a>
                <a>Press</a>
              </div>
              <div class="footer-column">
                <h4>Resources</h4>
                <a>Help Center</a>
                <a>Community</a>
                <a>Guides</a>
                <a>Webinars</a>
              </div>
              <div class="footer-column">
                <h4>Legal</h4>
                <a routerLink="/legal/privacy">Privacy</a>
                <a routerLink="/legal/terms">Terms</a>
                <a>Security</a>
                <a>GDPR</a>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2025 TalentForge. All rights reserved.</p>
            <div class="footer-social">
              <a>LinkedIn</a>
              <a>Twitter</a>
              <a>Facebook</a>
            </div>
          </div>
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
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.5rem;
      font-weight: 700;
      color: #0f172a;
    }

    .logo-icon {
      width: 56px;
      height: 40px;
      filter: drop-shadow(0 2px 8px rgba(0, 102, 255, 0.4));
      transition: all 0.3s ease;
    }

    .logo:hover .logo-icon {
      filter: drop-shadow(0 4px 12px rgba(0, 102, 255, 0.6));
      transform: scale(1.05);
    }

    .logo-forge {
      animation: forge-pulse 3s ease-in-out infinite;
    }

    @keyframes forge-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }

    .nav-links {
      display: flex;
      gap: 30px;
      align-items: center;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 24px;
      margin-left: auto;
    }

    .nav-links {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #475569;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9375rem;
      padding: 10px 16px;
      border-radius: 8px;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
    }

    .nav-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(0, 102, 255, 0.1), transparent);
      transition: left 0.5s;
    }

    .nav-link:hover::before {
      left: 100%;
    }

    .nav-link:hover {
      color: #0066ff;
      background: rgba(0, 102, 255, 0.08);
      transform: translateY(-1px);
    }

    .nav-link.client-portal:hover {
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
      border: 1px solid rgba(0, 102, 255, 0.2);
    }

    .link-icon {
      font-size: 1rem;
      transition: transform 0.3s;
    }

    .nav-link:hover .link-icon {
      transform: scale(1.1);
    }

    .btn-nav {
      display: flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, #0066ff 0%, #0052cc 100%);
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 10px;
      font-weight: 600;
      font-size: 0.9375rem;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 4px 16px rgba(0, 102, 255, 0.3);
      position: relative;
      overflow: hidden;
    }

    .btn-nav::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }

    .btn-nav:hover::before {
      left: 100%;
    }

    .btn-nav:hover {
      background: linear-gradient(135deg, #0052cc 0%, #003d99 100%);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 102, 255, 0.4);
    }

    .btn-arrow {
      font-size: 1rem;
      transition: transform 0.3s;
    }

    .btn-nav:hover .btn-arrow {
      transform: translateX(2px);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .hero {
      padding: 140px 0 80px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f0f9ff 100%);
    }

    .hero-bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 20% 50%, rgba(0, 102, 255, 0.05) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(0, 212, 255, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }

    .hero .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .hero-content {
      text-align: left;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(0, 102, 255, 0.1);
      color: #0066ff;
      padding: 8px 16px;
      border-radius: 50px;
      font-size: 0.8125rem;
      font-weight: 600;
      margin-bottom: 24px;
      border: 1px solid rgba(0, 102, 255, 0.2);
    }

    .badge-dot {
      width: 8px;
      height: 8px;
      background: #0066ff;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 24px;
      color: #0f172a;
      letter-spacing: -1.5px;
    }

    .gradient-text {
      background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.125rem;
      color: #475569;
      margin-bottom: 40px;
      line-height: 1.7;
      max-width: 540px;
    }

    .cta-group {
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-bottom: 32px;
    }

    .btn-hero-primary {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: linear-gradient(135deg, #0066ff 0%, #0052cc 100%);
      color: white;
      padding: 18px 36px;
      border: none;
      border-radius: 12px;
      font-size: 1.0625rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 8px 24px rgba(0, 102, 255, 0.3);
      width: fit-content;
    }

    .btn-hero-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 32px rgba(0, 102, 255, 0.4);
    }

    .btn-arrow {
      font-size: 1.25rem;
      transition: transform 0.3s;
    }

    .btn-hero-primary:hover .btn-arrow {
      transform: translateX(4px);
    }

    .hero-stats-inline {
      display: flex;
      gap: 32px;
    }

    .inline-stat {
      display: flex;
      flex-direction: column;
    }

    .stat-num {
      font-size: 1.5rem;
      font-weight: 800;
      color: #0066ff;
      line-height: 1;
    }

    .stat-txt {
      font-size: 0.8125rem;
      color: #64748b;
      margin-top: 4px;
    }

    .hero-trust {
      display: flex;
      gap: 24px;
      font-size: 0.875rem;
      color: #64748b;
    }

    .hero-trust span {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .hero-visual {
      position: relative;
      height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .platform-preview {
      position: relative;
      width: 100%;
      max-width: 500px;
    }

    .preview-window {
      background: white;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      border: 1px solid #e2e8f0;
    }

    .window-header {
      background: #f8fafc;
      padding: 12px 16px;
      border-bottom: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .window-dots {
      display: flex;
      gap: 6px;
    }

    .window-dots span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #cbd5e1;
    }

    .window-dots span:first-child {
      background: #ef4444;
    }

    .window-dots span:nth-child(2) {
      background: #f59e0b;
    }

    .window-dots span:last-child {
      background: #10b981;
    }

    .window-title {
      font-size: 0.75rem;
      color: #64748b;
      font-weight: 600;
    }

    .window-content {
      display: flex;
      height: 380px;
    }

    .content-sidebar {
      width: 140px;
      background: #f8fafc;
      border-right: 1px solid #e2e8f0;
      padding: 16px 12px;
    }

    .sidebar-item {
      padding: 10px 12px;
      font-size: 0.8125rem;
      color: #64748b;
      border-radius: 6px;
      margin-bottom: 4px;
      font-weight: 500;
    }

    .sidebar-item.active {
      background: #0066ff;
      color: white;
    }

    .content-main {
      flex: 1;
      padding: 20px;
    }

    .content-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-bottom: 20px;
    }

    .content-block {
      height: 70px;
      background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
      border-radius: 8px;
      border: 1px solid #bfdbfe;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
    }

    .block-label {
      font-size: 0.625rem;
      color: #64748b;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .block-value {
      font-size: 1.25rem;
      font-weight: 800;
      color: #0066ff;
    }

    .content-table {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .table-row {
      height: 48px;
      background: #f8fafc;
      border-radius: 6px;
      border: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
      padding: 0 16px;
    }

    .row-text {
      font-size: 0.8125rem;
      color: #475569;
      font-weight: 500;
    }

    .trust-badge {
      position: absolute;
      bottom: -20px;
      right: 20px;
      background: white;
      padding: 12px 20px;
      border-radius: 50px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      display: flex;
      align-items: center;
      gap: 10px;
      border: 1px solid #e2e8f0;
    }

    .badge-icon {
      width: 24px;
      height: 24px;
      background: #10b981;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.875rem;
    }

    .badge-text {
      font-size: 0.8125rem;
      font-weight: 600;
      color: #0f172a;
      white-space: nowrap;
    }

    .stats {
      padding: 80px 0;
      background: white;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 48px;
      text-align: center;
    }

    .stat-item {
      padding: 32px 24px;
      background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
      border-radius: 16px;
      border: 1px solid #e2e8f0;
      transition: all 0.3s;
    }

    .stat-item:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
      border-color: #0066ff;
    }

    .stat-icon {
      font-size: 2.5rem;
      margin-bottom: 16px;
    }

    .stat-number {
      font-size: 2.75rem;
      font-weight: 800;
      background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 8px;
      display: block;
    }

    .stat-label {
      color: #0f172a;
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 4px;
      display: block;
    }

    .stat-trend {
      color: #64748b;
      font-size: 0.8125rem;
      display: block;
    }

    .features {
      padding: 100px 0;
      background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
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
      border-radius: 20px;
      border: 1px solid #e2e8f0;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
    }

    .feature-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #0066ff 0%, #00d4ff 100%);
      transform: scaleX(0);
      transition: transform 0.3s;
    }

    .feature-card:hover::before {
      transform: scaleX(1);
    }

    .feature-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 24px 48px rgba(0, 0, 0, 0.12);
      border-color: #0066ff;
    }

    .feature-icon-wrapper {
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
    }

    .feature-icon {
      font-size: 2rem;
    }

    .feature-link {
      color: #0066ff;
      font-size: 0.9375rem;
      font-weight: 600;
      cursor: pointer;
      display: inline-block;
      margin-top: 16px;
      transition: all 0.2s;
    }

    .feature-link:hover {
      transform: translateX(4px);
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

    .solutions {
      padding: 100px 0;
      background: #f8fafc;
    }

    .solutions-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }

    .solution-card {
      background: white;
      padding: 40px;
      border-radius: 20px;
      border: 2px solid #e2e8f0;
      transition: all 0.3s;
    }

    .solution-card:hover {
      border-color: #0066ff;
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .solution-icon {
      font-size: 3rem;
      margin-bottom: 20px;
    }

    .solution-card h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 12px;
    }

    .solution-card p {
      color: #64748b;
      margin-bottom: 24px;
      line-height: 1.6;
    }

    .solution-features {
      list-style: none;
      padding: 0;
    }

    .solution-features li {
      color: #475569;
      padding: 8px 0;
      font-size: 0.9375rem;
    }

    .workflow {
      padding: 100px 0;
      background: white;
    }

    .workflow-steps {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;
      margin-top: 60px;
    }

    .workflow-step {
      text-align: center;
      position: relative;
    }

    .step-number {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      font-weight: 700;
      margin: 0 auto 16px;
    }

    .step-icon {
      font-size: 3rem;
      margin-bottom: 16px;
    }

    .workflow-step h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 12px;
    }

    .workflow-step p {
      color: #64748b;
      font-size: 0.9375rem;
      line-height: 1.6;
    }

    .benefits {
      padding: 100px 0;
      background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }

    .benefit-card {
      background: white;
      padding: 40px;
      border-radius: 20px;
      border: 1px solid #e2e8f0;
      transition: all 0.3s;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .benefit-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #0066ff 0%, #00d4ff 100%);
      transform: scaleX(0);
      transition: transform 0.3s;
    }

    .benefit-card:hover::before {
      transform: scaleX(1);
    }

    .benefit-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 24px 48px rgba(0, 0, 0, 0.12);
      border-color: #0066ff;
    }

    .benefit-icon {
      font-size: 3rem;
      margin-bottom: 24px;
      display: block;
    }

    .benefit-card h3 {
      font-size: 1.375rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 16px;
    }

    .benefit-card p {
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 24px;
    }

    .benefit-stats {
      padding: 16px;
      background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
      border-radius: 12px;
      border: 1px solid #bfdbfe;
    }

    .stat-highlight {
      font-size: 1.125rem;
      font-weight: 700;
      color: #0066ff;
    }

    .pricing {
      padding: 100px 0;
      background: white;
    }

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
      margin-top: 60px;
    }

    .pricing-card {
      background: white;
      padding: 40px;
      border-radius: 20px;
      border: 2px solid #e2e8f0;
      transition: all 0.3s;
      position: relative;
    }

    .pricing-card.featured {
      border-color: #0066ff;
      transform: scale(1.05);
      box-shadow: 0 20px 60px rgba(0, 102, 255, 0.15);
    }

    .plan-badge {
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
      color: white;
      padding: 6px 16px;
      border-radius: 50px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .pricing-card h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 16px;
    }

    .plan-price {
      display: flex;
      align-items: baseline;
      margin-bottom: 16px;
    }

    .price-currency {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0066ff;
    }

    .price-amount {
      font-size: 3.5rem;
      font-weight: 800;
      color: #0066ff;
      line-height: 1;
    }

    .price-period {
      font-size: 1rem;
      color: #64748b;
      margin-left: 4px;
    }

    .plan-description {
      color: #64748b;
      margin-bottom: 32px;
    }

    .plan-features {
      list-style: none;
      padding: 0;
      margin-bottom: 32px;
    }

    .plan-features li {
      padding: 12px 0;
      color: #475569;
      font-size: 0.9375rem;
      border-bottom: 1px solid #f1f5f9;
    }

    .btn-plan {
      width: 100%;
      padding: 14px;
      background: white;
      color: #0066ff;
      border: 2px solid #0066ff;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }

    .btn-plan:hover {
      background: #0066ff;
      color: white;
    }

    .btn-plan-featured {
      background: #0066ff;
      color: white;
    }

    .btn-plan-featured:hover {
      background: #0052cc;
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
      position: relative;
      overflow: hidden;
    }

    .cta-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="2" fill="white" opacity="0.1"/></svg>');
      opacity: 0.3;
    }

    .cta-content {
      position: relative;
      z-index: 1;
    }

    .cta-inner {
      text-align: center;
      color: white;
    }

    .cta-inner h2 {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 16px;
    }

    .cta-inner p {
      font-size: 1.25rem;
      margin-bottom: 40px;
      opacity: 0.95;
    }

    .cta-actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      margin-bottom: 24px;
    }

    .btn-cta-primary {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: white;
      color: #0066ff;
      padding: 18px 40px;
      border: none;
      border-radius: 12px;
      font-size: 1.125rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .btn-cta-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
    }

    .cta-trust {
      display: flex;
      gap: 32px;
      justify-content: center;
      font-size: 0.9375rem;
      opacity: 0.9;
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
      padding: 50px 0 30px;
      background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
      color: #94a3b8;
      position: relative;
    }

    .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.2), transparent);
    }

    .footer-content {
      margin-bottom: 32px;
    }

    .footer-links {
      display: flex;
      justify-content: space-between;
      max-width: 1000px;
      margin: 0 auto;
      padding: 0;
    }

    .footer-column {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .footer-column h4 {
      color: #f1f5f9;
      font-size: 0.8125rem;
      font-weight: 700;
      margin-bottom: 16px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .footer-column a {
      display: inline-block;
      color: #cbd5e1;
      text-decoration: none;
      font-size: 0.875rem;
      margin-bottom: 10px;
      transition: all 0.2s;
      cursor: pointer;
      text-align: center;
    }

    .footer-column a:hover {
      color: #00d4ff;
      transform: translateY(-2px);
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 32px;
      margin-top: 32px;
      border-top: 1px solid rgba(148, 163, 184, 0.1);
    }

    .footer-bottom p {
      color: #64748b;
      font-size: 0.875rem;
    }

    .footer-social {
      display: flex;
      gap: 8px;
    }

    .footer-social a {
      color: #cbd5e1;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      transition: all 0.2s;
      cursor: pointer;
      padding: 8px 16px;
      border-radius: 6px;
      border: 1px solid rgba(148, 163, 184, 0.2);
    }

    .footer-social a:hover {
      color: #00d4ff;
      background: rgba(0, 212, 255, 0.1);
      border-color: rgba(0, 212, 255, 0.3);
    }

    @media (max-width: 768px) {
      .hero .container {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .hero-content {
        text-align: center;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        max-width: 100%;
      }

      .hero-stats-inline {
        justify-content: center;
      }

      .hero-visual {
        height: 300px;
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
      
      .btn-hero-primary {
        width: 100%;
        justify-content: center;
      }
    }
  `]
})
export class HomepageComponent {
  stats = [
    { icon: '✨', number: 'AI-Powered', label: 'Smart Matching', trend: 'Machine Learning' },
    { icon: '⚡', number: 'Automated', label: 'Workflow Engine', trend: 'Save Time' },
    { icon: '🔗', number: '150+', label: 'Integrations', trend: 'Connect Everything' },
    { icon: '📊', number: 'Real-Time', label: 'Analytics Dashboard', trend: 'Data-Driven' }
  ];

  features = [
    {
      icon: '🔍',
      title: 'AI Talent Matching',
      description: 'Machine learning algorithms analyze 200+ data points to match candidates with jobs based on skills, experience, culture fit, and career trajectory.'
    },
    {
      icon: '⚡',
      title: 'Automated Workflows',
      description: 'Eliminate manual tasks with intelligent automation for resume screening, candidate outreach, interview scheduling, and follow-ups.'
    },
    {
      icon: '📊',
      title: 'Predictive Analytics',
      description: 'Forecast hiring needs, identify bottlenecks, and optimize your recruitment funnel with real-time dashboards and insights.'
    },
    {
      icon: '👥',
      title: 'Talent Pool CRM',
      description: 'Build and nurture relationships with passive candidates through automated engagement campaigns and personalized outreach.'
    },
    {
      icon: '🎬',
      title: 'Video Interviewing',
      description: 'Conduct live or asynchronous video interviews with AI-powered transcription, sentiment analysis, and automated scoring.'
    },
    {
      icon: '🔗',
      title: 'Enterprise Integrations',
      description: 'Seamlessly connect with 150+ tools including LinkedIn Recruiter, Indeed, HRIS systems, Slack, Teams, and more.'
    }
  ];

  solutions = [
    {
      icon: '💼',
      title: 'For Enterprises',
      description: 'Scale your hiring with enterprise-grade features',
      features: ['Unlimited users', 'Custom workflows', 'Dedicated support', 'SSO & SAML']
    },
    {
      icon: '🚀',
      title: 'For Startups',
      description: 'Hire fast without breaking the bank',
      features: ['Free trial', 'Quick setup', 'Flexible pricing', 'Growth tools']
    },
    {
      icon: '🏭',
      title: 'For Agencies',
      description: 'Manage multiple clients effortlessly',
      features: ['Multi-tenant', 'Client portals', 'White-label', 'Bulk actions']
    }
  ];

  workflowSteps = [
    { icon: '📝', title: 'Post Jobs', description: 'Create job postings in minutes with AI-powered job descriptions and auto-distribution to 50+ job boards' },
    { icon: '🔍', title: 'Source Candidates', description: 'AI matches top candidates from your talent pool and external sources based on job requirements' },
    { icon: '✅', title: 'Screen & Interview', description: 'Automated screening, video interviews, and collaborative evaluation with your hiring team' },
    { icon: '🎉', title: 'Hire & Onboard', description: 'Send offers, collect e-signatures, and seamlessly transition to onboarding workflows' }
  ];

  benefits = [
    {
      icon: '⚡',
      title: 'Faster Hiring',
      description: 'Reduce time-to-hire by up to 70% with AI-powered candidate matching and automated workflows.',
      stat: 'Average 12 days vs industry 45 days'
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      description: 'Save on recruitment costs with efficient processes and reduced dependency on external agencies.',
      stat: 'Up to 60% cost reduction'
    },
    {
      icon: '🎯',
      title: 'Better Quality',
      description: 'Find the right candidates faster with advanced filtering, skills assessment, and cultural fit analysis.',
      stat: '94% candidate satisfaction rate'
    }
  ];

  pricingPlans = [
    {
      name: 'Starter',
      price: '99',
      description: 'Perfect for small teams',
      features: ['Up to 5 users', '50 active jobs', '1,000 candidates', 'Email support', 'Basic analytics'],
      cta: 'Start Free Trial',
      featured: false
    },
    {
      name: 'Professional',
      price: '299',
      description: 'For growing companies',
      features: ['Up to 20 users', 'Unlimited jobs', '10,000 candidates', 'Priority support', 'Advanced analytics', 'API access', 'Custom workflows'],
      cta: 'Start Free Trial',
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: ['Unlimited users', 'Unlimited everything', 'Dedicated support', 'SSO & SAML', 'Custom integrations', 'SLA guarantee', 'White-label option'],
      cta: 'Contact Sales',
      featured: false
    }
  ];
}