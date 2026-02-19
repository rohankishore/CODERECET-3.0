#!/bin/bash
cd /workspaces/CODERECET-3.0/public/assets/footer

# Delete PNG files
rm -f discord-logo.png
rm -f facebook-logo.png
rm -f github-logo.png
rm -f linkedin-logo.png
rm -f twitter-logo.png
rm -f vector.png

# Rename SVG files to uniform naming
[ -f "discord.svg" ] && mv discord.svg discord-logo.svg
[ -f "facebook.svg" ] && mv facebook.svg facebook-logo.svg
[ -f "github.svg" ] && mv github.svg github-logo.svg
[ -f "linkedin.svg" ] && mv linkedin.svg linkedin-logo.svg
[ -f "twitter.svg" ] && mv twitter.svg twitter-logo.svg
[ -f "Vector.svg" ] && mv Vector.svg vector.svg

echo "Cleanup complete. Current files:"
ls -la
