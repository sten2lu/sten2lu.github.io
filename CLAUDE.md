# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About This Site

Personal academic website for Carsten T. Lüth (PhD Student, DKFZ/Heidelberg University), built on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. Deployed to [sten2lu.github.io](https://sten2lu.github.io).

## Development Commands

**Docker (recommended):**
```bash
docker compose pull   # first time only
docker compose up     # serves at http://localhost:8080
```

**Native Ruby (legacy):**
```bash
bundle install
bundle exec jekyll serve   # serves at http://localhost:4000
```

**Build for production:**
```bash
bundle exec jekyll build   # outputs to _site/
```

## Deployment

The site auto-deploys via GitHub Actions on push to `master`/`main`. The current working branch is **`production`** — pushes here do **not** auto-deploy. To deploy, either push to `main`/`master` or trigger the Deploy action manually in GitHub Actions → "Run workflow."

The `gh-pages` branch is auto-generated and should never be edited directly.

## Architecture & Key Files

### Content to Edit

| File/Directory | Purpose |
|---|---|
| `_config.yml` | All site settings: title, URL, social links, plugins, scholar config |
| `_bibliography/papers.bib` | Publications database (BibTeX, powers the publications page via jekyll-scholar) |
| `assets/json/resume.json` | CV data in [JSON Resume](https://jsonresume.org/) format (primary CV source) |
| `_data/cv_carsten.yml` | Custom CV data in YAML (personal extended format, used by `cv_carsten` layout) |
| `_data/cv.yml` | Fallback CV data (used when `resume.json` is not configured) |
| `_data/repositories.yml` | GitHub users/repos shown on the repositories page |
| `_data/socials.yml` | Social media links |
| `_pages/about.md` | Homepage content and profile configuration |
| `_news/` | News items shown on the homepage |
| `_projects/` | Project cards (frontmatter: `title`, `description`, `category`, `importance`, `img`) |
| `_posts/` | Blog posts |
| `_books/` | Bookshelf entries |
| `_teachings/` | Teaching collection |

### Custom Files (Added to Base Theme)

- `_data/cv_carsten.yml` — Extended YAML CV format feeding both the website and LaTeX CV generation
- `_layouts/cv_carsten.liquid` — Custom CV layout that renders `cv_carsten.yml` or `resume.json`

### CV Data Flow

The CV page (`_pages/cv.md`) uses the `cv` layout. It reads from `assets/json/resume.json` first (loaded via `jekyll_get_json` into `site.data.resume`); falls back to `_data/cv.yml` if not present. The custom `cv_carsten` layout does the same but also supports the richer `_data/cv_carsten.yml` format.

## Publications (BibTeX)

Edit `_bibliography/papers.bib`. Al-folio-specific BibTeX fields:

- `abbr` — venue abbreviation badge
- `selected={true}` — pins paper to top of publications page / shows on homepage
- `html` — main link (OpenReview, proceedings)
- `pdf`, `code`, `arxiv`, `doi`, `poster`, `slides`, `video`, `website`
- `abstract` — expandable section on the publications page
- `bibtex_show` — shows copy-BibTeX button
- `category` — custom grouping field used in this repo
- `dimensions`, `altmetric`, `google_scholar_id`, `inspirehep_id` — citation badges

## Projects

Each file in `_projects/` is a Markdown file with YAML frontmatter. Key fields:
- `category: work` or `category: fun` (matches `display_categories` in `_pages/projects.md`)
- `importance: 1` (lower = higher priority in display order)

## Theming

- Theme color: `_sass/_themes.scss` → `--global-theme-color`
- Color palette: `_sass/_variables.scss`
