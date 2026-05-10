import { Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly token = signal<string | null>(null);

  readonly isAuthenticated = computed(() => Boolean(this.token()));

  setSession(token: string): void {
    this.token.set(token);
  }

  clearSession(): void {
    this.token.set(null);
  }
}
