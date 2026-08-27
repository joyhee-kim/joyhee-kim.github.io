# sohee-kim.github.io

A lightweight academic homepage for GitHub Pages, inspired by the structure of `akatigre.github.io` (profile sidebar + long-form academic CV sections), but implemented as a simple static site so it is easy to edit.

## Files

```text
sohee-kim.github.io/
├─ index.html                  # All page text/sections
├─ assets/
│  ├─ css/style.css            # Design / spacing / responsive layout
│  ├─ js/main.js               # Active navigation + small helpers
│  ├─ img/sohee_photo.jpg      # Profile photo
│  └─ cv/Sohee_Kim_CV.pdf      # Downloadable CV
└─ README.md
```

## Easiest edits

Open `index.html` in any text editor (VS Code is recommended). Search for `EDIT:` comments.

Typical things to change:
- About paragraph
- Google Scholar / GitHub / LinkedIn links
- Publication titles, authors, venues, and paper/code/project links
- New projects or awards
- Graduation date / position

If you only want to change colors, spacing, or the profile-photo crop, edit `assets/css/style.css`.

## Preview locally

Option 1: double-click `index.html`.

Option 2 (recommended): from this folder run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to GitHub Pages

For the requested URL `https://sohee-kim.github.io/`, the GitHub account must be named `sohee-kim`, and the repository must be named exactly:

```text
sohee-kim.github.io
```

Then:
1. Create the public repository `sohee-kim.github.io`.
2. Upload everything in this folder to the repository root.
3. Commit to the `main` branch.
4. In **Settings → Pages**, use **Deploy from a branch**, `main`, `/ (root)` if GitHub does not enable it automatically.
5. Wait a minute or two, then visit `https://sohee-kim.github.io/`.

If your GitHub username is different, use `<your-username>.github.io` as both the repository name and URL.

## Privacy note

The public page intentionally includes the email address from the CV, but not the phone number. The original CV PDF is still linked, so remove or replace that PDF if you do not want the phone number publicly downloadable.
