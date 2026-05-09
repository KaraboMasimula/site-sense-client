# SiteSense Frontend Foundation (Angular)

## Recommended icon library
Use **Lucide Angular** (`lucide-angular`) for a modern, consistent outline icon set.

## Install commands
```bash
npm install -D @angular/cli tailwindcss postcss autoprefixer
npm install flowbite flowbite-angular
npm install lucide-angular
```

## Tailwind + Flowbite notes
1. Create `tailwind.config.js` and include:
   - `./src/**/*.{html,ts}`
   - `./node_modules/flowbite/**/*.js`
2. In `src/styles.css`, add Tailwind directives:
   - `@tailwind base;`
   - `@tailwind components;`
   - `@tailwind utilities;`
3. Import Flowbite plugin in `tailwind.config.js`:
   - `plugins: [require('flowbite/plugin')]`

## File map
- `src/main.ts`: bootstrap with router + interceptor placeholder.
- `src/app/app.routes.ts`: lazy route tree for public/auth/app.
- `src/app/layouts/*`: public/auth/dashboard shells.
- `src/app/core/services/*`: auth + audit service placeholders.
- `src/app/features/*`: page placeholders by feature.
- `src/app/shared/components/*`: reusable shared component placeholders.
