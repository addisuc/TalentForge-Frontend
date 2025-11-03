import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../core/services/client.service';
import { EmailService } from '../../core/services/email.service';

@Component({
  selector: 'app-clients-manage',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './clients-manage.component.html',
  styleUrls: ['./clients-manage.component.scss']
})
export class ClientsManageComponent implements OnInit {
  clients: any[] = [];
  searchQuery = '';
  selectedIndustry = 'all';
  selectedStatus = 'all';
  currentPage = 1;
  itemsPerPage = 25;

  showAddModal = false;
  showEditModal = false;
  showNoteModal = false;
  showEmailModal = false;
  showDocumentsModal = false;
  showContractsModal = false;
  showDeactivateModal = false;
  selectedClient: any = null;
  noteText = '';
  sending = false;
  
  newClient = {
    name: '',
    industry: '',
    contact: '',
    email: '',
    phone: '',
    address: '',
    website: ''
  };

  emailData = {
    to: '',
    subject: '',
    body: ''
  };

  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';

  constructor(
    private clientService: ClientService,
    private emailService: EmailService
  ) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients().subscribe({
      next: (data) => {
        this.clients = data;
      },
      error: (err: any) => {
        console.error('Error loading clients:', err);
        this.showNotification('Failed to load clients', 'error');
      }
    });
  }

  get filteredClients() {
    return this.clients.filter(client => {
      const matchesSearch = client.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                          client.contact?.toLowerCase().includes(this.searchQuery.toLowerCase());
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

  editClient(id: number) {
    this.selectedClient = this.clients.find(c => c.id === id);
    if (this.selectedClient) {
      this.newClient = { ...this.selectedClient };
      this.showEditModal = true;
    }
  }

  closeEditModal() {
    this.showEditModal = false;
    this.selectedClient = null;
  }

  updateClient() {
    if (!this.newClient.name || !this.newClient.email) {
      this.showNotification('Please fill in required fields', 'error');
      return;
    }
    
    this.clientService.updateClient(this.selectedClient.id, this.newClient).subscribe({
      next: () => {
        this.loadClients();
        this.closeEditModal();
        this.showNotification('Client updated successfully', 'success');
      },
      error: (err: any) => {
        console.error('Error updating client:', err);
        this.showNotification('Failed to update client', 'error');
      }
    });
  }

  sendEmail(id: number) {
    this.selectedClient = this.clients.find(c => c.id === id);
    if (this.selectedClient) {
      this.emailData = {
        to: this.selectedClient.email,
        subject: `Regarding ${this.selectedClient.name}`,
        body: ''
      };
      this.showEmailModal = true;
    }
  }

  closeEmailModal() {
    this.showEmailModal = false;
    this.selectedClient = null;
    this.emailData = { to: '', subject: '', body: '' };
  }

  sendEmailMessage() {
    if (!this.emailData.subject || !this.emailData.body) {
      this.showNotification('Please fill in subject and message', 'error');
      return;
    }

    this.sending = true;
    this.emailService.sendEmail(
      this.emailData.to,
      this.emailData.subject,
      this.emailData.body
    ).subscribe({
      next: () => {
        this.showNotification('Email sent successfully', 'success');
        this.closeEmailModal();
        this.sending = false;
      },
      error: (err: any) => {
        console.error('Error sending email:', err);
        this.showNotification('Failed to send email', 'error');
        this.sending = false;
      }
    });
  }

  viewJobs(id: number) {
    window.location.href = `/jobs?clientId=${id}`;
  }

  addNote(id: number) {
    this.selectedClient = this.clients.find(c => c.id === id);
    this.noteText = '';
    this.showNoteModal = true;
  }

  closeNoteModal() {
    this.showNoteModal = false;
    this.selectedClient = null;
    this.noteText = '';
  }

  saveNote() {
    if (!this.noteText.trim()) {
      this.showNotification('Please enter a note', 'error');
      return;
    }
    
    this.clientService.addNote(this.selectedClient.id, this.noteText).subscribe({
      next: () => {
        this.showNotification('Note saved successfully', 'success');
        this.closeNoteModal();
      },
      error: (err: any) => {
        console.error('Error saving note:', err);
        this.showNotification('Failed to save note', 'error');
      }
    });
  }

  viewDocuments(id: number) {
    this.selectedClient = this.clients.find(c => c.id === id);
    this.showDocumentsModal = true;
  }

  closeDocumentsModal() {
    this.showDocumentsModal = false;
    this.selectedClient = null;
  }

  viewContracts(id: number) {
    this.selectedClient = this.clients.find(c => c.id === id);
    this.showContractsModal = true;
  }

  closeContractsModal() {
    this.showContractsModal = false;
    this.selectedClient = null;
  }

  deactivateClient(id: number) {
    this.selectedClient = this.clients.find(c => c.id === id);
    this.showDeactivateModal = true;
  }

  closeDeactivateModal() {
    this.showDeactivateModal = false;
    this.selectedClient = null;
  }

  confirmDeactivate() {
    if (this.selectedClient) {
      this.clientService.updateClient(this.selectedClient.id, { ...this.selectedClient, status: 'Inactive' }).subscribe({
        next: () => {
          this.loadClients();
          this.showNotification('Client deactivated', 'success');
          this.closeDeactivateModal();
        },
        error: (err: any) => {
          console.error('Error deactivating client:', err);
          this.showNotification('Failed to deactivate client', 'error');
        }
      });
    }
  }

  activateClient(id: number) {
    const client = this.clients.find(c => c.id === id);
    if (client) {
      this.clientService.updateClient(id, { ...client, status: 'Active' }).subscribe({
        next: () => {
          this.loadClients();
          this.showNotification('Client activated', 'success');
        },
        error: (err: any) => {
          console.error('Error activating client:', err);
          this.showNotification('Failed to activate client', 'error');
        }
      });
    }
  }

  openAddModal() {
    this.showAddModal = true;
    this.newClient = {
      name: '',
      industry: '',
      contact: '',
      email: '',
      phone: '',
      address: '',
      website: ''
    };
  }

  closeAddModal() {
    this.showAddModal = false;
  }

  saveClient() {
    if (!this.newClient.name || !this.newClient.email) {
      this.showNotification('Please fill in required fields (Name and Email)', 'error');
      return;
    }

    this.clientService.createClient(this.newClient).subscribe({
      next: () => {
        this.loadClients();
        this.closeAddModal();
        this.showNotification('Client added successfully', 'success');
      },
      error: (err: any) => {
        console.error('Error adding client:', err);
        this.showNotification('Failed to add client', 'error');
      }
    });
  }

  showNotification(message: string, type: 'success' | 'error') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
}
