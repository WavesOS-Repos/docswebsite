# Uninstall and Recovery

**Branch:** main (WavesOS current)

---

## Important Limitation

There is **no complete uninstall script** in the inspected repository. Recovery is manual.

## Restoring User Configurations

During install, selected directories under `~/.config` were copied to:

```
~/.config/WavesHyprland-backup-YYYYMMDD-HHMMSS/
```

To restore a component (example: hypr):

```bash
# Identify backup
ls -d ~/.config/WavesHyprland-backup-*

# Example restore
rm -rf ~/.config/hypr
cp -a ~/.config/WavesHyprland-backup-TIMESTAMP/hypr ~/.config/
```

Repeat for other components as needed (waybar, rofi, eww, kitty, etc.).

## System-Level SDDM Changes

The installer may have written:

- `/usr/share/sddm/themes/orbital` (or other themes)
- `/etc/sddm.conf.d/10-waveshyprland.conf`

These are **not** covered by the user backup. To reverse manually:

```bash
# Inspect
cat /etc/sddm.conf.d/10-waveshyprland.conf
ls /usr/share/sddm/themes/

# Remove project conf (example)
sudo rm -f /etc/sddm.conf.d/10-waveshyprland.conf

# Optionally remove theme directory
sudo rm -rf /usr/share/sddm/themes/orbital

# Re-enable previous theme via your preferred method / sddm.conf
```

## Removing Packages

Packages can be removed with pacman/yay, but many are general-purpose. Removing everything listed in `pacman.txt` / `aur.txt` may remove software you still want. Review carefully.

## Wallfliper

```bash
rm -rf ~/.config/wallfliper
# Also remove any desktop autostart entries Wallfliper may have installed under ~/.config/autostart if present
```

## Wallpapers

```bash
# Only if you no longer want the collection
rm -rf ~/Pictures/Wallpapers
```

## Recovery if Hyprland Fails to Start

1. Switch to a TTY (`Ctrl+Alt+F3` etc.)
2. Restore a known-good `~/.config/hypr` from backup
3. Or move the directory aside: `mv ~/.config/hypr ~/.config/hypr.broken`
4. Install a minimal hyprland config or use another session to recover

## Recovery if Display Manager is Broken

Boot to multi-user target or a live environment, fix `/etc/sddm.conf.d/`, or temporarily install another DM.

## Recommendation for Maintainers

Implementing a proper `uninstall.sh` that:

1. Restores from the latest backup (optional)
2. Removes system SDDM theme and conf snippet
3. Optionally removes deployed packages (with confirmation)

would significantly improve operability. See audits/recommendations.md.
