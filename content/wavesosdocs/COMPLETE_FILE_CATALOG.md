# Complete File Catalog — WavesHyprland (WavesOS Hyprland Stack)

**Project:** WavesHyprland  
**Version:** 0.1.0  
**Branch:** main (WavesOS current)  

---

This catalog lists every source, configuration, script, template, and theme definition file in the current WavesHyprland repository used by WavesOS. Binary image/font/video assets are summarized at directory level.

Format: path | extension | size | purpose

## Repository root

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `install.sh` | .sh | 3865 B | Main installer entry point |
| `VERSION` | none | 6 B | Project file |
| `README.md` | .md | 1139 B | Documentation or notes |

## packages/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `packages/aur.txt` | .txt | 92 B | Package manifest |
| `packages/pacman.txt` | .txt | 642 B | Package manifest |

## scripts/ (installer stages)

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `scripts/backup_configs.sh` | .sh | 844 B | Installer stage script |
| `scripts/common.sh` | .sh | 2164 B | Installer stage script |
| `scripts/deploy_configs.sh` | .sh | 2160 B | Installer stage script |
| `scripts/deploy_wallfliper.sh` | .sh | 567 B | Installer stage script |
| `scripts/install_packages.sh` | .sh | 1214 B | Installer stage script |
| `scripts/install_sddm_qylock.sh` | .sh | 1896 B | Installer stage script |
| `scripts/install_themes.sh` | .sh | 3647 B | Installer stage script |
| `scripts/install_wallpapers.sh` | .sh | 955 B | Installer stage script |
| `scripts/install_yay.sh` | .sh | 1265 B | Installer stage script |
| `scripts/post_setup.sh` | .sh | 1946 B | Installer stage script |

## configs/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `configs/mimeapps.list` | .list | 445 B | Default MIME associations |

### configs/Thunar/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `configs/Thunar/accels.scm` | .scm | 8971 B | Thunar file manager config |
| `configs/Thunar/uca.xml` | .xml | 419 B | Thunar file manager config |

### configs/btop/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `configs/btop/btop.conf` | .conf | 10918 B | btop process monitor config |
| `configs/btop/themes/skwd-managed.theme` | .theme | 1352 B | btop process monitor config |

### configs/cava/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `configs/cava/shaders/bar_spectrum.frag` | .frag | 2524 B | Cava audio visualizer config |
| `configs/cava/shaders/eye_of_phi.frag` | .frag | 4459 B | Cava audio visualizer config |
| `configs/cava/shaders/northern_lights.frag` | .frag | 1009 B | Cava audio visualizer config |
| `configs/cava/shaders/orion_circle.frag` | .frag | 3775 B | Cava audio visualizer config |
| `configs/cava/shaders/orion_circle_rotate.frag` | .frag | 4308 B | Cava audio visualizer config |
| `configs/cava/shaders/orion_saturn_core.frag` | .frag | 4570 B | Cava audio visualizer config |
| `configs/cava/shaders/orion_saturn_subring.frag` | .frag | 4655 B | Cava audio visualizer config |
| `configs/cava/shaders/pass_through.vert` | .vert | 350 B | Cava audio visualizer config |
| `configs/cava/shaders/spectrogram.frag` | .frag | 1665 B | Cava audio visualizer config |
| `configs/cava/shaders/winamp_line_style_spectrum.frag` | .frag | 2878 B | Cava audio visualizer config |
| `configs/cava/themes/solarized_dark` | none | 323 B | Cava audio visualizer config |
| `configs/cava/themes/tricolor` | none | 351 B | Cava audio visualizer config |

### configs/eww/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `configs/eww/active-widget` | none | 5 B | Project file |
| `configs/eww/colors.scss` | .scss | 143 B | Eww styling |
| `configs/eww/eww.scss` | .scss | 2969 B | Eww styling |
| `configs/eww/eww.yuck` | .yuck | 5439 B | Eww widget definitions |
| `configs/eww/scripts/cpu.sh` | .sh | 107 B | Eww data script |
| `configs/eww/scripts/ds.sh` | .sh | 54 B | Eww data script |
| `configs/eww/scripts/fuyue-day-svg.sh` | .sh | 1503 B | Eww data script |
| `configs/eww/scripts/fuyue-weather.sh` | .sh | 805 B | Eww data script |
| `configs/eww/scripts/home.sh` | .sh | 68 B | Eww data script |
| `configs/eww/scripts/mem.sh` | .sh | 57 B | Eww data script |
| `configs/eww/scripts/time-words.sh` | .sh | 772 B | Eww data script |
| `configs/eww/scripts/weather-fetch.sh` | .sh | 246 B | Eww data script |
| `configs/eww/scripts/weather-hum.sh` | .sh | 117 B | Eww data script |
| `configs/eww/scripts/weather-icon.sh` | .sh | 420 B | Eww data script |
| `configs/eww/scripts/weather-line.sh` | .sh | 584 B | Eww data script |
| `configs/eww/scripts/weather-wind.sh` | .sh | 741 B | Eww data script |
| *(binary assets under this tree)* | various | — | 1 image/font/sound asset files |

### configs/fontconfig/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `configs/fontconfig/fonts.conf` | .conf | 566 B | Font configuration |

### configs/gtk-3.0/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `configs/gtk-3.0/bookmarks` | none | 142 B | GTK theme or settings |
| `configs/gtk-3.0/settings.ini` | .ini | 541 B | GTK theme or settings |

### configs/gtk-4.0/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `configs/gtk-4.0/settings.ini` | .ini | 272 B | GTK theme or settings |

### configs/hypr/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `configs/hypr/.keybinds` | none | 2829 B | Project file |
| `configs/hypr/configs/animations.lua` | .lua | 2333 B | Hyprland Lua module |
| `configs/hypr/configs/autostart.lua` | .lua | 869 B | Hyprland Lua module |
| `configs/hypr/configs/colors.lua` | .lua | 595 B | Hyprland Lua module |
| `configs/hypr/configs/decorations.lua` | .lua | 485 B | Hyprland Lua module |
| `configs/hypr/configs/environment.lua` | .lua | 213 B | Hyprland Lua module |
| `configs/hypr/configs/general.lua` | .lua | 726 B | Hyprland Lua module |
| `configs/hypr/configs/input.lua` | .lua | 387 B | Hyprland Lua module |
| `configs/hypr/configs/keybinds.lua` | .lua | 8765 B | Hyprland Lua module |
| `configs/hypr/configs/monitors.lua` | .lua | 125 B | Hyprland Lua module |
| `configs/hypr/configs/plugins.lua` | .lua | 41147 B | Hyprland Lua module |
| `configs/hypr/configs/programs.lua` | .lua | 108 B | Hyprland Lua module |
| `configs/hypr/configs/windowrules.lua` | .lua | 2069 B | Hyprland Lua module |
| `configs/hypr/hyprland.lua` | .lua | 593 B | Hyprland Lua entry |
| `configs/hypr/hyprlock.conf` | .conf | 8728 B | Lockscreen config or script |
| `configs/hypr/lockscreens/hyprlock-1.conf` | .conf | 3237 B | Lockscreen config or script |
| `configs/hypr/lockscreens/hyprlock-10.conf` | .conf | 3422 B | Lockscreen config or script |
| `configs/hypr/lockscreens/hyprlock-11.conf` | .conf | 4764 B | Lockscreen config or script |
| `configs/hypr/lockscreens/hyprlock-12.conf` | .conf | 2890 B | Lockscreen config or script |
| `configs/hypr/lockscreens/hyprlock-13.conf` | .conf | 2695 B | Lockscreen config or script |
| `configs/hypr/lockscreens/hyprlock-14.conf` | .conf | 3807 B | Lockscreen config or script |
| `configs/hypr/lockscreens/hyprlock-15.conf` | .conf | 6256 B | Lockscreen config or script |
| `configs/hypr/lockscreens/hyprlock-2.conf` | .conf | 2943 B | Lockscreen config or script |
| `configs/hypr/lockscreens/hyprlock-3.conf` | .conf | 3174 B | Lockscreen config or script |
| `configs/hypr/lockscreens/hyprlock-4.conf` | .conf | 3821 B | Lockscreen config or script |
| `configs/hypr/lockscreens/hyprlock-5.conf` | .conf | 4386 B | Lockscreen config or script |
| `configs/hypr/lockscreens/hyprlock-6.conf` | .conf | 5193 B | Lockscreen config or script |
| `configs/hypr/lockscreens/hyprlock-7.conf` | .conf | 3880 B | Lockscreen config or script |
| `configs/hypr/lockscreens/hyprlock-8.conf` | .conf | 3827 B | Lockscreen config or script |
| `configs/hypr/lockscreens/hyprlock-9.conf` | .conf | 3269 B | Lockscreen config or script |
| `configs/hypr/lockscreens/hyprlock.conf` | .conf | 8717 B | Lockscreen config or script |
| `configs/hypr/matugen-colors.lua` | .lua | 291 B | Project file |
| `configs/hypr/plugins/catalog.txt` | .txt | 2933 B | Text list or placeholder |
| `configs/hypr/scripts/Weather.sh` | .sh | 2747 B | Hypr helper script |
| `configs/hypr/scripts/add_user.sh` | .sh | 873 B | Hypr helper script |
| `configs/hypr/scripts/apps.sh` | .sh | 584 B | Hypr helper script |
| `configs/hypr/scripts/autostart-editor.sh` | .sh | 6788 B | Hypr helper script |
| `configs/hypr/scripts/browser.sh` | .sh | 2225 B | Hypr helper script |
| `configs/hypr/scripts/cava.sh` | .sh | 536 B | Hypr helper script |
| `configs/hypr/scripts/cliphist.sh` | .sh | 900 B | Hypr helper script |
| `configs/hypr/scripts/colorpicker.sh` | .sh | 524 B | Hypr helper script |
| `configs/hypr/scripts/default_browser.sh` | .sh | 4705 B | Hypr helper script |
| `configs/hypr/scripts/default_editor.sh` | .sh | 1919 B | Hypr helper script |
| `configs/hypr/scripts/edit-dotfiles.sh` | .sh | 1604 B | Hypr helper script |
| `configs/hypr/scripts/eww-watchdog.sh` | .sh | 1248 B | Hypr helper script |
| `configs/hypr/scripts/eww-widget.sh` | .sh | 2190 B | Hypr helper script |
| `configs/hypr/scripts/hypr-plugins.sh` | .sh | 16619 B | Hypr helper script |
| `configs/hypr/scripts/hyprconf.sh` | .sh | 2267 B | Hypr helper script |
| `configs/hypr/scripts/hyprlock-music.sh` | .sh | 10272 B | Hypr helper script |
| `configs/hypr/scripts/hyprlock.sh` | .sh | 660 B | Hypr helper script |
| `configs/hypr/scripts/keybind-editor.sh` | .sh | 16791 B | Hypr helper script |
| `configs/hypr/scripts/keybinds.sh` | .sh | 726 B | Hypr helper script |
| `configs/hypr/scripts/matugen-from-wall.sh` | .sh | 493 B | Hypr helper script |
| `configs/hypr/scripts/menu.sh` | .sh | 131 B | Hypr helper script |
| `configs/hypr/scripts/monitor.sh` | .sh | 2374 B | Hypr helper script |
| `configs/hypr/scripts/music.webp` | .webp | 233972 B | Project file |
| `configs/hypr/scripts/nightlight.sh` | .sh | 1042 B | Hypr helper script |
| `configs/hypr/scripts/notification.sh` | .sh | 790 B | Hypr helper script |
| `configs/hypr/scripts/open-default-browser.sh` | .sh | 1119 B | Hypr helper script |
| `configs/hypr/scripts/open-default-editor.sh` | .sh | 709 B | Hypr helper script |
| `configs/hypr/scripts/polkit.sh` | .sh | 907 B | Hypr helper script |
| `configs/hypr/scripts/power.sh` | .sh | 581 B | Hypr helper script |
| `configs/hypr/scripts/rofi-emoji.sh` | .sh | 82521 B | Hypr helper script |
| `configs/hypr/scripts/rofi_theme.sh` | .sh | 2953 B | Hypr helper script |
| `configs/hypr/scripts/screenshot.sh` | .sh | 1523 B | Hypr helper script |
| `configs/hypr/scripts/settings.sh` | .sh | 11577 B | Hypr helper script |
| `configs/hypr/scripts/startup.sh` | .sh | 1385 B | Hypr helper script |
| `configs/hypr/scripts/system.sh` | .sh | 730 B | Hypr helper script |
| `configs/hypr/scripts/systemupdate.sh` | .sh | 2577 B | Hypr helper script |
| `configs/hypr/scripts/theme-switch.sh` | .sh | 3064 B | Hypr helper script |
| `configs/hypr/scripts/toggle-all-float.sh` | .sh | 232 B | Hypr helper script |
| `configs/hypr/scripts/uptime.sh` | .sh | 362 B | Hypr helper script |
| `configs/hypr/scripts/volumecontrol.sh` | .sh | 3364 B | Hypr helper script |
| `configs/hypr/scripts/wallcache.sh` | .sh | 1593 B | Hypr helper script |
| `configs/hypr/scripts/waybar-layout.sh` | .sh | 1677 B | Hypr helper script |
| `configs/hypr/scripts/waybar-reload.sh` | .sh | 462 B | Hypr helper script |
| `configs/hypr/scripts/wlogout.sh` | .sh | 392 B | Hypr helper script |
| `configs/hypr/scripts/zoom.sh` | .sh | 829 B | Hypr helper script |
| *(binary assets under this tree)* | various | — | 48 image/font/sound asset files |

### configs/kitty/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `configs/kitty/colors-matugen.conf` | .conf | 757 B | Kitty terminal config |
| `configs/kitty/colors.conf` | .conf | 356 B | Kitty terminal config |
| `configs/kitty/kitty.conf` | .conf | 77173 B | Kitty terminal config |
| `configs/kitty/skwd-colors.conf` | .conf | 725 B | Kitty terminal config |

### configs/matugen/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `configs/matugen/config.toml` | .toml | 899 B | Matugen config |
| `configs/matugen/templates/eww-colors.css` | .css | 507 B | Matugen color template |
| `configs/matugen/templates/eww-colors.scss` | .scss | 337 B | Eww styling |
| `configs/matugen/templates/hyprland-colors.lua` | .lua | 485 B | Matugen color template |
| `configs/matugen/templates/kitty.conf` | .conf | 1491 B | Matugen color template |
| `configs/matugen/templates/rofi.rasi` | .rasi | 1342 B | Rofi theme or menu style |
| `configs/matugen/templates/waybar-colors.css` | .css | 3527 B | Matugen color template |

### configs/nwg-look/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `configs/nwg-look/config` | none | 322 B | GTK look-and-feel settings |

### configs/qt6ct/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `configs/qt6ct/qt6ct.conf` | .conf | 904 B | Qt6 configuration |

### configs/qylock/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `configs/qylock/Assets/R1999_1.gif` | .gif | 4272457 B | Project file |
| `configs/qylock/Assets/R1999_2.gif` | .gif | 1765256 B | Project file |
| `configs/qylock/Assets/clockwork.gif` | .gif | 749552 B | Project file |
| `configs/qylock/Assets/dog_samurai.gif` | .gif | 1463420 B | Project file |
| `configs/qylock/Assets/enfield.gif` | .gif | 2353555 B | Project file |
| `configs/qylock/Assets/field.gif` | .gif | 329011 B | Project file |
| `configs/qylock/Assets/forest.gif` | .gif | 2483972 B | Project file |
| `configs/qylock/Assets/genshin.gif` | .gif | 3334417 B | Project file |
| `configs/qylock/Assets/girl_coffee.gif` | .gif | 120481 B | Project file |
| `configs/qylock/Assets/girl_pillow.gif` | .gif | 58676 B | Project file |
| `configs/qylock/Assets/man_bicycle.gif` | .gif | 262143 B | Project file |
| `configs/qylock/Assets/material-you-dark.gif` | .gif | 4201246 B | Project file |
| `configs/qylock/Assets/material-you.gif` | .gif | 213026 B | Project file |
| `configs/qylock/Assets/minecraft.gif` | .gif | 194185 B | Project file |
| `configs/qylock/Assets/nier_automata.gif` | .gif | 366606 B | Project file |
| `configs/qylock/Assets/ninja_gaiden.gif` | .gif | 106879 B | Project file |
| `configs/qylock/Assets/nothing.gif` | .gif | 206636 B | Project file |
| `configs/qylock/Assets/osu.gif` | .gif | 4485150 B | Project file |
| `configs/qylock/Assets/osumania.gif` | .gif | 3324492 B | Project file |
| `configs/qylock/Assets/pixel-cyberpunk.gif` | .gif | 1414167 B | Project file |
| `configs/qylock/Assets/pixel-emerald.gif` | .gif | 5803294 B | Project file |
| `configs/qylock/Assets/pixel-sakura.gif` | .gif | 1034380 B | Project file |
| `configs/qylock/Assets/pixel-waterfall.gif` | .gif | 1685709 B | Project file |
| `configs/qylock/Assets/pixel_coffee.gif` | .gif | 529965 B | Project file |
| `configs/qylock/Assets/pixel_dusk_city.gif` | .gif | 121966 B | Project file |
| `configs/qylock/Assets/pixel_hollowknight.gif` | .gif | 668669 B | Project file |
| `configs/qylock/Assets/pixel_munchlax.gif` | .gif | 166234 B | Project file |
| `configs/qylock/Assets/pixel_night_city.gif` | .gif | 473310 B | Project file |
| `configs/qylock/Assets/pixel_rainyroom.gif` | .gif | 784188 B | Project file |
| `configs/qylock/Assets/pixel_skyscrapers.gif` | .gif | 658253 B | Project file |
| `configs/qylock/Assets/star_rail.gif` | .gif | 4611488 B | Project file |
| `configs/qylock/Assets/sword.gif` | .gif | 3799816 B | Project file |
| `configs/qylock/Assets/terraria.gif` | .gif | 1356690 B | Project file |
| `configs/qylock/Assets/the_last_of_us.gif` | .gif | 1944121 B | Project file |
| `configs/qylock/Assets/title.png` | .png | 421984 B | Project file |
| `configs/qylock/Assets/win7.gif` | .gif | 158583 B | Project file |
| `configs/qylock/Assets/winter.gif` | .gif | 2714735 B | Project file |
| `configs/qylock/Assets/women_umbrella.gif` | .gif | 517681 B | Project file |
| `configs/qylock/Assets/wuwa.gif` | .gif | 3288388 B | Project file |
| `configs/qylock/qt5.sh` | .sh | 2301 B | Shell script |
| `configs/qylock/quickshell-lockscreen/imports/QtGraphicalEffects/BrightnessContrast.qml` | .qml | 63 B | SDDM theme QML |
| `configs/qylock/quickshell-lockscreen/imports/QtGraphicalEffects/Colorize.qml` | .qml | 53 B | SDDM theme QML |
| `configs/qylock/quickshell-lockscreen/imports/QtGraphicalEffects/ConicalGradient.qml` | .qml | 60 B | SDDM theme QML |
| `configs/qylock/quickshell-lockscreen/imports/QtGraphicalEffects/DropShadow.qml` | .qml | 55 B | SDDM theme QML |
| `configs/qylock/quickshell-lockscreen/imports/QtGraphicalEffects/FastBlur.qml` | .qml | 53 B | SDDM theme QML |
| `configs/qylock/quickshell-lockscreen/imports/QtGraphicalEffects/GaussianBlur.qml` | .qml | 57 B | SDDM theme QML |
| `configs/qylock/quickshell-lockscreen/imports/QtGraphicalEffects/LinearGradient.qml` | .qml | 59 B | SDDM theme QML |
| `configs/qylock/quickshell-lockscreen/imports/QtGraphicalEffects/OpacityMask.qml` | .qml | 56 B | SDDM theme QML |
| `configs/qylock/quickshell-lockscreen/imports/QtGraphicalEffects/RadialGradient.qml` | .qml | 59 B | SDDM theme QML |
| `configs/qylock/quickshell-lockscreen/imports/QtGraphicalEffects/qmldir` | none | 1668 B | Project file |
| `configs/qylock/quickshell-lockscreen/imports/QtMultimedia/MediaPlayer.qml` | .qml | 150 B | SDDM theme QML |
| `configs/qylock/quickshell-lockscreen/imports/QtMultimedia/MediaPlayerShim.qml` | .qml | 74 B | SDDM theme QML |
| `configs/qylock/quickshell-lockscreen/imports/QtMultimedia/Video.qml` | .qml | 2041 B | SDDM theme QML |
| `configs/qylock/quickshell-lockscreen/imports/QtMultimedia/VideoOutput.qml` | .qml | 235 B | SDDM theme QML |
| `configs/qylock/quickshell-lockscreen/imports/QtMultimedia/VideoOutputShim.qml` | .qml | 73 B | SDDM theme QML |
| `configs/qylock/quickshell-lockscreen/imports/QtMultimedia/VideoShim.qml` | .qml | 1763 B | SDDM theme QML |
| `configs/qylock/quickshell-lockscreen/imports/QtMultimedia/qmldir` | none | 107 B | Project file |
| `configs/qylock/quickshell-lockscreen/imports/SddmComponents/LayoutMirroring.qml` | .qml | 99 B | SDDM theme QML |
| `configs/qylock/quickshell-lockscreen/imports/SddmComponents/TextConstants.qml` | .qml | 257 B | SDDM theme QML |
| `configs/qylock/quickshell-lockscreen/imports/SddmComponents/qmldir` | none | 94 B | Project file |
| `configs/qylock/quickshell-lockscreen/lock.sh` | .sh | 1054 B | Shell script |
| `configs/qylock/quickshell-lockscreen/lock_shell.qml` | .qml | 4447 B | SDDM theme QML |
| `configs/qylock/quickshell-lockscreen/shim/SddmShim.qml` | .qml | 6687 B | SDDM theme QML |
| `configs/qylock/quickshell.sh` | .sh | 9338 B | Shell script |
| `configs/qylock/sddm.sh` | .sh | 14598 B | Shell script |
| `configs/qylock/theme` | none | 5 B | Project file |
| `configs/qylock/themes/Genshin/GenshinButton.qml` | .qml | 901 B | SDDM theme QML |
| `configs/qylock/themes/Genshin/GenshinFrame.qml` | .qml | 3448 B | SDDM theme QML |
| `configs/qylock/themes/Genshin/Main.qml` | .qml | 26401 B | SDDM theme QML |
| `configs/qylock/themes/Genshin/dawn.mp4` | .mp4 | 13783996 B | Project file |
| `configs/qylock/themes/Genshin/day.mp4` | .mp4 | 11865025 B | Project file |
| `configs/qylock/themes/Genshin/dusk.mp4` | .mp4 | 12909349 B | Project file |
| `configs/qylock/themes/Genshin/font/.gitkeep` | none | 0 B | Project file |
| `configs/qylock/themes/Genshin/logo.png` | .png | 72226 B | Project file |
| `configs/qylock/themes/Genshin/metadata.desktop` | .desktop | 152 B | Project file |
| `configs/qylock/themes/Genshin/night.mp4` | .mp4 | 13188947 B | Project file |
| `configs/qylock/themes/Genshin/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `configs/qylock/themes/R1999_1/Main.qml` | .qml | 18501 B | SDDM theme QML |
| `configs/qylock/themes/R1999_1/bg.mp4` | .mp4 | 21155204 B | Project file |
| `configs/qylock/themes/R1999_1/metadata.desktop` | .desktop | 157 B | Project file |
| `configs/qylock/themes/R1999_1/theme.conf` | .conf | 10 B | SDDM theme metadata |
| `configs/qylock/themes/R1999_2/Main.qml` | .qml | 17577 B | SDDM theme QML |
| `configs/qylock/themes/R1999_2/bg.mp4` | .mp4 | 6323204 B | Project file |
| `configs/qylock/themes/R1999_2/logo.png` | .png | 61345 B | Project file |
| `configs/qylock/themes/R1999_2/metadata.desktop` | .desktop | 157 B | Project file |
| `configs/qylock/themes/clockwork/neo-orbital/Main.qml` | .qml | 28427 B | SDDM theme QML |
| `configs/qylock/themes/clockwork/neo-orbital/bg.png` | .png | 2316938 B | Project file |
| `configs/qylock/themes/clockwork/neo-orbital/metadata.desktop` | .desktop | 158 B | Project file |
| `configs/qylock/themes/clockwork/neo-orbital/theme.conf` | .conf | 80 B | SDDM theme metadata |
| `configs/qylock/themes/clockwork/orbital/Main.qml` | .qml | 22393 B | SDDM theme QML |
| `configs/qylock/themes/clockwork/orbital/metadata.desktop` | .desktop | 153 B | Project file |
| `configs/qylock/themes/clockwork/orbital/theme.conf` | .conf | 81 B | SDDM theme metadata |
| `configs/qylock/themes/clockwork/tape/Main.qml` | .qml | 24355 B | SDDM theme QML |
| `configs/qylock/themes/clockwork/tape/metadata.desktop` | .desktop | 155 B | Project file |
| `configs/qylock/themes/clockwork/tape/theme.conf` | .conf | 62 B | SDDM theme metadata |
| `configs/qylock/themes/dog-samurai/Main.qml` | .qml | 28606 B | SDDM theme QML |
| `configs/qylock/themes/dog-samurai/bg.mp4` | .mp4 | 15814471 B | Project file |
| `configs/qylock/themes/dog-samurai/metadata.desktop` | .desktop | 136 B | Project file |
| `configs/qylock/themes/dog-samurai/theme.conf` | .conf | 154 B | SDDM theme metadata |
| `configs/qylock/themes/enfield/BackgroundVideo.qml` | .qml | 436 B | SDDM theme QML |
| `configs/qylock/themes/enfield/Main.qml` | .qml | 23045 B | SDDM theme QML |
| `configs/qylock/themes/enfield/bg.mp4` | .mp4 | 20439635 B | Project file |
| `configs/qylock/themes/enfield/font/.gitkeep` | none | 0 B | Project file |
| `configs/qylock/themes/enfield/metadata.desktop` | .desktop | 152 B | Project file |
| `configs/qylock/themes/enfield/theme.conf` | .conf | 79 B | SDDM theme metadata |
| `configs/qylock/themes/field/Main.qml` | .qml | 9540 B | SDDM theme QML |
| `configs/qylock/themes/field/bg.png` | .png | 1784920 B | Project file |
| `configs/qylock/themes/field/metadata.desktop` | .desktop | 135 B | Project file |
| `configs/qylock/themes/field/theme.conf` | .conf | 43 B | SDDM theme metadata |
| `configs/qylock/themes/forest/Main.qml` | .qml | 23026 B | SDDM theme QML |
| `configs/qylock/themes/forest/bg.mp4` | .mp4 | 53320657 B | Project file |
| `configs/qylock/themes/forest/metadata.desktop` | .desktop | 150 B | Project file |
| `configs/qylock/themes/forest/theme.conf` | .conf | 85 B | SDDM theme metadata |
| `configs/qylock/themes/girl-coffee/Main.qml` | .qml | 23825 B | SDDM theme QML |
| `configs/qylock/themes/girl-coffee/bg.png` | .png | 1053098 B | Project file |
| `configs/qylock/themes/girl-coffee/metadata.desktop` | .desktop | 161 B | Project file |
| `configs/qylock/themes/girl-coffee/theme.conf` | .conf | 77 B | SDDM theme metadata |
| `configs/qylock/themes/girl-pillow/Main.qml` | .qml | 9237 B | SDDM theme QML |
| `configs/qylock/themes/girl-pillow/bg.png` | .png | 485309 B | Project file |
| `configs/qylock/themes/girl-pillow/metadata.desktop` | .desktop | 147 B | Project file |
| `configs/qylock/themes/girl-pillow/theme.conf` | .conf | 54 B | SDDM theme metadata |
| `configs/qylock/themes/last-of-us/Main.qml` | .qml | 24164 B | SDDM theme QML |
| `configs/qylock/themes/last-of-us/bg.mp4` | .mp4 | 78248674 B | Project file |
| `configs/qylock/themes/last-of-us/metadata.desktop` | .desktop | 146 B | Project file |
| `configs/qylock/themes/last-of-us/theme.conf` | .conf | 163 B | SDDM theme metadata |
| `configs/qylock/themes/man-bicycle/Main.qml` | .qml | 9391 B | SDDM theme QML |
| `configs/qylock/themes/man-bicycle/bg.png` | .png | 5005352 B | Project file |
| `configs/qylock/themes/man-bicycle/metadata.desktop` | .desktop | 147 B | Project file |
| `configs/qylock/themes/man-bicycle/theme.conf` | .conf | 54 B | SDDM theme metadata |
| `configs/qylock/themes/material-you/Main.qml` | .qml | 33495 B | SDDM theme QML |
| `configs/qylock/themes/material-you/bg.png` | .png | 735445 B | Project file |
| `configs/qylock/themes/material-you/metadata.desktop` | .desktop | 233 B | Project file |
| `configs/qylock/themes/material-you/theme.conf` | .conf | 52 B | SDDM theme metadata |
| `configs/qylock/themes/material-you-dark/Main.qml` | .qml | 33515 B | SDDM theme QML |
| `configs/qylock/themes/material-you-dark/bg.png` | .png | 354787 B | Project file |
| `configs/qylock/themes/material-you-dark/metadata.desktop` | .desktop | 246 B | Project file |
| `configs/qylock/themes/material-you-dark/theme.conf` | .conf | 52 B | SDDM theme metadata |
| `configs/qylock/themes/minecraft/Main.qml` | .qml | 16907 B | SDDM theme QML |
| `configs/qylock/themes/minecraft/background.png` | .png | 99483 B | Project file |
| `configs/qylock/themes/minecraft/font/.gitkeep` | none | 0 B | Project file |
| `configs/qylock/themes/minecraft/metadata.desktop` | .desktop | 156 B | Project file |
| `configs/qylock/themes/minecraft/theme.conf` | .conf | 73 B | SDDM theme metadata |
| `configs/qylock/themes/minecraft/title.png` | .png | 119404 B | Project file |
| `configs/qylock/themes/nier-automata/Main.qml` | .qml | 55726 B | SDDM theme QML |
| `configs/qylock/themes/nier-automata/NierButton.qml` | .qml | 1652 B | SDDM theme QML |
| `configs/qylock/themes/nier-automata/bg.png` | .png | 161561 B | Project file |
| `configs/qylock/themes/nier-automata/font/.gitkeep` | none | 0 B | Project file |
| `configs/qylock/themes/nier-automata/metadata.desktop` | .desktop | 164 B | Project file |
| `configs/qylock/themes/nier-automata/theme.conf` | .conf | 28 B | SDDM theme metadata |
| `configs/qylock/themes/ninesols/Main.qml` | .qml | 20449 B | SDDM theme QML |
| `configs/qylock/themes/ninesols/bg.png` | .png | 793159 B | Project file |
| `configs/qylock/themes/ninesols/logo.png` | .png | 163776 B | Project file |
| `configs/qylock/themes/ninesols/metadata.desktop` | .desktop | 155 B | Project file |
| `configs/qylock/themes/ninesols/theme.conf` | .conf | 81 B | SDDM theme metadata |
| `configs/qylock/themes/ninja_gaiden/Main.qml` | .qml | 24750 B | SDDM theme QML |
| `configs/qylock/themes/ninja_gaiden/bg.png` | .png | 265063 B | Project file |
| `configs/qylock/themes/ninja_gaiden/font/.gitkeep` | none | 0 B | Project file |
| `configs/qylock/themes/ninja_gaiden/metadata.desktop` | .desktop | 162 B | Project file |
| `configs/qylock/themes/ninja_gaiden/theme.conf` | .conf | 39 B | SDDM theme metadata |
| `configs/qylock/themes/nothing/Main.qml` | .qml | 26653 B | SDDM theme QML |
| `configs/qylock/themes/nothing/metadata.desktop` | .desktop | 211 B | Project file |
| `configs/qylock/themes/nothing/theme.conf` | .conf | 48 B | SDDM theme metadata |
| `configs/qylock/themes/osu/Main.qml` | .qml | 76350 B | SDDM theme QML |
| `configs/qylock/themes/osu/avatars/achlys.png` | .png | 36043 B | Project file |
| `configs/qylock/themes/osu/avatars/darkkal.png` | .png | 6962 B | Project file |
| `configs/qylock/themes/osu/avatars/kaizky.png` | .png | 78041 B | Project file |
| `configs/qylock/themes/osu/background/A Glow.jpg` | .jpg | 5740575 B | Project file |
| `configs/qylock/themes/osu/background/B Glow.jpg` | .jpg | 6047194 B | Project file |
| `configs/qylock/themes/osu/background/C Glow.jpg` | .jpg | 5510504 B | Project file |
| `configs/qylock/themes/osu/background/D Glow.jpg` | .jpg | 5713927 B | Project file |
| `configs/qylock/themes/osu/background/E Glow.jpg` | .jpg | 5763259 B | Project file |
| `configs/qylock/themes/osu/background/F Glow.jpg` | .jpg | 4714768 B | Project file |
| `configs/qylock/themes/osu/background/G Glow.jpg` | .jpg | 4738163 B | Project file |
| `configs/qylock/themes/osu/metadata.desktop` | .desktop | 154 B | Project file |
| `configs/qylock/themes/osu/theme.conf` | .conf | 146 B | SDDM theme metadata |
| `configs/qylock/themes/osumania/Main.qml` | .qml | 64660 B | SDDM theme QML |
| `configs/qylock/themes/osumania/avatars/achlys.png` | .png | 36043 B | Project file |
| `configs/qylock/themes/osumania/avatars/darkkal.png` | .png | 6962 B | Project file |
| `configs/qylock/themes/osumania/avatars/kaizky.png` | .png | 78041 B | Project file |
| `configs/qylock/themes/osumania/avatars/pfp.png` | .png | 36043 B | Project file |
| `configs/qylock/themes/osumania/background/A Glow.jpg` | .jpg | 5740575 B | Project file |
| `configs/qylock/themes/osumania/background/B Glow.jpg` | .jpg | 6047194 B | Project file |
| `configs/qylock/themes/osumania/background/C Glow.jpg` | .jpg | 5510504 B | Project file |
| `configs/qylock/themes/osumania/background/D Glow.jpg` | .jpg | 5713927 B | Project file |
| `configs/qylock/themes/osumania/background/E Glow.jpg` | .jpg | 5763259 B | Project file |
| `configs/qylock/themes/osumania/background/F Glow.jpg` | .jpg | 4714768 B | Project file |
| `configs/qylock/themes/osumania/background/G Glow.jpg` | .jpg | 4738163 B | Project file |
| `configs/qylock/themes/osumania/metadata.desktop` | .desktop | 148 B | Project file |
| `configs/qylock/themes/osumania/theme.conf` | .conf | 146 B | SDDM theme metadata |
| `configs/qylock/themes/pixel-coffee/BackgroundVideo.qml` | .qml | 436 B | SDDM theme QML |
| `configs/qylock/themes/pixel-coffee/Main.qml` | .qml | 9883 B | SDDM theme QML |
| `configs/qylock/themes/pixel-coffee/bg.mp4` | .mp4 | 2350926 B | Project file |
| `configs/qylock/themes/pixel-coffee/metadata.desktop` | .desktop | 162 B | Project file |
| `configs/qylock/themes/pixel-coffee/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `configs/qylock/themes/pixel-cyberpunk/BackgroundVideo.qml` | .qml | 435 B | SDDM theme QML |
| `configs/qylock/themes/pixel-cyberpunk/Main.qml` | .qml | 16607 B | SDDM theme QML |
| `configs/qylock/themes/pixel-cyberpunk/bg.mp4` | .mp4 | 9183955 B | Project file |
| `configs/qylock/themes/pixel-cyberpunk/metadata.desktop` | .desktop | 168 B | Project file |
| `configs/qylock/themes/pixel-cyberpunk/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `configs/qylock/themes/pixel-dusk-city/BackgroundVideo.qml` | .qml | 474 B | SDDM theme QML |
| `configs/qylock/themes/pixel-dusk-city/Main.qml` | .qml | 18317 B | SDDM theme QML |
| `configs/qylock/themes/pixel-dusk-city/bg.mp4` | .mp4 | 2865191 B | Project file |
| `configs/qylock/themes/pixel-dusk-city/metadata.desktop` | .desktop | 168 B | Project file |
| `configs/qylock/themes/pixel-dusk-city/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `configs/qylock/themes/pixel-emerald/BackgroundVideo.qml` | .qml | 435 B | SDDM theme QML |
| `configs/qylock/themes/pixel-emerald/Main.qml` | .qml | 22702 B | SDDM theme QML |
| `configs/qylock/themes/pixel-emerald/bg.mp4` | .mp4 | 15354720 B | Project file |
| `configs/qylock/themes/pixel-emerald/metadata.desktop` | .desktop | 164 B | Project file |
| `configs/qylock/themes/pixel-emerald/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `configs/qylock/themes/pixel-hollowknight/BackgroundVideo.qml` | .qml | 436 B | SDDM theme QML |
| `configs/qylock/themes/pixel-hollowknight/Main.qml` | .qml | 10446 B | SDDM theme QML |
| `configs/qylock/themes/pixel-hollowknight/bg.mp4` | .mp4 | 40617754 B | Project file |
| `configs/qylock/themes/pixel-hollowknight/metadata.desktop` | .desktop | 174 B | Project file |
| `configs/qylock/themes/pixel-hollowknight/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `configs/qylock/themes/pixel-munchlax/BackgroundVideo.qml` | .qml | 436 B | SDDM theme QML |
| `configs/qylock/themes/pixel-munchlax/Main.qml` | .qml | 10497 B | SDDM theme QML |
| `configs/qylock/themes/pixel-munchlax/bg.mp4` | .mp4 | 3473010 B | Project file |
| `configs/qylock/themes/pixel-munchlax/metadata.desktop` | .desktop | 166 B | Project file |
| `configs/qylock/themes/pixel-munchlax/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `configs/qylock/themes/pixel-night-city/BackgroundVideo.qml` | .qml | 436 B | SDDM theme QML |
| `configs/qylock/themes/pixel-night-city/Main.qml` | .qml | 11756 B | SDDM theme QML |
| `configs/qylock/themes/pixel-night-city/bg.mp4` | .mp4 | 12037452 B | Project file |
| `configs/qylock/themes/pixel-night-city/metadata.desktop` | .desktop | 170 B | Project file |
| `configs/qylock/themes/pixel-night-city/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `configs/qylock/themes/pixel-rainyroom/BackgroundVideo.qml` | .qml | 436 B | SDDM theme QML |
| `configs/qylock/themes/pixel-rainyroom/Main.qml` | .qml | 11247 B | SDDM theme QML |
| `configs/qylock/themes/pixel-rainyroom/bg.mp4` | .mp4 | 14740048 B | Project file |
| `configs/qylock/themes/pixel-rainyroom/metadata.desktop` | .desktop | 168 B | Project file |
| `configs/qylock/themes/pixel-rainyroom/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `configs/qylock/themes/pixel-sakura/BackgroundVideo.qml` | .qml | 435 B | SDDM theme QML |
| `configs/qylock/themes/pixel-sakura/Main.qml` | .qml | 15458 B | SDDM theme QML |
| `configs/qylock/themes/pixel-sakura/bg.mp4` | .mp4 | 11450770 B | Project file |
| `configs/qylock/themes/pixel-sakura/metadata.desktop` | .desktop | 162 B | Project file |
| `configs/qylock/themes/pixel-sakura/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `configs/qylock/themes/pixel-skyscrapers/BackgroundVideo.qml` | .qml | 436 B | SDDM theme QML |
| `configs/qylock/themes/pixel-skyscrapers/Main.qml` | .qml | 10551 B | SDDM theme QML |
| `configs/qylock/themes/pixel-skyscrapers/bg.mp4` | .mp4 | 21632174 B | Project file |
| `configs/qylock/themes/pixel-skyscrapers/metadata.desktop` | .desktop | 172 B | Project file |
| `configs/qylock/themes/pixel-skyscrapers/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `configs/qylock/themes/pixel-waterfall/BackgroundVideo.qml` | .qml | 435 B | SDDM theme QML |
| `configs/qylock/themes/pixel-waterfall/Main.qml` | .qml | 12926 B | SDDM theme QML |
| `configs/qylock/themes/pixel-waterfall/bg.mp4` | .mp4 | 3062043 B | Project file |
| `configs/qylock/themes/pixel-waterfall/metadata.desktop` | .desktop | 168 B | Project file |
| `configs/qylock/themes/pixel-waterfall/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `configs/qylock/themes/star-rail/Main.qml` | .qml | 23901 B | SDDM theme QML |
| `configs/qylock/themes/star-rail/bg.mp4` | .mp4 | 12489809 B | Project file |
| `configs/qylock/themes/star-rail/metadata.desktop` | .desktop | 156 B | Project file |
| `configs/qylock/themes/star-rail/theme.conf` | .conf | 39 B | SDDM theme metadata |
| `configs/qylock/themes/sword/BackgroundVideo.qml` | .qml | 436 B | SDDM theme QML |
| `configs/qylock/themes/sword/Main.qml` | .qml | 13180 B | SDDM theme QML |
| `configs/qylock/themes/sword/bg.mp4` | .mp4 | 43826686 B | Project file |
| `configs/qylock/themes/sword/font/.gitkeep` | none | 0 B | Project file |
| `configs/qylock/themes/sword/metadata.desktop` | .desktop | 148 B | Project file |
| `configs/qylock/themes/sword/theme.conf` | .conf | 77 B | SDDM theme metadata |
| `configs/qylock/themes/terraria/Main.qml` | .qml | 36099 B | SDDM theme QML |
| `configs/qylock/themes/terraria/TerraButton.qml` | .qml | 1655 B | SDDM theme QML |
| `configs/qylock/themes/terraria/avatar.png` | .png | 9049 B | Project file |
| `configs/qylock/themes/terraria/font/.gitkeep` | none | 0 B | Project file |
| `configs/qylock/themes/terraria/metadata.desktop` | .desktop | 154 B | Project file |
| `configs/qylock/themes/terraria/ter1.png` | .png | 92262 B | Project file |
| `configs/qylock/themes/terraria/ter2.png` | .png | 107595 B | Project file |
| `configs/qylock/themes/terraria/ter3.png` | .png | 116189 B | Project file |
| `configs/qylock/themes/terraria/ter4.png` | .png | 85345 B | Project file |
| `configs/qylock/themes/terraria/ter5.png` | .png | 92888 B | Project file |
| `configs/qylock/themes/terraria/terraria_logo.png` | .png | 12570 B | Project file |
| `configs/qylock/themes/terraria/theme.conf` | .conf | 164 B | SDDM theme metadata |
| `configs/qylock/themes/windows_7/Main.qml` | .qml | 18428 B | SDDM theme QML |
| `configs/qylock/themes/windows_7/background.png` | .png | 603136 B | Project file |
| `configs/qylock/themes/windows_7/font/.gitkeep` | none | 0 B | Project file |
| `configs/qylock/themes/windows_7/metadata.desktop` | .desktop | 156 B | Project file |
| `configs/qylock/themes/windows_7/pfp.png` | .png | 345346 B | Project file |
| `configs/qylock/themes/windows_7/theme.conf` | .conf | 36 B | SDDM theme metadata |
| `configs/qylock/themes/winter/Main.qml` | .qml | 16603 B | SDDM theme QML |
| `configs/qylock/themes/winter/bg.mp4` | .mp4 | 17692687 B | Project file |
| `configs/qylock/themes/winter/metadata.desktop` | .desktop | 150 B | Project file |
| `configs/qylock/themes/winter/theme.conf` | .conf | 150 B | SDDM theme metadata |
| `configs/qylock/themes/women-umbrella/Main.qml` | .qml | 8667 B | SDDM theme QML |
| `configs/qylock/themes/women-umbrella/bg.png` | .png | 3025537 B | Project file |
| `configs/qylock/themes/women-umbrella/metadata.desktop` | .desktop | 153 B | Project file |
| `configs/qylock/themes/women-umbrella/theme.conf` | .conf | 54 B | SDDM theme metadata |
| `configs/qylock/themes/wuwa/Main.qml` | .qml | 22667 B | SDDM theme QML |
| `configs/qylock/themes/wuwa/bg.mp4` | .mp4 | 28229588 B | Project file |
| `configs/qylock/themes/wuwa/logo.png` | .png | 13208 B | Project file |
| `configs/qylock/themes/wuwa/metadata.desktop` | .desktop | 146 B | Project file |
| `configs/qylock/themes/wuwa/theme.conf` | .conf | 40 B | SDDM theme metadata |
| *(binary assets under this tree)* | various | — | 35 image/font/sound asset files |

### configs/rofi/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `configs/rofi/colors/colors-rofi.rasi` | .rasi | 738 B | Rofi theme or menu style |
| `configs/rofi/menu/menu.rasi` | .rasi | 4402 B | Rofi theme or menu style |
| `configs/rofi/menu/style-1.rasi` | .rasi | 6743 B | Rofi theme or menu style |
| `configs/rofi/menu/style-2.rasi` | .rasi | 4944 B | Rofi theme or menu style |
| `configs/rofi/menu/style-3.rasi` | .rasi | 6910 B | Rofi theme or menu style |
| `configs/rofi/menu/style-4.rasi` | .rasi | 5313 B | Rofi theme or menu style |
| `configs/rofi/menu/style-5.rasi` | .rasi | 5195 B | Rofi theme or menu style |
| `configs/rofi/menu/style-6.rasi` | .rasi | 6124 B | Rofi theme or menu style |
| `configs/rofi/menu/style-7.rasi` | .rasi | 6121 B | Rofi theme or menu style |
| `configs/rofi/menu/style-8.rasi` | .rasi | 6007 B | Rofi theme or menu style |
| `configs/rofi/rofi-confirm.rasi` | .rasi | 2815 B | Rofi theme or menu style |
| `configs/rofi/rofi-vars.rasi` | .rasi | 69 B | Rofi theme or menu style |
| `configs/rofi/themes/README.md` | .md | 79 B | Documentation or notes |
| `configs/rofi/themes/rofi-clipboard.rasi` | .rasi | 6597 B | Rofi theme or menu style |
| `configs/rofi/themes/rofi-edit-dots.rasi` | .rasi | 6576 B | Rofi theme or menu style |
| `configs/rofi/themes/rofi-emoji.rasi` | .rasi | 5561 B | Rofi theme or menu style |
| `configs/rofi/themes/rofi-hyprlock-theme.rasi` | .rasi | 6578 B | Lockscreen config or script |
| `configs/rofi/themes/rofi-keybinds.rasi` | .rasi | 6772 B | Rofi theme or menu style |
| `configs/rofi/themes/rofi-powertheme.rasi` | .rasi | 6592 B | Rofi theme or menu style |
| `configs/rofi/themes/rofi-screenshots.rasi` | .rasi | 6966 B | Rofi theme or menu style |
| `configs/rofi/themes/rofi-select_theme.rasi` | .rasi | 5862 B | Rofi theme or menu style |
| `configs/rofi/themes/rofi-wall-2.rasi` | .rasi | 6157 B | Rofi theme or menu style |
| `configs/rofi/themes/rofi-wall.rasi` | .rasi | 6166 B | Rofi theme or menu style |
| `configs/rofi/themes/rofi-waybar.rasi` | .rasi | 6614 B | Rofi theme or menu style |
| `configs/rofi/themes/rofi-window.rasi` | .rasi | 5834 B | Rofi theme or menu style |
| *(binary assets under this tree)* | various | — | 8 image/font/sound asset files |

### configs/waybar/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `configs/waybar/README.md` | .md | 124 B | Documentation or notes |
| `configs/waybar/config` | none | 1116 B | Project file |
| `configs/waybar/configs/bar-left` | none | 1743 B | Waybar layout config |
| `configs/waybar/configs/border-top` | none | 1053 B | Waybar layout config |
| `configs/waybar/configs/catppuccin-top` | none | 1557 B | Waybar layout config |
| `configs/waybar/configs/colorful-bottom` | none | 1652 B | Waybar layout config |
| `configs/waybar/configs/dual-tone-top` | none | 1662 B | Waybar layout config |
| `configs/waybar/configs/fancy-top` | none | 1792 B | Waybar layout config |
| `configs/waybar/configs/full-top` | none | 1116 B | Waybar layout config |
| `configs/waybar/configs/reflection-top` | none | 1739 B | Waybar layout config |
| `configs/waybar/configs/rounded-top` | none | 955 B | Waybar layout config |
| `configs/waybar/configs/skew-left` | none | 3135 B | Waybar layout config |
| `configs/waybar/modules/modules-catppuccin.jsonc` | .jsonc | 13688 B | Waybar module definitions |
| `configs/waybar/modules/modules-custom.jsonc` | .jsonc | 5341 B | Waybar module definitions |
| `configs/waybar/modules/modules-dual-tone.jsonc` | .jsonc | 13315 B | Waybar module definitions |
| `configs/waybar/modules/modules-groups.jsonc` | .jsonc | 1986 B | Waybar module definitions |
| `configs/waybar/modules/modules-main.jsonc` | .jsonc | 14681 B | Waybar module definitions |
| `configs/waybar/modules/modules-virt.jsonc` | .jsonc | 11070 B | Waybar module definitions |
| `configs/waybar/style/bar-left.css` | .css | 4215 B | Waybar CSS layout style |
| `configs/waybar/style/border-top.css` | .css | 7397 B | Waybar CSS layout style |
| `configs/waybar/style/catppuccin-top.css` | .css | 5169 B | Waybar CSS layout style |
| `configs/waybar/style/colorful-bottom.css` | .css | 3885 B | Waybar CSS layout style |
| `configs/waybar/style/dual-tone-top.css` | .css | 6849 B | Waybar CSS layout style |
| `configs/waybar/style/fancy-top.css` | .css | 5474 B | Waybar CSS layout style |
| `configs/waybar/style/full-top.css` | .css | 5828 B | Waybar CSS layout style |
| `configs/waybar/style/mocha.css` | .css | 785 B | Waybar CSS layout style |
| `configs/waybar/style/reflection-top.css` | .css | 6117 B | Waybar CSS layout style |
| `configs/waybar/style/rounded-top.css` | .css | 5519 B | Waybar CSS layout style |
| `configs/waybar/style/skew-left.css` | .css | 3450 B | Waybar CSS layout style |
| `configs/waybar/style/theme.css` | .css | 2085 B | Waybar CSS layout style |
| `configs/waybar/style.css` | .css | 5828 B | Waybar CSS layout style |
| `configs/waybar/wall-theme.css` | .css | 2085 B | Stylesheet |

### configs/wlogout/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `configs/wlogout/launch-wlogout.sh` | .sh | 392 B | Logout menu config |
| `configs/wlogout/layout` | none | 587 B | Logout menu config |
| `configs/wlogout/style-dark.css` | .css | 1847 B | Logout menu config |
| `configs/wlogout/style-light.css` | .css | 1826 B | Logout menu config |
| *(binary assets under this tree)* | various | — | 12 image/font/sound asset files |

### configs/xsettingsd/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `configs/xsettingsd/xsettingsd.conf` | .conf | 260 B | Xsettings daemon config |

## apps/wallfliper/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `apps/wallfliper/DESIGN.md` | .md | 10240 B | Documentation or notes |
| `apps/wallfliper/config.json` | .json | 84 B | JSON configuration |
| `apps/wallfliper/core/__init__.py` | .py | 88 B | Wallfliper Python module |
| `apps/wallfliper/core/backends/__init__.py` | .py | 242 B | Wallfliper Python module |
| `apps/wallfliper/core/backends/base.py` | .py | 3346 B | Wallfliper Python module |
| `apps/wallfliper/core/backends/transitions.py` | .py | 7088 B | Wallfliper Python module |
| `apps/wallfliper/core/backends/wlroots.py` | .py | 24732 B | Wallfliper Python module |
| `apps/wallfliper/core/cachegc.py` | .py | 4815 B | Wallfliper Python module |
| `apps/wallfliper/core/colors.py` | .py | 9918 B | Wallfliper Python module |
| `apps/wallfliper/core/deps.py` | .py | 4923 B | Wallfliper Python module |
| `apps/wallfliper/core/firstframe.py` | .py | 4014 B | Wallfliper Python module |
| `apps/wallfliper/core/integrations.py` | .py | 4425 B | Wallfliper Python module |
| `apps/wallfliper/core/library.py` | .py | 1505 B | Wallfliper Python module |
| `apps/wallfliper/core/portal.py` | .py | 6440 B | Wallfliper Python module |
| `apps/wallfliper/core/previews.py` | .py | 6429 B | Wallfliper Python module |
| `apps/wallfliper/core/seamless.py` | .py | 9493 B | Wallfliper Python module |
| `apps/wallfliper/core/single_instance.py` | .py | 2978 B | Wallfliper Python module |
| `apps/wallfliper/core/state.py` | .py | 3837 B | Wallfliper Python module |
| `apps/wallfliper/core/thumbnails.py` | .py | 7561 B | Wallfliper Python module |
| `apps/wallfliper/main.py` | .py | 7502 B | Wallfliper Python module |
| `apps/wallfliper/pyproject.toml` | .toml | 1852 B | TOML config |
| `apps/wallfliper/requirements.txt` | .txt | 577 B | Text list or placeholder |
| `apps/wallfliper/tools/build_shaders.sh` | .sh | 568 B | Shell script |
| `apps/wallfliper/tools/transitions_demo.py` | .py | 4474 B | Wallfliper Python module |
| `apps/wallfliper/ui/__init__.py` | .py | 77 B | Wallfliper Python module |
| `apps/wallfliper/ui/bridge.py` | .py | 25213 B | Wallfliper Python module |
| `apps/wallfliper/ui/model.py` | .py | 10929 B | Wallfliper Python module |
| `apps/wallfliper/ui/qml/FolderInput.qml` | .qml | 4700 B | Wallfliper QML UI |
| `apps/wallfliper/ui/qml/Honeycomb.qml` | .qml | 15224 B | Wallfliper QML UI |
| `apps/wallfliper/ui/qml/Main.qml` | .qml | 73768 B | Wallfliper QML UI |
| `apps/wallfliper/ui/qml/Settings.qml` | .qml | 3465 B | Wallfliper QML UI |
| `apps/wallfliper/ui/qml/Theme.qml` | .qml | 1395 B | Wallfliper QML UI |
| `apps/wallfliper/ui/qml/TransitionSurface.qml` | .qml | 6046 B | Wallfliper QML UI |
| `apps/wallfliper/ui/qml/qmldir` | none | 30 B | Project file |
| `apps/wallfliper/ui/qml/shaders/honeycomb.frag` | .frag | 2597 B | Project file |
| `apps/wallfliper/ui/qml/shaders/honeycomb.frag.qsb` | .qsb | 3615 B | Project file |
| `apps/wallfliper/ui/shaders.py` | .py | 1800 B | Wallfliper Python module |

## apps/qylock/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `apps/qylock/LICENSE` | none | 35149 B | Project file |
| `apps/qylock/sddm.sh` | .sh | 14598 B | Shell script |
| `apps/qylock/themes/Genshin/GenshinButton.qml` | .qml | 901 B | SDDM theme QML |
| `apps/qylock/themes/Genshin/GenshinFrame.qml` | .qml | 3448 B | SDDM theme QML |
| `apps/qylock/themes/Genshin/Main.qml` | .qml | 26401 B | SDDM theme QML |
| `apps/qylock/themes/Genshin/font/.gitkeep` | none | 0 B | Project file |
| `apps/qylock/themes/Genshin/metadata.desktop` | .desktop | 152 B | Project file |
| `apps/qylock/themes/Genshin/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `apps/qylock/themes/R1999_1/Main.qml` | .qml | 18501 B | SDDM theme QML |
| `apps/qylock/themes/R1999_1/metadata.desktop` | .desktop | 157 B | Project file |
| `apps/qylock/themes/R1999_1/theme.conf` | .conf | 10 B | SDDM theme metadata |
| `apps/qylock/themes/R1999_2/Main.qml` | .qml | 17577 B | SDDM theme QML |
| `apps/qylock/themes/R1999_2/metadata.desktop` | .desktop | 157 B | Project file |
| `apps/qylock/themes/clockwork/neo-orbital/Main.qml` | .qml | 28427 B | SDDM theme QML |
| `apps/qylock/themes/clockwork/neo-orbital/metadata.desktop` | .desktop | 158 B | Project file |
| `apps/qylock/themes/clockwork/neo-orbital/theme.conf` | .conf | 80 B | SDDM theme metadata |
| `apps/qylock/themes/clockwork/orbital/Main.qml` | .qml | 22393 B | SDDM theme QML |
| `apps/qylock/themes/clockwork/orbital/metadata.desktop` | .desktop | 153 B | Project file |
| `apps/qylock/themes/clockwork/orbital/theme.conf` | .conf | 80 B | SDDM theme metadata |
| `apps/qylock/themes/clockwork/tape/Main.qml` | .qml | 24355 B | SDDM theme QML |
| `apps/qylock/themes/clockwork/tape/metadata.desktop` | .desktop | 155 B | Project file |
| `apps/qylock/themes/clockwork/tape/theme.conf` | .conf | 62 B | SDDM theme metadata |
| `apps/qylock/themes/dog-samurai/Main.qml` | .qml | 28606 B | SDDM theme QML |
| `apps/qylock/themes/dog-samurai/metadata.desktop` | .desktop | 136 B | Project file |
| `apps/qylock/themes/dog-samurai/theme.conf` | .conf | 154 B | SDDM theme metadata |
| `apps/qylock/themes/enfield/BackgroundVideo.qml` | .qml | 436 B | SDDM theme QML |
| `apps/qylock/themes/enfield/Main.qml` | .qml | 23045 B | SDDM theme QML |
| `apps/qylock/themes/enfield/font/.gitkeep` | none | 0 B | Project file |
| `apps/qylock/themes/enfield/metadata.desktop` | .desktop | 152 B | Project file |
| `apps/qylock/themes/enfield/theme.conf` | .conf | 79 B | SDDM theme metadata |
| `apps/qylock/themes/field/Main.qml` | .qml | 9540 B | SDDM theme QML |
| `apps/qylock/themes/field/metadata.desktop` | .desktop | 135 B | Project file |
| `apps/qylock/themes/field/theme.conf` | .conf | 43 B | SDDM theme metadata |
| `apps/qylock/themes/forest/Main.qml` | .qml | 23026 B | SDDM theme QML |
| `apps/qylock/themes/forest/metadata.desktop` | .desktop | 150 B | Project file |
| `apps/qylock/themes/forest/theme.conf` | .conf | 85 B | SDDM theme metadata |
| `apps/qylock/themes/girl-coffee/Main.qml` | .qml | 23825 B | SDDM theme QML |
| `apps/qylock/themes/girl-coffee/metadata.desktop` | .desktop | 161 B | Project file |
| `apps/qylock/themes/girl-coffee/theme.conf` | .conf | 77 B | SDDM theme metadata |
| `apps/qylock/themes/girl-pillow/Main.qml` | .qml | 9237 B | SDDM theme QML |
| `apps/qylock/themes/girl-pillow/metadata.desktop` | .desktop | 147 B | Project file |
| `apps/qylock/themes/girl-pillow/theme.conf` | .conf | 54 B | SDDM theme metadata |
| `apps/qylock/themes/last-of-us/Main.qml` | .qml | 24164 B | SDDM theme QML |
| `apps/qylock/themes/last-of-us/metadata.desktop` | .desktop | 146 B | Project file |
| `apps/qylock/themes/last-of-us/theme.conf` | .conf | 163 B | SDDM theme metadata |
| `apps/qylock/themes/man-bicycle/Main.qml` | .qml | 9391 B | SDDM theme QML |
| `apps/qylock/themes/man-bicycle/metadata.desktop` | .desktop | 147 B | Project file |
| `apps/qylock/themes/man-bicycle/theme.conf` | .conf | 54 B | SDDM theme metadata |
| `apps/qylock/themes/material-you/Main.qml` | .qml | 33495 B | SDDM theme QML |
| `apps/qylock/themes/material-you/metadata.desktop` | .desktop | 233 B | Project file |
| `apps/qylock/themes/material-you/theme.conf` | .conf | 52 B | SDDM theme metadata |
| `apps/qylock/themes/material-you-dark/Main.qml` | .qml | 33515 B | SDDM theme QML |
| `apps/qylock/themes/material-you-dark/metadata.desktop` | .desktop | 246 B | Project file |
| `apps/qylock/themes/material-you-dark/theme.conf` | .conf | 52 B | SDDM theme metadata |
| `apps/qylock/themes/minecraft/Main.qml` | .qml | 16907 B | SDDM theme QML |
| `apps/qylock/themes/minecraft/font/.gitkeep` | none | 0 B | Project file |
| `apps/qylock/themes/minecraft/metadata.desktop` | .desktop | 156 B | Project file |
| `apps/qylock/themes/minecraft/theme.conf` | .conf | 73 B | SDDM theme metadata |
| `apps/qylock/themes/nier-automata/Main.qml` | .qml | 55726 B | SDDM theme QML |
| `apps/qylock/themes/nier-automata/NierButton.qml` | .qml | 1652 B | SDDM theme QML |
| `apps/qylock/themes/nier-automata/font/.gitkeep` | none | 0 B | Project file |
| `apps/qylock/themes/nier-automata/metadata.desktop` | .desktop | 164 B | Project file |
| `apps/qylock/themes/nier-automata/theme.conf` | .conf | 28 B | SDDM theme metadata |
| `apps/qylock/themes/ninesols/Main.qml` | .qml | 20449 B | SDDM theme QML |
| `apps/qylock/themes/ninesols/metadata.desktop` | .desktop | 155 B | Project file |
| `apps/qylock/themes/ninesols/theme.conf` | .conf | 81 B | SDDM theme metadata |
| `apps/qylock/themes/ninja_gaiden/Main.qml` | .qml | 24750 B | SDDM theme QML |
| `apps/qylock/themes/ninja_gaiden/font/.gitkeep` | none | 0 B | Project file |
| `apps/qylock/themes/ninja_gaiden/metadata.desktop` | .desktop | 162 B | Project file |
| `apps/qylock/themes/ninja_gaiden/theme.conf` | .conf | 39 B | SDDM theme metadata |
| `apps/qylock/themes/nothing/Main.qml` | .qml | 26653 B | SDDM theme QML |
| `apps/qylock/themes/nothing/metadata.desktop` | .desktop | 211 B | Project file |
| `apps/qylock/themes/nothing/theme.conf` | .conf | 48 B | SDDM theme metadata |
| `apps/qylock/themes/osu/Main.qml` | .qml | 76350 B | SDDM theme QML |
| `apps/qylock/themes/osu/metadata.desktop` | .desktop | 154 B | Project file |
| `apps/qylock/themes/osu/theme.conf` | .conf | 146 B | SDDM theme metadata |
| `apps/qylock/themes/osumania/Main.qml` | .qml | 64660 B | SDDM theme QML |
| `apps/qylock/themes/osumania/metadata.desktop` | .desktop | 148 B | Project file |
| `apps/qylock/themes/osumania/theme.conf` | .conf | 146 B | SDDM theme metadata |
| `apps/qylock/themes/pixel-coffee/BackgroundVideo.qml` | .qml | 436 B | SDDM theme QML |
| `apps/qylock/themes/pixel-coffee/Main.qml` | .qml | 9883 B | SDDM theme QML |
| `apps/qylock/themes/pixel-coffee/metadata.desktop` | .desktop | 162 B | Project file |
| `apps/qylock/themes/pixel-coffee/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `apps/qylock/themes/pixel-cyberpunk/BackgroundVideo.qml` | .qml | 435 B | SDDM theme QML |
| `apps/qylock/themes/pixel-cyberpunk/Main.qml` | .qml | 16607 B | SDDM theme QML |
| `apps/qylock/themes/pixel-cyberpunk/metadata.desktop` | .desktop | 168 B | Project file |
| `apps/qylock/themes/pixel-cyberpunk/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `apps/qylock/themes/pixel-dusk-city/BackgroundVideo.qml` | .qml | 474 B | SDDM theme QML |
| `apps/qylock/themes/pixel-dusk-city/Main.qml` | .qml | 18317 B | SDDM theme QML |
| `apps/qylock/themes/pixel-dusk-city/metadata.desktop` | .desktop | 168 B | Project file |
| `apps/qylock/themes/pixel-dusk-city/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `apps/qylock/themes/pixel-emerald/BackgroundVideo.qml` | .qml | 435 B | SDDM theme QML |
| `apps/qylock/themes/pixel-emerald/Main.qml` | .qml | 22702 B | SDDM theme QML |
| `apps/qylock/themes/pixel-emerald/metadata.desktop` | .desktop | 164 B | Project file |
| `apps/qylock/themes/pixel-emerald/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `apps/qylock/themes/pixel-hollowknight/BackgroundVideo.qml` | .qml | 436 B | SDDM theme QML |
| `apps/qylock/themes/pixel-hollowknight/Main.qml` | .qml | 10446 B | SDDM theme QML |
| `apps/qylock/themes/pixel-hollowknight/metadata.desktop` | .desktop | 174 B | Project file |
| `apps/qylock/themes/pixel-hollowknight/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `apps/qylock/themes/pixel-munchlax/BackgroundVideo.qml` | .qml | 436 B | SDDM theme QML |
| `apps/qylock/themes/pixel-munchlax/Main.qml` | .qml | 10497 B | SDDM theme QML |
| `apps/qylock/themes/pixel-munchlax/metadata.desktop` | .desktop | 166 B | Project file |
| `apps/qylock/themes/pixel-munchlax/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `apps/qylock/themes/pixel-night-city/BackgroundVideo.qml` | .qml | 436 B | SDDM theme QML |
| `apps/qylock/themes/pixel-night-city/Main.qml` | .qml | 11756 B | SDDM theme QML |
| `apps/qylock/themes/pixel-night-city/metadata.desktop` | .desktop | 170 B | Project file |
| `apps/qylock/themes/pixel-night-city/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `apps/qylock/themes/pixel-rainyroom/BackgroundVideo.qml` | .qml | 436 B | SDDM theme QML |
| `apps/qylock/themes/pixel-rainyroom/Main.qml` | .qml | 11247 B | SDDM theme QML |
| `apps/qylock/themes/pixel-rainyroom/metadata.desktop` | .desktop | 168 B | Project file |
| `apps/qylock/themes/pixel-rainyroom/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `apps/qylock/themes/pixel-sakura/BackgroundVideo.qml` | .qml | 435 B | SDDM theme QML |
| `apps/qylock/themes/pixel-sakura/Main.qml` | .qml | 15458 B | SDDM theme QML |
| `apps/qylock/themes/pixel-sakura/metadata.desktop` | .desktop | 162 B | Project file |
| `apps/qylock/themes/pixel-sakura/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `apps/qylock/themes/pixel-skyscrapers/BackgroundVideo.qml` | .qml | 436 B | SDDM theme QML |
| `apps/qylock/themes/pixel-skyscrapers/Main.qml` | .qml | 10551 B | SDDM theme QML |
| `apps/qylock/themes/pixel-skyscrapers/metadata.desktop` | .desktop | 172 B | Project file |
| `apps/qylock/themes/pixel-skyscrapers/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `apps/qylock/themes/pixel-waterfall/BackgroundVideo.qml` | .qml | 435 B | SDDM theme QML |
| `apps/qylock/themes/pixel-waterfall/Main.qml` | .qml | 12926 B | SDDM theme QML |
| `apps/qylock/themes/pixel-waterfall/metadata.desktop` | .desktop | 168 B | Project file |
| `apps/qylock/themes/pixel-waterfall/theme.conf` | .conf | 83 B | SDDM theme metadata |
| `apps/qylock/themes/star-rail/Main.qml` | .qml | 23901 B | SDDM theme QML |
| `apps/qylock/themes/star-rail/metadata.desktop` | .desktop | 156 B | Project file |
| `apps/qylock/themes/star-rail/theme.conf` | .conf | 39 B | SDDM theme metadata |
| `apps/qylock/themes/sword/BackgroundVideo.qml` | .qml | 436 B | SDDM theme QML |
| `apps/qylock/themes/sword/Main.qml` | .qml | 13180 B | SDDM theme QML |
| `apps/qylock/themes/sword/font/.gitkeep` | none | 0 B | Project file |
| `apps/qylock/themes/sword/metadata.desktop` | .desktop | 148 B | Project file |
| `apps/qylock/themes/sword/theme.conf` | .conf | 77 B | SDDM theme metadata |
| `apps/qylock/themes/terraria/Main.qml` | .qml | 36099 B | SDDM theme QML |
| `apps/qylock/themes/terraria/TerraButton.qml` | .qml | 1655 B | SDDM theme QML |
| `apps/qylock/themes/terraria/font/.gitkeep` | none | 0 B | Project file |
| `apps/qylock/themes/terraria/metadata.desktop` | .desktop | 154 B | Project file |
| `apps/qylock/themes/terraria/theme.conf` | .conf | 164 B | SDDM theme metadata |
| `apps/qylock/themes/windows_7/Main.qml` | .qml | 18428 B | SDDM theme QML |
| `apps/qylock/themes/windows_7/font/.gitkeep` | none | 0 B | Project file |
| `apps/qylock/themes/windows_7/metadata.desktop` | .desktop | 156 B | Project file |
| `apps/qylock/themes/windows_7/theme.conf` | .conf | 36 B | SDDM theme metadata |
| `apps/qylock/themes/winter/Main.qml` | .qml | 16603 B | SDDM theme QML |
| `apps/qylock/themes/winter/metadata.desktop` | .desktop | 150 B | Project file |
| `apps/qylock/themes/winter/theme.conf` | .conf | 150 B | SDDM theme metadata |
| `apps/qylock/themes/women-umbrella/Main.qml` | .qml | 8667 B | SDDM theme QML |
| `apps/qylock/themes/women-umbrella/metadata.desktop` | .desktop | 153 B | Project file |
| `apps/qylock/themes/women-umbrella/theme.conf` | .conf | 54 B | SDDM theme metadata |
| `apps/qylock/themes/wuwa/Main.qml` | .qml | 22667 B | SDDM theme QML |
| `apps/qylock/themes/wuwa/metadata.desktop` | .desktop | 146 B | Project file |
| `apps/qylock/themes/wuwa/theme.conf` | .conf | 40 B | SDDM theme metadata |
| *(theme binary assets)* | various | — | 146 image/font/video asset files across themes |

### qylock theme packs

- `apps/qylock/themes/Genshin/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/R1999_1/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/R1999_2/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/clockwork/` — SDDM theme pack (QML + theme.conf + assets)
  - `apps/qylock/themes/clockwork/neo-orbital/` — theme variant
  - `apps/qylock/themes/clockwork/orbital/` — theme variant
  - `apps/qylock/themes/clockwork/tape/` — theme variant
- `apps/qylock/themes/dog-samurai/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/enfield/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/field/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/forest/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/girl-coffee/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/girl-pillow/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/last-of-us/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/man-bicycle/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/material-you/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/material-you-dark/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/minecraft/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/nier-automata/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/ninesols/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/ninja_gaiden/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/nothing/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/osu/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/osumania/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/pixel-coffee/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/pixel-cyberpunk/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/pixel-dusk-city/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/pixel-emerald/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/pixel-hollowknight/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/pixel-munchlax/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/pixel-night-city/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/pixel-rainyroom/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/pixel-sakura/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/pixel-skyscrapers/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/pixel-waterfall/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/star-rail/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/sword/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/terraria/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/windows_7/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/winter/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/women-umbrella/` — SDDM theme pack (QML + theme.conf + assets)
- `apps/qylock/themes/wuwa/` — SDDM theme pack (QML + theme.conf + assets)

## themes/

| Path | Ext | Size | Purpose |
|------|-----|------|---------|
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/apps/chrome.rc` | .rc | 1563 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/apps/gimp.rc` | .rc | 2019 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/apps/libreoffice.rc` | .rc | 421 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/apps/terminal.rc` | .rc | 1291 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/apps/thunar.rc` | .rc | 863 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/apps/xfce.rc` | .rc | 2771 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/apps.rc` | .rc | 3402 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/gtkrc` | none | 1122 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/hacks-dark.rc` | .rc | 539 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/hacks.rc` | .rc | 1163 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/main.rc` | .rc | 60582 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/widgets/buttons` | none | 10071 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/widgets/default` | none | 17033 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/widgets/entry` | none | 4312 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/widgets/menu` | none | 7814 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/widgets/misc` | none | 5193 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/widgets/notebook` | none | 3903 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/widgets/progressbar` | none | 1019 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/widgets/range` | none | 2520 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/widgets/scrollbar` | none | 2798 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/widgets/styles` | none | 3167 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-2.0/widgets/toolbar` | none | 2525 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-3.0/gtk.css` | .css | 213146 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/gtk-4.0/gtk.css` | .css | 186836 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-GTK/settings.ini` | .ini | 100 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-Light-GTK/gtk-2.0/gtkrc` | none | 1038 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-Light-GTK/gtk-2.0/widgets/buttons` | none | 10071 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-Light-GTK/gtk-2.0/widgets/default` | none | 17033 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-Light-GTK/gtk-2.0/widgets/entry` | none | 4312 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-Light-GTK/gtk-2.0/widgets/menu` | none | 7814 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-Light-GTK/gtk-2.0/widgets/misc` | none | 5193 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-Light-GTK/gtk-2.0/widgets/notebook` | none | 3903 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-Light-GTK/gtk-2.0/widgets/progressbar` | none | 1019 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-Light-GTK/gtk-2.0/widgets/range` | none | 2520 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-Light-GTK/gtk-2.0/widgets/scrollbar` | none | 2798 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-Light-GTK/gtk-2.0/widgets/styles` | none | 3064 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-Light-GTK/gtk-2.0/widgets/toolbar` | none | 2525 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-Light-GTK/gtk-3.0/gtk.css` | .css | 209733 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-Light-GTK/gtk-4.0/gtk.css` | .css | 186704 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-Light-GTK/settings.ini` | .ini | 100 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax GTK Themes/Relax-Light-GTK/window_decorations.css` | .css | 3895 B | GTK theme or settings |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/actions/16@2x/16` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/actions/16@3x/16` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/actions/22@2x/22` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/actions/22@3x/22` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/actions/24@2x/24` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/actions/24@3x/24` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/actions/32@2x/32` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/actions/32@3x/32` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/apps/48/gnome-menu` | none | 7284 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/devices/16@2x/16` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/devices/16@3x/16` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/devices/22@2x/22` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/devices/22@3x/22` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/devices/24@2x/24` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/devices/24@3x/24` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/emblems/16@2x/16` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/emblems/16@3x/16` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/emblems/22@2x/22` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/emblems/22@3x/22` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/emblems/24@2x/24` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/emblems/24@3x/24` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/icon-theme.cache` | .cache | 528348 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/index.theme` | .theme | 15805 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/mimetypes/16@2x/16` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/mimetypes/16@3x/16` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/mimetypes/22@2x/22` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/mimetypes/22@3x/22` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/mimetypes/24@2x/24` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/mimetypes/24@3x/24` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/mimetypes/32/application-excel` | none | 1612 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/mimetypes/32/application-msexcel` | none | 1612 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/mimetypes/32/application-vnd.ms-word.template.macroenabled.12` | .12 | 1534 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/mimetypes/32/application-x-excel` | none | 1612 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/mimetypes/32/application-x-msexcel` | none | 1612 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/mimetypes/64/application-excel` | none | 4349 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/mimetypes/64/application-msexcel` | none | 4349 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/mimetypes/64/application-vnd.ms-word.template.macroenabled.12` | .12 | 4261 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/mimetypes/64/application-x-excel` | none | 4349 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/mimetypes/64/application-x-msexcel` | none | 4349 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/places/16@2x/16` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/places/16@3x/16` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/places/22@2x/22` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/places/22@3x/22` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/places/24@2x/24` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/places/24@3x/24` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/status/16@2x/16` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/status/16@3x/16` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/status/22@2x/22` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/status/22@3x/22` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/status/24@2x/24` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Dark-Icons/status/24@3x/24` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/32.files` | .files | 801 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/48.files` | .files | 71 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/actions/16@2x/16` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/actions/16@3x/16` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/actions/22@2x/22` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/actions/22@3x/22` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/actions/24@2x/24` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/actions/24@3x/24` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/actions/32@2x/32` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/actions/32@3x/32` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/apps/48/gnome-menu` | none | 7284 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/devices/16@2x/16` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/devices/16@3x/16` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/devices/22@2x/22` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/devices/22@3x/22` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/devices/24@2x/24` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/devices/24@3x/24` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/emblems/16@2x/16` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/emblems/16@3x/16` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/emblems/22@2x/22` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/emblems/22@3x/22` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/emblems/24@2x/24` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/emblems/24@3x/24` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/icon-theme.cache` | .cache | 588556 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/index.theme` | .theme | 16320 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/make-symlinks.sh` | .sh | 207 B | Shell script |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/mimetypes/16@2x/16` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/mimetypes/16@3x/16` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/mimetypes/22@2x/22` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/mimetypes/22@3x/22` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/mimetypes/24@2x/24` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/mimetypes/24@3x/24` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/mimetypes/32/application-excel` | none | 1612 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/mimetypes/32/application-msexcel` | none | 1612 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/mimetypes/32/application-vnd.ms-word.template.macroenabled.12` | .12 | 1534 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/mimetypes/32/application-x-excel` | none | 1612 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/mimetypes/32/application-x-msexcel` | none | 1612 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/mimetypes/64/application-excel` | none | 4349 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/mimetypes/64/application-msexcel` | none | 4349 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/mimetypes/64/application-vnd.ms-word.template.macroenabled.12` | .12 | 4261 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/mimetypes/64/application-x-excel` | none | 4349 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/mimetypes/64/application-x-msexcel` | none | 4349 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/places/16/start-here-branding.svgz` | .svgz | 2471 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/places/16@2x/16` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/places/16@3x/16` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/places/22@2x/22` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/places/22@3x/22` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/places/24@2x/24` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/places/24@3x/24` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/status/16@2x/16` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/status/16@3x/16` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/status/22@2x/22` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/status/22@3x/22` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/status/24@2x/24` | none | 41 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Icons Themes/Relax-Light-Icons/status/24@3x/24` | none | 42 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Kvantum Themes/Relax-Kvantum/Relax-Kvantum.kvconfig` | .kvconfig | 8188 B | Project file |
| `themes/Relax-Plasma-Themes/Relax Kvantum Themes/Relax-Light-Kvantum/Relax-Light-Kvantum.kvconfig` | .kvconfig | 8033 B | Project file |
| *(Relax theme binary assets)* | various | — | 29835 icon/image assets |

Relax-Plasma-Themes provides GTK (Relax-GTK, Relax-Light-GTK) and icon themes installed by `install_themes.sh`.

## docs/

- `docs/PLACEHOLDER.txt` (21 B)

## assets/

- `assets/default_wallpaper.png` (337121 B)
