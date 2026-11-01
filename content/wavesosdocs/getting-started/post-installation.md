# Post-Installation

---

## Recommended Steps

1. **Correct Wallfliper config path** (see first-boot.md).
2. **Select a wallpaper** with Wallfliper to drive Matugen.
3. **Choose a Waybar layout** using the layout switcher script if desired.
4. **Review keybindings** — open the keybind help (Rofi keybinds theme) or read the keybindings documentation.
5. **Configure monitors** in `~/.config/hypr/configs/monitors.lua` if the defaults are insufficient.
6. **Set default browser/editor** using the provided helper scripts if the defaults are not preferred.
7. **Optional plugins** — use the plugin manager script if you need hyprpm plugins from the catalog.
8. **SDDM theme** — run `~/.config/qylock/sddm.sh` (Super+Shift+I is referenced) to switch themes interactively.
9. **Backup awareness** — note the path of the backup created during install under `~/.config/WavesHyprland-backup-*`.

## Seeding Performed by post_setup.sh

- Ensures `~/.config/hypr/scripts/*.sh` are executable
- Ensures qylock `sddm.sh` is executable if present
- Seeds `matugen-colors.lua` with a fallback palette if missing
- Seeds Kitty `colors-matugen.conf` if missing
- Creates Hypr cache directory

## Keeping the Stack Updated

Typical update workflow after pulling newer WavesHyprland commits:

```bash
cd WavesHyprland
git pull
./install.sh --backup
./install.sh --configs
./install.sh --wallfliper
./install.sh --post
# Optionally: --packages, --themes, --sddm
```

## Integrating Personal Dotfiles

Prefer extending via:

- User autostart block
- Additional window rules in `windowrules.lua`
- Custom keybinds (or keybind editor)
- Matugen templates if adding a new application to the color pipeline

Avoid overwriting Matugen-owned color files by hand if you want dynamic theming to continue working.
