# Installation Flow

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---


## Sequence Diagram

```mermaid
sequenceDiagram
    participant U as User
    participant I as install.sh
    participant Y as install_yay
    participant P as install_packages
    participant B as backup
    participant D as deploy_configs
    participant W as deploy_wallfliper
    participant WP as wallpapers
    participant T as themes
    participant S as sddm_qylock
    participant PS as post_setup

    U->>I: --all
    I->>Y: ensure yay
    I->>P: pacman + aur
    I->>B: backup config targets
    I->>D: rsync configs
    I->>W: rsync wallfliper
    I->>WP: clone/pull wallpapers
    I->>T: install themes
    I->>S: qylock + SDDM orbital
    I->>PS: chmod + seeds
    I-->>U: reboot required
```

## State After Successful Full Install

- Packages present
- Backup directory created
- ~/.config trees populated
- Wallfliper present (config may need path fix)
- Wallpapers under ~/Pictures/Wallpapers
- Themes installed
- SDDM theme orbital active
- Scripts executable; color seed files present

## Failure Points

| Stage | Common failure |
|-------|----------------|
| yay | network, makepkg deps |
| packages | AUR build failure, conflicts |
| wallpapers | network, git, empty result |
| sddm | sudo failure, missing theme path |
| any | set -e aborts remaining stages |

## Idempotency Notes

- yay: no-op if present
- packages: package manager needed/noconfirm semantics
- backup: always new directory
- deploy: rsync update
- wallpapers: pull or leave or clone
- sddm: re-copy theme and rewrite conf
- post: seed only if missing
