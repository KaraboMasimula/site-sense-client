import { Component } from '@angular/core';
import { PageShell } from '../../../shared/ui/page-shell/page-shell';

@Component({
  selector: 'app-new-audit-page',
  imports: [PageShell],
  template: `
    <app-page-shell eyebrow="New audit" title="Analyze a website URL" description="Frontend-only placeholder for the future scrape, AI analysis, and scoring workflow.">
      <form class="glass-panel max-w-3xl rounded-lg p-6">
        <label class="grid gap-2 text-sm font-semibold text-slate-700">
          Website URL
          <input class="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-violet-400" placeholder="https://example.com" type="url" />
        </label>
        <button class="mt-5 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white">Create placeholder audit</button>
      </form>
    </app-page-shell>
  `,
})
export class NewAuditPage {}
