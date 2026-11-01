# Installer Overview

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---


## Role

The installer is a bash-based staged deployment system. It is not an OS installer. It installs packages, backs up user configs, deploys configuration trees, deploys Wallfliper, clones wallpapers, installs themes, configures SDDM, and performs post-setup seeding.

## Components

| File | Role |
|------|------|
| install.sh | Entry point, menu, flags, full_install orchestration |
| scripts/common.sh | Shared variables, logging, die, require_arch, paths |
| scripts/install_yay.sh | Bootstrap yay |
| scripts/install_packages.sh | pacman + aur package lists |
| scripts/backup_configs.sh | Timestamped backup of selected config trees |
| scripts/deploy_configs.sh | rsync configs/ to ~/.config |
| scripts/deploy_wallfliper.sh | rsync apps/wallfliper to ~/.config/wallfliper |
| scripts/install_wallpapers.sh | git clone/pull WavesWallpapers |
| scripts/install_themes.sh | Install theme packs |
| scripts/install_sddm_qylock.sh | Deploy qylock + set SDDM theme |
| scripts/post_setup.sh | chmod, seed colors, cache dirs |

## Design Characteristics

- set -euo pipefail throughout
- Quiet by default (WAVES_QUIET=1)
- Single sudo authentication with background keep-alive
- Stages can run independently
- Failures abort via die

See individual installer documents and installation-flow.md.
