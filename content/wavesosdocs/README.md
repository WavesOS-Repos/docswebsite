# WavesHyprland Technical Documentation

**Project:** WavesHyprland  
**Version:** 0.1.0  
**Branch:** main (WavesOS current)  
**Repository:** https://github.com/WavesOS-Repos/WavesHyprland  

---

## What is WavesHyprland?

WavesHyprland is the **Hyprland desktop configuration and deployment stack** for **WavesOS** (Arch-based Linux distribution). It deploys a complete rice onto an existing Arch Linux installation — it is **not** a full OS or disk installer.

### Current stack

| Component | Role |
|-----------|------|
| Hyprland (Lua) | Wayland compositor |
| Matugen | Dynamic colors from wallpapers |
| Wallfliper | Wallpaper manager (image + video) |
| Waybar | Status bar (multiple layouts) |
| Rofi (Wayland) | Launcher and menus |
| Eww | Widgets (Antares, Fuyue, Rock) |
| Hyprlock / qylock / SDDM | Lockscreen and login themes |
| Thunar + Relax GTK | File manager and theming |
| Kitty | Terminal |
| swww / mpvpaper | Wallpaper backends |
| swaync / wlogout / cava / btop | Supporting desktop tools |

---

## Features (current main)

- **One-command installer** — `./install.sh --all` (or interactive menu)
- **Modular Hyprland Lua config** — programs, environment, colors, general, decorations, animations, input, keybinds, window rules, monitors, autostart, plugins
- **Dynamic theming** — Matugen regenerates colors for Hyprland, Waybar, Rofi, Kitty, and Eww from the active wallpaper
- **Wallfliper** — Python/Qt wallpaper selector with swww and mpvpaper backends, thumbnails, video support, color hook
- **Multiple Waybar layouts** — switchable styles (top, bottom, left, dual-tone, Catppuccin, and more)
- **Eww widgets** — Antares, Fuyue (weather), Rock
- **Rofi menus** — launcher, window switcher, emoji, clipboard, wallpaper, power, screenshots, keybinds, theme selectors
- **SDDM themes** — qylock collection; default install sets Clockwork orbital
- **Hyprlock** — session lock with optional music integration
- **Helper scripts** — screenshots, volume, brightness/nightlight, clipboard, theme switch, settings/keybind/autostart editors, plugin manager
- **Config backup** before deploy
- **Wallpaper pack** — clones WavesWallpapers into `~/Pictures/Wallpapers`

---

## Quick start

```bash
git clone https://github.com/WavesOS-Repos/WavesHyprland.git
cd WavesHyprland
chmod +x install.sh scripts/*.sh
./install.sh --all
# After install:
sudo reboot
```

Or use the interactive menu: `./install.sh`

| Flag | Action |
|------|--------|
| `--all` | Full install |
| `--yay` | Install yay |
| `--packages` | pacman.txt + aur.txt |
| `--backup` | Backup existing configs |
| `--configs` | Deploy `configs/` |
| `--wallfliper` | Deploy Wallfliper |
| `--wallpapers` | Clone wallpaper repo |
| `--themes` | Install themes |
| `--sddm` | Deploy qylock / SDDM theme |
| `--post` | chmod, color seeds, defaults |

Verbose logs: `WAVES_QUIET=0 ./install.sh --all`

---

## Complete catalogs (every file & feature)

| Document | Description |
|----------|-------------|
| [COMPLETE_FILE_CATALOG.md](COMPLETE_FILE_CATALOG.md) | **Every** source/config/theme definition file |
| [COMPLETE_FEATURE_CATALOG.md](COMPLETE_FEATURE_CATALOG.md) | **Every** product feature → implementing files |
| [scripts/EVERY_SCRIPT_DETAIL.md](scripts/EVERY_SCRIPT_DETAIL.md) | Per-script detail (installer + all Hypr helpers) |

## Documentation map

| Section | Contents |
|---------|----------|
| [DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md) | Full navigation index |
| [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) | What the project is and is not |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Component relationships and diagrams |
| [REPOSITORY_STRUCTURE.md](REPOSITORY_STRUCTURE.md) | Directory layout |
| [getting-started/](getting-started/) | Prerequisites, install, first boot, recovery |
| [installer/](installer/) | Installer stages and flow |
| [hyprland/](hyprland/) | Lua modules, keybindings, editors |
| [scripts/](scripts/) | Helper script groups |
| [wallfliper/](desktop-applications/wallfliper.md) | Wallpaper application |
| [waybar/](desktop-applications/waybar.md) · [eww/](desktop-applications/eww.md) · [rofi/](desktop-applications/rofi.md) · [theming/](desktop-applications/theming.md) | UI subsystems |
| [lockscreen-and-login/](lockscreen-and-login/) | SDDM, qylock, Hyprlock |
| [packages/](packages/) | pacman and AUR packages |
| [development/](development/) | Extending the stack |
| [troubleshooting/](troubleshooting/) | Diagnosis and recovery |
| [audits/](audits/) | Known issues and recommendations |
| [appendices/](appendices/) | Glossary, commands, paths |

---

## Important notes (current release)

1. Requires an existing **Arch Linux** install and network (packages + wallpaper repo).
2. **Reboot** after a full install so SDDM and the session load cleanly.
3. Wallfliper’s shipped `config.json` may contain a hardcoded home path for the Matugen color hook — replace it with your `$HOME` after deploy if theming does not update.
4. System SDDM files under `/usr/share/sddm` and `/etc/sddm.conf.d` are **not** covered by the user config backup.
5. There is **no full uninstall script**; recovery is via timestamped backups under `~/.config/WavesHyprland-backup-*` plus manual SDDM rollback if needed.

Details: [audits/bugs-and-inconsistencies.md](audits/bugs-and-inconsistencies.md) and [getting-started/uninstall-and-recovery.md](getting-started/uninstall-and-recovery.md).

---

## WavesOS context

WavesHyprland is the Hyprland rice layer used within **WavesOS** branding (Arch-based distribution with Ultra, AI, and Hacking variants). This documentation covers the WavesHyprland repository only — not the full WavesOS ISO/build pipeline.

---

*Documentation describes the current main-branch product (version 0.1.0).*
