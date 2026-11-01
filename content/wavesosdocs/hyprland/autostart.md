# Autostart

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---


## Source

configs/hypr/configs/autostart.lua

## Commands Registered

1. waybar-reload.sh --reload
2. eww-watchdog.sh
3. swww-daemon
4. wl-paste --type text --watch cliphist store  (appears twice)
5. polkit.sh
6. wl-paste --type image --watch cliphist store  (appears twice)
7. sleep 5 && python ~/.config/wallfliper/main.py --restore
8. User block between WAVESOS-USER-AUTOSTART-BEGIN/END

## Known Issue

Duplicate text and image cliphist watchers waste processes and may cause redundant storage operations. Severity: Low–Medium.

## User Autostart Editor

autostart-editor.sh manages the marked block so users do not hand-edit outside the safe region.
