
import { Routes } from '@angular/router';

export const routes: Routes = [
  // Public website
  {
    path: '',
    loadComponent: () =>
      import('./layout/public-layout/public-layout')
        .then(m => m.PublicLayout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/landing/landing')
            .then(m => m.Landing)
      },
      {
        path: 'features',
        loadComponent: () =>
          import('./pages/features/features')
            .then(m => m.Features)
      },
      {
        path: 'solutions',
        loadComponent: () =>
          import('./pages/solutions/solutions')
            .then(m => m.Solutions)
      },
      {
        path: 'pricing',
        loadComponent: () =>
          import('./pages/pricing/pricing')
            .then(m => m.Pricing)
      },
      {
        path: 'demo',
        loadComponent: () =>
          import('./pages/demo/demo')
            .then(m => m.Demo)
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login')
            .then(m => m.Login)
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./pages/signup/signup')
            .then(m => m.Signup)
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./pages/forgot-password/forgot-password')
            .then(m => m.ForgotPassword)
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('./pages/blog/blog')
            .then(m => m.Blog)
      },
      {
        path: 'help',
        loadComponent: () =>
          import('./pages/help/help')
            .then(m => m.Help)
      }
    ]
  },

  // Authenticated workspace layout
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout')
        .then(m => m.MainLayout),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard')
            .then(m => m.Dashboard)
      },
      {
        path: 'ai-tools',
        loadComponent: () =>
          import('./pages/ai-tools/ai-tools')
            .then(m => m.AiTools)
      },
      {
        path: 'history',
        loadComponent: () =>
          import('./pages/history/history')
            .then(m => m.History)
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/settings/settings')
            .then(m => m.Settings)
      },
      {
        path: 'inbox',
        loadComponent: () =>
          import('./pages/inbox/inbox')
            .then(m => m.Inbox)
      },
      {
        path: 'contacts',
        loadComponent: () =>
          import('./pages/contacts/contacts')
            .then(m => m.Contacts)
      },
      {
        path: 'leads',
        loadComponent: () =>
          import('./pages/leads/leads')
            .then(m => m.Leads)
      },
      {
        path: 'appointments',
        loadComponent: () =>
          import('./pages/appointments/appointments')
            .then(m => m.Appointments)
      },
      {
        path: 'ai-employee',
        loadComponent: () =>
          import('./pages/ai-employee/ai-employee')
            .then(m => m.AiEmployee)
      },
      {
        path: 'knowledge-base',
        loadComponent: () =>
          import('./pages/knowledge-base/knowledge-base')
            .then(m => m.KnowledgeBase)
      },
      {
        path: 'automations',
        loadComponent: () =>
          import('./pages/automations/automations')
            .then(m => m.Automations)
      },
      {
        path: 'integrations',
        loadComponent: () =>
          import('./pages/integrations/integrations')
            .then(m => m.Integrations)
      },
      {
        path: 'reviews',
        loadComponent: () =>
          import('./pages/reviews/reviews')
            .then(m => m.Reviews)
      },
      {
        path: 'billing',
        loadComponent: () =>
          import('./pages/billing/billing')
            .then(m => m.Billing)
      },
      {
        path: 'admin',
        loadComponent: () =>
          import('./pages/admin/admin')
            .then(m => m.Admin)
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile/profile')
            .then(m => m.Profile)
      },
      {
        path: 'onboarding',
        loadComponent: () =>
          import('./pages/onboarding/onboarding')
            .then(m => m.Onboarding)
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }
];
