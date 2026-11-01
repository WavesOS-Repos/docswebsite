# install.sh — Main Entry Point

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---


## Location

Repository root: install.sh

## Behavior Summary

- Sources scripts/common.sh
- Defines run_step, sudo_keep_alive, full_install, usage, menu
- Parses flags or shows interactive menu
- Full install runs all stages in fixed order and prints reboot banner

## Full Install Order (from source)

1. install_yay.sh
2. install_packages.sh
3. backup_configs.sh
4. deploy_configs.sh
5. deploy_wallfliper.sh
6. install_wallpapers.sh
7. install_themes.sh
8. install_sddm_qylock.sh
9. post_setup.sh

## sudo_keep_alive

Authenticates once with sudo -v, then refreshes every 30 seconds in a background subshell until the installer exits. Trap kills the background PID on EXIT.

## Quiet Mode

Default WAVES_QUIET=1 suppresses log and ok messages while still showing errors and the final reboot banner.

## Usage Output

Reads VERSION file for version string in help text.

## Error Handling

Any failed run_step calls die with the step name.
