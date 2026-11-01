# Prerequisites

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)

---

## System Requirements

| Requirement | Details |
|-------------|---------|
| Operating system | Arch Linux (or closely compatible; installer calls `require_arch`) |
| Architecture | x86_64 expected (not explicitly gated beyond Arch) |
| Privileges | sudo access for package and SDDM operations |
| Network | Required for pacman, AUR (yay), and WavesWallpapers git clone |
| Display | Wayland-capable GPU and drivers suitable for Hyprland |
| Disk | Sufficient space for packages, themes, and wallpaper collection |

## Software Assumptions

- `pacman` is available and working
- Base development tools can be installed (`base-devel`, `git`)
- The user can authenticate with sudo
- A graphical session is not required for the installer itself, but Hyprland is required after reboot for the desktop experience

## Packages Installed by the Project

See [packages/pacman-packages.md](../packages/pacman-packages.md) and [packages/aur-packages.md](../packages/aur-packages.md).

Key groups include:

- Hyprland and related (hyprland, hyprlock, hyprpicker, …)
- Wayland utilities (swww, grim, slurp, …)
- Status and menus (waybar, rofi-wayland, wlogout, eww, swaync)
- Terminal and file management (kitty, thunar, yazi)
- Theming (matugen-bin, nwg-look, qt6ct, kvantum, …)
- Audio/video (pipewire, wireplumber, mpvpaper, cava, …)
- Python / Qt runtime for Wallfliper (python, qt6-*, system PySide6 preferred)

## AUR Helper

If `yay` is not present, `install_yay.sh` will:

1. Install `git` and `base-devel` via pacman
2. Clone `https://aur.archlinux.org/yay.git`
3. Build and install yay

## Wallpaper Repository

`install_wallpapers.sh` clones:

```
https://github.com/WavesOS-Repos/WavesWallpapers.git
```

into `~/Pictures/Wallpapers`. Network and git access are required.

## Pre-installation Checklist

1. Update the system: `sudo pacman -Syu`
2. Ensure you have a working network connection
3. Confirm you can run `sudo -v`
4. Optionally back up critical personal data outside the project’s backup targets
5. Read the security and privilege audit if installing on a machine you care about

## Unsupported or Unverified Environments

- Non-Arch distributions (even Arch-derivatives may fail `require_arch`)
- Systems without sudo
- Offline-only systems
- Non-Wayland setups (the stack is Wayland/Hyprland oriented)
