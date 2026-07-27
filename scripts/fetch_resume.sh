#!/usr/bin/env bash
# Pull the latest resume from Google Drive into public/resume.pdf.
# The Drive file must be shared as "Anyone with the link".
set -euo pipefail

FILE_ID="${RESUME_DRIVE_FILE_ID:-10GsG53AJkSVRov_obHiLBLGnTLUG8b6H}"
DEST="$(cd "$(dirname "$0")/.." && pwd)/public/resume.pdf"
TMP="$(mktemp -t resume).pdf"

curl -fsSL -o "$TMP" "https://drive.google.com/uc?export=download&id=${FILE_ID}"

if [ "$(file --brief --mime-type "$TMP")" != "application/pdf" ]; then
  echo "Downloaded file is not a PDF — check that the Drive link is public." >&2
  rm -f "$TMP"
  exit 1
fi

mv "$TMP" "$DEST"
echo "Updated $DEST ($(wc -c < "$DEST" | tr -d ' ') bytes)"
