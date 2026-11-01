# Waybar

## Overview

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

Waybar status bar with multiple layouts and Matugen-driven CSS.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.

## Configuration

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

Layout configs under configs/waybar/configs/; modules under modules/.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.

## Custom Modules

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

Custom modules call helper scripts; see modules-custom.jsonc.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.

## Waybar Layout System

**Layouts:** `~/.config/waybar/configs/*`  
**Styles:** `~/.config/waybar/style/*.css`  
**Active links:** `config` → chosen layout, `style.css` → chosen CSS  
**Switcher:** `~/.config/hypr/scripts/waybar-layout.sh`  
**Reload:** `~/.config/hypr/scripts/waybar-reload.sh`  
**Colours:** Matugen → `wall-theme.css` / theme include

---

### Significance

Users can change the **shape** of the bar (top full width, left vertical, skew, dual-tone, etc.) without losing wallpaper-driven colours.

---

### How we built it

1. Multiple layout JSON/JSONC files and matching CSS files.  
2. Switcher updates symlinks `config` and `style.css`, then restarts Waybar cleanly (kill old instance first to avoid stacked bars).  
3. All layouts consume **shared Matugen colour variables** (not hard-coded hex), after an initial pass where only some CSS files were wired.  
4. Modules live under `modules/*.jsonc` and are included per layout.

---

### How to use

```bash
~/.config/hypr/scripts/waybar-layout.sh
# pick layout — e.g. full-top, bar-left, skew-left
~/.config/hypr/scripts/waybar-reload.sh --reload
```

Typical keybind: Super+Ctrl+W for layout switch, Ctrl+Esc for reload (see your `keybinds.lua`).

## Modules

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

modules-main, modules-custom, modules-groups, modules-dual-tone, modules-catppuccin, modules-virt.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.

## Stylesheet

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

style/*.css and wall-theme.css; Matugen colors.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.

## Troubleshooting

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

Run waybar in a terminal to see CSS/JSONC errors; use waybar-reload.sh.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.
