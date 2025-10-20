import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-system',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent {
  systemHealth = [
    { service: 'API Server', status: 'Healthy', uptime: '99.9%', responseTime: '45ms' },
    { service: 'Database', status: 'Healthy', uptime: '99.8%', responseTime: '12ms' },
    { service: 'Cache', status: 'Healthy', uptime: '100%', responseTime: '3ms' },
    { service: 'Storage', status: 'Warning', uptime: '98.5%', responseTime: '120ms' }
  ];

  systemLogs = [
    { level: 'info', message: 'System backup completed successfully', timestamp: '2024-01-28 10:30:00' },
    { level: 'warning', message: 'High memory usage detected on server-02', timestamp: '2024-01-28 09:15:00' },
    { level: 'info', message: 'Database optimization completed', timestamp: '2024-01-28 08:00:00' }
  ];
}
