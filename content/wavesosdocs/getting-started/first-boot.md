# First Boot

---

## After Reboot

1. SDDM should present the **orbital** theme (Clockwork) if `install_sddm_qylock.sh` succeeded.
2. Log in with your user account.
3. Hyprland should start and execute the autostart sequence from `autostart.lua`.

## Autostart Sequence (Inspected)

On `hyprland.start`:

1. `waybar-reload.sh --reload`
2. `eww-watchdog.sh`
3. `swww-daemon`
4. `wl-paste --type text --watch cliphist store` (registered twice in inspected file)
5. `polkit.sh`
6. `wl-paste --type image --watch cliphist store` (registered twice)
7. After `sleep 5`: `python ~/.config/wallfliper/main.py --restore`
8. User autostart block (managed by autostart-editor)

## What You Should See

- Waybar at the configured position for the active layout
- A restored wallpaper (if Wallfliper had a previous selection) or a default after manual selection
- Functional Super-key bindings for terminal, launcher, etc.

## Immediate Post-Login Checks

```bash
# Hyprland running?
echo $XDG_CURRENT_DESKTOP
hyprctl version

# Waybar process
pgrep -a waybar

# swww
swww query

# Wallfliper restore log / errors
# (check terminal if launched manually)

# Matugen colors file
ls -l ~/.config/hypr/matugen-colors.lua
```

## Fixing the Wallfliper Color Hook

Inspect and edit if needed:

```bash
cat ~/.config/wallfliper/config.json
```

If it still contains `/home/bowser/`, replace with your home path:

```bash
sed -i "s|/home/bowser|$HOME|g" ~/.config/wallfliper/config.json
```

Then set a wallpaper via Wallfliper to regenerate colors.

## User Autostart

Use the autostart editor (script `autostart-editor.sh`, bound via keybinds or settings) to add applications inside the marked block rather than editing `autostart.lua` by hand outside that block.
