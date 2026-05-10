import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuditService } from '../../../core/services/audit.service';
import { PageShell } from '../../../shared/ui/page-shell/page-shell';

@Component({
  selector: 'app-audit-history-page',
  imports: [PageShell, RouterLink],
  template: `
    <app-page-shell eyebrow="History" title="Past website audits" description="Placeholder table for saved reports, filters, scheduled audits, and team visibility later.">
      <div class="glass-panel overflow-hidden rounded-lg">
        <table class="w-full text-left text-sm">
          <thead class="bg-white/75 text-slate-500">
            <tr>
              <th class="px-5 py-4">Website</th>
              <th class="px-5 py-4">Score</th>
              <th class="px-5 py-4">Status</th>
              <th class="px-5 py-4">Date</th>
            </tr>
          </thead>
          <tbody>
            @for (audit of audits.recentAudits(); track audit.id) {
              <tr class="border-t border-white/70">
                <td class="px-5 py-4 font-semibold text-slate-950"><a [routerLink]="['/app/audits', audit.id]">{{ audit.url }}</a></td>
                <td class="px-5 py-4">{{ audit.score }}</td>
                <td class="px-5 py-4">{{ audit.status }}</td>
                <td class="px-5 py-4">{{ audit.createdAt }}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </app-page-shell>
  `,
})
export class AuditHistoryPage {
  readonly audits = inject(AuditService);
}
