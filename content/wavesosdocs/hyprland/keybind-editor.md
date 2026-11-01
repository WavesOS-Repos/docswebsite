# Keybind Editor

**Script:** `~/.config/hypr/scripts/keybind-editor.sh`  
**Edits:** `~/.config/hypr/configs/keybinds.lua`  
**Backup:** `keybinds.lua.bak-keybind-editor`

---

## Significance in WavesOS

Keybinds define the daily feel of the rice. The editor exists so users can **change, add, and remove** binds without learning the full Lua API up front — while still writing real `hl.bind(...)` lines into the modular config.

Built as a **terminal tool** (not Rofi typing), because chord entry and confirmation need a full keyboard.

---

## How we built it

1. **Parser for one-line and multi-line `hl.bind`** — Many binds in WavesOS span two lines; an early version only saw ~26 binds. The current parser balances parentheses across lines so SHIFT/ALT/CTRL binds appear.
2. **Normalized chords** — `SUPER+SHIFT+E` form for display and conflict checks.
3. **Free-key suggestions** — Offers unused SUPER / SUPER+SHIFT / SUPER+ALT / SUPER+CTRL combinations when adding binds.
4. **Change key** — Rewrites only the key expression of the selected bind; keeps the action.
5. **Add command bind** — Appends `hl.bind(..., hl.dsp.exec_cmd("..."))`.
6. **Remove** — Deletes the full bind (multi-line aware) only after the user types **`DELETE`**.
7. **Workspace loops** — Binds generated with `.. key` in a `for` loop appear as templates, not 30 separate lines.

---

## How to use

### Launch

```bash
kitty --class hypr-keybinds -e ~/.config/hypr/scripts/keybind-editor.sh
```

Keybind example:

```lua
hl.bind(mainMod .. " + SHIFT + K",
    hl.dsp.exec_cmd("kitty --class hypr-keybinds -e ~/.config/hypr/scripts/keybind-editor.sh"))
```

### Menu

1. **Change existing** — Pick number → type new chord (`SUPER+SHIFT+Q`) → reload  
2. **Add new** — Type command → pick free key or type your own → append + reload  
3. **Remove** — Pick number → type exactly `DELETE` → removed + reload  
4. **Open keybinds.lua** — Full manual edit  

### Window rule

```lua
hl.window_rule({
    name = "hypr-keybinds",
    match = { class = "hypr-keybinds" },
    float = true,
    center = true,
    size = "1000 650",
})
```

### Tips

- Prefer `SUPER+KEY` style when typing; `mainMod` is inserted automatically for SUPER.
- If a key is already used, the editor warns before overwrite (change) or blocks (add).
- Restore from `keybinds.lua.bak-keybind-editor` if needed.
