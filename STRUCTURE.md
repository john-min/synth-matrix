# Synth Matrix - Folder Structure

## Recommended Structure for Deployment

```
synth-matrix/
├── public/
│   └── index.html              # Renamed from synth-matrix-clean-preview.html
├── api/
│   └── messages.js             # Vercel serverless function (API proxy)
├── server.js                   # Node.js local dev server (optional)
├── cors-server.py              # Python local dev server (optional)
├── vercel.json                 # Vercel deployment config
├── .gitignore                  # Git ignore rules
├── LICENSE                     # MIT License
├── README.md                   # Main documentation
└── DEPLOY.md                   # Deployment instructions (optional)
```

## Key Changes for Production

### 1. Rename HTML File
`synth-matrix-clean-preview.html` → `public/index.html`

**Why?**
- Standard convention for web apps
- Cleaner URLs (just `/` instead of `/synth-matrix-clean-preview.html`)
- Vercel automatically serves `index.html` as the root

### 2. Public Folder
All static assets go in `public/`:
- `index.html` - Main app
- `favicon.ico` - (add later)
- `og-image.png` - (for social sharing)

### 3. API Folder
Serverless functions go in `api/`:
- `messages.js` - Anthropic API proxy

## Alternative: Simple Structure (Also Works)

```
synth-matrix/
├── index.html                  # Main app
├── api/
│   └── messages.js             # Serverless function
├── vercel.json
├── .gitignore
├── LICENSE
└── README.md
```

**This is fine for simple projects!**

## What NOT to Include in Git

```
synth-matrix/
├── node_modules/               # ❌ Never commit
├── .env                        # ❌ Never commit
├── .vercel/                    # ❌ Auto-generated
├── .DS_Store                   # ❌ Mac junk files
└── api-test.html               # ❌ Development testing file
```

## Local Development Files (Optional)

These are helpful but not required for deployment:

```
synth-matrix/
├── server.js                   # For local Node.js testing
├── cors-server.py              # For local Python testing
├── DEPLOY.md                   # Deployment guide
└── docs/                       # Additional documentation
    ├── DESIGN.md
    └── API.md
```

## Final Recommendation

**For a clean, professional repo:**

```
synth-matrix/
├── index.html                  # ⭐ Renamed main file
├── api/
│   └── messages.js             # ⭐ Serverless function
├── vercel.json                 # ⭐ Config
├── .gitignore                  # ⭐ Git rules
├── LICENSE                     # ⭐ MIT
├── README.md                   # ⭐ Documentation
├── server.js                   # (optional - local dev)
└── cors-server.py              # (optional - local dev)
```

**Total: 5-7 files at root level - clean and simple!**
