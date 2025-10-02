# Welcome

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Use the included GitHub Actions workflow in `.github/workflows/deploy.yml` to publish to GitHub Pages, or deploy to Vercel/Netlify.

## Can I connect a custom domain?

Yes. Configure your DNS and set the Pages source in the repository settings or follow your hosting provider's docs.

## Deployment Troubleshooting (GitHub Pages)

If you deploy this site to GitHub Pages and see missing assets (404) or runtime errors, try the following checklist:

- Ensure `vite.config.ts` has `base` set to `/hook-todo-charm/` when publishing to https://<user>.github.io/hook-todo-charm/
- Verify the build locally:

	```bash
	npm ci
	npm run build
	ls -la dist
	```

- Confirm `dist/` contains `index.html`, `assets/` CSS/JS, and `favicon.ico`.
- In the repo Settings → Pages, set Source to "GitHub Actions" (if you use the provided workflow).
- Use the official GitHub Pages Actions flow (already configured in `.github/workflows/deploy.yml`):
	- `actions/configure-pages@v4`
	- `actions/upload-pages-artifact@v3`
	- `actions/deploy-pages@v4`

- If you see a 403 when pushing, check organization/repo Actions restrictions or use a PAT as a fallback (create a secret `PUBLISH_TOKEN` with repo write permissions).

- If you see `Cannot read properties of null (reading 'addEventListener')`, ensure event listeners are attached only after elements exist (use `if (el) el.addEventListener(...)` or `DOMContentLoaded`). Prefer React handlers when using React components.

If you'd like, I can run the local build and inspect the `dist/` contents for you, or add a PAT fallback to the workflow.
