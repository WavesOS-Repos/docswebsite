# Installation Guide

**Repository:** WavesHyprland  

---

## Overview

The recommended path for most users is a full install followed by a manual reboot.

```bash
git clone https://github.com/WavesOS-Repos/WavesHyprland.git
cd WavesHyprland
chmod +x install.sh scripts/*.sh
./install.sh --all
# After completion:
sudo reboot
```

Alternatively use the interactive menu:

```bash
./install.sh
# Select 1) Full install
```

## Step-by-Step Full Install

### 1. Obtain the repository

```bash
git clone https://github.com/WavesOS-Repos/WavesHyprland.git
cd WavesHyprland
```

Verify version:

```bash
cat VERSION   # expect 0.1.0
```

### 2. Make scripts executable

```bash
chmod +x install.sh scripts/*.sh
```

### 3. (Recommended) Update system first

```bash
sudo pacman -Syu
```

### 4. Run the installer

```bash
./install.sh --all
```

For verbose logs:

```bash
WAVES_QUIET=0 ./install.sh --all
```

### 5. What the full install does

In order:

1. Ensures `yay` is available (`install_yay.sh`)
2. Installs packages from `packages/pacman.txt` and `packages/aur.txt` (`install_packages.sh`)
3. Backs up existing config directories to `~/.config/WavesHyprland-backup-TIMESTAMP` (`backup_configs.sh`)
4. Deploys `configs/` into `~/.config/` (`deploy_configs.sh`)
5. Deploys Wallfliper to `~/.config/wallfliper/` (`deploy_wallfliper.sh`)
6. Clones/updates wallpapers into `~/Pictures/Wallpapers` (`install_wallpapers.sh`)
7. Installs themes from `themes/` (`install_themes.sh`)
8. Deploys qylock and sets SDDM theme to orbital (`install_sddm_qylock.sh`)
9. Post-setup: chmod scripts, seed matugen-colors.lua, seed Kitty colors, etc. (`post_setup.sh`)

### 6. Reboot

The installer prints a prominent message requiring a manual reboot:

```bash
sudo reboot
```

Do not skip this step if you want SDDM and session integration to take effect cleanly.

### 7. First login

Log in via SDDM. Hyprland should start with the deployed configuration. See [first-boot.md](first-boot.md).

## Partial Installation

You can run individual stages via flags or the menu. See [installation-options.md](installation-options.md).

Examples:

```bash
./install.sh --packages
./install.sh --backup
./install.sh --configs
./install.sh --wallfliper
./install.sh --sddm
```

## Failure Handling

- The installer uses `set -euo pipefail` and `die` on step failure
- Re-running stages is generally supported; backup creates a new timestamped directory each time
- If package installation fails, resolve AUR/build errors before continuing
- System-level SDDM changes are not automatically rolled back by the project’s backup

## After Installation Checklist

1. Reboot
2. Log in
3. Confirm Waybar appears
4. Open Wallfliper and set a wallpaper (this should drive Matugen if the color hook path is correct for your user)
5. Fix Wallfliper `config.json` color_hook if it still points at `/home/bowser/...`
6. Review keybindings (see hyprland/keybindings.md)
7. Optionally run theme or layout switchers

## Related Documents

- [installation-options.md](installation-options.md)
- [../installer/installation-flow.md](../installer/installation-flow.md)
- [../troubleshooting/installation-failures.md](../troubleshooting/installation-failures.md)
