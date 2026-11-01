# Backup System

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---


## Script

scripts/backup_configs.sh

## Targets

Directories under ~/.config when present:

hypr, waybar, rofi, wlogout, kitty, matugen, gtk-3.0, gtk-4.0, Thunar, qt6ct, nwg-look, xsettingsd, qylock, cava, btop, fontconfig, wallfliper

Also files: mimeapps.list, kdeglobals

## Destination

~/.config/WavesHyprland-backup-YYYYMMDD-HHMMSS/

Created via mkdir -p and cp -a.

## Limitations

- Does not back up /usr/share/sddm or /etc/sddm.conf.d
- Does not back up ~/Pictures/Wallpapers
- Does not back up arbitrary home files outside the listed set
- Each run creates a new timestamped directory (no automatic pruning)
