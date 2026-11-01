# Wallpaper Installation

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---


## Script

scripts/install_wallpapers.sh

## Behavior

- Destination: ~/Pictures/Wallpapers
- Repository: https://github.com/WavesOS-Repos/WavesWallpapers.git
- If destination is a git repo: git pull --ff-only
- If destination exists and is non-empty but not git: warn and leave as-is
- Otherwise: remove and git clone --depth 1
- Ownership fix if running under sudo context
- Fail if directory is empty after operation

## Notes

Requires network and git. Large download possible. Wallfliper typically scans this directory.
