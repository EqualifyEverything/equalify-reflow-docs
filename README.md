# Equalify PDF Converter - Documentation

Documentation site for the [Equalify PDF Converter](https://github.com/EqualifyEverything/equalify-pdf-converter), which transforms PDF course materials into accessible, semantic markup for the University of Illinois Chicago.

Forked from the [UIC OSF website](https://github.com/UIC-OSF/website) to maintain consistent UIC branding (header/footer).

## Tech Stack

- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Markdown:** react-markdown + remark-gfm + rehype-highlight
- **Routing:** React Router (HashRouter)
- **Deployment:** GitHub Pages via GitHub Actions

## Getting Started

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173/equalify-pdf-converter-docs/`

## Building

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Adding Documentation

1. Add a markdown file to `src/content/`
2. Add an entry to `src/docs-nav.ts` with the title, path, and filename
3. The file will automatically be available as a routed page

## Keeping Header/Footer in Sync with OSF Site

`src/components/Layout.tsx` contains the UIC header and footer, kept identical to the [OSF website](https://github.com/UIC-OSF/website). The upstream remote tracks the original repo:

```bash
git fetch upstream
git diff upstream/main -- src/components/Layout.tsx
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via `.github/workflows/deploy.yml`.

## Project Structure

```
src/
  components/
    Layout.tsx          # UIC header + footer (synced with OSF site)
    DocsLayout.tsx      # Docs page layout (sidebar + content)
    DocsSidebar.tsx     # Left navigation sidebar
    MarkdownPage.tsx    # Markdown renderer component
  content/              # Markdown documentation files
  pages/
    Home.tsx            # Landing page
  docs-nav.ts           # Sidebar navigation structure
  index.css             # Tailwind + highlight.js styles
  main.tsx              # Entry point with HashRouter
  App.tsx               # Route definitions
```
