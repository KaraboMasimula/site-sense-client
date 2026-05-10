import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/public-layout/public-layout').then((m) => m.PublicLayout),
    children: [
      {
        path: '',
        title: 'SiteSense | AI website audits',
        loadComponent: () =>
          import('./features/landing/landing-page').then((m) => m.LandingPage),
      },
      {
        path: 'pricing',
        title: 'Pricing | SiteSense',
        loadComponent: () =>
          import('./features/pricing/pricing-page').then((m) => m.PricingPage),
      },
    ],
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout').then((m) => m.AuthLayout),
    children: [
      {
        path: 'login',
        title: 'Sign in | SiteSense',
        loadComponent: () =>
          import('./features/auth/login/login-page').then((m) => m.LoginPage),
      },
      {
        path: 'register',
        title: 'Create account | SiteSense',
        loadComponent: () =>
          import('./features/auth/register/register-page').then((m) => m.RegisterPage),
      },
      { path: '', pathMatch: 'full', redirectTo: 'login' },
    ],
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./layouts/dashboard-layout/dashboard-layout').then((m) => m.DashboardLayout),
    children: [
      {
        path: 'dashboard',
        title: 'Dashboard | SiteSense',
        loadComponent: () =>
          import('./features/dashboard/dashboard-page').then((m) => m.DashboardPage),
      },
      {
        path: 'audits/new',
        title: 'New audit | SiteSense',
        loadComponent: () =>
          import('./features/audits/new-audit/new-audit-page').then((m) => m.NewAuditPage),
      },
      {
        path: 'audits/:auditId',
        title: 'Audit report | SiteSense',
        loadComponent: () =>
          import('./features/audits/audit-report/audit-report-page').then(
            (m) => m.AuditReportPage,
          ),
      },
      {
        path: 'audits',
        title: 'Audit history | SiteSense',
        loadComponent: () =>
          import('./features/audits/audit-history/audit-history-page').then(
            (m) => m.AuditHistoryPage,
          ),
      },
      {
        path: 'settings',
        title: 'Settings | SiteSense',
        loadComponent: () =>
          import('./features/settings/settings-page').then((m) => m.SettingsPage),
      },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    ],
  },
  { path: '**', redirectTo: '' },
];
