#!/usr/bin/env bash
# Assembla dist/ con i soli file serviti in produzione.
set -euo pipefail

cd "$(dirname "$0")/.."

rm -rf dist
mkdir -p dist

cp index.html manifest.json sw.js dist/
cp -R css js assets dist/

echo "dist/ pronto:"
find dist -type f | sort
