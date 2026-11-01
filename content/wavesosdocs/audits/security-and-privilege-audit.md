# Security and Privilege Audit

**Project:** WavesHyprland  
**Version:** 0.1.0  
**Branch:** main (WavesOS current)

---

## Privilege Boundaries

| Action | Privilege | Script |
|--------|-----------|--------|
| Install packages | root | install_packages.sh / yay |
| Install yay | root (pacman) + user (makepkg) | install_yay.sh |
| Write SDDM themes | root | install_sddm_qylock.sh |
| Write SDDM conf.d | root | install_sddm_qylock.sh |
| Deploy user configs | user | deploy_*.sh |
| Runtime Hypr scripts | user | configs/hypr/scripts/* |

## Observations

- sudo_keep_alive reduces password prompts but keeps a privileged ticket alive for the install duration
- No evidence of downloading and executing arbitrary remote code beyond git clones of known repos (yay AUR, WavesWallpapers) and package manager operations
- rsync deploy does not validate content beyond exclude lists
- Wallfliper color_hook executes a shell script path from config — if an attacker can write config.json they can influence what runs when a wallpaper is applied (user-level)
- No setuid binaries introduced by the project itself

## Risks

- A compromised or malicious AUR package (general AUR risk, not unique to this project)
- Accidental overwrite of user configs (mitigated by backup, but backup is optional if stages are run selectively)
- System SDDM changes without backup

## Recommendations

- Prefer explicit confirmation before SDDM system writes
- Rewrite hardcoded paths at deploy time
- Document that AUR trust is required
- Consider checksums or pinned commits for wallpaper repo if supply-chain hardening is desired
