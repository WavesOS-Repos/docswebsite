# Lua Architecture

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---


## Loading Model

hyprland.lua is the entry point. Modules under configs/ provide focused configuration tables and bindings using the Hyprland Lua API (hl.*).

## colors.lua Pattern

```lua
local colors_file = os.getenv("HOME") .. "/.config/hypr/matugen-colors.lua"
local ok, result = pcall(dofile, colors_file)
-- fallback table if not ok or missing primary
function rgba(hex, alpha) ... end
return colors
```

## general.lua Pattern

Uses colors from the colors module for active/inactive borders, sets gaps, border_size, layout=dwindle, misc options.

## keybinds.lua Pattern

Uses hl.bind with mainMod (typically SUPER), workspace loops, media keys with locked/repeating flags, and exec_cmd for scripts.

## autostart.lua Pattern

Registers commands on hyprland.start event. Contains a user-editable block between WAVESOS-USER-AUTOSTART markers.
