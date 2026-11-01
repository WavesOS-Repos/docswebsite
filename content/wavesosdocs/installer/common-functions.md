# common.sh — Shared Helpers

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---


## Location

scripts/common.sh

## Key Variables

| Variable | Derivation | Purpose |
|----------|------------|---------|
| COMMON_DIR | dirname of common.sh | scripts directory |
| ROOT | parent of COMMON_DIR | repository root |
| USER_HOME | SUDO_USER home or HOME | target user home |
| CONFIG_DIR | USER_HOME/.config | config root |
| LOCAL_SHARE | USER_HOME/.local/share | local share |
| BACKUP_ROOT | CONFIG_DIR/WavesHyprland-backup-TIMESTAMP | backup path |
| WAVES_QUIET | env, default 1 | quiet logging |

## Logging Helpers

- log — cyan prefix, suppressed when quiet
- ok — green check, suppressed when quiet
- warn — yellow, always shown to stderr
- err — red, always shown to stderr
- die — error and exit non-zero

## Usage Pattern

Every installer stage sources common.sh relative to its own location so ROOT and CONFIG_DIR resolve correctly whether invoked from install.sh or directly.
