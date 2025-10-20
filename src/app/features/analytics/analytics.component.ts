import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {
  metrics = [
    { label: 'Time to Fill', value: '18 days', change: '-12%', positive: true },
    { label: 'Offer Accept Rate', value: '87%', change: '+5%', positive: true },
    { label: 'Cost per Hire', value: '$4,200', change: '-8%', positive: true },
    { label: 'Quality of Hire', value: '4.2/5', change: '+0.3', positive: true }
  ];
}
