# Coding: A blog to learning about tools and setup for coding

## 🚀 Project Structure

Inside, you'll see the following folders and files:

```text
/
├──  package.json
├──  pnpm-lock.yaml
├──  public
│   ├──  favicon.svg
│   └──  logo.jpg
├──  README.md
├──  src
│   ├──  components
│   │   ├──  Card.astro
│   │   ├──  Code.astro
│   │   ├──  HeaderLink.astro
│   │   ├──  Sidebar.astro
│   │   └──  Table.astro
│   ├──  env.d.ts
│   ├──  layouts
│   │   └──  Layout.astro
│   ├──  pages
│   │   ├──  index.astro
│   │   └──  windows-terminal
│   │       └──  index.astro
│   └──  styles
├──  Todo.md
└──  tsconfig.json
```
## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
