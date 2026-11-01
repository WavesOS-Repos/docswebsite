# Complete Feature Catalog — WavesHyprland (WavesOS)

**Project:** WavesHyprland  
**Version:** 0.1.0  
**Branch:** main (WavesOS current)  

---

Every product feature of the current WavesHyprland stack (the Hyprland desktop layer for WavesOS) is listed below with its implementing files.

## 1. Installer and deployment

| Feature | Implementation |
|---------|----------------|
| Interactive install menu | `install.sh` `menu()` |
| Full non-interactive install | `install.sh --all` / `full_install()` |
| Per-stage flags | `--yay --packages --backup --configs --wallfliper --wallpapers --themes --sddm --post` |
| Quiet logging | `WAVES_QUIET` + `scripts/common.sh` |
| Sudo keep-alive | `sudo_keep_alive` in `install.sh` |
| Arch requirement check | `require_arch` in `common.sh` |
| yay bootstrap | `scripts/install_yay.sh` |
| Official package install | `scripts/install_packages.sh` + `packages/pacman.txt` |
| AUR package install | `scripts/install_packages.sh` + `packages/aur.txt` |
| Config backup | `scripts/backup_configs.sh` → `~/.config/WavesHyprland-backup-*` |
| Config deploy | `scripts/deploy_configs.sh` rsync `configs/` → `~/.config/` |
| Wallfliper deploy | `scripts/deploy_wallfliper.sh` |
| Wallpaper collection | `scripts/install_wallpapers.sh` → WavesWallpapers git |
| Theme pack install | `scripts/install_themes.sh` |
| SDDM + qylock deploy | `scripts/install_sddm_qylock.sh` |
| Post-setup seeds | `scripts/post_setup.sh` (chmod, matugen-colors, kitty colors) |
| Reboot reminder | banner at end of full install |

## 2. Hyprland compositor configuration

| Feature | Implementation |
|---------|----------------|
| Lua entry point | `configs/hypr/hyprland.lua` |
| Default programs | `configs/hypr/configs/programs.lua` |
| Environment variables | `configs/hypr/configs/environment.lua` |
| Dynamic + fallback colors | `configs/hypr/configs/colors.lua` + `matugen-colors.lua` |
| Gaps, borders, layout | `configs/hypr/configs/general.lua` |
| Rounding, blur, shadows | `configs/hypr/configs/decorations.lua` |
| Animations | `configs/hypr/configs/animations.lua` |
| Keyboard / mouse / touchpad | `configs/hypr/configs/input.lua` |
| Keybindings | `configs/hypr/configs/keybinds.lua` |
| Window rules | `configs/hypr/configs/windowrules.lua` |
| Monitor definitions | `configs/hypr/configs/monitors.lua` |
| Autostart | `configs/hypr/configs/autostart.lua` |
| Plugin loading | `configs/hypr/configs/plugins.lua` |
| Plugin catalog | `configs/hypr/plugins/catalog.txt` |
| Session lock config | `configs/hypr/hyprlock.conf` |
| Lockscreen variants | `configs/hypr/lockscreens/` |
| UI icons for scripts | `configs/hypr/icons/` |
| Sound assets | `configs/hypr/sounds/` |
| Keybind reference file | `configs/hypr/.keybinds` |

## 3. Keybinding-driven features (scripts)

| Feature | Script |
|---------|--------|
| Weather helper | `configs/hypr/scripts/Weather.sh` |
| User-related helper | `configs/hypr/scripts/add_user.sh` |
| Application launcher helpers | `configs/hypr/scripts/apps.sh` |
| User autostart editor | `configs/hypr/scripts/autostart-editor.sh` |
| Browser helpers | `configs/hypr/scripts/browser.sh` |
| Cava visualizer | `configs/hypr/scripts/cava.sh` |
| Clipboard history (cliphist + Rofi) | `configs/hypr/scripts/cliphist.sh` |
| Color picker (hyprpicker) | `configs/hypr/scripts/colorpicker.sh` |
| Set/query default browser | `configs/hypr/scripts/default_browser.sh` |
| Set/query default editor | `configs/hypr/scripts/default_editor.sh` |
| Edit dotfiles menu | `configs/hypr/scripts/edit-dotfiles.sh` |
| Eww process watchdog | `configs/hypr/scripts/eww-watchdog.sh` |
| Eww widget control | `configs/hypr/scripts/eww-widget.sh` |
| Plugin manager | `configs/hypr/scripts/hypr-plugins.sh` |
| Hypr config helpers | `configs/hypr/scripts/hyprconf.sh` |
| Lockscreen music integration | `configs/hypr/scripts/hyprlock-music.sh` |
| Lock session | `configs/hypr/scripts/hyprlock.sh` |
| Keybind editor | `configs/hypr/scripts/keybind-editor.sh` |
| Keybind help / listing | `configs/hypr/scripts/keybinds.sh` |
| Matugen from wallpaper path | `configs/hypr/scripts/matugen-from-wall.sh` |
| Main Rofi/menu entry | `configs/hypr/scripts/menu.sh` |
| Monitor helper | `configs/hypr/scripts/monitor.sh` |
| Night light / hyprsunset | `configs/hypr/scripts/nightlight.sh` |
| Notifications | `configs/hypr/scripts/notification.sh` |
| Open default browser | `configs/hypr/scripts/open-default-browser.sh` |
| Open default editor | `configs/hypr/scripts/open-default-editor.sh` |
| Polkit agent | `configs/hypr/scripts/polkit.sh` |
| Power / session actions | `configs/hypr/scripts/power.sh` |
| Emoji picker | `configs/hypr/scripts/rofi-emoji.sh` |
| Rofi theme selection | `configs/hypr/scripts/rofi_theme.sh` |
| Screenshot pipeline | `configs/hypr/scripts/screenshot.sh` |
| Settings editor | `configs/hypr/scripts/settings.sh` |
| Startup helpers | `configs/hypr/scripts/startup.sh` |
| System info | `configs/hypr/scripts/system.sh` |
| System update helper | `configs/hypr/scripts/systemupdate.sh` |
| Theme switching | `configs/hypr/scripts/theme-switch.sh` |
| Toggle floating windows | `configs/hypr/scripts/toggle-all-float.sh` |
| Uptime display | `configs/hypr/scripts/uptime.sh` |
| Volume control UI/logic | `configs/hypr/scripts/volumecontrol.sh` |
| Wallpaper cache helper | `configs/hypr/scripts/wallcache.sh` |
| Switch Waybar layout | `configs/hypr/scripts/waybar-layout.sh` |
| Toggle/reload Waybar | `configs/hypr/scripts/waybar-reload.sh` |
| Logout menu launcher | `configs/hypr/scripts/wlogout.sh` |
| Screen zoom | `configs/hypr/scripts/zoom.sh` |

## 4. Dynamic theming (Matugen)

| Feature | Implementation |
|---------|----------------|
| Matugen config | `configs/matugen/config.toml` |
| Hyprland color template | `configs/matugen/templates/hyprland-colors.lua` |
| Waybar color template | `configs/matugen/templates/waybar-colors.css` |
| Rofi color template | `configs/matugen/templates/rofi.rasi` |
| Kitty color template | `configs/matugen/templates/kitty.conf` |
| Eww SCSS colors | `configs/matugen/templates/eww-colors.scss` |
| Eww CSS colors | `configs/matugen/templates/eww-colors.css` |
| Wallpaper → colors hook | `configs/hypr/scripts/matugen-from-wall.sh` + Wallfliper `color_hook` |
| Fallback palette seed | `scripts/post_setup.sh` / `colors.lua` fallback |

## 5. Wallfliper wallpaper manager

| Feature | Implementation |
|---------|----------------|
| GUI entry / CLI | `apps/wallfliper/main.py` |
| Dependency check | `main.py --check` |
| Restore last wallpaper | `main.py --restore` (autostart) |
| Library scanning | `core/library.py` |
| State | `core/state.py` |
| Color extraction | `core/colors.py` |
| Thumbnails | `core/thumbnails.py` |
| Previews | `core/previews.py` |
| Video first frame | `core/firstframe.py` |
| Seamless transitions | `core/seamless.py` |
| Cache GC | `core/cachegc.py` |
| Single instance | `core/single_instance.py` |
| Integrations / hooks | `core/integrations.py` |
| Dependency probes | `core/deps.py` |
| Portal helpers | `core/portal.py` |
| Image/video backends | `core/backends/` |
| Qt bridge | `ui/bridge.py` |
| Model | `ui/model.py` |
| Shaders | `ui/shaders.py` |
| Main QML UI | `ui/qml/Main.qml` |
| Settings QML | `ui/qml/Settings.qml` |
| Theme QML | `ui/qml/Theme.qml` |
| Folder input | `ui/qml/FolderInput.qml` |
| Honeycomb layout | `ui/qml/Honeycomb.qml` |
| Transition surface | `ui/qml/TransitionSurface.qml` |
| Config | `config.json` (`color_hook`) |
| Packaging metadata | `pyproject.toml`, `requirements.txt` |
| Design notes | `DESIGN.md` |
| Transitions demo tool | `tools/transitions_demo.py` |
| Image backend runtime | swww / awww |
| Video backend runtime | mpvpaper |

## 6. Waybar status bar

| Feature | Implementation |
|---------|----------------|
| Layout configs | `configs/waybar/configs/*` (bar-left, colorful-bottom, dual-tone-top, fancy-top, catppuccin-top, full-top, border-top, rounded-top, reflection-top, skew-left) |
| Stylesheets | `configs/waybar/style/*.css` |
| Module sets | `configs/waybar/modules/modules-*.jsonc` |
| Wall theme CSS | `configs/waybar/wall-theme.css` |
| Layout switcher | `configs/hypr/scripts/waybar-layout.sh` |
| Reload / toggle | `configs/hypr/scripts/waybar-reload.sh` |

## 7. Eww widgets

| Feature | Implementation |
|---------|----------------|
| Widget definitions | `configs/eww/eww.yuck` (Antares, Fuyue, Rock, …) |
| Styling | `configs/eww/eww.scss`, `colors.scss` |
| Active widget state | `configs/eww/active-widget` |
| CPU | `configs/eww/scripts/cpu.sh` |
| Memory | `configs/eww/scripts/mem.sh` |
| Home disk | `configs/eww/scripts/home.sh` |
| Disk (ds) | `configs/eww/scripts/ds.sh` |
| Time words | `configs/eww/scripts/time-words.sh` |
| Weather fetch | `configs/eww/scripts/weather-fetch.sh` |
| Fuyue weather | `configs/eww/scripts/fuyue-weather.sh` |
| Weather humidity/wind/icon/line | `weather-hum.sh`, `weather-wind.sh`, `weather-icon.sh`, `weather-line.sh` |
| Day SVG generator | `configs/eww/scripts/fuyue-day-svg.sh` |
| SVG asset | `configs/eww/assets/fuyue-day.svg` |
| Watchdog | `configs/hypr/scripts/eww-watchdog.sh` |
| Widget control | `configs/hypr/scripts/eww-widget.sh` |

## 8. Rofi menus

| Feature | Implementation |
|---------|----------------|
| Menu styles | `configs/rofi/menu/style-1.rasi` … `style-8.rasi`, `menu.rasi` |
| Color snippet | `configs/rofi/colors/colors-rofi.rasi` |
| Clipboard menu | `configs/rofi/themes/rofi-clipboard.rasi` |
| Window switcher | `configs/rofi/themes/rofi-window.rasi` |
| Theme selector | `configs/rofi/themes/rofi-select_theme.rasi` |
| Screenshots menu | `configs/rofi/themes/rofi-screenshots.rasi` |
| Power theme | `configs/rofi/themes/rofi-powertheme.rasi` |
| Keybinds help | `configs/rofi/themes/rofi-keybinds.rasi` |
| Wallpaper menus | `rofi-wall.rasi`, `rofi-wall-2.rasi` |
| Emoji | `configs/rofi/themes/rofi-emoji.rasi` + `rofi-emoji.sh` |
| Edit dots | `configs/rofi/themes/rofi-edit-dots.rasi` |
| Hyprlock theme picker | `configs/rofi/themes/rofi-hyprlock-theme.rasi` |
| Waybar picker | `configs/rofi/themes/rofi-waybar.rasi` |

## 9. Login and lockscreen

| Feature | Implementation |
|---------|----------------|
| Hyprlock config | `configs/hypr/hyprlock.conf` |
| Lock helpers | `hyprlock.sh`, `hyprlock-music.sh` |
| Lockscreen variants dir | `configs/hypr/lockscreens/` |
| qylock deploy + helper | `apps/qylock/`, `sddm.sh` |
| Default SDDM theme | Clockwork orbital → `/usr/share/sddm/themes/orbital` |
| SDDM conf snippet | `/etc/sddm.conf.d/10-waveshyprland.conf` |
| Theme packs | Genshin, Minecraft, Nier Automata, Clockwork (orbital/neo-orbital/tape), pixel-*, material-you, last-of-us, osu, osumania, terraria, windows_7, winter, wuwa, star-rail, ninesols, nothing, field, forest, enfield, sword, dog-samurai, girl-*, man-bicycle, women-umbrella, ninja_gaiden, R1999_*, and more under `apps/qylock/themes/` |

## 10. Desktop applications and configs

| Feature | Implementation |
|---------|----------------|
| Kitty terminal | `configs/kitty/` + Matugen colors |
| Thunar | `configs/Thunar/` + Relax GTK |
| GTK 3/4 | `configs/gtk-3.0/`, `configs/gtk-4.0/` |
| Qt6ct | `configs/qt6ct/` |
| nwg-look | `configs/nwg-look/` |
| xsettingsd | `configs/xsettingsd/xsettingsd.conf` |
| fontconfig | `configs/fontconfig/fonts.conf` |
| wlogout | `configs/wlogout/` (dark/light CSS, launch script) |
| cava | `configs/cava/` |
| btop | `configs/btop/btop.conf` |
| MIME defaults | `configs/mimeapps.list` |
| Yazi | package `yazi` (AUR) |
| swaync | package `swaync` (AUR) |

## 11. Packages installed by the stack

### Official (pacman.txt)
- `base-devel`
- `brightnessctl`
- `cliphist`
- `curl`
- `exo`
- `fzf`
- `git`
- `grim`
- `gst-plugins-bad`
- `gst-plugins-base`
- `gst-plugins-good`
- `gst-plugins-ugly`
- `gum`
- `gvfs`
- `gvfs-mtp`
- `hyprland`
- `hyprlock`
- `imagemagick`
- `jq`
- `kitty`
- `kvantum`
- `libnotify`
- `nwg-look`
- `pacman-contrib`
- `pamixer`
- `pipewire`
- `playerctl`
- `polkit-gnome`
- `python`
- `python-pip`
- `python-pipx`
- `qt6-5compat`
- `qt6-declarative`
- `qt6-multimedia`
- `qt6-multimedia-ffmpeg`
- `qt6-svg`
- `qt6ct`
- `rofi-wayland`
- `sddm`
- `slurp`
- `swww`
- `thunar`
- `thunar-archive-plugin`
- `thunar-volman`
- `ttf-jetbrains-mono-nerd`
- `tumbler`
- `unzip`
- `waybar`
- `wireplumber`
- `wl-clipboard`
- `xdg-desktop-portal-gtk`
- `xdg-desktop-portal-hyprland`
- `xdg-user-dirs`
- `xdg-utils`
- `rsync`
- `pyside6`
- `layer-shell-qt`
- `hyprpm`
- `awww`
- `ffmpeg`

### AUR (aur.txt)
- `wlogout`
- `matugen-bin`
- `hyprpicker`
- `grimblast-git`
- `satty`
- `swaync`
- `cava`
- `yazi`
- `hyprsunset`
- `mpvpaper`
- `eww`

## 12. WavesOS product framing

WavesHyprland is the Hyprland desktop configuration layer for **WavesOS** (Arch-based distribution concept with Ultra, AI, and Hacking variants). This repository provides the rice, installer, theming, and desktop tooling used when WavesOS targets a Hyprland session. It does not itself build ISO images or partition disks.

