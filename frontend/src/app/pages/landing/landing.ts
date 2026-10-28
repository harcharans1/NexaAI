
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
  readonly services = [
    {
      icon: '☎',
      title: 'AI Receptionist',
      description: 'Answer enquiries and help customers around the clock.',
      color: 'violet'
    },
    {
      icon: '◉',
      title: 'WhatsApp Automation',
      description: 'Organise conversations and automate customer follow-ups.',
      color: 'green'
    },
    {
      icon: '▦',
      title: 'Smart Bookings',
      description: 'Manage appointments and reduce scheduling friction.',
      color: 'blue'
    },
    {
      icon: '↗',
      title: 'Lead Management',
      description: 'Keep your leads organised from first contact to follow-up.',
      color: 'pink'
    }
  ];
}
