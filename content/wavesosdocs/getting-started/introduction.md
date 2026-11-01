# Introduction — Getting Started

**Project:** WavesHyprland  
**Version:** 0.1.0  
**Branch:** main (WavesOS current)

---

## Purpose

This section introduces WavesHyprland for users who want to install and use the Hyprland configuration stack on an existing Arch Linux system.

## What You Will Get

After a successful full installation and reboot you should have:

- Hyprland configured via modular Lua files
- Waybar status bar with multiple selectable layouts
- Rofi application launcher and utility menus
- Eww widgets (Antares, Fuyue, Rock)
- Wallfliper wallpaper manager
- Dynamic colors via Matugen driven by wallpaper changes
- SDDM login theme (Clockwork orbital by default)
- Hyprlock session locker
- Supporting applications (Kitty, Thunar, etc.) and themes (Relax GTK and related)

## What You Need

- An already installed Arch Linux system (or Arch-based system with pacman)
- Network access for packages and the wallpaper repository
- Ability to use sudo
- Willingness to reboot after installation

## Documentation Path

1. Read [prerequisites.md](prerequisites.md)
2. Read [supported-environment.md](supported-environment.md)
3. Follow [installation-guide.md](installation-guide.md)
4. Review [installation-options.md](installation-options.md) if you want partial installs
5. After reboot, see [first-boot.md](first-boot.md) and [post-installation.md](post-installation.md)
6. If something goes wrong, see [uninstall-and-recovery.md](uninstall-and-recovery.md) and the troubleshooting section

## Important Warnings

- The installer modifies system SDDM configuration.
- Existing configs under `~/.config` for listed components are backed up, but system files are not.
- There is no complete automated uninstall.
- Wallfliper ships with a hardcoded path in `config.json` that may need manual correction on non-`bowser` systems.

See the audits for details on known issues.
