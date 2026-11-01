# Repository Structure

**Repository:** WavesHyprland  
**Version:** 0.1.0  

---

## Overview

The WavesHyprland repository is organized as a deployment tree rather than a traditional application source tree. The top-level layout is:

```
WavesHyprland/
├── install.sh              # Main installer entry point
├── VERSION                 # Project version (0.1.0)
├── README.md               # Short user-facing README
├── apps/                   # Standalone applications
│   ├── wallfliper/         # Wallpaper manager (Python/Qt)
│   └── qylock/             # SDDM theme collection + helpers
├── assets/                 # Shared assets (icons, etc.)
├── configs/                # Configuration trees deployed to ~/.config
│   ├── hypr/               # Hyprland Lua + scripts + lockscreens
│   ├── waybar/             # Status bar layouts and styles
│   ├── rofi/               # Launcher and menu themes
│   ├── eww/                # Widget definitions and scripts
│   ├── matugen/            # Color generation templates
│   ├── kitty/              # Terminal
│   ├── Thunar/             # File manager
│   ├── gtk-3.0 / gtk-4.0   # GTK settings
│   ├── qt6ct / nwg-look    # Qt / look-and-feel
│   ├── wlogout / cava / btop / fontconfig / xsettingsd / qylock / ...
│   └── ...
├── docs/                   # Project docs (minimal at inspection time)
├── packages/
│   ├── pacman.txt          # Official repository packages
│   └── aur.txt             # AUR packages
├── scripts/                # Installer stage scripts
│   ├── common.sh
│   ├── install_yay.sh
│   ├── install_packages.sh
│   ├── backup_configs.sh
│   ├── deploy_configs.sh
│   ├── deploy_wallfliper.sh
│   ├── install_wallpapers.sh
│   ├── install_themes.sh
│   ├── install_sddm_qylock.sh
│   └── post_setup.sh
└── themes/                 # Theme packs (e.g. Relax-Plasma-Themes)
```

Approximate file counts at inspection: ~30,929 total files; ~420 primary source/config text files of interest.

## apps/

### apps/wallfliper/

Python + PySide6 wallpaper selector. Key paths:

- `main.py` — CLI and GUI entry
- `core/` — library, backends, thumbnails, colors, cache, single-instance, integrations
- `ui/` — bridge, model, QML, shaders
- `config.json` — runtime configuration (contains hardcoded path — see audits)
- `requirements.txt` / `pyproject.toml` — Python packaging metadata
- `DESIGN.md` — design notes

### apps/qylock/

SDDM theme collection and helpers:

- `sddm.sh` — interactive/non-interactive theme installer/selector
- `themes/` — many QML themes (Clockwork, Genshin, Minecraft, Nier, pixel variants, etc.)
- Some subtrees (quickshell-lockscreen, qt5 themes) are excluded by the installer rsync filters

## configs/hypr/

Central compositor configuration:

- `hyprland.lua` — entry
- `configs/*.lua` — modular settings
- `matugen-colors.lua` — generated or seeded colors
- `hyprlock.conf` — lockscreen
- `scripts/` — large collection of helper scripts (45+ files)
- `lockscreens/` — lockscreen variants
- `plugins/` — plugin catalog
- `icons/`, `sounds/` — UI assets

## scripts/ (installer)

Each installer stage is a standalone bash script that sources `common.sh`. They are designed to be runnable independently via `install.sh` flags or the interactive menu. Full install order is fixed in `full_install()`.

## packages/

- `pacman.txt` — one package name per line (official repos)
- `aur.txt` — one package name per line (AUR)

These lists are the authoritative input for `install_packages.sh`.

## themes/

Contains theme packs such as Relax-Plasma-Themes (icons and related). Installed by `install_themes.sh`. Large binary/icon content is present; documentation inventories purpose only.

## docs/

At inspection time the docs directory contained primarily placeholder content. This documentation library is generated externally and is not part of the upstream repo.
