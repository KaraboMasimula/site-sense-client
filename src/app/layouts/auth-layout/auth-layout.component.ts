import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ss-auth-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main class="grid min-h-screen place-items-center bg-gradient-to-br from-slate-50 to-indigo-50 p-6">
      <section class="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <router-outlet />
      </section>
    </main>
  `
})
export class AuthLayoutComponent {}
