import { Component, input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  template: `
    <div class="glass-panel rounded-lg px-6 py-10 text-center">
      <p class="text-lg font-semibold text-slate-950">{{ title() }}</p>
      <p class="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">{{ message() }}</p>
    </div>
  `,
})
export class EmptyState {
  readonly title = input.required<string>();
  readonly message = input('');
}
