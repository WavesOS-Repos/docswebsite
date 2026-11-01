# Dependency Audit

**Project:** WavesHyprland  
**Version:** 0.1.0  
**Branch:** main (WavesOS current)

---

## Package Lists Present

- packages/pacman.txt
- packages/aur.txt

## Wallfliper Python

- Declares PySide6>=6.7
- Recommends system PySide6 for layer-shell-qt compatibility
- System tools: swww/awww, mpvpaper, ffmpeg, layer-shell-qt

## Potential Gaps

- Quickshell not in main lists while optional lockscreen paths exist
- Any script-invoked binary not listed should be audited when extending (search scripts for command names)

## Partial Upgrade Note

Arch Linux discourages partial upgrades. Ensure update scripts do not sync databases without upgrading the full set when offering a one-click updater.
