import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tenants-manage',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './tenants-manage.component.html',
  styleUrls: ['./tenants-manage.component.scss']
})
export class TenantsManageComponent {
  searchQuery = '';
  selectedPlan = 'all';
  selectedStatus = 'all';
  currentPage = 1;
  itemsPerPage = 25;

  tenants = [
    { id: 1, name: 'TechCorp Recruiting', subdomain: 'techcorp', plan: 'Enterprise', users: 45, jobs: 234, status: 'Active', created: '2023-06-15', mrr: 2500 },
    { id: 2, name: 'Global Staffing Inc', subdomain: 'globalstaff', plan: 'Professional', users: 23, jobs: 156, status: 'Active', created: '2023-08-20', mrr: 1200 },
    { id: 3, name: 'HR Solutions Ltd', subdomain: 'hrsolutions', plan: 'Starter', users: 8, jobs: 45, status: 'Trial', created: '2024-01-10', mrr: 0 },
    { id: 4, name: 'Talent Acquisition Co', subdomain: 'talentacq', plan: 'Enterprise', users: 67, jobs: 389, status: 'Active', created: '2023-05-12', mrr: 2500 },
    { id: 5, name: 'Executive Search Partners', subdomain: 'execsearch', plan: 'Professional', users: 15, jobs: 89, status: 'Active', created: '2023-09-30', mrr: 1200 }
  ];

  get totalTenants() {
    return this.tenants.length;
  }

  get totalPages() {
    return Math.ceil(this.totalTenants / this.itemsPerPage);
  }

  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.totalTenants);
  }

  get paginatedTenants() {
    return this.tenants.slice(this.startIndex, this.endIndex);
  }

  get pageNumbers() {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  previousPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  onItemsPerPageChange() {
    this.currentPage = 1;
  }
}
