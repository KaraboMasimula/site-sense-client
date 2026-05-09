import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'ss-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="grid min-h-screen grid-cols-[260px_1fr]">
      <aside class="border-r bg-white p-4">
        <h2 class="mb-6 text-lg font-semibold">SiteSense</h2>
        <nav class="space-y-2">
          @for (item of navItems(); track item.path) {
            <a [routerLink]="item.path" routerLinkActive="bg-indigo-50 text-indigo-700" class="block rounded-lg px-3 py-2">
              {{ item.label }}
            </a>
          }
        </nav>
      </aside>
      <section>
        <header class="border-b bg-white px-6 py-4">Dashboard Area</header>
        <main class="p-6"><router-outlet /></main>
      </section>
    </div>
  `
})
export class DashboardLayoutComponent {
  protected readonly navItems = signal([
    { label: 'Dashboard', path: '/app/dashboard' },
    { label: 'New Audit', path: '/app/audits/new' },
    { label: 'History', path: '/app/history' },
    { label: 'Settings', path: '/app/settings' }
  ]);
}
