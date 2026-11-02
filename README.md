# Finances

A premium green, orange and white personal income tracker, designed especially for a phone. Built with plain HTML, CSS and JavaScript, bundled into a single `index.html` plus a small offline service worker and install icons. No dependencies, backend, ads or account required.

## November 2026 starter targets

| Day | Target |
|---|---:|
| Monday | £160 |
| Tuesday | £160 |
| Wednesday | £200 |
| Thursday | £230 |
| Friday | £250 |
| Saturday | £250 |
| Sunday | £230 |

**November 2026 total: £6,310** (gross income target; expenses are deducted to determine net income).

## Features

- Edit gross income target on any specific day; change weekday defaults in Settings.
- Enter gross daily income and itemised expenses (charging, food, parking, tolls, car and other).
- Live take-home calculation: gross income **minus** expenses.
- Cumulative income target balance: a surplus today offsets a shortfall yesterday.
- Green = income target achieved AND optional expense cap respected; amber = 80–99%; orange = 70–79%; red = under 70%. If income target is hit but expense cap is exceeded, the day shows **Over budget** instead of green.
- Monthly calendar, complete ledger, spending-category breakdown and remaining daily income requirement.
- Monthly CSV export, full JSON backup and restore.
- Installable progressive web app (PWA); works offline after its first successful online visit.
- Data saved in **this browser's local storage only**. It does **not sync between devices**. Export a JSON backup regularly. Private/Incognito browsing or clearing site data can delete the local records.

## How the balance works

- Daily variance = **gross earned − income target**.
- Running balance to date = **total gross earnings − total scheduled income targets for dates that have elapsed** (including a current day once saved). A past unlogged day counts as £0 earned until you add it.
- Monthly net take-home = **total gross earnings − total recorded expenses**.
- The required average for remaining calendar days = max(0, **whole-month income target − gross earned**) / number of calendar days left (including today).

The budget cap is **optional** and not prefilled. If unset, hitting the income target is green even when expenses are recorded; if set, the cap must also be met.

## Run locally

Open `index.html` in a browser, or for offline/service-worker testing, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new GitHub repository called `finances` (public for free GitHub Pages on most accounts, or private if your plan supports private Pages).
2. The complete source is already committed to this repository on `main`.
3. In the repo go to **Settings → Pages → Build and deployment**, select **Deploy from a branch**, select `main` and `/(root)`, and save.
4. Once GitHub gives you a Pages URL, open it in Chrome on Android and choose **Add to Home screen / Install app** from the menu.

**Important:** The GitHub repository contains only app code, not your financial entries. Personal entries remain on the device where you use the website, and do not become public when publishing the code.