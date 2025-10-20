import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent {
  job = {
    title: 'Senior Full Stack Developer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    salary: '$120k - $180k',
    type: 'Full Time',
    postedDays: 2,
    applicants: 45,
    inReview: 23,
    interviews: 8,
    description: 'We are seeking an experienced Full Stack Developer to join our growing engineering team. You will be responsible for designing, developing, and maintaining scalable web applications using modern technologies. This role offers the opportunity to work on challenging projects and collaborate with talented engineers.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL', 'GraphQL', 'Redis'],
    requirements: [
      '5+ years of experience in full-stack development',
      'Strong proficiency in React and Node.js',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Solid understanding of database design and optimization',
      'Experience with CI/CD pipelines and DevOps practices',
      'Excellent problem-solving and communication skills'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work arrangements and remote options',
      '401(k) with company match',
      'Professional development budget',
      'Unlimited PTO policy'
    ]
  };
}
