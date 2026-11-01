# Keybindings Reference

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---


## Source

configs/hypr/configs/keybinds.lua (193 lines inspected)

## Workspace Bindings

For workspaces 1-10 (keys 1-0):

- Super + key — focus workspace
- Super + Shift + key — move window to workspace
- Super + Alt + key — move to workspace silent

Special:

- Super + S — toggle special workspace magic
- Super + Shift + S — move to special:magic

## Mouse

- Super + mouse_down / mouse_up — workspace next/prev
- Super + mouse:272 — move window
- Super + mouse:273 — resize window

## Zoom

- Super + Z — zoom.sh
- Super + Shift + Z — zoom.sh --in
- Super + Alt + Z — zoom.sh --out

## System / Bar

- Super + Ctrl + R — hyprctl reload
- Ctrl + Esc — waybar-reload.sh --toggle
- Ctrl + Alt + Esc — waybar-reload.sh --reload

## Window Switcher

- Super + Tab — rofi -show window
- Alt + Tab — rofi -show window with rofi-window.rasi theme

## Media (locked)

- XF86AudioRaiseVolume / LowerVolume — wpctl volume ±5%
- XF86AudioMute — toggle sink mute
- XF86AudioMicMute — toggle source mute
- XF86MonBrightnessUp / Down — brightnessctl

## Notes

- Full binding table continues in the source file beyond the sampled section
- Some bindings may be duplicated (zoom and cliphist-related items flagged in audits)
- Script paths use ~/.config/hypr/scripts/...
- Optional Pyprland bindings are commented out
