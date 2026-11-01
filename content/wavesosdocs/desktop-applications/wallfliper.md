# Wallfliper

## Wallfliper Overview

**App path:** `~/.config/wallfliper` (deployed from `apps/wallfliper`)  
**Run:** `python main.py` from that directory (or your wrapper)

---

### Significance

Wallfliper is the **wallpaper picker** for WavesOS: browse library, set static or video wallpapers, restore on login, and trigger Matugen so the whole rice recolors.

---

### How we built / integrated it

1. Shipped as an app tree (Python + UI), not only a shell script.  
2. Session autostart restores the last wallpaper.  
3. Colour hook calls Matugen (config must use **your** `$HOME`, not a hardcoded foreign path).  
4. Works with swww/awww/mpvpaper-style backends depending on build.

---

### How to use

```bash
cd ~/.config/wallfliper
python main.py
```

After install, fix any hardcoded paths in `config.json` hooks. Pair with `matugen-from-wall.sh` if the hook is not enough.

## Wallfliper Architecture

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

### Layers

- main.py — CLI and application bootstrap
- core/ — library scanning, backends, thumbnails, previews, colors, cache GC, single instance, state, integrations, deps
- ui/ — Qt bridge, model, QML, shaders

### Backends

- Images: swww or awww
- Video: mpvpaper

### Config

config.json including color_hook (currently hardcoded path — see audits)

## Cache Management

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

core/cachegc.py and thumbnail/preview caches under XDG cache locations. GC prevents unbounded growth.

## Color Extraction

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

core/colors.py and related code extract palettes; color_hook invokes external Matugen pipeline.

## Wallfliper Configuration Reference

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

### config.json

Observed keys:

- color_hook — shell command template with {path} placeholder

### Important

Replace /home/bowser with the actual home directory after deployment.

## Wallfliper Dependencies

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

### Python

PySide6>=6.7 (system package preferred)

### System

layer-shell-qt, swww or awww, mpvpaper, ffmpeg

### Check

`python main.py --check` reports dependency status (per entry point docstring)

## Wallfliper Development Guide

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

- Prefer system PySide6 matching layer-shell-qt
- Use a venv only for pure Python experimentation
- Test --check, GUI launch, image apply, video apply, --restore
- Do not commit machine-specific absolute paths in config.json

## Image Processing

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

Thumbnail and preview generation for still images; color classification hooks into the theming pipeline.

## Wallfliper Installation

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

See installer/wallfliper-deployment.md. After deploy, fix config.json path and ensure system deps are installed via packages lists.

## Keyboard Navigation

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

Wallfliper provides keyboard controls in the GUI (arrow navigation, confirm, cancel, search). Exact bindings are defined in the QML/UI layer — inspect ui/ for the authoritative list when documenting shortcuts for end users.

## Wallfliper Entry Point

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

### CLI (from main.py docstring)

- wallfliper / main.py — launch GUI
- --check — dependency report
- --restore — restore last wallpaper (used from Hyprland autostart)
- Helpers for autostart desktop file installation

### Qt Path Setup

Prepends system Qt6 QML and plugin paths for layer-shell compatibility.

## Wallfliper Python Modules

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

### core/

library, state, colors, thumbnails, previews, firstframe, seamless, backends, integrations, deps, portal, cachegc, single_instance

### ui/

bridge, model, qml/, shaders

Inspect individual modules for class-level APIs when extending.

## Qt and QML

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

UI is implemented with PySide6 and QML under ui/qml. Layer-shell integration depends on matching system Qt and layer-shell-qt plugins.

## Transitions

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

Transition lifecycle is handled in core modules (seamless, firstframe, backends). Applying a new wallpaper while a transition is active should be handled by the backend queue or cancellation logic — verify in source when modifying.

## Wallfliper Troubleshooting

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

### Symptoms and Checks

| Symptom | Check |
|---------|-------|
| GUI does not start | python main.py --check; PySide6; layer-shell-qt |
| Images do not apply | swww query; swww-daemon running |
| Videos do not apply | mpvpaper installed; ffmpeg present |
| No color update | color_hook path valid and executable |
| Restore fails at login | delay in autostart; path to main.py |

## User Interface

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

Layer-shell overlay UI with card layouts, search/filtering, palette filtering, and asynchronous workers for scanning and thumbnail generation.

## Video Processing

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

Uses ffmpeg for first-frame extraction, animated previews, and related video support paths. mpvpaper applies video wallpapers.

## Wallpaper Backends

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

- swww / awww for images
- mpvpaper for video
Backends package under core/backends implements the apply/transition logic.

## Wallpaper Scanning

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---

core/library.py scans configured directories (including ~/Pictures/Wallpapers after install) for supported image and video formats.
