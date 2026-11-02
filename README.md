# Finances

A premium green, orange and white personal driving-income tracker featuring Expense Recovery, net-goal protection, EV charging intelligence and rewarding daily progress. Built with plain HTML, CSS and JavaScript, bundled into a single `index.html` plus a small offline service worker and install icons. No dependencies, backend, ads or account required.

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

## Finances 2.1 — Expense Recovery and EV charging

**Two targets, one clear picture.** The gross baseline is what you planned to earn. Your net goal is protected only when earnings minus recorded expenses reaches that same baseline. Hitting the gross number alone does not mean your expenses are covered.

- Above-target income = `max(0, gross earned - daily gross target)`.
- Expenses recovered = `min(above-target income, daily expenses)`.
- Still to recover = `daily expenses - expenses recovered`.
- Remaining earnings to secure the net goal = `max(0, daily target - (gross earned - expenses))`.
- Example: £160 target, £190 gross, £40 expenses = £30 recovered, £10 outstanding, £150 take-home, and £10 more needed to protect the net goal.
- All recorded Charging expenses are totaled by month, with sessions and optional kWh. The app calculates a p/kWh average **only for charges that have both cost and kWh recorded**.
- Motivational charging allocation uses above-target earnings to cover charging costs first, then other expenses. This is an accounting visualization, not a change to the actual paid bill and not proof that a particular ride funded a particular charge.
- A logged day is a full **net target win** only when earnings minus expenses reaches the baseline and any configured daily expense cap is respected. The calendar shows amber for a gross target hit whose net target is not yet protected.
- Existing local entries and JSON backups remain compatible with `finances-local-v1`; charging kWh is optional and included in new backups.

## Features

- Edit gross income target on any specific day; change weekday defaults in Settings.
- Enter gross daily income and itemised expenses (charging, food, parking, tolls, car and other).
- Live take-home calculation: gross income **minus** expenses.
- Daily recovery view: income above the baseline automatically offsets recorded expenses, without rewriting what you actually spent.
- Green = net goal protected AND optional expense cap respected. Amber = gross baseline reached but net goal not yet protected, or 80%+ progress toward baseline. Red = further below baseline. Unlogged days remain neutral.
- Monthly calendar, editable daily records, income/expense analytics, monthly charging sessions and net goal remaining.
- Monthly CSV export, full JSON backup and restore.
- Installable progressive web app (PWA); works offline after its first successful online visit.
- Data saved in **this browser's local storage only**. It does **not sync between devices**. Export a JSON backup regularly. Private/Incognito browsing or clearing site data can delete the local records.

## How the balance works

- Daily gross variance = **gross earned − baseline target**; the protected net goal compares **gross minus expenses** to that same baseline.
- Monthly net versus baseline = **month-to-date net earnings minus the scheduled whole-month target**; negative is expected early in the month. Daily recovery is separate and cannot make paid expenses vanish.
- Monthly net take-home = **total gross earnings − total recorded expenses**.
- The required average net earnings for remaining calendar days = max(0, **whole-month target − net earned**) / number of calendar days left (including today).

The budget cap is **optional** and not prefilled. Green means the net target is protected, and the configured daily expense cap (if any) is respected.

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