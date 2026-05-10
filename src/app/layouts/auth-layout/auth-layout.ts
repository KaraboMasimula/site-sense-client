import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  BadgeCheck,
  Bell,
  ChartNoAxesColumnIncreasing,
  CircleGauge,
  FileText,
  LockKeyhole,
  LucideAngularModule,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-angular';
import { BrandMark } from '../../shared/ui/brand-mark/brand-mark';

@Component({
  selector: 'app-auth-layout',
  imports: [BrandMark, LucideAngularModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <main class="relative min-h-screen overflow-hidden px-5 py-8">
      <div class="pointer-events-none absolute left-[44%] top-28 hidden size-36 rounded-full bg-[radial-gradient(circle_at_35%_35%,#38bdf8,#8b5cf6_45%,#f0abfc_72%,rgba(255,255,255,0.2))] opacity-70 blur-[1px] md:block"></div>
      <div class="pointer-events-none absolute -left-8 bottom-24 hidden size-40 rounded-full bg-[radial-gradient(circle_at_35%_35%,#38bdf8,#a78bfa_48%,#f9a8d4_72%,rgba(255,255,255,0.2))] opacity-60 md:block"></div>
      <div class="pointer-events-none absolute -right-10 bottom-16 hidden size-44 rounded-full bg-[radial-gradient(circle_at_35%_35%,#38bdf8,#8b5cf6_45%,#f0abfc_72%,rgba(255,255,255,0.2))] opacity-60 md:block"></div>

      <div class="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col">
        <header class="flex items-center justify-between">
          <app-brand-mark size="lg" />
          <a routerLink="/" class="text-sm font-bold text-slate-600">Back to site</a>
        </header>

        <section class="grid flex-1 gap-12 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <aside class="hidden lg:block">
            <div class="ss-badge">
              <lucide-icon [img]="SparklesIcon" class="size-4" />
              AI-powered website audits
            </div>

            <h1 class="mt-7 max-w-2xl text-5xl font-bold leading-[1.08] text-slate-950 xl:text-6xl">
              Start improving your <span class="aurora-text">website today</span>
            </h1>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              SiteSense uses AI to analyze your website, uncover opportunities, and deliver actionable recommendations that drive real results.
            </p>

            <div class="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
              @for (item of valueProps(); track item.title) {
                <div class="ss-card flex items-center gap-3 p-4">
                  <span class="grid size-10 place-items-center rounded-xl bg-violet-100 text-violet-600">
                    <lucide-icon [img]="item.icon" class="size-5" />
                  </span>
                  <span class="text-sm font-bold leading-5 text-slate-950">{{ item.title }}</span>
                </div>
              }
            </div>

            <div class="ss-card mt-8 overflow-hidden">
              <div class="grid min-h-[21rem] grid-cols-[11rem_1fr]">
                <div class="border-r border-slate-100 bg-white/60 p-5">
                  <div class="mb-7 flex items-center gap-2 text-sm font-bold text-slate-950">
                    <span class="grid size-7 place-items-center rounded-full bg-gradient-to-br from-cyan-300 via-violet-500 to-pink-300 text-[0.65rem] text-white">S</span>
                    SiteSense
                  </div>
                  <nav class="grid gap-2 text-xs font-bold text-slate-500">
                    @for (item of sidebarItems(); track item.label) {
                      <span class="flex items-center gap-2 rounded-lg px-3 py-2" [class.bg-violet-50]="item.active" [class.text-violet-600]="item.active">
                        <lucide-icon [img]="item.icon" class="size-3.5" />
                        {{ item.label }}
                      </span>
                    }
                  </nav>
                </div>

                <div class="p-6">
                  <div class="mb-5 flex items-center justify-between">
                    <h2 class="font-bold text-slate-950">Audit Report for acme.com</h2>
                    <lucide-icon [img]="BellIcon" class="size-4 text-slate-500" />
                  </div>

                  <div class="grid gap-4 sm:grid-cols-4">
                    @for (card of reportCards(); track card.label) {
                      <div class="rounded-xl border border-slate-100 bg-white p-4">
                        <p class="text-[0.68rem] font-bold text-slate-400">{{ card.label }}</p>
                        <p class="mt-3 text-2xl font-bold text-slate-950">{{ card.value }} <span class="text-xs font-semibold text-slate-500">/100</span></p>
                        <p class="mt-1 text-xs font-bold text-emerald-500">{{ card.note }}</p>
                      </div>
                    }
                  </div>

                  <div class="mt-5 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
                    <div class="rounded-xl border border-slate-100 bg-white p-5">
                      <p class="text-sm font-bold text-slate-950">Score Overview</p>
                      <div class="mt-8 flex h-28 items-end gap-2">
                        @for (bar of trend(); track $index) {
                          <span class="flex-1 rounded-t bg-gradient-to-t from-violet-500 to-cyan-300" [style.height.%]="bar"></span>
                        }
                      </div>
                    </div>
                    <div class="rounded-xl border border-slate-100 bg-white p-5">
                      <p class="text-sm font-bold text-slate-950">Score Breakdown</p>
                      <div class="mt-6 grid place-items-center">
                        <div class="grid size-28 place-items-center rounded-full bg-[conic-gradient(#7c3aed,#22c55e,#60a5fa,#e2e8f0)] p-3">
                          <div class="grid size-full place-items-center rounded-full bg-white text-center">
                            <strong class="text-xl text-slate-950">87</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 flex items-center gap-4">
              <span class="grid size-12 place-items-center rounded-full bg-white text-violet-600 shadow-lg shadow-violet-100">
                <lucide-icon [img]="LockIcon" class="size-5" />
              </span>
              <div>
                <p class="font-bold text-slate-950">Secure & private</p>
                <p class="mt-1 text-sm text-slate-500">Your data is encrypted and never shared with anyone.</p>
              </div>
            </div>
          </aside>

          <section>
            <div class="ss-card mx-auto w-full max-w-[34rem] p-8 sm:p-10">
              <div class="grid grid-cols-2 rounded-xl border border-slate-200 bg-white/60 p-1 shadow-inner">
                <a
                  routerLink="/auth/login"
                  routerLinkActive="bg-white text-violet-600 shadow-lg shadow-violet-100"
                  class="rounded-lg px-4 py-4 text-center text-sm font-bold text-slate-500"
                >
                  Sign in
                </a>
                <a
                  routerLink="/auth/register"
                  routerLinkActive="bg-white text-violet-600 shadow-lg shadow-violet-100"
                  class="rounded-lg px-4 py-4 text-center text-sm font-bold text-slate-500"
                >
                  Create account
                </a>
              </div>

              <router-outlet />
            </div>
          </section>
        </section>

        <p class="text-center text-xs text-slate-400">© 2026 SiteSense. All rights reserved.</p>
      </div>
    </main>
  `,
})
export class AuthLayout {
  readonly BellIcon = Bell;
  readonly LockIcon = LockKeyhole;
  readonly SparklesIcon = Sparkles;

  readonly valueProps = signal([
    { title: 'AI-powered analysis', icon: Sparkles },
    { title: 'Actionable recommendations', icon: ShieldCheck },
    { title: 'Fast & secure', icon: Zap },
  ]);

  readonly sidebarItems = signal([
    { label: 'Overview', icon: CircleGauge, active: true },
    { label: 'SEO', icon: SearchCheck, active: false },
    { label: 'Performance', icon: Zap, active: false },
    { label: 'Accessibility', icon: BadgeCheck, active: false },
    { label: 'Content', icon: FileText, active: false },
  ]);

  readonly reportCards = signal([
    { label: 'Overall Score', value: '87', note: 'Excellent' },
    { label: 'Page Speed', value: '92', note: 'Great' },
    { label: 'SEO Score', value: '84', note: 'Good' },
    { label: 'Accessibility', value: '78', note: 'Good' },
  ]);

  readonly trend = signal([24, 30, 44, 44, 50, 38, 52, 48, 68, 58, 80, 84]);
}
