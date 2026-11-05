# Finances — Shift Ledger (Version 3)

A quick, beautiful, offline-friendly income tracker for private-hire drivers who work across midnight.

## Open the app

https://mohammadjanahmadi18-create.github.io/Finances/

On Android: open the link in Chrome, then open Chrome's menu and choose **Install app** or **Add to Home screen**. Once installed, it opens like a standalone app. It is a progressive web app (PWA), not an APK.

## The 20-second end-of-shift routine

1. Select the **day you started driving** and your start time (normally 13:00 or 14:00).
2. Set your finish time (normally 06:00). If the finish time is earlier than the start time, the app automatically treats it as the following morning. For example, 3 November 13:00–4 November 06:00 is **one shift on 3 November**.
3. Enter three amounts: **gross earnings**, **EV charging**, and **other expenses**. A note and target override are optional.
4. Tap **Save this shift**. Monthly and daily figures update automatically.

The starting date is the accounting date, not the finishing date. Opening the logger before 11:00 defaults to the previous date; later opens default to today. You can always edit the date.

## Weekly targets

| Start day | Gross target |
|---|---:|
| Monday | £160 |
| Tuesday | £160 |
| Wednesday | £200 |
| Thursday | £230 |
| Friday | £250 |
| Saturday | £300 |
| Sunday | £250 |

Change any weekday's default in Settings, or enter an override for one shift.

## Calculations

- Total costs = EV charging + other expenses.
- Take-home = gross earnings − total costs.
- Gross target met when gross earnings ≥ daily target.
- Net target met when take-home ≥ daily target.
- Daily and monthly summary values count each shift exactly once, on the day it **started**.

## Screens

- **Home:** current driving day, goal progress, four monthly money figures, seven-day gross-vs-target bars and recent shifts.
- **Log shift:** one fast form with live calculations and safe editing of existing days.
- **History:** previous/next month selector, summary tiles, tappable shift calendar and detailed day list.
- **Settings:** custom weekday goals, JSON backup, monthly CSV export, restore, and a link to the original app.

## Existing records and privacy

When Version 3 opens on a device that has an existing `finances-local-v1` record, it copies its dated earnings and expenses to `finances-shifts-v3`. Previous records remain untouched. Because the older version did not capture shift times, imported records use visible placeholder times and are marked *imported*; edit these when you know the actual times.

The original application remains available at [legacy.html](./legacy.html). Existing browser storage isn't shared across different browsers or devices.

All data is stored locally on the device, with **no account, advertising, or data-sharing server**. Use Settings → JSON backup regularly. Clearing site storage or uninstalling can remove local data.

## Technical details

A small dependency-free HTML/CSS/JavaScript PWA. `index.html` is the full app, `manifest.webmanifest` provides installation metadata, and `sw.js` supports offline caching. GitHub Pages publishes `main`, building SVG icons into PNG images using `scripts/build_icons.py`.

## Testing

Verified shift ownership and duration for 3 November 2026 13:00–4 November 2026 06:00 (17 hours), all seven requested weekday targets, imported legacy expenses, net-income arithmetic, saving new shifts, and persistence. The GitHub Pages build and deployment both passed.
