import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `<h1 class='mb-4 text-2xl font-semibold'>Login</h1><button class='btn' (click)='mockLogin()'>Mock Login</button><a routerLink='/auth/register' class='ml-3 text-sm'>Create account</a>`
})
export class LoginPage {
  private readonly auth = inject(AuthService);
  mockLogin(): void { this.auth.setToken('demo-token'); }
}
