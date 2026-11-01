# Installation Options

---

## Command-Line Flags

From `install.sh` usage and implementation:

| Flag / Mode | Action | Script invoked |
|-------------|--------|----------------|
| (no args) | Interactive menu | menu() |
| `--all` | Full pipeline | all stages in order |
| `--yay` | Install yay | install_yay.sh |
| `--packages` | Install packages | install_packages.sh |
| `--backup` | Backup configs | backup_configs.sh |
| `--configs` | Deploy configs | deploy_configs.sh |
| `--wallfliper` | Deploy Wallfliper | deploy_wallfliper.sh |
| `--wallpapers` | Clone/update wallpapers | install_wallpapers.sh |
| `--themes` | Install themes | install_themes.sh |
| `--sddm` | Deploy SDDM/qylock | install_sddm_qylock.sh |
| `--post` | Post-setup | post_setup.sh |

Environment:

| Variable | Default | Effect |
|----------|---------|--------|
| `WAVES_QUIET` | `1` | Suppress non-error logs when set to 1 |

Example verbose full install:

```bash
WAVES_QUIET=0 ./install.sh --all
```

## Interactive Menu

When run without arguments, the installer presents a numbered menu corresponding to the stages above (Full install, yay, packages, backup, deploy configs, Wallfliper, wallpapers, themes, SDDM, post).

## Running Stages Independently

Stages are designed to be independently executable. Consequences:

- Running `--packages` alone installs software without deploying configs.
- Running `--configs` without a prior backup will still deploy; existing files may be overwritten according to rsync behavior (backup is recommended first).
- Running `--sddm` writes system files under `/usr/share/sddm` and `/etc/sddm.conf.d`.
- Running `--wallpapers` clones or pulls the wallpaper repository; non-git existing directories are left alone with a warning.
- Running `--post` is largely idempotent for seeding missing color files.

## Full vs Partial

| Goal | Recommended flags |
|------|-------------------|
| New machine, full rice | `--all` then reboot |
| Only update packages | `--packages` |
| Only refresh configs after git pull | `--backup` then `--configs` then `--post` |
| Only fix SDDM theme | `--sddm` |
| Only deploy Wallfliper updates | `--wallfliper` |

## Exit Behavior

- Failed steps call `die` and abort the current run.
- Successful full install prints a reboot banner and the path of the last backup (from `/tmp/waveshyprland-last-backup` if present).

## Re-running the Installer

Re-running is supported. Each backup creates a new timestamped directory. Package installation uses `--needed` style behavior where applicable. Config deployment uses rsync and will update files to match the repository tree.
