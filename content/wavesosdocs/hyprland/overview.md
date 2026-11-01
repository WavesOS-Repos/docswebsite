# Hyprland Overview

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---


## Role

Hyprland is the Wayland compositor at the center of WavesHyprland. Configuration is Lua-based and modular.

## Deployed Paths

- ~/.config/hypr/hyprland.lua — entry
- ~/.config/hypr/configs/*.lua — modules
- ~/.config/hypr/matugen-colors.lua — colors (generated or seeded)
- ~/.config/hypr/hyprlock.conf — lockscreen
- ~/.config/hypr/scripts/ — helper scripts
- ~/.config/hypr/lockscreens/ — lock variants
- ~/.config/hypr/plugins/ — plugin catalog

## Module List

programs, environment, colors, general, decorations, animations, input, keybinds, windowrules, monitors, autostart, plugins

## Design Notes

- Colors loaded via pcall(dofile) with fallback palette
- Keybindings primarily invoke shell scripts under scripts/
- Autostart uses hl.on("hyprland.start", ...)
- User autostart block is delimited for safe editing by autostart-editor.sh
