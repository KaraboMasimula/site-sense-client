import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/components/page-header.component';

@Component({ standalone: true, imports: [PageHeaderComponent], template: `<ss-page-header title='Dashboard' subtitle='Overview metrics and recent audits.' />` })
export class DashboardPage {}
