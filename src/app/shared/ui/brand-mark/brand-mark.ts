import { Component, input } from '@angular/core';

@Component({
  selector: 'app-brand-mark',
  template: `
    <a class="flex items-center gap-3 text-sm font-bold text-slate-950" [class.text-lg]="size() === 'lg'" href="/">
      <span
        class="relative grid size-8 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-cyan-300 via-violet-500 to-pink-300 text-white shadow-lg shadow-violet-200"
      >
        <span class="absolute inset-1 rounded-full bg-white/20"></span>
        <span class="relative text-xs">S</span>
      </span>
      <span>SiteSense</span>
    </a>
  `,
})
export class BrandMark {
  readonly size = input<'sm' | 'lg'>('sm');
}
