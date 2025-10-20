import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-applications-manage',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './applications-manage.component.html',
  styleUrls: ['./applications-manage.component.scss']
})
export class ApplicationsManageComponent {
  totalApplications = 89;
  selectedClient = 'all';
  selectedJob = 'all';
  selectedPosition = 'all';
  compactView = false;

  cardsPerColumn = 25;

  stages = [
    {
      name: 'Applied',
      visibleCount: 25,
      applications: [
        { id: 1, name: 'Sarah Johnson', initials: 'SJ', jobTitle: 'Senior Developer', email: 'sarah@email.com', phone: '555-0101', daysAgo: 1, skills: ['React', 'Node.js', 'TypeScript'] },
        { id: 2, name: 'Michael Chen', initials: 'MC', jobTitle: 'Senior Developer', email: 'michael@email.com', phone: '555-0102', daysAgo: 2, skills: ['Vue.js', 'Python', 'AWS'] },
        { id: 3, name: 'Emily Davis', initials: 'ED', jobTitle: 'Product Manager', email: 'emily@email.com', phone: '555-0103', daysAgo: 3, skills: ['Agile', 'Analytics'] },
        { id: 9, name: 'Alex Martinez', initials: 'AM', jobTitle: 'Frontend Developer', email: 'alex@email.com', phone: '555-0109', daysAgo: 1, skills: ['React', 'CSS'] },
        { id: 10, name: 'Jessica Brown', initials: 'JB', jobTitle: 'Backend Developer', email: 'jessica@email.com', phone: '555-0110', daysAgo: 1, skills: ['Java', 'Spring'] },
        { id: 11, name: 'Daniel White', initials: 'DW', jobTitle: 'DevOps Engineer', email: 'daniel@email.com', phone: '555-0111', daysAgo: 2, skills: ['Docker', 'K8s'] },
        { id: 12, name: 'Sophia Garcia', initials: 'SG', jobTitle: 'Data Analyst', email: 'sophia@email.com', phone: '555-0112', daysAgo: 2, skills: ['SQL', 'Python'] },
        { id: 13, name: 'Ryan Miller', initials: 'RM', jobTitle: 'Full Stack Developer', email: 'ryan@email.com', phone: '555-0113', daysAgo: 2, skills: ['MERN'] },
        { id: 14, name: 'Olivia Davis', initials: 'OD', jobTitle: 'UI Designer', email: 'olivia@email.com', phone: '555-0114', daysAgo: 3, skills: ['Figma'] },
        { id: 15, name: 'Ethan Wilson', initials: 'EW', jobTitle: 'QA Engineer', email: 'ethan@email.com', phone: '555-0115', daysAgo: 3, skills: ['Selenium'] },
        { id: 16, name: 'Ava Moore', initials: 'AM', jobTitle: 'Product Owner', email: 'ava@email.com', phone: '555-0116', daysAgo: 3, skills: ['Scrum'] },
        { id: 17, name: 'Noah Taylor', initials: 'NT', jobTitle: 'Software Engineer', email: 'noah@email.com', phone: '555-0117', daysAgo: 4, skills: ['C++'] },
        { id: 18, name: 'Isabella Anderson', initials: 'IA', jobTitle: 'Mobile Developer', email: 'isabella@email.com', phone: '555-0118', daysAgo: 4, skills: ['React Native'] },
        { id: 19, name: 'Mason Thomas', initials: 'MT', jobTitle: 'Cloud Architect', email: 'mason@email.com', phone: '555-0119', daysAgo: 4, skills: ['AWS'] },
        { id: 20, name: 'Mia Jackson', initials: 'MJ', jobTitle: 'Security Engineer', email: 'mia@email.com', phone: '555-0120', daysAgo: 5, skills: ['Security'] },
        { id: 21, name: 'Lucas White', initials: 'LW', jobTitle: 'ML Engineer', email: 'lucas@email.com', phone: '555-0121', daysAgo: 5, skills: ['TensorFlow'] },
        { id: 22, name: 'Charlotte Harris', initials: 'CH', jobTitle: 'Business Analyst', email: 'charlotte@email.com', phone: '555-0122', daysAgo: 5, skills: ['Analytics'] },
        { id: 23, name: 'Liam Martin', initials: 'LM', jobTitle: 'System Admin', email: 'liam@email.com', phone: '555-0123', daysAgo: 6, skills: ['Linux'] },
        { id: 24, name: 'Amelia Thompson', initials: 'AT', jobTitle: 'Tech Lead', email: 'amelia@email.com', phone: '555-0124', daysAgo: 6, skills: ['Leadership'] },
        { id: 25, name: 'Benjamin Garcia', initials: 'BG', jobTitle: 'Solutions Architect', email: 'benjamin@email.com', phone: '555-0125', daysAgo: 6, skills: ['Architecture'] },
        { id: 26, name: 'Harper Martinez', initials: 'HM', jobTitle: 'Scrum Master', email: 'harper@email.com', phone: '555-0126', daysAgo: 7, skills: ['Agile'] },
        { id: 27, name: 'Elijah Robinson', initials: 'ER', jobTitle: 'Database Admin', email: 'elijah@email.com', phone: '555-0127', daysAgo: 7, skills: ['PostgreSQL'] },
        { id: 28, name: 'Evelyn Clark', initials: 'EC', jobTitle: 'Network Engineer', email: 'evelyn@email.com', phone: '555-0128', daysAgo: 7, skills: ['Networking'] },
        { id: 29, name: 'James Rodriguez', initials: 'JR', jobTitle: 'Site Reliability Engineer', email: 'james@email.com', phone: '555-0129', daysAgo: 8, skills: ['SRE'] },
        { id: 30, name: 'Abigail Lewis', initials: 'AL', jobTitle: 'Integration Specialist', email: 'abigail@email.com', phone: '555-0130', daysAgo: 8, skills: ['APIs'] },
        { id: 31, name: 'William Lee', initials: 'WL', jobTitle: 'Platform Engineer', email: 'william@email.com', phone: '555-0131', daysAgo: 8, skills: ['Platform'] },
        { id: 32, name: 'Emily Walker', initials: 'EW', jobTitle: 'Release Manager', email: 'emily.w@email.com', phone: '555-0132', daysAgo: 9, skills: ['CI/CD'] },
        { id: 33, name: 'Alexander Hall', initials: 'AH', jobTitle: 'Technical Writer', email: 'alexander@email.com', phone: '555-0133', daysAgo: 9, skills: ['Documentation'] },
        { id: 34, name: 'Sofia Allen', initials: 'SA', jobTitle: 'Support Engineer', email: 'sofia@email.com', phone: '555-0134', daysAgo: 9, skills: ['Support'] },
        { id: 35, name: 'Michael Young', initials: 'MY', jobTitle: 'Performance Engineer', email: 'michael.y@email.com', phone: '555-0135', daysAgo: 10, skills: ['Performance'] }
      ]
    },
    {
      name: 'Screening',
      visibleCount: 25,
      applications: [
        { id: 4, name: 'James Wilson', initials: 'JW', jobTitle: 'Senior Developer', email: 'james@email.com', phone: '555-0104', daysAgo: 5, skills: ['Angular', 'Java', 'Docker'] },
        { id: 5, name: 'Lisa Anderson', initials: 'LA', jobTitle: 'UX Designer', email: 'lisa@email.com', phone: '555-0105', daysAgo: 6, skills: ['Figma', 'UI Design'] }
      ]
    },
    {
      name: 'Interview',
      visibleCount: 25,
      applications: [
        { id: 6, name: 'David Brown', initials: 'DB', jobTitle: 'Senior Developer', email: 'david@email.com', phone: '555-0106', daysAgo: 8, skills: ['React', 'GraphQL', 'MongoDB'] },
        { id: 7, name: 'Jennifer Lee', initials: 'JL', jobTitle: 'Data Scientist', email: 'jennifer@email.com', phone: '555-0107', daysAgo: 10, skills: ['Python', 'ML', 'SQL'] }
      ]
    },
    {
      name: 'Offer',
      visibleCount: 25,
      applications: [
        { id: 8, name: 'Robert Taylor', initials: 'RT', jobTitle: 'Senior Developer', email: 'robert@email.com', phone: '555-0108', daysAgo: 12, skills: ['React', 'Node.js', 'AWS'] }
      ]
    }
  ];

  viewApplication(id: number) {
    console.log('View application:', id);
  }

  scheduleInterview(event: Event, id: number) {
    event.stopPropagation();
    console.log('Schedule interview:', id);
  }

  sendEmail(event: Event, id: number) {
    event.stopPropagation();
    console.log('Send email:', id);
  }

  viewResume(event: Event, id: number) {
    event.stopPropagation();
    console.log('View resume:', id);
  }

  getVisibleApplications(stage: any) {
    return stage.applications.slice(0, stage.visibleCount);
  }

  getVisibleCount(stage: any) {
    return Math.min(stage.visibleCount, stage.applications.length);
  }

  hasMore(stage: any) {
    return stage.applications.length > stage.visibleCount;
  }

  getRemainingCount(stage: any) {
    return stage.applications.length - stage.visibleCount;
  }

  loadMore(stage: any) {
    stage.visibleCount += this.cardsPerColumn;
  }

  toggleView() {
    this.compactView = !this.compactView;
  }
}
