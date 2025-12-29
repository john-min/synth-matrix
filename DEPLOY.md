# Deploy Synth Matrix to Vercel

## Quick Deploy (5 minutes)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Organize Files
Make sure your folder has:
```
synth-matrix/
├── synth-matrix-clean-preview.html
├── vercel.json
└── api/
    └── messages.js
```

### Step 3: Deploy
```bash
cd synth-matrix
vercel
```

Follow the prompts:
- "Set up and deploy"? **Y**
- "Which scope"? (your account)
- "Link to existing project"? **N**
- "What's your project's name"? **synth-matrix** (or whatever you want)
- "In which directory is your code located"? **./**

### Step 4: Done!
You'll get a URL like: `https://synth-matrix.vercel.app`

---

## Alternative: Deploy via GitHub + Vercel Web UI

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/synth-matrix.git
git push -u origin main
```

### Step 2: Connect Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repo
4. Click "Deploy"

Done!

---

## Free Tier Limits
- ✅ 100 GB bandwidth/month
- ✅ Unlimited requests
- ✅ Automatic HTTPS
- ✅ Global CDN

Perfect for this app!

---

## After Deployment

Your app will be live at: `https://your-project.vercel.app`

Users just:
1. Visit the URL
2. Enter their Anthropic API key
3. Enter artists
4. Get matched to a synth!

No local server needed anymore 🎉
