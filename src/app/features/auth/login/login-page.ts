import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Eye, LockKeyhole, LucideAngularModule, Mail } from 'lucide-angular';

@Component({
  selector: 'app-login-page',
  imports: [LucideAngularModule, RouterLink],
  template: `
    <section class="pt-8">
      <h2 class="text-3xl font-bold text-slate-950">Welcome back</h2>
      <p class="mt-2 text-base text-slate-500">Sign in to your account to continue</p>

      <form class="mt-8 grid gap-5">
        <label class="grid gap-3 text-sm font-bold text-slate-950">
          Email address
          <span class="relative">
            <span class="pointer-events-none absolute left-4 top-1/2 grid size-5 -translate-y-1/2 place-items-center text-slate-400">
              <lucide-icon [img]="MailIcon" class="block size-5" />
            </span>
            <input class="ss-input ss-input-with-icon min-h-14" placeholder="you@company.com" type="email" />
          </span>
        </label>

        <label class="grid gap-3 text-sm font-bold text-slate-950">
          <span class="flex items-center justify-between">
            Password
            <a href="#" class="text-sm font-bold text-violet-600">Forgot password?</a>
          </span>
          <span class="relative">
            <span class="pointer-events-none absolute left-4 top-1/2 grid size-5 -translate-y-1/2 place-items-center text-slate-400">
              <lucide-icon [img]="LockIcon" class="block size-5" />
            </span>
            <input class="ss-input ss-input-with-icon ss-input-with-right-icon min-h-14" placeholder="Enter your password" type="password" />
            <span class="pointer-events-none absolute right-4 top-1/2 grid size-5 -translate-y-1/2 place-items-center text-slate-400">
              <lucide-icon [img]="EyeIcon" class="block size-5" />
            </span>
          </span>
        </label>

        <button class="ss-btn ss-btn-primary mt-4 min-h-14 w-full text-base" type="button">Sign in</button>
      </form>

      <div class="my-8 flex items-center gap-4 text-sm font-semibold text-slate-400">
        <span class="h-px flex-1 bg-slate-200"></span>
        or continue with
        <span class="h-px flex-1 bg-slate-200"></span>
      </div>

      <div class="grid gap-4">
        <button class="ss-btn ss-btn-outline min-h-14 w-full bg-white text-base text-slate-950" type="button">
          <span class="text-xl font-bold text-blue-500">G</span>
          Continue with Google
        </button>
        <button class="ss-btn ss-btn-outline min-h-14 w-full bg-white text-base text-slate-950" type="button">
          <span class="text-2xl leading-none text-black">●</span>
          Continue with Apple
        </button>
      </div>

      <p class="mt-8 text-center text-sm text-slate-500">
        Don’t have an account?
        <a routerLink="/auth/register" class="font-bold text-violet-600">Create account</a>
      </p>
    </section>
  `,
})
export class LoginPage {
  readonly EyeIcon = Eye;
  readonly LockIcon = LockKeyhole;
  readonly MailIcon = Mail;
}
