import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { PageShell } from '../../../shared/ui/page-shell/page-shell';

@Component({
  selector: 'app-audit-report-page',
  imports: [PageShell],
  template: `
    <app-page-shell eyebrow="Audit report" title="acme.com" [description]="'Placeholder report route for audit id: ' + auditId()">
      <section class="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div class="glass-panel grid place-items-center rounded-lg p-8">
          <div class="grid size-52 place-items-center rounded-full bg-[conic-gradient(#d946ef,#60a5fa,#34d399,#eef2ff)] p-3">
            <div class="grid size-full place-items-center rounded-full bg-white">
              <strong class="text-5xl text-slate-950">87<span class="text-base text-slate-500">/100</span></strong>
            </div>
          </div>
        </div>
        <div class="glass-panel rounded-lg p-6">
          <h2 class="font-semibold text-slate-950">Top recommendations</h2>
          <div class="mt-4 grid gap-3">
            @for (item of recommendations(); track item) {
              <div class="rounded-lg bg-white/75 p-4 text-sm text-slate-600">{{ item }}</div>
            }
          </div>
        </div>
      </section>
    </app-page-shell>
  `,
})
export class AuditReportPage {
  private readonly route = inject(ActivatedRoute);
  readonly auditId = signal(this.route.snapshot.paramMap.get('auditId') ?? 'pending');
  readonly recommendations = signal([
    'Optimize image formats and lazy loading.',
    'Improve meta descriptions for priority pages.',
    'Reduce unused CSS before PDF export support is added.',
  ]);
}
