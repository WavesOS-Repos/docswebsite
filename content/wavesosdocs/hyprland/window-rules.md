# Window Rules (WavesOS floating tools)

**File:** `configs/hypr/configs/windowrules.lua`

---

## Significance

Floating, centered windows make the **terminal tools** (settings, keybind editor, plugins, autostart, qylock picker) feel like small apps without a custom toolkit UI.

---

## Patterns we use

```lua
hl.window_rule({
    name = "hypr-settings",
    match = { class = "hypr-settings" },
    float = true,
    center = true,
    size = "900 600",
})
```

Common classes:

| Class | Tool |
|-------|------|
| `hypr-settings` | settings.sh |
| `hypr-keybinds` | keybind-editor.sh |
| `hypr-plugins` | hypr-plugins.sh |
| `hypr-autostart` | autostart-editor.sh |
| `qylock-sddm` | SDDM theme picker terminal |
| `floating-terminal` | Super+Shift+Return Kitty |
| `editor` / `yazi` | Floating editor / yazi |

Thunar (and similar) may use opacity/transparency rules so the file manager matches the rice.

Launch tools with `kitty --class <name> -e <script>` so rules match.
