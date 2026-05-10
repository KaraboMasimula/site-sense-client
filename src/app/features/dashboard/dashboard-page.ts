import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuditService } from '../../core/services/audit.service';
import { PageShell } from '../../shared/ui/page-shell/page-shell';
import { StatCard } from '../../shared/ui/stat-card/stat-card';

@Component({
  selector: 'app-dashboard-page',
  imports: [PageShell, RouterLink, StatCard],
  template: `
    <app-page-shell eyebrow="Overview" title="Website performance snapshot" description="Placeholder dashboard cards and audit list for the future authenticated product.">
      <div class="grid gap-4 md:grid-cols-4">
        <app-stat-card label="Total audits" value="24" hint="Across all sites" />
        <app-stat-card label="Average score" value="73" hint="Last 30 days" />
        <app-stat-card label="Issues found" value="142" hint="Needs attention" />
        <app-stat-card label="Improved" value="8" hint="Reports upgraded" />
      </div>
      <section class="mt-6 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <div class="glass-panel rounded-lg p-5">
          <h2 class="font-semibold text-slate-950">Recent audits</h2>
          <div class="mt-4 grid gap-3">
            @for (audit of audits.recentAudits(); track audit.id) {
              <a class="flex items-center justify-between rounded-lg bg-white/75 p-4" [routerLink]="['/app/audits', audit.id]">
                <span>
                  <strong class="block text-sm text-slate-950">{{ audit.url }}</strong>
                  <span class="text-xs text-slate-500">{{ audit.createdAt }} · {{ audit.status }}</span>
                </span>
                <span class="font-bold" [class.text-emerald-600]="audit.score >= 80" [class.text-amber-600]="audit.score < 80">{{ audit.score }}</span>
              </a>
            }
          </div>
        </div>
        <div class="glass-panel rounded-lg p-5">
          <h2 class="font-semibold text-slate-950">Score trend</h2>
          <div class="mt-4 flex h-56 items-end gap-3 rounded-lg bg-white/70 p-5">
            @for (bar of [36, 54, 48, 72, 58, 66, 92]; track $index) {
              <span class="flex-1 rounded-t-md bg-gradient-to-t from-violet-500 to-blue-300" [style.height.%]="bar"></span>
            }
          </div>
        </div>
      </section>
    </app-page-shell>
  `,
})
export class DashboardPage {
  readonly audits = inject(AuditService);
}
