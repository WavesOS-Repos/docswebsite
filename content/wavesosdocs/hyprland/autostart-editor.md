# Autostart Editor

**Script:** `~/.config/hypr/scripts/autostart-editor.sh`  
**List file:** `~/.config/hypr/autostart-user.list`  
**Writes into:** managed block in `configs/hypr/configs/autostart.lua`

Markers:

```lua
-- >>> WAVESOS-USER-AUTOSTART-BEGIN
-- <<< WAVESOS-USER-AUTOSTART-END
```

---

## Significance

Core session apps (Waybar, EWW watchdog, wallpaper restore, polkit, etc.) stay in **fixed** autostart lines. The editor only manages **user** commands so people can add `nm-applet`, custom scripts, or extra tools without breaking the rice defaults.

---

## How we built it

1. **Separate list file** — One command per line in `autostart-user.list`.  
2. **Sync to Lua** — Generates `hl.exec_cmd("...")` lines between markers inside `hyprland.start`.  
3. **Terminal UI** — List / add / remove / “run one now” for testing.  
4. **Hard delete confirm** — Type `DELETE` to remove.  
5. **Backup** — `autostart.lua.bak-autostart-editor` before writes.

**Note:** Fix for bash: use `${#CMDS[@]}` carefully when the array may be empty (avoid invalid `${#CMDS[@]:-0}` forms that break on some bash builds).

---

## How to use

1. Ensure markers exist inside your `hl.on("hyprland.start", function() ... end)` block.  
2. Run:

```bash
kitty --class hypr-autostart -e ~/.config/hypr/scripts/autostart-editor.sh
```

3. **Add** — paste a command (e.g. `nm-applet`).  
4. **Remove** — select number, type `DELETE`.  
5. **Run one now** — test without restarting Hyprland.  

New entries run on the **next** Hyprland session start (unless tested with “run one now”).

### Keybind example

```lua
hl.bind(mainMod .. " + SHIFT + A",
    hl.dsp.exec_cmd("kitty --class hypr-autostart -e ~/.config/hypr/scripts/autostart-editor.sh"))
```
