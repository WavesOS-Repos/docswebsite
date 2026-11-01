# File Coverage Matrix

**Repository:** WavesHyprland  
**Version:** 0.1.0  

---

## Purpose

This matrix records which repository paths are covered and which documentation pages cover them. Binary assets (images, fonts, large theme packs) are inventoried at directory level only.

## Legend

| Status | Meaning |
|--------|---------|
| Inspected | Source or config content read |
| Inventoried | Path and purpose recorded; content not fully parsed |
| Documented | Explained in the listed documentation page(s) |
| Partial | Partially inspected due to size or binary nature |
| Not applicable | Generated, cache, or excluded artifact |

## Top-level coverage

| Path | Purpose | Format | Inspected | Documentation |
|------|---------|--------|-----------|---------------|
| install.sh | Installer entry | bash | Yes | installer/install-sh.md |
| VERSION | Version string | text | Yes | CHANGELOG_AND_VERSIONING.md |
| README.md | Project README | md | Yes | (reference only) |
| scripts/common.sh | Shared helpers | bash | Yes | installer/common-functions.md |
| scripts/install_yay.sh | yay bootstrap | bash | Yes | installer/package-installation.md |
| scripts/install_packages.sh | Package install | bash | Yes | installer/package-installation.md |
| scripts/backup_configs.sh | Config backup | bash | Yes | installer/backup-system.md |
| scripts/deploy_configs.sh | Config deploy | bash | Yes | installer/configuration-deployment.md |
| scripts/deploy_wallfliper.sh | Wallfliper deploy | bash | Yes | installer/wallfliper-deployment.md |
| scripts/install_wallpapers.sh | Wallpaper clone | bash | Yes | installer/wallpaper-installation.md |
| scripts/install_themes.sh | Theme install | bash | Yes | installer/theme-installation.md |
| scripts/install_sddm_qylock.sh | SDDM themes | bash | Yes | installer/sddm-installation.md |
| scripts/post_setup.sh | Post-install | bash | Yes | installer/installation-flow.md |
| packages/pacman.txt | Official packages | text | Yes | packages/pacman-packages.md |
| packages/aur.txt | AUR packages | text | Yes | packages/aur-packages.md |
| configs/hypr/hyprland.lua | Hypr entry | lua | Yes | hyprland/ |
| configs/hypr/configs/*.lua | Modules | lua | Yes | hyprland/ |
| configs/hypr/scripts/*.sh | Helper scripts | bash | Partial (headers + key files) | scripts/ |
| apps/wallfliper/** | Wallpaper app | py/qml | Partial | wallfliper/ |
| apps/qylock/** | SDDM themes | qml/sh | Partial | lockscreen-and-login/ |
| configs/eww/** | Widgets | yuck/scss/sh | Partial | eww/ |
| configs/waybar/** | Status bar | jsonc/css | Partial | waybar/ |
| configs/rofi/** | Menus | rasi | Partial | rofi/ |
| configs/matugen/** | Color templates | templates | Yes | theming/ |
| themes/** | Theme packs | mixed | Inventoried | theming/ |
| assets/** | Shared assets | mixed | Inventoried | — |

## Inspection limitations

- Binary files (PNG, SVG icons in bulk, fonts, video assets, QML resources) were not reverse-engineered.
- Extremely large generated or third-party theme trees were inventoried by directory.
- Some Hypr scripts (e.g. rofi-emoji.sh at ~1866 lines) were sampled rather than line-by-line annotated.
- Runtime behavior of network-dependent features (weather APIs, AUR builds) was not executed.
- Total primary source/config text files of interest: approximately 420.


---

## Full inventory

For a path-by-path listing of **every** source and configuration file in the current repository, see [COMPLETE_FILE_CATALOG.md](COMPLETE_FILE_CATALOG.md).

For a feature-by-feature map of **everything** the product provides, see [COMPLETE_FEATURE_CATALOG.md](COMPLETE_FEATURE_CATALOG.md).
