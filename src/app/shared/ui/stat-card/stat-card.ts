import { Component, input } from '@angular/core';
import { LucideAngularModule, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'app-stat-card',
  imports: [LucideAngularModule],
  template: `
    <article class="glass-panel rounded-lg p-5">
      <div class="mb-4 flex items-center justify-between">
        <span class="text-sm font-medium text-slate-500">{{ label() }}</span>
        <lucide-icon [img]="TrendingUpIcon" class="size-4 text-emerald-500" />
      </div>
      <strong class="text-3xl font-bold text-slate-950">{{ value() }}</strong>
      <p class="mt-2 text-sm text-slate-500">{{ hint() }}</p>
    </article>
  `,
})
export class StatCard {
  readonly TrendingUpIcon = TrendingUp;
  readonly label = input.required<string>();
  readonly value = input.required<string | number>();
  readonly hint = input('');
}
