# Theming

## Overview

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

Matugen-centric dynamic theming pipeline.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.

## Color Generation

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

Wallpaper → Matugen → templates → consumers.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.

## Cursor Themes

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

Cursor size env vars; theme packages.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.

## Gtk Theming

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

GTK 3/4 + Relax themes.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.

## Icon Themes

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

Relax icons under themes/.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.

## Matugen

**Config:** `~/.config/matugen/config.toml`  
**Templates:** `~/.config/matugen/templates/`  
**Hook script:** `~/.config/hypr/scripts/matugen-from-wall.sh`

---

### Significance

Matugen is the **single palette engine** for WavesOS dynamic chrome: Hyprland borders (`matugen-colors.lua`), Waybar, Rofi, Kitty, EWW. Wallpaper changes should not require hand-editing colours.

---

### How we built it

1. Templates export Lua table for Hyprland and CSS/Rasi/SCSS for other apps.  
2. Wallfliper / wallpaper scripts call Matugen with a fixed mode (e.g. dark + vibrant/tonal scheme) and **non-interactive** source colour index so automation never blocks on prompts.  
3. `colors.lua` loads `matugen-colors.lua` with **fallback** colours if the file is missing (prevents Hyprland crash on first boot).  
4. Kitty must **not** use `dark-theme.auto.conf` that overrides Matugen opacity/colours.

---

### How to use

```bash
# From current wallpaper (scripted)
~/.config/hypr/scripts/matugen-from-wall.sh

# Manual example
matugen image /path/to/wall.png --mode dark --type scheme-vibrant --source-color-index 0
hyprctl reload
# reload waybar / eww as needed
```

Seed `matugen-colors.lua` exists before first Hyprland start if Matugen has never run.

## Qt Theming

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

qt6ct + Kvantum.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.

## Theme Switching (dark / light)

**Script:** `~/.config/hypr/scripts/theme-switch.sh`

---

### Significance

Separates **toolkit theme** (GTK Relax light/dark, Kvantum, icons, gsettings color-scheme) from **Matugen dynamic colours**. Switching to light mode should not destroy Kitty/Matugen terminal colours.

---

### How we built it

1. Toggle or force paths refined during install (running the script twice can force “end on dark” when args were unreliable).  
2. Applies Relax GTK + Kvantum light/dark variants and icon packs.  
3. Users must avoid leaving Kitty `dark-theme.auto.conf` in place.  
4. File manager (Thunar) follows GTK; Qt apps follow Kvantum/qt6ct.

---

### How to use

```bash
~/.config/hypr/scripts/theme-switch.sh
```

Bind to a key if desired. Installer post-step typically ends on a dark desktop for first impression.

## Troubleshooting

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

Fix color_hook path; re-run Matugen; validate generated CSS/SCSS.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.

## Wallpaper → colour integration

**Flow:** Wallfliper sets wallpaper → Matugen generates palette → Hyprland / Waybar / Rofi / Kitty / EWW reload or read new files → EWW watchdog ensures widgets return.

Login: Wallfliper **restore** last wallpaper so the session does not fall back to the stock Hyprland image.

See [matugen.md](#matugen) and Wallfliper docs.

## Wallust

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

Do not assume Wallust equals Matugen; confirm if present.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.
