import { Component, input } from '@angular/core';

@Component({
  selector: 'ss-page-header',
  standalone: true,
  template: `
    <header class="mb-6">
      <h1 class="text-2xl font-semibold">{{ title() }}</h1>
      <p class="text-slate-500">{{ subtitle() }}</p>
    </header>
  `
})
export class PageHeaderComponent {
  title = input.required<string>();
  subtitle = input<string>('');
}
