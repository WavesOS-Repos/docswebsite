# Supported Environment

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)

---

## Officially Targeted Environment

From installer and package analysis:

- **Distro:** Arch Linux
- **Compositor:** Hyprland (Lua configuration)
- **Session type:** Wayland
- **Display manager:** SDDM (theme deployment assumed)
- **Init:** systemd (implicit via Arch packages)
- **Shell for scripts:** bash (`#!/usr/bin/env bash`, `set -euo pipefail`)

## Package Manager

- Official packages via `pacman`
- AUR packages via `yay` (installed by the project if missing)

## Desktop Session Assumptions After Install

- User logs in via SDDM (orbital theme by default)
- Hyprland starts as the session
- Autostart runs Waybar, swww-daemon, cliphist watchers, polkit, eww-watchdog, delayed Wallfliper restore
- Matugen colors are seeded if missing; full dynamic colors appear after wallpaper + Matugen run

## Monitor and Multi-monitor

`monitors.lua` is present. Exact monitor definitions in the inspected file may be minimal or placeholder; users are expected to customize. Helper scripts such as `monitor.sh` exist; verify whether they still target Lua or legacy conf paths (see audits).

## Optional Components

Some components are partially integrated:

- btop configurations may be deployed while package presence depends on lists
- Quickshell lockscreen appears under qylock tree but is excluded from default rsync filters in places
- Hyprland plugins are catalogued; actual installation is via plugin manager script / hyprpm

## Hardware Notes

- GPU drivers capable of running Hyprland are required
- Brightness control assumes `brightnessctl`
- Audio assumes PipeWire + WirePlumber + `wpctl`
- Video wallpapers require `mpvpaper` and related GStreamer/ffmpeg support

## Environment Variables Set by Config

From `environment.lua` (inspected):

- `XCURSOR_SIZE=24`
- `HYPRCURSOR_SIZE=24`
- `QT_QPA_PLATFORMTHEME=qt6ct`
- `QT_STYLE_OVERRIDE=kvantum`

Additional variables may be set by scripts at runtime.
