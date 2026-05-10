import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  CircleGauge,
  FileText,
  LockKeyhole,
  LucideAngularModule,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-angular';

@Component({
  selector: 'app-pricing-page',
  imports: [LucideAngularModule, RouterLink],
  template: `
    <section class="ss-container grid gap-12 pb-12 pt-10 lg:grid-cols-[1fr_0.96fr] lg:items-center lg:pt-12">
      <div>
        <div class="ss-badge">Simple, transparent pricing</div>
        <h1 class="mt-7 max-w-2xl text-5xl font-bold leading-[1.08] text-slate-950 sm:text-6xl">
          Start with a free <span class="aurora-text">AI evaluation.</span>
        </h1>
        <p class="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
          Get a summary and score for your website completely free. Unlock deeper insights, trends, exports, and team tools with a plan or a one-time full evaluation.
        </p>

        <div class="ss-card mt-8 grid max-w-2xl gap-4 p-4 sm:grid-cols-3">
          @for (item of valueProps(); track item.title) {
            <div class="flex items-center gap-3">
              <span class="grid size-10 place-items-center rounded-xl bg-violet-100 text-violet-600">
                <lucide-icon [img]="item.icon" class="size-5" />
              </span>
              <span>
                <strong class="block text-sm text-slate-950">{{ item.title }}</strong>
                <span class="text-xs leading-5 text-slate-500">{{ item.description }}</span>
              </span>
            </div>
          }
        </div>
      </div>

      <aside class="ss-card p-6">
        <p class="text-sm font-bold text-slate-500">Free Evaluation Summary</p>
        <div class="mt-5 grid gap-8 md:grid-cols-[0.9fr_1fr] md:items-center">
          <div>
            <p class="text-xl font-bold text-slate-950">acme.com</p>
            <p class="mt-1 text-sm text-slate-500">May 12, 2026 at 10:30 AM</p>
            <div class="mt-8 grid place-items-center">
              <div class="grid size-48 place-items-center rounded-full bg-[conic-gradient(from_210deg,#fb8bb4,#8b5cf6,#38bdf8,#dbeafe)] p-3">
                <div class="grid size-full place-items-center rounded-full bg-white text-center">
                  <div>
                    <strong class="text-5xl text-slate-950">72</strong>
                    <span class="text-slate-500">/100</span>
                    <p class="mt-2 text-sm font-semibold text-slate-600">Good</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid gap-4 border-slate-200 md:border-l md:pl-8">
            @for (metric of summaryMetrics(); track metric.name) {
              <div class="grid grid-cols-[1.2rem_1fr_3rem] items-center gap-3 text-sm">
                <span class="grid size-6 place-items-center rounded-full" [class]="metric.tone">
                  <lucide-icon [img]="metric.icon" class="size-3.5" />
                </span>
                <div>
                  <p class="mb-1 font-bold text-slate-950">{{ metric.name }}</p>
                  <div class="h-1.5 rounded-full bg-slate-100">
                    <span class="block h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-400" [style.width.%]="metric.percent"></span>
                  </div>
                </div>
                <span class="text-right font-semibold text-slate-700">{{ metric.score }}</span>
              </div>
            }
          </div>
        </div>
        <div class="mt-6 flex flex-col gap-3 rounded-xl border border-violet-100 bg-violet-50/70 p-3 sm:flex-row sm:items-center sm:justify-between">
          <p class="text-sm font-semibold text-slate-600">Unlock full report, recommendations, and exports with a premium plan.</p>
          <a routerLink="/pricing" class="ss-btn ss-btn-outline min-h-10 shrink-0 bg-white px-5">View plans</a>
        </div>
      </aside>
    </section>

    <section class="ss-container pb-10">
      <article class="ss-card grid gap-8 border-cyan-200/80 p-8 md:grid-cols-[1.2fr_1fr_0.85fr] md:items-center">
        <div>
          <span class="ss-badge bg-emerald-50 text-emerald-700">One-time option</span>
          <h2 class="mt-5 text-3xl font-bold text-slate-950">One-time full evaluation</h2>
          <p class="mt-3 max-w-md text-sm leading-6 text-slate-600">
            Need a complete audit without a subscription? Purchase one in-depth report with category scores, prioritized recommendations, and PDF export.
          </p>
        </div>
        <div class="grid gap-3 text-sm font-semibold text-slate-700 md:border-l md:border-r md:border-slate-200 md:px-8">
          @for (item of oneTimeFeatures(); track item) {
            <p class="flex items-center gap-3">
              <lucide-icon [img]="CheckIcon" class="size-4 text-emerald-500" />
              {{ item }}
            </p>
          }
        </div>
        <div>
          <p class="text-5xl font-bold text-slate-950">$29 <span class="text-sm font-semibold text-slate-500">one-time</span></p>
          <a routerLink="/auth/register" class="ss-btn ss-btn-primary mt-6 w-full">Get Full Evaluation</a>
          <p class="mt-4 text-xs font-semibold text-slate-400">No subscription. No recurring fees.</p>
        </div>
      </article>
    </section>

    <section class="ss-container pb-10">
      <div class="mx-auto mb-8 flex w-fit rounded-xl border border-slate-200 bg-white/80 p-1 shadow-lg shadow-violet-100">
        <button class="rounded-lg bg-white px-8 py-3 text-sm font-bold text-slate-950 shadow-sm">Billed Monthly</button>
        <button class="rounded-lg px-8 py-3 text-sm font-bold text-slate-500">Billed Yearly</button>
        <span class="hidden rounded-lg px-5 py-3 text-sm font-bold text-emerald-600 sm:inline">Save 20%</span>
      </div>

      <div class="grid gap-5 lg:grid-cols-4">
        @for (plan of subscriptionPlans(); track plan.name) {
          <article
            class="ss-card relative flex min-h-full flex-col p-6"
            [class.ring-2]="plan.featured"
            [class.ring-violet-500]="plan.featured"
          >
            @if (plan.featured) {
              <span class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600 px-5 py-1 text-xs font-bold text-white shadow-lg shadow-violet-200">
                Most Popular
              </span>
            }
            @if (plan.kicker) {
              <span class="ss-badge w-fit text-[0.65rem]">{{ plan.kicker }}</span>
            }
            <h2 class="mt-5 text-2xl font-bold text-slate-950">{{ plan.name }}</h2>
            <p class="mt-2 min-h-10 text-sm leading-6 text-slate-500">{{ plan.description }}</p>
            <p class="mt-6 text-5xl font-bold text-slate-950">
              {{ plan.price }}
              <span class="text-sm font-semibold text-slate-500">{{ plan.period }}</span>
            </p>
            <p class="mt-2 text-xs font-semibold text-slate-400">{{ plan.billing }}</p>
            <div class="mt-7 mb-3 grid gap-4 text-sm font-semibold text-slate-700">
              @for (feature of plan.features; track feature) {
                <p class="flex gap-3">
                  <lucide-icon [img]="CheckIcon" class="mt-0.5 size-4 shrink-0 text-violet-600" />
                  {{ feature }}
                </p>
              }
            </div>
            <a
              routerLink="/auth/register"
              class="ss-btn mt-auto w-full "
              [class.ss-btn-primary]="plan.featured"
              [class.ss-btn-outline]="!plan.featured"
            >
              {{ plan.cta }}
              @if (plan.name === 'Always Free') {
                <lucide-icon [img]="ArrowRightIcon" class="size-4" />
              }
            </a>
            @if (plan.note) {
              <p class="mt-4 text-center text-xs font-semibold text-slate-400">{{ plan.note }}</p>
            }
          </article>
        }
      </div>
    </section>

    <section class="ss-container pb-10">
      <div class="ss-card overflow-x-auto p-6">
        <h2 class="mb-5 text-xl font-bold text-slate-950">Compare all features</h2>
        <table class="w-full min-w-[58rem] border-collapse text-sm">
          <thead>
            <tr class="border-b border-slate-200 text-left text-slate-500">
              <th class="py-4 pr-6 font-bold text-slate-950">Feature</th>
              @for (column of comparisonColumns(); track column.name) {
                <th class="px-4 py-4 text-center font-bold text-slate-950">
                  {{ column.name }}
                  <span class="block text-xs font-semibold text-slate-400">{{ column.price }}</span>
                </th>
              }
            </tr>
          </thead>
          <tbody>
            @for (row of comparisonRows(); track row.feature) {
              <tr class="border-b border-slate-100">
                <td class="py-3 pr-6 font-semibold text-slate-700">{{ row.feature }}</td>
                @for (value of row.values; track $index) {
                  <td class="px-4 py-3 text-center">
                    @if (value === true) {
                      <lucide-icon [img]="CheckIcon" class="mx-auto size-4 text-emerald-500" />
                    } @else {
                      <span class="font-semibold text-slate-400">{{ value }}</span>
                    }
                  </td>
                }
              </tr>
            }
          </tbody>
        </table>
      </div>
    </section>

    <section class="ss-container grid gap-5 pb-12 lg:grid-cols-[1fr_1.45fr]">
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
        @for (card of assuranceCards(); track card.title) {
          <article class="ss-card p-6">
            <div class="grid size-12 place-items-center rounded-xl" [class]="card.tone">
              <lucide-icon [img]="card.icon" class="size-6" />
            </div>
            <h3 class="mt-5 font-bold text-slate-950">{{ card.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-500">{{ card.description }}</p>
          </article>
        }
      </div>

      <div class="ss-card divide-y divide-slate-100 p-2">
        @for (faq of faqs(); track faq) {
          <button class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-slate-950">
            {{ faq }}
            <lucide-icon [img]="ChevronDownIcon" class="size-4 text-slate-400" />
          </button>
        }
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
export class PricingPage {
  readonly ArrowRightIcon = ArrowRight;
  readonly CheckIcon = Check;
  readonly ChevronDownIcon = ChevronDown;

  readonly valueProps = signal([
    { title: 'AI-powered analysis', description: 'Smart scoring across 8 key areas', icon: CircleGauge },
    { title: 'Actionable insights', description: 'Clear recommendations to improve', icon: ShieldCheck },
    { title: 'Fast & secure', description: 'Results in under 60 seconds', icon: Zap },
  ]);

  readonly summaryMetrics = signal([
    { name: 'SEO', score: '17 / 20', percent: 85, icon: SearchCheck, tone: 'bg-blue-50 text-blue-600' },
    { name: 'Performance', score: '13 / 20', percent: 65, icon: Zap, tone: 'bg-cyan-50 text-cyan-600' },
    { name: 'Accessibility', score: '11 / 15', percent: 73, icon: BadgeCheck, tone: 'bg-indigo-50 text-indigo-600' },
    { name: 'UX / Design', score: '12 / 15', percent: 80, icon: CircleGauge, tone: 'bg-amber-50 text-amber-600' },
    { name: 'Content Quality', score: '10 / 15', percent: 66, icon: FileText, tone: 'bg-orange-50 text-orange-600' },
    { name: 'Technical Health', score: '7 / 10', percent: 70, icon: Sparkles, tone: 'bg-violet-50 text-violet-600' },
    { name: 'Trust & Security', score: '2 / 5', percent: 40, icon: LockKeyhole, tone: 'bg-emerald-50 text-emerald-600' },
  ]);

  readonly subscriptionPlans = signal([
    {
      name: 'Always Free',
      kicker: 'Subscription plans',
      description: 'Perfect to get started.',
      price: '$0',
      period: 'forever',
      billing: '',
      cta: 'Get Free Evaluation',
      note: 'No credit card required',
      featured: false,
      features: [
        'AI evaluation & scoring',
        'Summary report',
        '7 category scores',
        'Top issues overview',
        'Basic recommendations',
        'Shareable summary link',
      ],
    },
    {
      name: 'Starter',
      description: 'For individuals and small sites.',
      price: '$19',
      period: '/ month',
      billing: 'Billed monthly',
      cta: 'Start Starter',
      featured: false,
      features: [
        'Everything in Free',
        'Full audit report',
        'Detailed recommendations',
        'Performance insights',
        'SEO analyzer',
        'Mobile usability analysis',
        'Save up to 10 reports',
        'Export reports (PDF)',
      ],
    },
    {
      name: 'Pro',
      description: 'For marketers and growing businesses.',
      price: '$49',
      period: '/ month',
      billing: 'Billed monthly',
      cta: 'Start Pro',
      featured: true,
      features: [
        'Everything in Starter',
        'AI content analysis',
        'Competitor comparison',
        'Technical issue scanner',
        'Priority recommendations',
        'Historical score tracking',
        'Save up to 100 reports',
        'Scheduled audits (5)',
        'White-label PDF reports',
      ],
    },
    {
      name: 'Business',
      description: 'For agencies and large teams.',
      price: '$99',
      period: '/ month',
      billing: 'Billed monthly',
      cta: 'Start Business',
      featured: false,
      features: [
        'Everything in Pro',
        'Team workspace',
        'Unlimited reports',
        'Scheduled audits (unlimited)',
        'API access',
        'Client management',
        'Custom branding',
        'Priority support',
        'Early access to new features',
      ],
    },
  ]);

  readonly oneTimeFeatures = signal([
    'Full audit report',
    'All category scores',
    'Detailed recommendations',
    'Technical issues analysis',
    'Performance & SEO insights',
    'Export report (PDF)',
  ]);

  readonly comparisonColumns = signal([
    { name: 'Free', price: '$0' },
    { name: 'One-time', price: '$29' },
    { name: 'Starter', price: '$19 / month' },
    { name: 'Pro', price: '$49 / month' },
    { name: 'Business', price: '$99 / month' },
  ]);

  readonly comparisonRows = signal([
    { feature: 'AI Evaluation & Scoring', values: [true, true, true, true, true] },
    { feature: 'Summary Report', values: [true, true, true, true, true] },
    { feature: 'Full Audit Report', values: ['-', true, true, true, true] },
    { feature: 'Detailed Recommendations', values: ['-', true, true, true, true] },
    { feature: 'Technical Issue Analysis', values: ['-', true, true, true, true] },
    { feature: 'Performance Insights', values: ['-', true, true, true, true] },
    { feature: 'Competitor Comparison', values: ['-', '-', '-', true, true] },
    { feature: 'Historical Score Tracking', values: ['-', '-', '-', true, true] },
    { feature: 'Scheduled Audits', values: ['-', '-', '-', '5', 'Unlimited'] },
    { feature: 'Save Reports', values: ['Up to 1', '-', 'Up to 10', 'Up to 100', 'Unlimited'] },
    { feature: 'Export Reports (PDF)', values: ['-', true, true, true, true] },
    { feature: 'Team Workspace', values: ['-', '-', '-', '-', true] },
    { feature: 'API Access', values: ['-', '-', '-', '-', true] },
    { feature: 'Priority Support', values: ['-', '-', '-', true, true] },
    { feature: 'White-label PDF Reports', values: ['-', '-', '-', true, true] },
  ]);

  readonly assuranceCards = signal([
    {
      title: 'Secure & Private',
      description: 'Your data is encrypted and never shared with anyone.',
      icon: ShieldCheck,
      tone: 'bg-cyan-100 text-cyan-600',
    },
    {
      title: 'Cancel Anytime',
      description: 'No contracts. Upgrade, downgrade, or cancel anytime.',
      icon: Zap,
      tone: 'bg-pink-100 text-pink-600',
    },
  ]);

  readonly faqs = signal([
    'What does the free evaluation include?',
    'Can I upgrade or downgrade later?',
    'Do you offer refunds?',
    'Is my data secure?',
  ]);

  readonly footerGroups = signal([
    { title: 'Product', items: ['Features', 'How it works', 'Pricing'] },
    { title: 'Resources', items: ['Blog', 'Guides', 'Help center', 'API'] },
    { title: 'Company', items: ['About us', 'Careers', 'Contact us'] },
    { title: 'Legal', items: ['Terms of service', 'Privacy policy', 'Cookie policy'] },
  ]);
}
