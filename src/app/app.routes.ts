import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/public-layout/public-layout.component').then((m) => m.PublicLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/landing/landing.page').then((m) => m.LandingPage)
      },
      {
        path: 'pricing',
        loadComponent: () => import('./features/pricing/pricing.page').then((m) => m.PricingPage)
      }
    ]
  },
  {
    path: 'auth',
    loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then((m) => m.AuthLayoutComponent),
    children: [
      { path: 'login', loadComponent: () => import('./features/auth/login/login.page').then((m) => m.LoginPage) },
      { path: 'register', loadComponent: () => import('./features/auth/register/register.page').then((m) => m.RegisterPage) }
    ]
  },
  {
    path: 'app',
    canActivate: [authGuard],
    loadComponent: () => import('./layouts/dashboard-layout/dashboard-layout.component').then((m) => m.DashboardLayoutComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', loadComponent: () => import('./features/dashboard/home/dashboard.page').then((m) => m.DashboardPage) },
      { path: 'audits/new', loadComponent: () => import('./features/dashboard/new-audit/new-audit.page').then((m) => m.NewAuditPage) },
      { path: 'audits/:id', loadComponent: () => import('./features/dashboard/audit-report/audit-report.page').then((m) => m.AuditReportPage) },
      { path: 'history', loadComponent: () => import('./features/dashboard/audit-history/audit-history.page').then((m) => m.AuditHistoryPage) },
      { path: 'settings', loadComponent: () => import('./features/dashboard/settings/settings.page').then((m) => m.SettingsPage) }
    ]
  },
  { path: '**', redirectTo: '' }
];
