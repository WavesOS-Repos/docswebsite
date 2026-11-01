# Plugin Manager

**Repository:** WavesHyprland  
**Script:** `~/.config/hypr/scripts/hypr-plugins.sh`  
**Catalog:** built-in list and/or `~/.config/hypr/plugins/catalog.txt`  
**Related:** `configs/hypr/configs/plugins.lua`

---

## Significance in WavesOS

WavesOS treats Hyprland plugins as **optional power features**, not silent defaults. The plugin manager exists so users can:

- Discover plugins that appear on the official site [hypr.land/plugins](https://hypr.land/plugins)
- Install them the **supported way** (`hyprpm add` → `hyprpm enable` → `hyprpm reload`)
- Avoid random Git clones and mismatched builds

This matches the rice philosophy: **readable tools in the terminal**, not a hidden GUI control center.

---

## How we built it

1. **Catalogue-driven** — Only plugins from the official listing (and known hyprpm ids) are offered. Format: `id|display name|repo URL|hyprpm plugin id|type`.
2. **Correct install path** — Uses `hyprpm add <repo-root>` (e.g. `https://github.com/sandwichfarm/hyprexpo`), not ad-hoc paths. GitHub `/tree/...` URLs are normalized to the repo root.
3. **Terminal UI** — Same interaction model as Settings: ↑/↓, Space to toggle, Enter to apply, Esc to cancel. Runs in floating Kitty (`class: hypr-plugins`).
4. **State awareness** — Reads `hyprpm list` (ANSI stripped) and optional `hyprctl plugin list` to show installed / enabled / loaded.
5. **Safe apply** — Adds each repo once per run; enables or disables to match the user’s selection; then `hyprpm reload`. Duplicate plugin ids (two hyprexpo forks) cannot both be enabled.

---

## How to use it

### Launch

```bash
kitty --class hypr-plugins -e ~/.config/hypr/scripts/hypr-plugins.sh
```

Typical keybind:

```lua
hl.bind(mainMod .. " + SHIFT + P",
    hl.dsp.exec_cmd("kitty --class hypr-plugins -e ~/.config/hypr/scripts/hypr-plugins.sh"))
```

### Window rule

```lua
hl.window_rule({
    name = "hypr-plugins",
    match = { class = "hypr-plugins" },
    float = true,
    center = true,
    size = "900 600",
})
```

### Controls

| Key | Action |
|-----|--------|
| ↑ / ↓ | Move |
| Space | Toggle plugin in the desired set |
| Enter | Apply (hyprpm add/enable/disable + reload) |
| Esc | Cancel |

Marks: `[x]` enable, `[ ]` disable, `[-]` external (not managed by hyprpm).

### After enabling

Some plugins need **keybinds** (hyprexpo, hyprspace, easymotion, hy3, …). Others work from config alone (hyprbars, borders-plus-plus, hyprtrails, hyprfocus).

Recommended autostart so plugins load after login:

```lua
hl.exec_cmd("hyprpm reload -n")
```

### Troubleshooting

| Issue | What to do |
|-------|------------|
| hyprpm missing | Install the package that provides `hyprpm` for your Hyprland build |
| Enable fails | Run `hyprpm list`; fix the plugin id column in the catalogue |
| Not loaded after reboot | Add `hyprpm reload -n` to autostart |
| ABI / version errors | `hyprpm update-headers`, then re-enable; keep Hyprland and plugins updated together |

---

## Security

Plugins load **into the compositor**. Only catalogue URLs are used. Prefer official / featured plugins from hypr.land.
