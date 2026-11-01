# WavesHyprland Documentation Index

**Version:** 0.1.0  

This index is the central navigation page for the WavesHyprland technical documentation library.

---

## 0. Complete catalogs (every file & feature)

| Document | Description |
|----------|-------------|
| [COMPLETE_FILE_CATALOG.md](COMPLETE_FILE_CATALOG.md) | Every source/config file path and purpose |
| [COMPLETE_FEATURE_CATALOG.md](COMPLETE_FEATURE_CATALOG.md) | Every product feature mapped to implementation |
| [scripts/EVERY_SCRIPT_DETAIL.md](scripts/EVERY_SCRIPT_DETAIL.md) | Per-script detail for all installer + Hypr helpers |

---

## 1. Project Foundation

| Document | Description |
|----------|-------------|
| [README.md](README.md) | Library introduction, warnings, quick start |
| [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) | What the project is and is not |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Component relationships and data flows |
| [REPOSITORY_STRUCTURE.md](REPOSITORY_STRUCTURE.md) | Directory and file layout |
| [FILE_COVERAGE_MATRIX.md](FILE_COVERAGE_MATRIX.md) | Inspection and documentation coverage |
| [CHANGELOG_AND_VERSIONING.md](CHANGELOG_AND_VERSIONING.md) | Version and change notes |

---

## 2. Getting Started

| Document | Description |
|----------|-------------|
| [getting-started/introduction.md](getting-started/introduction.md) | Introduction for new users |
| [getting-started/prerequisites.md](getting-started/prerequisites.md) | System requirements |
| [getting-started/supported-environment.md](getting-started/supported-environment.md) | Supported platforms and assumptions |
| [getting-started/installation-guide.md](getting-started/installation-guide.md) | Step-by-step installation |
| [getting-started/installation-options.md](getting-started/installation-options.md) | Flags and partial installs |
| [getting-started/first-boot.md](getting-started/first-boot.md) | What happens after reboot |
| [getting-started/post-installation.md](getting-started/post-installation.md) | Recommended post-install steps |
| [getting-started/uninstall-and-recovery.md](getting-started/uninstall-and-recovery.md) | Recovery and partial uninstall |

---

## 3. Installer

| Document | Description |
|----------|-------------|
| [installer/installer-overview.md](installer/installer-overview.md) | Installer architecture |
| [installer/install-sh.md](installer/install-sh.md) | Main entry point (`install.sh`) |
| [installer/common-functions.md](installer/common-functions.md) | Shared helpers (`common.sh`) |
| [installer/package-installation.md](installer/package-installation.md) | pacman + AUR installation |
| [installer/backup-system.md](installer/backup-system.md) | Config backup mechanism |
| [installer/configuration-deployment.md](installer/configuration-deployment.md) | Deploying `configs/` |
| [installer/wallpaper-installation.md](installer/wallpaper-installation.md) | WavesWallpapers clone |
| [installer/theme-installation.md](installer/theme-installation.md) | Theme pack installation |
| [installer/sddm-installation.md](installer/sddm-installation.md) | qylock / SDDM theme deployment |
| [installer/wallfliper-deployment.md](installer/wallfliper-deployment.md) | Wallfliper application deployment |
| [installer/installation-flow.md](installer/installation-flow.md) | Sequence diagram and flow |

---

## 4. Hyprland Configuration

| Document | Description |
|----------|-------------|
| [hyprland/overview.md](hyprland/overview.md) | Hyprland Lua system overview |
| [hyprland/lua-architecture.md](hyprland/lua-architecture.md) | Loading order and module design |
| [hyprland/configuration-loader.md](hyprland/configuration-loader.md) | How `hyprland.lua` loads modules |
| [hyprland/monitor-configuration.md](hyprland/monitor-configuration.md) | `monitors.lua` and helpers |
| [hyprland/programs.md](hyprland/programs.md) | Default programs |
| [hyprland/environment.md](hyprland/environment.md) | Environment variables |
| [hyprland/colors.md](hyprland/colors.md) | Color loading and Matugen integration |
| [hyprland/general-settings.md](hyprland/general-settings.md) | Gaps, borders, layout |
| [hyprland/decorations.md](hyprland/decorations.md) | Rounding, blur, shadows |
| [hyprland/animations.md](hyprland/animations.md) | Animation curves and windows |
| [hyprland/input.md](hyprland/input.md) | Keyboard, mouse, touchpad |
| [hyprland/keybindings.md](hyprland/keybindings.md) | Complete keybinding reference |
| [hyprland/window-rules.md](hyprland/window-rules.md) | Window rules |
| [hyprland/autostart.md](hyprland/autostart.md) | Autostart entries and user block |
| [hyprland/plugins.md](hyprland/plugins.md) | Plugin catalog and manager |
| [hyprland/settings-editor.md](hyprland/settings-editor.md) | Settings editor script |
| [hyprland/keybind-editor.md](hyprland/keybind-editor.md) | Keybind editor |
| [hyprland/autostart-editor.md](hyprland/autostart-editor.md) | Autostart editor |
| [hyprland/plugin-manager.md](hyprland/plugin-manager.md) | Plugin management helper |

---

## 5. Scripts

| Document | Description |
|----------|-------------|
| [scripts/script-index.md](scripts/script-index.md) | Master index of all scripts |
| [scripts/application-launchers.md](scripts/application-launchers.md) | App launching helpers |
| [scripts/browser-management.md](scripts/browser-management.md) | Default browser scripts |
| [scripts/editor-management.md](scripts/editor-management.md) | Default editor scripts |
| [scripts/clipboard-management.md](scripts/clipboard-management.md) | cliphist integration |
| [scripts/screenshot-system.md](scripts/screenshot-system.md) | Screenshot pipeline |
| [scripts/system-management.md](scripts/system-management.md) | System update and info |
| [scripts/power-management.md](scripts/power-management.md) | Power and session scripts |
| [scripts/audio-management.md](scripts/audio-management.md) | Volume and media |
| [scripts/brightness-and-nightlight.md](scripts/brightness-and-nightlight.md) | Brightness + hyprsunset |
| [scripts/notification-system.md](scripts/notification-system.md) | Notifications |
| [scripts/wallpaper-management.md](scripts/wallpaper-management.md) | Wallpaper and Matugen hooks |
| [scripts/waybar-management.md](scripts/waybar-management.md) | Waybar reload and layouts |
| [scripts/rofi-management.md](scripts/rofi-management.md) | Rofi menus |
| [scripts/theme-management.md](scripts/theme-management.md) | Theme switching |
| [scripts/utility-scripts.md](scripts/utility-scripts.md) | Zoom, colorpicker, polkit, etc. |

---

## 6. Waybar

| Document | Description |
|----------|-------------|
| [waybar/overview.md](desktop-applications/waybar.md#overview) | Waybar role and layout system |
| [waybar/configuration.md](desktop-applications/waybar.md#configuration) | Main config structure |
| [waybar/modules.md](desktop-applications/waybar.md#modules) | Built-in modules |
| [waybar/custom-modules.md](desktop-applications/waybar.md#custom-modules) | Custom modules |
| [waybar/layout-system.md](desktop-applications/waybar.md#waybar-layout-system) | Layout switching |
| [waybar/stylesheet.md](desktop-applications/waybar.md#stylesheet) | CSS and Matugen colors |
| [waybar/troubleshooting.md](desktop-applications/waybar.md#troubleshooting) | Common Waybar issues |

---

## 7. Eww Widgets

| Document | Description |
|----------|-------------|
| [eww/overview.md](desktop-applications/eww.md#eww-widgets-overview) | Eww system overview |
| [eww/architecture.md](desktop-applications/eww.md#architecture) | Yuck structure and windows |
| [eww/widget-definitions.md](desktop-applications/eww.md#widget-definitions) | Widget catalog |
| [eww/antares.md](desktop-applications/eww.md#antares-widget) | Antares widget |
| [eww/fuyue.md](desktop-applications/eww.md#fuyue-widget) | Fuyue widget |
| [eww/rock.md](desktop-applications/eww.md#rock-widget) | Rock widget |
| [eww/styling.md](desktop-applications/eww.md#styling) | SCSS and colors |
| [eww/matugen-integration.md](desktop-applications/eww.md#eww-matugen) | Color templates |
| [eww/weather-system.md](desktop-applications/eww.md#weather-scripts-eww) | Weather scripts and data |
| [eww/svg-generation.md](desktop-applications/eww.md#fuyue-svg-generation) | Dynamic SVG generation |
| [eww/watchdog.md](desktop-applications/eww.md#eww-watchdog) | eww-watchdog behavior |

---

## 8. Wallfliper

| Document | Description |
|----------|-------------|
| [wallfliper/overview.md](desktop-applications/wallfliper.md#wallfliper-overview) | Application purpose |
| [wallfliper/architecture.md](desktop-applications/wallfliper.md#wallfliper-architecture) | Python + Qt architecture |
| [wallfliper/installation.md](desktop-applications/wallfliper.md#wallfliper-installation) | Deployment |
| [wallfliper/dependencies.md](desktop-applications/wallfliper.md#wallfliper-dependencies) | System and Python deps |
| [wallfliper/main-entrypoint.md](desktop-applications/wallfliper.md#wallfliper-entry-point) | CLI and entry point |
| [wallfliper/python-modules.md](desktop-applications/wallfliper.md#wallfliper-python-modules) | Core module reference |
| [wallfliper/qt-and-qml.md](desktop-applications/wallfliper.md#qt-and-qml) | QML UI layer |
| [wallfliper/user-interface.md](desktop-applications/wallfliper.md#user-interface) | UI behavior |
| [wallfliper/wallpaper-scanning.md](desktop-applications/wallfliper.md#wallpaper-scanning) | Library scanning |
| [wallfliper/image-processing.md](desktop-applications/wallfliper.md#image-processing) | Image handling |
| [wallfliper/video-processing.md](desktop-applications/wallfliper.md#video-processing) | Video support |
| [wallfliper/wallpaper-backends.md](desktop-applications/wallfliper.md#wallpaper-backends) | swww / awww / mpvpaper |
| [wallfliper/transitions.md](desktop-applications/wallfliper.md#transitions) | Transition lifecycle |
| [wallfliper/color-extraction.md](desktop-applications/wallfliper.md#color-extraction) | Color pipeline |
| [wallfliper/cache-management.md](desktop-applications/wallfliper.md#cache-management) | Cache and GC |
| [wallfliper/keyboard-navigation.md](desktop-applications/wallfliper.md#keyboard-navigation) | Keyboard shortcuts |
| [wallfliper/configuration-reference.md](desktop-applications/wallfliper.md#wallfliper-configuration-reference) | Config options |
| [wallfliper/troubleshooting.md](desktop-applications/wallfliper.md#wallfliper-troubleshooting) | Wallfliper issues |
| [wallfliper/development-guide.md](desktop-applications/wallfliper.md#wallfliper-development-guide) | Extending Wallfliper |

---

## 9. Theming

| Document | Description |
|----------|-------------|
| [theming/overview.md](desktop-applications/theming.md#overview) | Dynamic theming pipeline |
| [theming/matugen.md](desktop-applications/theming.md#matugen) | Matugen usage |
| [theming/wallust.md](desktop-applications/theming.md#wallust) | Wallust (if present) |
| [theming/color-generation.md](desktop-applications/theming.md#color-generation) | Palette generation |
| [theming/gtk-theming.md](desktop-applications/theming.md#gtk-theming) | GTK 3/4 + Relax |
| [theming/qt-theming.md](desktop-applications/theming.md#qt-theming) | Qt6ct / Kvantum |
| [theming/icon-themes.md](desktop-applications/theming.md#icon-themes) | Icon themes |
| [theming/cursor-themes.md](desktop-applications/theming.md#cursor-themes) | Cursor themes |
| [theming/wallpaper-integration.md](desktop-applications/theming.md#wallpaper-colour-integration) | Wallpaper → colors |
| [theming/theme-switching.md](desktop-applications/theming.md#theme-switching-dark-light) | Theme switch scripts |
| [theming/troubleshooting.md](desktop-applications/theming.md#troubleshooting) | Theming issues |

---

## 10. Rofi

| Document | Description |
|----------|-------------|
| [rofi/overview.md](desktop-applications/rofi.md#rofi-overview) | Rofi role |
| [rofi/launcher.md](desktop-applications/rofi.md#launcher) | Application launcher |
| [rofi/theme-system.md](desktop-applications/rofi.md#rofi-theme-system) | Theme files |
| [rofi/emoji-picker.md](desktop-applications/rofi.md#emoji-picker) | Emoji menu |
| [rofi/clipboard-menu.md](desktop-applications/rofi.md#clipboard-menu) | Clipboard menu |
| [rofi/wallpaper-menu.md](desktop-applications/rofi.md#wallpaper-menu) | Wallpaper selection |
| [rofi/customization.md](desktop-applications/rofi.md#customization) | Customization guide |

---

## 11. Lockscreen and Login

| Document | Description |
|----------|-------------|
| [lockscreen-and-login/overview.md](lockscreen-and-login/overview.md) | Lock and login architecture |
| [lockscreen-and-login/hyprlock.md](lockscreen-and-login/hyprlock.md) | Hyprlock configuration |
| [lockscreen-and-login/lockscreen-variants.md](lockscreen-and-login/lockscreen-variants.md) | Available variants |
| [lockscreen-and-login/sddm.md](lockscreen-and-login/sddm.md) | SDDM setup |
| [lockscreen-and-login/qylock.md](lockscreen-and-login/qylock.md) | qylock themes |
| [lockscreen-and-login/quickshell-lockscreen.md](lockscreen-and-login/quickshell-lockscreen.md) | Quickshell path |
| [lockscreen-and-login/theme-selector.md](lockscreen-and-login/theme-selector.md) | Theme selection UI |
| [lockscreen-and-login/troubleshooting.md](lockscreen-and-login/troubleshooting.md) | Lock/login issues |

---

## 12. Desktop Applications

| Document | Description |
|----------|-------------|
| [desktop-applications/kitty.md](desktop-applications/kitty.md) | Kitty terminal |
| [desktop-applications/thunar.md](desktop-applications/thunar.md) | Thunar file manager |
| [desktop-applications/yazi.md](desktop-applications/yazi.md) | Yazi terminal file manager |
| [desktop-applications/wlogout.md](desktop-applications/wlogout.md) | Logout menu |
| [desktop-applications/swaync.md](desktop-applications/swaync.md) | Notifications |
| [desktop-applications/cava.md](desktop-applications/cava.md) | Audio visualizer |
| [desktop-applications/btop.md](desktop-applications/btop.md) | btop process viewer |
| [desktop-applications/application-integration.md](desktop-applications/application-integration.md) | How apps integrate |

---

## 13. Packages

| Document | Description |
|----------|-------------|
| [packages/package-overview.md](packages/package-overview.md) | Package strategy |
| [packages/pacman-packages.md](packages/pacman-packages.md) | Official repo packages |
| [packages/aur-packages.md](packages/aur-packages.md) | AUR packages |
| [packages/dependency-analysis.md](packages/dependency-analysis.md) | Dependency graph and gaps |
| [packages/optional-dependencies.md](packages/optional-dependencies.md) | Optional integrations |

---

## 14. Development

| Document | Description |
|----------|-------------|
| [development/developer-guide.md](development/developer-guide.md) | Getting started as a contributor |
| [development/project-conventions.md](development/project-conventions.md) | Naming and layout conventions |
| [development/shell-scripting.md](development/shell-scripting.md) | Shell script standards |
| [development/lua-development.md](development/lua-development.md) | Hyprland Lua patterns |
| [development/python-development.md](development/python-development.md) | Wallfliper Python notes |
| [development/qml-development.md](development/qml-development.md) | QML for qylock / Wallfliper |
| [development/styling-development.md](development/styling-development.md) | SCSS / CSS / Rasi |
| [development/adding-a-new-script.md](development/adding-a-new-script.md) | Adding scripts |
| [development/adding-a-new-widget.md](development/adding-a-new-widget.md) | Adding Eww widgets |
| [development/adding-a-waybar-layout.md](development/adding-a-waybar-layout.md) | Waybar layouts |
| [development/adding-a-rofi-theme.md](development/adding-a-rofi-theme.md) | Rofi themes |
| [development/adding-a-lockscreen-theme.md](development/adding-a-lockscreen-theme.md) | Lockscreen themes |
| [development/modifying-the-installer.md](development/modifying-the-installer.md) | Installer changes |
| [development/contribution-guide.md](development/contribution-guide.md) | Contribution workflow |

---

## 15. Troubleshooting

| Document | Description |
|----------|-------------|
| [troubleshooting/common-problems.md](troubleshooting/common-problems.md) | Frequent issues |
| [troubleshooting/installation-failures.md](troubleshooting/installation-failures.md) | Installer failures |
| [troubleshooting/hyprland-issues.md](troubleshooting/hyprland-issues.md) | Compositor issues |
| [troubleshooting/display-issues.md](troubleshooting/display-issues.md) | Monitors and scaling |
| [troubleshooting/wallpaper-issues.md](troubleshooting/wallpaper-issues.md) | Wallpaper problems |
| [troubleshooting/matugen-issues.md](troubleshooting/matugen-issues.md) | Color generation |
| [troubleshooting/eww-issues.md](troubleshooting/eww-issues.md) | Widget problems |
| [troubleshooting/waybar-issues.md](troubleshooting/waybar-issues.md) | Bar problems |
| [troubleshooting/audio-issues.md](troubleshooting/audio-issues.md) | Audio and PipeWire |
| [troubleshooting/sddm-issues.md](troubleshooting/sddm-issues.md) | Display manager |
| [troubleshooting/python-issues.md](troubleshooting/python-issues.md) | Wallfliper / Python |
| [troubleshooting/recovery-procedures.md](troubleshooting/recovery-procedures.md) | Recovery steps |

---

## 16. Audits

| Document | Description |
|----------|-------------|
| [audits/code-quality-audit.md](audits/code-quality-audit.md) | Code quality findings |
| [audits/installer-audit.md](audits/installer-audit.md) | Installer review |
| [audits/dependency-audit.md](audits/dependency-audit.md) | Package and dependency audit |
| [audits/configuration-audit.md](audits/configuration-audit.md) | Configuration consistency |
| [audits/compatibility-audit.md](audits/compatibility-audit.md) | Compatibility notes |
| [audits/security-and-privilege-audit.md](audits/security-and-privilege-audit.md) | Privilege and security |
| [audits/bugs-and-inconsistencies.md](audits/bugs-and-inconsistencies.md) | Confirmed and suspected bugs |
| [audits/recommendations.md](audits/recommendations.md) | Recommended fixes and improvements |

---

## 17. Appendices

| Document | Description |
|----------|-------------|
| [appendices/glossary.md](appendices/glossary.md) | Terminology |
| [appendices/commands-reference.md](appendices/commands-reference.md) | Command cheat sheet |
| [appendices/environment-variables.md](appendices/environment-variables.md) | Environment variables |
| [appendices/configuration-reference.md](appendices/configuration-reference.md) | Key configuration paths |
| [appendices/file-extension-reference.md](appendices/file-extension-reference.md) | File type reference |
| [appendices/architecture-diagrams.md](appendices/architecture-diagrams.md) | Mermaid diagrams |
| [appendices/references.md](appendices/references.md) | External references |

---

## Validation Report

See the validation section at the end of the documentation generation process and in `FILE_COVERAGE_MATRIX.md` / audit reports.
