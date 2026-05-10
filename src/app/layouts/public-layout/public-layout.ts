import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';
import { BrandMark } from '../../shared/ui/brand-mark/brand-mark';

@Component({
  selector: 'app-public-layout',
  imports: [BrandMark, LucideAngularModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="min-h-screen">
      <header class="ss-container flex items-center justify-between py-6">
        <app-brand-mark />
        <nav class="hidden items-center gap-9 text-sm font-semibold text-slate-950 md:flex">
          <a routerLink="/" routerLinkActive="text-violet-600" [routerLinkActiveOptions]="{ exact: true }">Features</a>
          <a href="#how-it-works">How it works</a>
          <a routerLink="/pricing" routerLinkActive="text-violet-600">Pricing</a>
          <a href="#resources" class="inline-flex items-center gap-1">
            Resources
            <lucide-icon [img]="ChevronDownIcon" class="size-3" />
          </a>
        </nav>
        <div class="flex items-center gap-4">
          <a class="text-sm font-semibold text-slate-950" routerLink="/auth/login">Log in</a>
          <a class="ss-btn ss-btn-primary min-h-10 px-5" routerLink="/auth/register">
            Get started free
          </a>
        </div>
      </header>
      <main>
        <router-outlet />
      </main>
    </div>
  `,
})
export class PublicLayout {
  readonly ChevronDownIcon = ChevronDown;
}
