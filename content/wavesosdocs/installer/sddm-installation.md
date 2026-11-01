# SDDM / qylock Installation

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---


## Script

scripts/install_sddm_qylock.sh

## Behavior (inspected)

1. Source: apps/qylock
2. Deploy to ~/.config/qylock via rsync with excludes (flake files, quickshell-lockscreen, qt5 themes, etc.)
3. chmod sddm.sh if present
4. Locate Clockwork orbital theme under several possible paths
5. sudo cp -a theme to /usr/share/sddm/themes/orbital
6. Write /etc/sddm.conf.d/10-waveshyprland.conf with Current=orbital
7. Message about later switching via ~/.config/qylock/sddm.sh (Super+Shift+I)

## Privilege

Requires sudo for system theme and conf write.

## Backup Gap

System paths are not included in backup_configs.sh.

## Theme Switcher

Interactive selection is provided by user-level sddm.sh, not by the non-interactive installer path.
