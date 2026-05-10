import { Injectable, signal } from '@angular/core';
import { AuditSummary } from '../models/audit.models';

@Injectable({ providedIn: 'root' })
export class AuditService {
  readonly recentAudits = signal<AuditSummary[]>([
    {
      id: 'demo-acme',
      url: 'acme.com',
      score: 87,
      status: 'completed',
      createdAt: '2026-05-08',
    },
    {
      id: 'demo-velocity',
      url: 'velocity.agency',
      score: 62,
      status: 'completed',
      createdAt: '2026-05-07',
    },
  ]);
}
