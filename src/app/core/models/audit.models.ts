export type AuditStatus = 'queued' | 'scraping' | 'analyzing' | 'completed' | 'failed';

export interface AuditSummary {
  id: string;
  url: string;
  score: number;
  status: AuditStatus;
  createdAt: string;
}

export interface Recommendation {
  id: string;
  title: string;
  impact: 'low' | 'medium' | 'high';
  category: 'seo' | 'performance' | 'accessibility' | 'content' | 'technical';
}
