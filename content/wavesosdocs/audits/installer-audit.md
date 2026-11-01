# Installer Audit

**Project:** WavesHyprland  
**Version:** 0.1.0  
**Branch:** main (WavesOS current)

---

## Positive

- Clear stage separation
- Independent stage execution
- sudo keep-alive
- Explicit reboot messaging
- Skip empty trees

## Issues

- No automatic path rewriting for Wallfliper config
- System changes without backup
- No uninstall counterpart
- Quiet mode can hide useful progress during long AUR builds (users may prefer WAVES_QUIET=0)

## Suggestions

- Add --dry-run
- Record installed package set and SDDM changes in a state file for future uninstall
- Post-deploy sed/replace for known HOME placeholders
