# Plugins (catalogue overview)

**Related:** [plugin-manager.md](plugin-manager.md), `configs/hypr/plugins/catalog.txt`, `configs/hypr/configs/plugins.lua`

---

## Significance

WavesOS does **not** ship every Hyprland plugin enabled. The catalogue documents what users *may* install through the plugin manager, aligned with [hypr.land/plugins](https://hypr.land/plugins).

---

## Catalogue fields

```text
id|display name|repository URL|hyprpm plugin id|type
```

- **type `hyprpm`** — managed by `hypr-plugins.sh`
- **type `external`** — listed only (e.g. pyprland); install outside hyprpm

Monorepo example: `https://github.com/hyprwm/hyprland-plugins` provides `hyprbars`, `borders-plus-plus`, `hyprtrails`, `hyprfocus`, `csgo-vulkan-fix`, etc.

---

## Needs keybinds vs automatic

**Often needs binds:** hyprexpo, hyprspace, gloview, scrolloverview, hymission, easymotion, hy3, hyprRiver, hyprNStack, virtual-desktops.

**Mostly automatic:** hyprbars, borders-plus-plus, hyprtrails, hyprfocus, hyprwinwrap, hyprgrass, dynamic-cursors, confined-floats, csgo-vulkan-fix.

---

## User workflow

1. Open Plugin Manager (Super+Shift+P or your bind).
2. Space-select plugins → Enter to apply.
3. Add keybinds for overview/layout plugins if required.
4. Ensure `hyprpm reload -n` runs on session start.
