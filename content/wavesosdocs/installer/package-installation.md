# Package Installation

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---


## Scripts

- scripts/install_yay.sh
- scripts/install_packages.sh
- Lists: packages/pacman.txt, packages/aur.txt

## yay Bootstrap

If yay is not on PATH:

1. sudo pacman -S --needed --noconfirm git base-devel
2. Clone https://aur.archlinux.org/yay.git into a temp directory
3. Build and install

If yay is already present, the script exits 0 immediately.

## Package Lists

install_packages.sh reads the two text files (one package per line) and installs via pacman and yay.

### Representative pacman packages

base-devel, brightnessctl, cliphist, curl, exo, fzf, git, grim, gstreamer plugins, gum, gvfs, hyprland, hyprlock, imagemagick, jq, kitty, kvantum, libnotify, nwg-look, pacman-contrib, pamixer, pipewire, playerctl, polkit-gnome, python, python-pip, python-pipx, qt6 packages, qt6ct, rofi-wayland, sddm, slurp, swww, thunar and plugins, ttf-jetbrains-mono-nerd, tumbler, unzip, waybar, wireplumber, and others listed in pacman.txt.

### Representative AUR packages

wlogout, matugen-bin, hyprpicker, grimblast-git, satty, swaync, cava, yazi, hyprsunset, mpvpaper, eww, and others in aur.txt.

## Notes

- AUR builds can fail due to upstream or dependency issues
- Wallfliper deliberately does not pip-install requirements during deploy; system packages are preferred for Qt compatibility with layer-shell-qt
