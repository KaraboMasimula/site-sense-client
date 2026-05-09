import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'ss-public-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen bg-slate-50 text-slate-900">
      <header class="border-b bg-white/80 backdrop-blur">
        <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a routerLink="/" class="text-xl font-bold">SiteSense</a>
          <div class="flex gap-4 text-sm">
            <a routerLink="/pricing" routerLinkActive="font-semibold">Pricing</a>
            <a routerLink="/auth/login" class="btn">Login</a>
          </div>
        </nav>
      </header>
      <main class="mx-auto max-w-7xl px-6 py-8"><router-outlet /></main>
    </div>
  `
})
export class PublicLayoutComponent {}
