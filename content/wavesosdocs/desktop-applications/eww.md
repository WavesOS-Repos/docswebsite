# EWW Widgets

## EWW Widgets Overview

**Config:** `~/.config/eww/` (`eww.yuck`, `eww.scss`, `colors.scss`)  
**Scripts:** `~/.config/eww/scripts/` and Hypr helpers `eww-widget.sh`, `eww-watchdog.sh`

---

### Significance in WavesOS

EWW provides **desktop widgets** without replacing Hyprland with a full shell (no Quickshell dependency). WavesOS ships three main experiences:

| Widget | Role |
|--------|------|
| **Antares** | System / time / weather style desktop widget |
| **Fuyue** | Large date digit (SVG gradient) + weekday + weather line |
| **Rock** | Compact date/time style widget |

Colours follow **Matugen** so widgets stay in the same palette as Waybar, Rofi, and borders.

---

### How we built it

1. Ported visual ideas from earlier widget themes (Antares / Fuyue) into **yuck + scss**.  
2. **Fuyue** uses a generated **SVG** for the tall faded day number (CSS alone could not match the gradient look reliably).  
3. Weather via shell scripts (prefer reliable HTTP sources such as Open-Meteo).  
4. **active-widget** state file + **watchdog** so wallpaper changes do not force Antares if the user chose Fuyue/Rock.  
5. **Widget switcher** script to open one widget and close others.

---

### How to use

```bash
eww daemon   # if not running
eww open antares
eww open fuyue
eww open rock
eww close antares   # etc.
eww reload
```

Switcher (Rofi or script):

```bash
~/.config/hypr/scripts/eww-widget.sh
```

Watchdog on autostart:

```bash
~/.config/hypr/scripts/eww-watchdog.sh
```

List windows: `eww list-windows`

## Antares Widget

**Window name:** `antares`

System-oriented widget (time, weather, resource lines depending on your yuck). Uses the same Matugen colour pipeline and weather scripts as Fuyue where shared.

Open: `eww open antares`  
Prefer the widget switcher so only one of Antares/Fuyue/Rock is visible.

## Architecture

**Project:** WavesHyprland  
**Version:** 0.1.0  
**Branch:** main (WavesOS current)

---

eww.yuck windows/widgets; scripts; SCSS; watchdog.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.

## Fuyue Widget

**Window name:** `fuyue`  
**Files:** `eww.yuck` (defwindow/defwidget), `eww.scss`, `scripts/fuyue-day-svg.sh`, weather scripts

---

### Significance

Fuyue is the **large calendar digit** desktop piece: oversized day-of-month with a vertical fade, weekday, month, clock, and weather. It is one of the signature visuals of the rice.

---

### How we built it

1. **SVG day number** — `fuyue-day-svg.sh` writes an SVG with `linearGradient` and Matugen primary colour; EWW displays it as an image.  
2. Vertical stretch and sizing tuned so the digit matches the original reference screenshots.  
3. Weekday / month / time / weather as separate labels with careful margins (geometry height must be large enough or text clips).  
4. Open with `eww open fuyue` only (do not open Antares at the same time unless you want overlap).

---

### How to use

```bash
eww open fuyue
# switch away
~/.config/hypr/scripts/eww-widget.sh
```

If text is clipped at the bottom, increase the defwindow **height** (and keep position/`y` stable). Colours update when Matugen regenerates `colors.scss` / widget colour includes and EWW reloads.

## EWW ↔ Matugen

Matugen templates write colour tokens used by `colors.scss` / EWW includes. After wallpaper change:

1. Matugen runs (Wallfliper hook or `matugen-from-wall.sh`)  
2. Colour files update  
3. `eww reload` (or watchdog/open cycle) picks up new variables  

Widgets should **only** consume Matugen variables for accents/backgrounds so light/dark toolkit switches do not invent a second palette for EWW.

## Rock Widget

**Window name:** `rock`

Compact date/time style widget. Integrated with Matugen colours and the same switcher/watchdog path as Antares and Fuyue.

Open: `eww open rock`

## Styling

**Project:** WavesHyprland  
**Version:** 0.1.0  
**Branch:** main (WavesOS current)

---

eww.scss, colors.scss.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.

## Fuyue SVG generation

**Script:** `~/.config/eww/scripts/fuyue-day-svg.sh` (name may vary)

Generates a dated SVG (day number) with gradient fill using the current Matugen primary colour and a display font (e.g. Gunplay). EWW embeds the SVG path as an image widget.

Regenerate when the day changes (poll/interval in yuck) or on theme reload.

## EWW Watchdog

**Script:** `~/.config/hypr/scripts/eww-watchdog.sh`  
**State:** `~/.config/eww/active-widget` (or path used by your switcher)

---

### Significance

Wallpaper engines restart or flash the desktop; without a watchdog, widgets die or the session falls back to a default widget. The watchdog keeps the **user’s chosen** widget alive.

---

### How we built it

1. Merged with **eww-widget.sh** responsibilities so switcher and watchdog do not fight.  
2. Reads **active-widget** and runs `eww open` on that name.  
3. `--ensure` / repair mode reopens the preferred widget without forcing Antares.  
4. Started from **autostart** after EWW daemon is available.

---

### How to use

Autostart:

```lua
hl.exec_cmd("~/.config/hypr/scripts/eww-watchdog.sh")
```

Change widget via switcher; watchdog will keep that choice across wallpaper updates.

## Weather scripts (EWW)

Shell helpers under `~/.config/eww/scripts/` fetch and format weather for widgets (temperature, humidity, wind, icon line). Prefer **long-term reliable** HTTP APIs (e.g. Open-Meteo) over brittle scrapers.

Defpoll in yuck calls these scripts on an interval. Failures should degrade to a placeholder string, not crash EWW.

## Widget Definitions

**Project:** WavesHyprland  
**Version:** 0.1.0  
**Branch:** main (WavesOS current)

---

Defined in eww.yuck.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.
