import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  BarChart3,
  FileClock,
  LayoutDashboard,
  LucideAngularModule,
  Plus,
  Settings,
} from 'lucide-angular';
import { BrandMark } from '../../shared/ui/brand-mark/brand-mark';

@Component({
  selector: 'app-dashboard-layout',
  imports: [BrandMark, LucideAngularModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="min-h-screen lg:grid lg:grid-cols-[17rem_1fr]">
      <aside class="glass-panel sticky top-0 z-20 flex h-auto items-center justify-between border-x-0 border-t-0 px-5 py-4 lg:h-screen lg:flex-col lg:items-stretch lg:border-y-0 lg:border-l-0">
        <app-brand-mark />
        <nav class="hidden gap-2 lg:flex lg:flex-col">
          @for (item of navItems(); track item.path) {
            <a
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-violet-600"
              routerLinkActive="bg-white text-violet-600 shadow-sm"
              [routerLink]="item.path"
            >
              <lucide-icon [img]="item.icon" class="size-4" />
              {{ item.label }}
            </a>
          }
        </nav>
        <a routerLink="/auth/login" class="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-600 shadow-sm">
          Jane Cooper
        </a>
      </aside>
      <main class="min-w-0">
        <div class="mx-auto flex max-w-6xl items-center justify-between px-5 pt-6 sm:px-6 lg:px-8">
          <p class="text-sm font-semibold text-slate-500">{{ greeting() }}</p>
          <a routerLink="/app/audits/new" class="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-200">
            <lucide-icon [img]="PlusIcon" class="size-4" />
            New audit
          </a>
        </div>
        <router-outlet />
      </main>
    </div>
  `,
})
export class DashboardLayout {
  readonly PlusIcon = Plus;
  private readonly userName = signal('Jane');
  readonly greeting = computed(() => `Welcome back, ${this.userName()}`);
  readonly navItems = signal([
    { label: 'Dashboard', path: '/app/dashboard', icon: LayoutDashboard },
    { label: 'New Audit', path: '/app/audits/new', icon: Plus },
    { label: 'History', path: '/app/audits', icon: FileClock },
    { label: 'Reports', path: '/app/audits/demo-acme', icon: BarChart3 },
    { label: 'Settings', path: '/app/settings', icon: Settings },
  ]);
}
