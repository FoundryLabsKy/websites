# websites

Hosted client websites for Foundry Labs — served via GitHub Pages.

Each top-level directory is one client's static site, live at
`https://foundrylabsky.github.io/websites/<directory>/`. Every push to
`main` redeploys automatically (`.github/workflows/deploy-pages.yml`).

## Sites

| Directory | Client | Live URL |
| --- | --- | --- |
| `a1-plumbing-services/` | A1 Plumbing Services — plumbing, Grand Cayman | https://foundrylabsky.github.io/websites/a1-plumbing-services/ |
| `big-tree-bbq/` | Big Tree BBQ — Caymanian barbecue, East End, Grand Cayman | https://foundrylabsky.github.io/websites/big-tree-bbq/ |
| `handy-heroes-cayman/` | Handy Heroes Cayman — handyman & home repairs, Grand Cayman | https://foundrylabsky.github.io/websites/handy-heroes-cayman/ |
| `professional-mowing-service/` | Professional Mowing Service — lawn care, Grand Cayman | https://foundrylabsky.github.io/websites/professional-mowing-service/ |
| `rankins-jerk-pit/` | Rankin's Jerk Pit — jerk restaurant, Bodden Town | https://foundrylabsky.github.io/websites/rankins-jerk-pit/ |
| `rodneys-salon/` | Rodney's Salon and Barber — salon & barber, George Town | https://foundrylabsky.github.io/websites/rodneys-salon/ |

## Adding a site

1. Drop the site's static files in a new kebab-case directory (must contain `index.html`; use relative asset paths so the subpath works).
2. Add it to the table above and to the root `index.html` directory listing.
3. Push to `main` — Pages deploys it.
