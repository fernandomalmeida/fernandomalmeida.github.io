#!/bin/sh
# Compile all TypeScript
echo 'tsc --sourcemap --out js/app.js js/_all.ts'
tsc --sourcemap --out js/app.js js/_all.ts