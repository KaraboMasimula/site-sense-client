import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-shell',
  template: `
    <section class="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6 lg:px-8">
      <div class="mb-8 max-w-3xl">
        <p class="text-sm font-semibold text-violet-600">{{ eyebrow() }}</p>
        <h1 class="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
          {{ title() }}
        </h1>
        <p class="mt-3 text-base leading-7 text-slate-600">{{ description() }}</p>
      </div>
      <ng-content />
    </section>
  `,
})
export class PageShell {
  readonly eyebrow = input('');
  readonly title = input.required<string>();
  readonly description = input('');
}
