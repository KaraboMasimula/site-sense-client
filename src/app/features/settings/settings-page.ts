import { Component } from '@angular/core';
import { PageShell } from '../../shared/ui/page-shell/page-shell';

@Component({
  selector: 'app-settings-page',
  imports: [PageShell],
  template: `
    <app-page-shell eyebrow="Settings" title="Workspace preferences" description="Placeholder for account, team, billing, and notification settings.">
      <div class="glass-panel max-w-3xl rounded-lg p-6">
        <h2 class="font-semibold text-slate-950">Profile</h2>
        <div class="mt-5 grid gap-4 sm:grid-cols-2">
          <input class="rounded-lg border border-slate-200 px-4 py-3" placeholder="Jane Cooper" />
          <input class="rounded-lg border border-slate-200 px-4 py-3" placeholder="jane@example.com" />
        </div>
      </div>
    </app-page-shell>
  `,
})
export class SettingsPage {}
