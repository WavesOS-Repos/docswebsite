# Project Overview — WavesHyprland

## Purpose of This Document

This document explains what WavesHyprland is, what it is not, its relationship to WavesOS, the design philosophy, major components, and the intended user and developer audiences.

---

## What WavesHyprland Is

WavesHyprland is a **modular desktop configuration and deployment system** for Arch Linux running the Hyprland Wayland compositor. It provides:

1. A complete Hyprland configuration written primarily in **Lua** (not the traditional `.conf` format).
2. An automated installer (`install.sh` + supporting scripts) that:
   - Installs required packages from official repositories and the AUR
   - Backs up existing user configuration directories
   - Deploys configuration trees under `~/.config/`
   - Deploys the Wallfliper wallpaper application
   - Clones a wallpaper collection repository
   - Installs GTK/Qt/icon themes
   - Deploys SDDM themes from the qylock collection and sets a default theme
   - Performs post-setup permission and seed configuration work
3. A rich set of shell scripts under `~/.config/hypr/scripts/` that implement keybindings, menus, theming hooks, system management, and helper utilities.
4. Dynamic theming driven by **Matugen**, which extracts color palettes from the current wallpaper and regenerates configuration snippets for Hyprland, Waybar, Rofi, Kitty, Eww, and related components.
5. Multiple status bar layouts for Waybar, multiple Rofi themes/menus, and Eww-based widgets (Antares, Fuyue, Rock).
6. Integration with swww (and optionally awww) for image wallpapers and mpvpaper for video wallpapers, orchestrated primarily through Wallfliper.
7. Session lock (Hyprlock) and display manager (SDDM + qylock) theming.

The project is developed as part of the **WavesOS** effort (an Arch-based Linux distribution concept with Ultra, AI, and Hacking variants). WavesHyprland itself is the Hyprland rice and tooling layer, not the full distribution installer.

---

## What WavesHyprland Is Not

| Claim | Reality |
|-------|---------|
| Full Arch Linux installer | No. It assumes an already installed Arch system. |
| Disk partitioning / bootloader installer | Not present. |
| Complete desktop environment like GNOME/KDE | It is a rice/configuration for Hyprland. |
| Independent operating system | It is a configuration stack. |
| Fully self-contained offline installer | Network access is required for packages, yay, and the wallpaper repository. |
| Production-hardened enterprise desktop | It is a personal/rice-oriented project with known technical debt (see audits). |

---

## Design Philosophy (Inferred from Implementation)

From static inspection of the source:

- **Lua-first Hyprland configuration.** The compositor configuration is modularized into multiple `.lua` files under `configs/hypr/configs/` and loaded from `hyprland.lua`. Colors are loaded from a generated `matugen-colors.lua` with a fallback palette.
- **User-level deployment preferred.** Most configuration is written under `$HOME/.config`. System-level changes are limited primarily to package installation and SDDM theme installation under `/usr/share/sddm/themes` and `/etc/sddm.conf.d`.
- **Quiet by default.** Installer scripts respect `WAVES_QUIET=1` (default) and produce minimal console output unless errors occur.
- **Backup before overwrite.** Existing configuration directories listed in the backup target set are copied to a timestamped backup under `~/.config/WavesHyprland-backup-YYYYMMDD-HHMMSS`.
- **Matugen owns color.** Comments and structure indicate that Matugen is the intended single source of truth for accent and surface colors across Kitty, Waybar, Rofi, Hyprland borders, and Eww.
- **Script-driven UX.** Many user-facing actions (theme switch, layout switch, screenshots, clipboard, power menu, settings editors) are implemented as shell scripts invoked from keybindings.
- **Optional components.** Some features (certain plugins, Quickshell lockscreen, btop) appear partially integrated; presence of configuration does not always equal presence in the package lists or autostart.

---

## Major Subsystems

### 1. Installer Pipeline

Entry point: `install.sh`

Stages (in full install order):

1. `install_yay.sh` — ensure yay AUR helper
2. `install_packages.sh` — pacman.txt + aur.txt
3. `backup_configs.sh` — snapshot existing configs
4. `deploy_configs.sh` — rsync `configs/` → `~/.config/`
5. `deploy_wallfliper.sh` — rsync `apps/wallfliper/` → `~/.config/wallfliper/`
6. `install_wallpapers.sh` — clone WavesWallpapers into `~/Pictures/Wallpapers`
7. `install_themes.sh` — install theme packs from `themes/`
8. `install_sddm_qylock.sh` — deploy qylock and set default SDDM theme
9. `post_setup.sh` — chmod scripts, seed matugen-colors.lua, seed Kitty colors, etc.

### 2. Hyprland Lua Configuration

- Entry: `configs/hypr/hyprland.lua`
- Modules under `configs/hypr/configs/`: programs, environment, colors, general, decorations, animations, input, keybinds, windowrules, monitors, autostart, plugins
- Generated colors: `matugen-colors.lua` (or fallback table inside `colors.lua`)
- Scripts: `configs/hypr/scripts/` (dozens of helpers)
- Lockscreen: `hyprlock.conf` + variants under `lockscreens/`

### 3. Wallfliper

Standalone Python 3 + PySide6 (Qt6) application for wallpaper selection and application.

- Supports image and video wallpapers
- Backends: swww / awww (images), mpvpaper (video)
- Color extraction and optional hook to Matugen (`color_hook` in config.json)
- Layer-shell UI, single-instance handling, thumbnail/preview generation, cache GC
- Deployed by rsync; does **not** run `pip install` during installation (system packages preferred)

### 4. Dynamic Theming (Matugen)

- Templates under `configs/matugen/templates/`
- Hook script: `configs/hypr/scripts/matugen-from-wall.sh`
- Outputs colors consumed by Hyprland, Waybar, Rofi, Kitty, Eww

### 5. Status Bar (Waybar)

- Multiple layout/style pairs under `configs/waybar/configs/` and `configs/waybar/style/`
- Module definitions under `configs/waybar/modules/`
- Layout switching via scripts

### 6. Widgets (Eww)

- Main definitions: `configs/eww/eww.yuck`, `eww.scss`, `colors.scss`
- Widgets: Antares, Fuyue, Rock (and related)
- Helper scripts under `configs/eww/scripts/`
- Watchdog: `eww-watchdog.sh`

### 7. Menus (Rofi)

- Themes under `configs/rofi/themes/`
- Menu styles under `configs/rofi/menu/`
- Color snippets under `configs/rofi/colors/`
- Invoked by various scripts for launcher, window switcher, emoji, clipboard, wallpaper, power, screenshots, keybinds, theme selection, etc.

### 8. Login and Lock

- SDDM + qylock themes (many QML themes under `apps/qylock/themes/`)
- Hyprlock configuration and music integration scripts
- Optional Quickshell lockscreen path (present under qylock tree but excluded from default deploy in some cases)

---

## Repository Statistics (Branch)

| Metric | Value |
|--------|-------|
| Branch | `current main` |
| Version |  |
| Total files (approx.) | ~30,929 |
| Source/config text files of primary interest | ~420 |
| Project version (`VERSION`) | 0.1.0 |

The majority of the file count is attributable to theme assets, icons, wallpapers metadata, QML resources, and other binary or large asset trees.

---

## Intended Audience

- **End users** of WavesOS / Arch + Hyprland who want a pre-integrated rice.
- **Rice customizers** who want to modify keybindings, layouts, themes, or widgets.
- **Contributors** who want to extend the installer, add scripts, or improve Wallfliper integration.
- **Auditors / maintainers** who need a map of known issues, privilege boundaries, and recovery paths.

---

## Relationship to WavesOS Branding

The response style and project context indicate WavesOS is an Arch-based distribution concept with variants named Ultra, AI, and Hacking. WavesHyprland is the Hyprland desktop configuration component used within that branding. This documentation focuses exclusively on the technical content of the WavesHyprland repository and does not document the full WavesOS distribution build pipeline (which is outside this repository).

---

## Source of Truth Policy Used in This Documentation

1. Source code and configuration files take precedence over the project README.
2. Features described in README but not present in the inspected source are marked as unverified or missing.
3. Features present in source but not mentioned in README are documented from the source.
4. Runtime behavior that cannot be observed in this environment is marked as static-analysis inference.
5. Binary assets are inventoried by path and apparent purpose only.

See also: [ARCHITECTURE.md](ARCHITECTURE.md), [FILE_COVERAGE_MATRIX.md](FILE_COVERAGE_MATRIX.md), [audits/bugs-and-inconsistencies.md](audits/bugs-and-inconsistencies.md).
