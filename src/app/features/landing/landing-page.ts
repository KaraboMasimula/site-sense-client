import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ArrowRight,
  BadgeCheck,
  ChartNoAxesColumnIncreasing,
  Check,
  CircleGauge,
  FileText,
  Globe2,
  Link,
  LockKeyhole,
  LucideAngularModule,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-angular';

@Component({
  selector: 'app-landing-page',
  imports: [LucideAngularModule, RouterLink],
  template: `
    <section class="ss-container grid gap-12 pb-14 pt-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:pb-20 lg:pt-12">
      <div>
        <div class="ss-badge">
          <lucide-icon [img]="SparklesIcon" class="size-4" />
          AI-powered website audits
        </div>

        <h1 class="mt-7 max-w-2xl text-5xl font-bold leading-[1.08] text-slate-950 sm:text-6xl lg:text-7xl">
          Understand your website. <span class="aurora-text">Improve your results.</span>
        </h1>

        <p class="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
          SiteSense analyzes your website with AI to deliver a score out of 100 and actionable recommendations that help you rank higher, load faster, and convert more visitors.
        </p>

        <form class="ss-card mt-8 flex max-w-xl flex-col gap-3 p-2 sm:flex-row">
          <label class="relative flex-1">
            <span class="pointer-events-none absolute left-4 top-1/2 grid size-5 -translate-y-1/2 place-items-center text-slate-400">
              <lucide-icon [img]="GlobeIcon" class="block size-5" />
            </span>
            <input class="ss-input ss-input-with-icon" placeholder="Enter your website URL" type="url" />
          </label>
          <a routerLink="/app/audits/new" class="ss-btn ss-btn-primary shrink-0 px-5">
            Analyze now
            <lucide-icon [img]="ArrowRightIcon" class="size-4" />
          </a>
        </form>

        <div class="mt-6 grid max-w-2xl grid-cols-2 gap-3 text-xs font-semibold text-slate-600 sm:grid-cols-4">
          @for (item of trustSignals(); track item.label) {
            <div class="inline-flex items-center gap-2">
              <span class="grid size-7 place-items-center rounded-lg bg-white text-violet-600 shadow-sm">
                <lucide-icon [img]="item.icon" class="size-4" />
              </span>
              {{ item.label }}
            </div>
          }
        </div>
      </div>

      <div class="relative">
        <div class="ss-card relative overflow-hidden p-5 sm:p-8">
          <div class="grid gap-4 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <div>
              <p class="text-sm font-bold text-slate-950">Overall Score</p>
              <div class="mt-8 grid place-items-center">
                <div class="grid size-60 place-items-center rounded-full bg-[conic-gradient(from_205deg,#fb8bb4_0deg,#a855f7_92deg,#60a5fa_190deg,#34d399_305deg,#dbeafe_306deg)] p-3 shadow-inner">
                  <div class="grid size-full place-items-center rounded-full bg-white shadow-[inset_0_12px_34px_rgba(100,116,139,0.08)]">
                    <div class="text-center">
                      <strong class="text-6xl font-bold text-slate-950">{{ score() }}</strong>
                      <span class="text-lg text-slate-500">/100</span>
                      <p class="mt-3 text-sm font-semibold text-emerald-600">Excellent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="border-slate-200 lg:border-l lg:pl-4">
              <div class="grid gap-4">
                @for (metric of metrics(); track metric.name) {
                  <div class="grid grid-cols-[1.2rem_1fr_3rem] items-center gap-3 text-sm">
                    <span class="grid size-6 place-items-center rounded-full" [class]="metric.tone">
                      <lucide-icon [img]="metric.icon" class="size-3.5" />
                    </span>
                    <div>
                      <div class="mb-1 flex items-center justify-between gap-3">
                        <span class="font-bold text-slate-950">{{ metric.name }}</span>
                      </div>
                      <div class="h-1.5 rounded-full bg-slate-100">
                        <span class="block h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-400" [style.width.%]="metric.percent"></span>
                      </div>
                    </div>
                    <span class="text-right font-semibold text-slate-700 text-xs">{{ metric.score }}</span>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>

        <div class="ss-card mx-auto -mt-5 grid max-w-[28rem] grid-cols-[1fr_auto] items-center gap-4 p-5 sm:ml-auto sm:mr-10">
          <div>
            <p class="text-xs font-bold uppercase text-slate-500">Top recommendation</p>
            <p class="mt-2 font-bold text-slate-950">Optimize images</p>
          </div>
          <div class="rounded-lg bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700">
            +24% Performance
          </div>
        </div>
      </div>
    </section>

    <section class="ss-soft-section py-9">
      <div class="ss-container">
        <p class="text-center text-xs font-bold uppercase text-slate-400">Trusted by amazing companies</p>
        <div class="mt-7 grid grid-cols-2 gap-6 text-center text-lg font-bold text-slate-300 sm:grid-cols-6">
          @for (logo of logos(); track logo) {
            <span>{{ logo }}</span>
          }
        </div>
      </div>
    </section>

    <section id="how-it-works" class="ss-container py-16">
      <div class="mx-auto max-w-xl text-center">
        <h2 class="text-3xl font-bold text-slate-950">How it works</h2>
        <p class="mt-3 text-sm text-slate-600">Get your website audit in 3 simple steps.</p>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-3">
        @for (step of steps(); track step.title; let index = $index) {
          <article class="text-center">
            <div class="mx-auto grid size-20 place-items-center rounded-full border border-slate-200 bg-white shadow-xl shadow-violet-100">
              <lucide-icon [img]="step.icon" class="size-8 text-violet-600" />
            </div>
            <p class="mt-5 text-sm font-bold text-slate-950">{{ index + 1 }}. {{ step.title }}</p>
            <p class="mx-auto mt-2 max-w-56 text-sm leading-6 text-slate-500">{{ step.description }}</p>
          </article>
        }
      </div>
    </section>

    <section class="ss-container grid gap-10 pb-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
      <div class="ss-card overflow-hidden p-5">
        <div class="grid gap-5 rounded-xl bg-white/70 p-5 sm:grid-cols-4">
          @for (card of reportCards(); track card.label) {
            <div class="rounded-lg border border-slate-100 bg-white p-4">
              <p class="text-xs font-bold text-slate-400">{{ card.label }}</p>
              <p class="mt-3 text-2xl font-bold text-slate-950">{{ card.value }}</p>
              <p class="mt-1 text-xs font-semibold text-emerald-600">{{ card.note }}</p>
            </div>
          }
        </div>
        <div class="mt-5 grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
          <div class="rounded-xl border border-slate-100 bg-white p-5">
            <p class="font-bold text-slate-950">Score overview</p>
            <div class="mt-8 flex h-44 items-end gap-3">
              @for (bar of trend(); track $index) {
                <span class="flex-1 rounded-t-md bg-gradient-to-t from-violet-500 to-cyan-300" [style.height.%]="bar"></span>
              }
            </div>
          </div>
          <div class="rounded-xl border border-slate-100 bg-white p-5">
            <p class="font-bold text-slate-950">Breakdown</p>
            <div class="mt-7 grid place-items-center">
              <div class="grid size-32 place-items-center rounded-full bg-[conic-gradient(#7c3aed,#22c55e,#60a5fa,#e2e8f0)] p-3">
                <div class="grid size-full place-items-center rounded-full bg-white text-center">
                  <strong class="text-2xl text-slate-950">87</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="ss-badge">Detailed & actionable</div>
        <h2 class="mt-5 text-4xl font-bold leading-tight text-slate-950">A complete audit. Clear insights. Real impact.</h2>
        <p class="mt-4 leading-7 text-slate-600">
          SiteSense will analyze technical, content, SEO, security, and UX signals, then translate them into prioritized fixes.
        </p>
        <div class="mt-6 grid gap-3 text-sm font-semibold text-slate-700">
          @for (item of benefits(); track item) {
            <p class="flex items-center gap-3">
              <span class="grid size-5 place-items-center rounded-full bg-violet-600 text-white">
                <lucide-icon [img]="CheckIcon" class="size-3" />
              </span>
              {{ item }}
            </p>
          }
        </div>
        <a routerLink="/app/audits/demo-acme" class="ss-btn ss-btn-outline mt-7">
          <lucide-icon [img]="FileTextIcon" class="size-4" />
          See sample report
        </a>
      </div>
    </section>

    <section id="resources" class="ss-container pb-16">
      <h2 class="text-center text-3xl font-bold text-slate-950">Everything you need to grow online</h2>
      <div class="mt-8 grid gap-5 md:grid-cols-4">
        @for (feature of features(); track feature.title) {
          <article class="ss-card p-6">
            <div class="grid size-12 place-items-center rounded-xl" [class]="feature.tone">
              <lucide-icon [img]="feature.icon" class="size-6" />
            </div>
            <h3 class="mt-5 font-bold text-slate-950">{{ feature.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-500">{{ feature.description }}</p>
          </article>
        }
      </div>
    </section>

    <section class="ss-container pb-16">
      <div class="ss-card grid gap-6 overflow-hidden bg-gradient-to-r from-violet-100/80 via-white/70 to-blue-100/80 p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <h2 class="text-3xl font-bold text-slate-950">Ready to improve your website?</h2>
          <p class="mt-3 text-sm leading-6 text-slate-600">Join thousands of businesses using SiteSense to grow traffic, performance, and sales.</p>
        </div>
        <form class="flex flex-col gap-3 sm:flex-row">
          <input class="ss-input bg-white" placeholder="Enter your website URL" />
          <a routerLink="/app/audits/new" class="ss-btn ss-btn-primary shrink-0 px-6">
            Analyze my site for free
            <lucide-icon [img]="ArrowRightIcon" class="size-4" />
          </a>
        </form>
      </div>
    </section>

    <footer class="ss-container border-t border-slate-200/70 py-10">
      <div class="grid gap-8 md:grid-cols-[1.2fr_repeat(4,1fr)]">
        <div>
          <div class="flex items-center gap-3 font-bold text-slate-950">
            <span class="grid size-8 place-items-center rounded-full bg-gradient-to-br from-cyan-300 via-violet-500 to-pink-300 text-xs text-white">S</span>
            SiteSense
          </div>
          <p class="mt-4 max-w-64 text-sm leading-6 text-slate-500">
            AI-powered website audits that help you improve performance, SEO, UX, and more.
          </p>
        </div>

        @for (group of footerGroups(); track group.title) {
          <div>
            <p class="text-sm font-bold text-slate-950">{{ group.title }}</p>
            <div class="mt-4 grid gap-3 text-sm text-slate-500">
              @for (item of group.items; track item) {
                <a href="#">{{ item }}</a>
              }
            </div>
          </div>
        }
      </div>
      <p class="mt-10 border-t border-slate-200/70 pt-6 text-center text-xs text-slate-400">
        © 2026 SiteSense. All rights reserved.
      </p>
    </footer>
  `,
})
export class LandingPage {
  readonly ArrowRightIcon = ArrowRight;
  readonly BadgeCheckIcon = BadgeCheck;
  readonly CheckIcon = Check;
  readonly FileTextIcon = FileText;
  readonly GlobeIcon = Globe2;
  readonly SparklesIcon = Sparkles;
  readonly score = signal(87);

  readonly trustSignals = signal([
    { label: 'AI-powered', icon: Sparkles },
    { label: 'Live analysis', icon: SearchCheck },
    { label: 'Actionable insights', icon: TrendingUp },
    { label: 'Secure & private', icon: ShieldCheck },
  ]);

  readonly metrics = signal([
    { name: 'SEO', score: '18 / 20', percent: 90, icon: SearchCheck, tone: 'bg-blue-50 text-blue-600' },
    { name: 'Performance', score: '15 / 20', percent: 75, icon: Zap, tone: 'bg-cyan-50 text-cyan-600' },
    { name: 'Accessibility', score: '13 / 15', percent: 86, icon: BadgeCheck, tone: 'bg-indigo-50 text-indigo-600' },
    { name: 'UX / Design', score: '14 / 15', percent: 93, icon: CircleGauge, tone: 'bg-amber-50 text-amber-600' },
    { name: 'Content Quality', score: '12 / 15', percent: 80, icon: FileText, tone: 'bg-orange-50 text-orange-600' },
    { name: 'Technical Health', score: '8 / 10', percent: 80, icon: ChartNoAxesColumnIncreasing, tone: 'bg-violet-50 text-violet-600' },
    { name: 'Trust & Security', score: '7 / 10', percent: 70, icon: LockKeyhole, tone: 'bg-emerald-50 text-emerald-600' },
  ]);

  readonly logos = signal(['Acme', 'velocity', 'PULSE', 'Layers', 'summit', 'orizon']);

  readonly steps = signal([
    { title: 'Enter your URL', description: 'Add your website URL and SiteSense prepares the audit.', icon: Link },
    { title: 'AI analyzes your site', description: 'The audit checks content, performance, SEO, security, and more.', icon: Sparkles },
    { title: 'Get your results', description: 'Receive your score, insights, and prioritized recommendations.', icon: TrendingUp },
  ]);

  readonly reportCards = signal([
    { label: 'Overall score', value: '87', note: 'Excellent' },
    { label: 'Page speed', value: '92', note: 'Great' },
    { label: 'SEO score', value: '84', note: 'Good' },
    { label: 'Accessibility', value: '78', note: 'Good' },
  ]);

  readonly trend = signal([24, 32, 28, 46, 40, 58, 52, 72, 64, 84, 90]);

  readonly benefits = signal([
    '50+ data points analyzed',
    'Prioritized recommendations',
    'Track progress over time',
    'Export reports in PDF',
  ]);

  readonly features = signal([
    {
      title: 'AI-powered analysis',
      description: 'Smart AI models evaluate your website like an expert, not just a tool.',
      icon: Sparkles,
      tone: 'bg-violet-100 text-violet-600',
    },
    {
      title: 'Actionable recommendations',
      description: 'Get clear, prioritized steps to improve what matters most.',
      icon: TrendingUp,
      tone: 'bg-pink-100 text-pink-600',
    },
    {
      title: 'Track & monitor',
      description: 'Monitor scores over time and track your website growth.',
      icon: ChartNoAxesColumnIncreasing,
      tone: 'bg-emerald-100 text-emerald-600',
    },
    {
      title: 'Secure & private',
      description: 'Your data is encrypted and never shared with anyone.',
      icon: LockKeyhole,
      tone: 'bg-blue-100 text-blue-600',
    },
  ]);

  readonly footerGroups = signal([
    { title: 'Product', items: ['Features', 'How it works', 'Sample report', 'Pricing'] },
    { title: 'Resources', items: ['Blog', 'Guides', 'Help center', 'Changelog'] },
    { title: 'Company', items: ['About us', 'Careers', 'Contact us', 'Privacy policy'] },
    { title: 'Legal', items: ['Terms of service', 'Data processing', 'Cookie policy'] },
  ]);
}
