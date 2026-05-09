import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly token = signal<string | null>(null);

  isAuthenticated(): boolean {
    return !!this.token();
  }

  setToken(token: string): void {
    this.token.set(token);
  }

  clear(): void {
    this.token.set(null);
  }
}
