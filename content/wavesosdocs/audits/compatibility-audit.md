# Compatibility Audit

**Project:** WavesHyprland  
**Version:** 0.1.0  
**Branch:** main (WavesOS current)

---

## Target

Arch Linux + Hyprland + Wayland + SDDM

## Risks

- Non-Arch: require_arch may fail
- Older Hyprland without Lua config support: incompatible
- Missing AUR helper build toolchain: yay stage fails
- NVIDIA / proprietary driver quirks: general Hyprland concern, not project-specific
