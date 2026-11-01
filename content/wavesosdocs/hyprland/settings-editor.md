# Settings Editor

**Script:** `~/.config/hypr/scripts/settings.sh`  
**Edits:** `general.lua`, `decorations.lua` (and Rofi vars when present)  
**Backups:** `~/.config/hypr/backups/settings-*`

---

## Significance

Gives a **guided** way to change the look of the rice (gaps, borders, rounding, blur, opacity, shadows) without hunting through Lua. It writes the same keys the compositor already reads — no parallel config system.

---

## How we built it

1. **Targeted keys only** — Exact `key = value` lines in `general.lua` / `decorations.lua`.  
2. **Interactive multi-select** — ↑/↓, Space toggle, Ctrl+A select all settings, Enter confirm, Esc quit (same UX family as plugin manager).  
3. **gum** for numeric prompts with min/max validation.  
4. **Backup before first write** in a run; optional restore if `hyprctl` reports config errors after reload.  
5. **Rofi sync** — border-size / radius in `rofi-vars.rasi` when that file exists.

Requires: `gum`, `hyprctl`.

---

## How to use

```bash
kitty --class hypr-settings -e ~/.config/hypr/scripts/settings.sh
```

1. Space-select: border size, roundness, inner/outer gap, blur, opacity, shadow.  
2. Enter → prompted for each value → `hyprctl reload`.  

If Hyprland reports errors, the script can restore the backup from that run.
