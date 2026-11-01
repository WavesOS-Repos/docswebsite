# Bugs and Inconsistencies

**Project:** WavesHyprland  
**Version:** 0.1.0  
**Branch:** main (WavesOS current)

---

## Methodology

Static inspection of the repository in the current release. Items from preliminary leads were re-checked against current source. Severity: Critical / High / Medium / Low.

---

## Confirmed Findings

### 1. Hardcoded path in Wallfliper config.json

- **Severity:** High
- **File:** apps/wallfliper/config.json
- **Observed:** `"color_hook": "/home/bowser/.config/hypr/scripts/matugen-from-wall.sh {path}"`
- **Problem:** Deploy uses rsync without rewriting the path. On any machine whose user is not `bowser`, Matugen will not be invoked from Wallfliper.
- **Conditions:** Any non-bowser user after deploy_wallfliper
- **Consequences:** Dynamic theming broken until manual edit
- **Recommended fix:** Template the path at deploy time with $HOME, or use relative/XDG paths
- **Reproduction:** Static confirmation; runtime not executed here

### 2. Duplicate cliphist watchers in autostart

- **Severity:** Medium
- **File:** configs/hypr/configs/autostart.lua
- **Observed:** `wl-paste --type text --watch cliphist store` and image variant each appear twice
- **Problem:** Redundant processes
- **Recommended fix:** Keep a single pair of watchers
- **Reproduction:** Static confirmation

### 3. No complete uninstall path

- **Severity:** Medium
- **Problem:** System SDDM files are not backed up or removed by any project script
- **Recommended fix:** Add uninstall.sh covering system conf and theme directory with confirmation

### 4. SDDM system files outside backup

- **Severity:** Medium
- **Related:** install_sddm_qylock.sh writes /usr/share/sddm/themes/orbital and /etc/sddm.conf.d/10-waveshyprland.conf
- **Recommended fix:** Document recovery clearly (done in uninstall-and-recovery.md); optionally snapshot conf before write

### 5. Quickshell optional lockscreen vs package lists

- **Severity:** Low–Medium
- **Observed:** quickshell-related paths exist under qylock tree but are excluded from default rsync; Quickshell not in inspected main package lists
- **Problem:** Optional feature may be incomplete out of the box
- **Recommended fix:** Document as optional and list package dependency explicitly, or remove dead paths

---

## Investigation Leads Status

| Lead | Status |
|------|--------|
| Hardcoded /home/bowser | Confirmed |
| Eww weather JSON filename mismatch | Partial — multiple weather scripts present; exact writer/reader pairing needs runtime verification |
| monitor helper vs monitors.lua | Partial — monitor.sh exists; confirm output format before relying on it |
| Incorrect refresh-rate value | Not confirmed in sampled monitors.lua content |
| Duplicate clipboard watchers | Confirmed |
| Duplicate zoom shortcuts | Zoom bindings present once in sampled keybinds section; full file should be rechecked if issues arise |
| Clipboard delete advertised but missing | Requires reading cliphist.sh help text vs implementation |
| system-monitoring sleep comment mismatch | Requires reading the specific script body |
| Floating toggle identical branches | Requires reading toggle-all-float.sh |
| systemupdate partial-upgrade risk | systemupdate.sh exists (~103 lines); Arch partial upgrade risk is general — review whether it runs -Sy before -Su |
| SDDM path differences installer vs selector | Installer hardcodes orbital; sddm.sh is the interactive path — intentional split |
| btop consistency | Configs deployed; packages listed in pacman — verify btop presence in lists |
| No complete uninstall | Confirmed |

---

## Additional Observations

- rofi-emoji.sh is very large (~1866 lines); maintenance cost is high
- Some scripts assume tools from AUR that may fail to build
- Matugen templates exist for hyprland-colors.lua, waybar-colors.css, rofi.rasi, kitty.conf, eww-colors.scss/css

## Recommendations Summary

See recommendations.md for prioritized fix list.
