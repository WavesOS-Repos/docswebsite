# Wallfliper Deployment

**Repository:** WavesHyprland  
**Branch:** main (WavesOS current)
**Version:** 0.1.0

---


## Script

scripts/deploy_wallfliper.sh

## Behavior

- Source: apps/wallfliper
- Destination: ~/.config/wallfliper
- rsync -a excluding placeholders
- Explicitly does not pip-install requirements
- Skips with warning if source tree is empty

## Critical Post-Deploy Issue

config.json contains a hardcoded color_hook path under /home/bowser/. This is not rewritten by the deploy script. Users other than bowser must edit the path manually for Matugen integration to work.

## Runtime

Users launch via python ~/.config/wallfliper/main.py or an installed entry point. Autostart restore is invoked from Hyprland autostart with a 5 second delay.
