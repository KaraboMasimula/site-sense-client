# SiteSense Frontend Foundation

Initial Angular frontend setup only. Backend, API integration, scraping, auth persistence, PDF export, teams, and subscriptions are intentionally left as future work.

## Stack

- Angular 21 standalone components
- Lazy-loaded route components
- Tailwind CSS 4
- Flowbite for future UI primitives
- Lucide Angular for modern tree-shakable icons
- Signals for local UI state and service placeholders
- `inject()` for service and router dependencies

## Commands

```bash
nvm use 24
npx @angular/cli@latest new site-sense --directory . --routing --style css --standalone --skip-git --skip-tests --package-manager npm
npm install tailwindcss @tailwindcss/postcss flowbite lucide-angular
npm start
```

## Folder Structure

```text
src/app
  core
    guards
      auth.guard.ts
    models
      audit.models.ts
    services
      audit.service.ts
      auth.service.ts
      theme.service.ts
  layouts
    auth-layout
      auth-layout.ts
    dashboard-layout
      dashboard-layout.ts
    public-layout
      public-layout.ts
  shared
    ui
      brand-mark
        brand-mark.ts
      empty-state
        empty-state.ts
      page-shell
        page-shell.ts
      stat-card
        stat-card.ts
  features
    auth
      login
        login-page.ts
      register
        register-page.ts
    audits
      audit-history
        audit-history-page.ts
      audit-report
        audit-report-page.ts
      new-audit
        new-audit-page.ts
    dashboard
      dashboard-page.ts
    landing
      landing-page.ts
    pricing
      pricing-page.ts
    settings
      settings-page.ts
```

## Routing

- `/` uses `PublicLayout` and loads `LandingPage`.
- `/pricing` uses `PublicLayout` and loads `PricingPage`.
- `/auth/login` uses `AuthLayout` and loads `LoginPage`.
- `/auth/register` uses `AuthLayout` and loads `RegisterPage`.
- `/app/dashboard` uses `DashboardLayout` and loads `DashboardPage`.
- `/app/audits/new` uses `DashboardLayout` and loads `NewAuditPage`.
- `/app/audits` uses `DashboardLayout` and loads `AuditHistoryPage`.
- `/app/audits/:auditId` uses `DashboardLayout` and loads `AuditReportPage`.
- `/app/settings` uses `DashboardLayout` and loads `SettingsPage`.

## Tailwind + Flowbite Notes

Tailwind 4 is configured through `src/styles.css` and `.postcssrc.json`.

```css
@import "tailwindcss";
@plugin "flowbite/plugin";
@source "../node_modules/flowbite";
```

Use Flowbite components selectively once real interaction requirements are known. For now, the app uses Tailwind utility classes directly so the architecture stays light.

## Icons

Recommended icon library: `lucide-angular`.

Why: clean SaaS-friendly line icons, strong Angular standalone support, tree-shakable imports, and a broad icon set for dashboards, audits, settings, exports, billing, and teams.
