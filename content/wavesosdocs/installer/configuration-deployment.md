# Configuration Deployment

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---


## Script

scripts/deploy_configs.sh

## Behavior

- Source: ROOT/configs
- For each subdirectory under configs/:
  - Skip if empty of real files (only PLACEHOLDER / .gitkeep)
  - mkdir -p ~/.config/name
  - rsync -a excluding placeholders
- Also deploys top-level files such as mimeapps.list and kdeglobals when present

## Result

User configuration trees mirror the repository configs/ layout under ~/.config/.

## Notes

- Always run backup before deploy when preserving local customizations is important
- Hypr scripts receive chmod +x in post_setup
