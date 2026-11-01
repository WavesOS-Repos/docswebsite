# Colors Module

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---


## Source

configs/hypr/configs/colors.lua

## Behavior

Attempts to load ~/.config/hypr/matugen-colors.lua. On failure uses fallback:

- primary #89b4fa
- secondary #cba6f7
- tertiary #f5c2e7
- background #1e1e2e
- on_background #cdd6f4
- surface #313244
- outline #6c7086
- error #f38ba8

Provides rgba() helper for border definitions used by general.lua.
