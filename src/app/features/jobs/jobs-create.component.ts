import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jobs-create',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './jobs-create.component.html',
  styleUrls: ['./jobs-create.component.scss']
})
export class JobsCreateComponent {
  currentStep = 1;
  skillInput = '';

  job = {
    title: '',
    clientId: '',
    department: '',
    location: '',
    type: 'full-time',
    description: '',
    salaryMin: '',
    salaryMax: '',
    benefits: '',
    skills: [] as string[],
    experienceLevel: 'mid',
    education: ''
  };

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  addSkill() {
    if (this.skillInput.trim() && !this.job.skills.includes(this.skillInput.trim())) {
      this.job.skills.push(this.skillInput.trim());
      this.skillInput = '';
    }
  }

  removeSkill(skill: string) {
    this.job.skills = this.job.skills.filter(s => s !== skill);
  }

  saveJob() {
    console.log('Saving job:', this.job);
  }
}
