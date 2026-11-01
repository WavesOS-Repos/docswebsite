# Every Hypr Helper Script — Detailed Index

**Project:** WavesHyprland  
**Version:** 0.1.0  
**Branch:** main (WavesOS current)  

---

Each script under `configs/hypr/scripts/` is documented below from the current source.

## `Weather.sh`

- **Path:** `configs/hypr/scripts/Weather.sh`
- **Size:** 2747 bytes
- **Lines:** 81
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash ; city=$(timedatectl | grep "Time zone" | awk '{split($3, a, "/"); print a[2]}') ; Save current IFS ; Change IFS to new line.

## `add_user.sh`

- **Path:** `configs/hypr/scripts/add_user.sh`
- **Size:** 873 bytes
- **Lines:** 34
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash ; add_user.sh — set Hyprlock profile photo → ~/.config/hypr/.cache/user.png ; expand ~
- **CLI args:** accepts arguments / case dispatch (see source)
- **Calls:** rofi

## `apps.sh`

- **Path:** `configs/hypr/scripts/apps.sh`
- **Size:** 584 bytes
- **Lines:** 27
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash ; open site ; Define the browsers in the order of preference ; for chromium based browsers ; for firefox and zen browser

## `autostart-editor.sh`

- **Path:** `configs/hypr/scripts/autostart-editor.sh`
- **Size:** 6788 bytes
- **Lines:** 243
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash ; WavesOS autostart editor (terminal) ; Manages user commands between markers in configs/autostart.lua
- **CLI args:** accepts arguments / case dispatch (see source)
- **Calls:** eww, notify-send, python

## `browser.sh`

- **Path:** `configs/hypr/scripts/browser.sh`
- **Size:** 2225 bytes
- **Lines:** 64
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash ; Prompt user to choose a browser ; Check if a valid choice was made
- **Calls:** notify-send

## `cava.sh`

- **Path:** `configs/hypr/scripts/cava.sh`
- **Size:** 536 bytes
- **Lines:** 34
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash ; creating "dictionary" to replace char with bar ; write cava config
- **Calls:** waybar

## `cliphist.sh`

- **Path:** `configs/hypr/scripts/cliphist.sh`
- **Size:** 900 bytes
- **Lines:** 21
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash
- **Calls:** cliphist, rofi

## `colorpicker.sh`

- **Path:** `configs/hypr/scripts/colorpicker.sh`
- **Size:** 524 bytes
- **Lines:** 20
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash ; colorpicker.sh — pick a pixel color and copy to clipboard ; -a = auto copy when supported; we also force wl-copy ; normalize (hyprpicker usually returns #RRGGBB)
- **Calls:** notify-send

## `default_browser.sh`

- **Path:** `configs/hypr/scripts/default_browser.sh`
- **Size:** 4705 bytes
- **Lines:** 166
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash ; default_browser.sh — pick a browser and set it as system default (XDG) + rice cache ; name|desktop_file|command
- **CLI args:** accepts arguments / case dispatch (see source)
- **Calls:** notify-send, rofi

## `default_editor.sh`

- **Path:** `configs/hypr/scripts/default_editor.sh`
- **Size:** 1919 bytes
- **Lines:** 73
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash ; default_editor.sh — choose default code editor (rice cache + optional xdg) ; name|command|xdg_desktop (optional)
- **Calls:** notify-send, rofi

## `edit-dotfiles.sh`

- **Path:** `configs/hypr/scripts/edit-dotfiles.sh`
- **Size:** 1604 bytes
- **Lines:** 67
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash ; Rofi menu for Quick Edit / View of Settings (SUPER E)
- **CLI args:** accepts arguments / case dispatch (see source)
- **Calls:** notify-send, rofi, waybar

## `eww-watchdog.sh`

- **Path:** `configs/hypr/scripts/eww-watchdog.sh`
- **Size:** 1248 bytes
- **Lines:** 47
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash ; EWW startup + wallpaper-change watchdog ; Restores the widget chosen by eww-widget.sh (not always antares) ; Default once if never set ; Startup: daemon + saved widget
- **Calls:** eww, mpvpaper, swww

## `eww-widget.sh`

- **Path:** `configs/hypr/scripts/eww-widget.sh`
- **Size:** 2190 bytes
- **Lines:** 101
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash ; EWW widget switcher (Rofi) + state for watchdog ; $1 = widget name | "none"
- **CLI args:** accepts arguments / case dispatch (see source)
- **Calls:** eww, notify-send, rofi

## `hypr-plugins.sh`

- **Path:** `configs/hypr/scripts/hypr-plugins.sh`
- **Size:** 16619 bytes
- **Lines:** 342
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash ; WavesOS Hyprland Plugin Manager ; Website catalogue snapshot: https://hypr.land/plugins/ ; Keys: Up/Down move, Space toggle, Enter apply, Esc cancel. ; id|display name|repository URL|hyprpm plugin id|type
- **Calls:** hyprctl, yay

## `hyprconf.sh`

- **Path:** `configs/hypr/scripts/hyprconf.sh`
- **Size:** 2267 bytes
- **Lines:** 91
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash ; script for updating the hyprconf from the github. ; colors code ; fn for the process

## `hyprlock-music.sh`

- **Path:** `configs/hypr/scripts/hyprlock-music.sh`
- **Size:** 10272 bytes
- **Lines:** 421
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash ; hyprlock-music.sh - Music player integration for Hyprlock ; Displays current track info, album art, and playback controls ; Dependencies: playerctl (required), curl (for remote art), ImageMagick (for cropping) ; ============================================================================
- **CLI args:** accepts arguments / case dispatch (see source)
- **Calls:** playerctl

## `hyprlock.sh`

- **Path:** `configs/hypr/scripts/hyprlock.sh`
- **Size:** 660 bytes
- **Lines:** 32
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash ; hyprlock dir ; fn set lockscreen ; styles ; choice
- **Calls:** rofi

## `keybind-editor.sh`

- **Path:** `configs/hypr/scripts/keybind-editor.sh`
- **Size:** 16791 bytes
- **Lines:** 574
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash ; WavesOS keybind editor (terminal)
- **CLI args:** accepts arguments / case dispatch (see source)
- **Calls:** hyprctl, notify-send, python

## `keybinds.sh`

- **Path:** `configs/hypr/scripts/keybinds.sh`
- **Size:** 726 bytes
- **Lines:** 27
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash ; Kill existing rofi instance if running ; Define the keybinds file ; Check if the file exists ; Format the keybinds for Rofi (replace ' | ' with a proper separator)
- **Calls:** notify-send, rofi

## `matugen-from-wall.sh`

- **Path:** `configs/hypr/scripts/matugen-from-wall.sh`
- **Size:** 493 bytes
- **Lines:** 22
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash
- **CLI args:** accepts arguments / case dispatch (see source)
- **Calls:** hyprctl, matugen, waybar

## `menu.sh`

- **Path:** `configs/hypr/scripts/menu.sh`
- **Size:** 131 bytes
- **Lines:** 9
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash ; Run
- **Calls:** rofi

## `monitor.sh`

- **Path:** `configs/hypr/scripts/monitor.sh`
- **Size:** 2374 bytes
- **Lines:** 70
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash

## `music.webp`

- **Path:** `configs/hypr/scripts/music.webp`
- **Size:** 233972 bytes
- **Lines:** 0
- **Header notes:** (see source)

## `nightlight.sh`

- **Path:** `configs/hypr/scripts/nightlight.sh`
- **Size:** 1042 bytes
- **Lines:** 40
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash
- **CLI args:** accepts arguments / case dispatch (see source)
- **Calls:** notify-send

## `notification.sh`

- **Path:** `configs/hypr/scripts/notification.sh`
- **Size:** 790 bytes
- **Lines:** 39
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash ; Path to the sound files ; Function to send notification and play sound
- **CLI args:** accepts arguments / case dispatch (see source)
- **Calls:** notify-send

## `open-default-browser.sh`

- **Path:** `configs/hypr/scripts/open-default-browser.sh`
- **Size:** 1119 bytes
- **Lines:** 40
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash ; Launch the default browser (XDG / rice cache / fallback) ; 1) rice cache from default_browser.sh ; 2) $BROWSER ; 3) XDG default .desktop → try to run the app id
- **CLI args:** accepts arguments / case dispatch (see source)
- **Calls:** notify-send

## `open-default-editor.sh`

- **Path:** `configs/hypr/scripts/open-default-editor.sh`
- **Size:** 709 bytes
- **Lines:** 31
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash ; open-default-editor.sh — launch default editor (optional path args)
- **CLI args:** accepts arguments / case dispatch (see source)
- **Calls:** notify-send

## `polkit.sh`

- **Path:** `configs/hypr/scripts/polkit.sh`
- **Size:** 907 bytes
- **Lines:** 27
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash ; Polkit possible paths files to check ; Launch the first polkit agent found; exec replaces this shell process

## `power.sh`

- **Path:** `configs/hypr/scripts/power.sh`
- **Size:** 581 bytes
- **Lines:** 23
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash
- **Calls:** hyprctl, systemctl

## `rofi-emoji.sh`

- **Path:** `configs/hypr/scripts/rofi-emoji.sh`
- **Size:** 82521 bytes
- **Lines:** 1866
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash ; DATA ###
- **Calls:** python, rofi

## `rofi_theme.sh`

- **Path:** `configs/hypr/scripts/rofi_theme.sh`
- **Size:** 2953 bytes
- **Lines:** 75
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash ; rofi_theme.sh — horizontal preview grid (works on VM + bare metal) ; Defaults when hypr vars missing (VM-safe) ; Prefer fixed columns so layout is always left/right on VMs ; scale 1.0 / 1.25 → integer percent (100, 125)
- **Calls:** hyprctl, jq, notify-send, rofi

## `screenshot.sh`

- **Path:** `configs/hypr/scripts/screenshot.sh`
- **Size:** 1523 bytes
- **Lines:** 45
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash
- **Calls:** grim, notify-send, rofi

## `settings.sh`

- **Path:** `configs/hypr/scripts/settings.sh`
- **Size:** 11577 bytes
- **Lines:** 268
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash ; ───────────────────────────────────────────────────────────── ; Hyprland (Lua) settings menu  –  requires: gum, sed, awk, hyprctl ;  ; Edits ONLY these files:
- **CLI args:** accepts arguments / case dispatch (see source)
- **Calls:** hyprctl, pacman, rofi

## `startup.sh`

- **Path:** `configs/hypr/scripts/startup.sh`
- **Size:** 1385 bytes
- **Lines:** 51
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash ; Transition config ; if openbangla keyboard is installed, the
- **Calls:** notify-send, swww

## `system.sh`

- **Path:** `configs/hypr/scripts/system.sh`
- **Size:** 730 bytes
- **Lines:** 29
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash ; -----------------------------------------# ; Memory Usage Notify            # ; -----------------------------------------# ; memory usage
- **Calls:** notify-send

## `systemupdate.sh`

- **Path:** `configs/hypr/scripts/systemupdate.sh`
- **Size:** 2577 bytes
- **Lines:** 103
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash ; sysupdate.sh — interactive system updater (run inside Kitty)
- **CLI args:** accepts arguments / case dispatch (see source)
- **Calls:** pacman, waybar, yay

## `theme-switch.sh`

- **Path:** `configs/hypr/scripts/theme-switch.sh`
- **Size:** 3064 bytes
- **Lines:** 83
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash ; theme-switch.sh — dark/light for GTK + Kvantum; Matugen owns Kitty/Waybar/Rofi/Hyprland ; Kvantum (Qt: Dolphin, etc.) — exact folder names under ~/.config/Kvantum/ ; GTK (Thunar, etc.) — only these; does NOT write Kitty config ; ── 1) Kvantum (Qt only) ──────────────────────────────────
- **CLI args:** accepts arguments / case dispatch (see source)
- **Calls:** matugen, notify-send

## `toggle-all-float.sh`

- **Path:** `configs/hypr/scripts/toggle-all-float.sh`
- **Size:** 232 bytes
- **Lines:** 7
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash
- **Calls:** hyprctl, jq

## `uptime.sh`

- **Path:** `configs/hypr/scripts/uptime.sh`
- **Size:** 362 bytes
- **Lines:** 15
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash ; uptime cache file
- **Calls:** notify-send

## `volumecontrol.sh`

- **Path:** `configs/hypr/scripts/volumecontrol.sh`
- **Size:** 3364 bytes
- **Lines:** 131
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash ; volumecontrol.sh — Volume and microphone control with notifications. ; ── Speakers ────────────────────────────────────────────────────────────────── ; Get icons
- **Calls:** notify-send

## `wallcache.sh`

- **Path:** `configs/hypr/scripts/wallcache.sh`
- **Size:** 1593 bytes
- **Lines:** 46
- **Shebang:** `#!/usr/bin/env sh`
- **Header notes:** !/usr/bin/env sh ; wallcache.sh — Generate thumbnail, blur, and quad images for the current wallpaper. ; Generate square thumbnail (only if missing) ; Generate blurred image (only if missing) ; Generate quad image (only if missing)

## `waybar-layout.sh`

- **Path:** `configs/hypr/scripts/waybar-layout.sh`
- **Size:** 1677 bytes
- **Lines:** 74
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash ; waybar-layout.sh — Switch between Waybar layouts cleanly ; Directories ; Check required directories ; Menu
- **CLI args:** accepts arguments / case dispatch (see source)
- **Calls:** notify-send, rofi, waybar

## `waybar-reload.sh`

- **Path:** `configs/hypr/scripts/waybar-reload.sh`
- **Size:** 462 bytes
- **Lines:** 23
- **Shebang:** `#!/bin/bash`
- **Header notes:** !/bin/bash ; waybar-reload.sh — Simple Waybar control
- **CLI args:** accepts arguments / case dispatch (see source)
- **Calls:** waybar

## `wlogout.sh`

- **Path:** `configs/hypr/scripts/wlogout.sh`
- **Size:** 392 bytes
- **Lines:** 19
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash
- **CLI args:** accepts arguments / case dispatch (see source)

## `zoom.sh`

- **Path:** `configs/hypr/scripts/zoom.sh`
- **Size:** 829 bytes
- **Lines:** 37
- **Shebang:** `#!/usr/bin/env bash`
- **Header notes:** !/usr/bin/env bash ; zoom.sh — Hyprland cursor zoom (no extra plugin) ; Usage: zoom.sh | zoom.sh --in | zoom.sh --out | zoom.sh --reset ; clamp helper via awk ; toggle 1.0 <-> 2.0
- **CLI args:** accepts arguments / case dispatch (see source)
- **Calls:** hyprctl, notify-send

---

# Every Installer Script

## `scripts/backup_configs.sh`

- **Size:** 844 bytes, **lines:** 35
- **Notes:** !/usr/bin/env bash

## `scripts/common.sh`

- **Size:** 2164 bytes, **lines:** 73
- **Notes:** !/usr/bin/env bash ; common.sh — shared helpers (quiet by default) ; Quiet mode: only errors (and final messages from install.sh)

## `scripts/deploy_configs.sh`

- **Size:** 2160 bytes, **lines:** 62
- **Notes:** !/usr/bin/env bash ; Rewrite packaging-machine paths everywhere

## `scripts/deploy_wallfliper.sh`

- **Size:** 567 bytes, **lines:** 17
- **Notes:** !/usr/bin/env bash ; Do NOT pip install requirements.txt (Arch/system packages only)

## `scripts/install_packages.sh`

- **Size:** 1214 bytes, **lines:** 44
- **Notes:** !/usr/bin/env bash ; force full silence for pacman

## `scripts/install_sddm_qylock.sh`

- **Size:** 1896 bytes, **lines:** 53
- **Notes:** !/usr/bin/env bash ; Deploy qylock + auto-apply Clockwork orbital (no interactive sddm.sh during install) ; Prefer official nested path; fallback if flattened

## `scripts/install_themes.sh`

- **Size:** 3647 bytes, **lines:** 106
- **Notes:** !/usr/bin/env bash

## `scripts/install_wallpapers.sh`

- **Size:** 955 bytes, **lines:** 28
- **Notes:** !/usr/bin/env bash ; Verify not empty

## `scripts/install_yay.sh`

- **Size:** 1265 bytes, **lines:** 51
- **Notes:** !/usr/bin/env bash

## `scripts/post_setup.sh`

- **Size:** 1946 bytes, **lines:** 74
- **Notes:** !/usr/bin/env bash

## `install.sh`

- **Size:** 3865 bytes, **lines:** 138
- **Role:** Main entry — menu, flags, full_install orchestration, sudo keep-alive, reboot banner

