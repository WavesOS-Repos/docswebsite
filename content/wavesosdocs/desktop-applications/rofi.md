# Rofi

## Rofi Overview

Wayland Rofi builds: application menu, window switcher, emoji, clipboard, screenshots, power, keybind help, theme selectors. See [theme-system.md](#rofi-theme-system).

## Clipboard Menu

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

cliphist + rofi-clipboard.rasi.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.

## Customization

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

Add rasi files and wire scripts/keybinds.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.

## Emoji Picker

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

rofi-emoji.sh.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.

## Launcher

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

Application launcher bindings.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.

## Rofi Theme System

**Menu styles:** `~/.config/rofi/menu/style-1.rasi` … `style-8.rasi`  
**Previews:** `~/.config/rofi/assets/style-*.png`  
**Colours:** `~/.config/rofi/colors/colors-rofi.rasi` (Matugen)  
**Switcher:** `~/.config/hypr/scripts/rofi_theme.sh`  
**Launcher:** `~/.config/hypr/scripts/menu.sh`

---

### Significance

Rofi is the **app launcher and modal UI** for clipboard, emoji, window switch, power, screenshots, etc. One colour file keeps every menu on the wallpaper palette; style packs change layout/chrome only.

---

### How we built it

1. Eight visual styles with PNG previews for the switcher.  
2. `rofi_theme.sh` lists previews, user picks a style, script updates `menu.sh` theme variable (`theme='style-N'`).  
3. **Matugen** writes `colors-rofi.rasi`; `themes/rofi-colors.rasi` points at that file (never a stale absolute path from another machine).  
4. Terminal-based or Rofi-based switcher refined until vertical navigation + icons worked in the VM and main install.

---

### How to use

```bash
~/.config/hypr/scripts/rofi_theme.sh   # pick style
~/.config/hypr/scripts/menu.sh         # launcher with active style
```

If colours look wrong, confirm the symlink/path for `rofi-colors.rasi` targets **your** `$HOME` Matugen output, not another username.

## Wallpaper Menu

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

rofi-wall.rasi themes.

Source of truth: repository files in the current release. Expand this page with deeper excerpts when maintaining the documentation library.
