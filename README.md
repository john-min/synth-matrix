# 🎹 Synth Matrix

An AI-powered synthesizer recommendation app that analyzes your music taste and matches you with a legendary synthesizer from music history.

![Synth Matrix](https://img.shields.io/badge/status-live-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🎯 What It Does

1. **Enter your favorite artists** (e.g., Brian Eno, Boards of Canada, Four Tet)
2. **AI analyzes your taste** and creates a profile with 5 key characteristics
3. **Get matched** to one of 12 legendary synthesizers with detailed reasoning
4. **View your profile** with interactive scorecard and personalized analysis

## 🎨 Features

- **Two-stage AI analysis**: Profile generation → Synth matching
- **Interactive UI**: Tron-inspired neon aesthetic with CRT monitor grid
- **Probabilistic scorecard**: See breakdown of your musical preferences
- **Historical context**: Learn about iconic tracks made with each synth
- **Personalized insights**: AI explains why artists match specific synths

## 🎹 Featured Synthesizers

- Moog Minimoog (1970)
- Roland TB-303 (1982)
- Yamaha DX7 (1983)
- Prophet-5 (1978)
- Roland TR-808 (1980)
- Roland TR-909 (1983)
- Fairlight CMI (1979)
- ARP 2600 (1971)
- Oberheim OB-Xa (1980)
- Yamaha CS-80 (1977)
- Roland Juno-106 (1984)
- Korg M1 (1988)

## 🚀 Live Demo

[**Try it live →**](https://your-app.vercel.app)

## 💻 Local Development

### Prerequisites
- Node.js (v14+) OR Python 3
- Anthropic API key ([get one here](https://console.anthropic.com))

### Option 1: Node.js Server
```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/synth-matrix.git
cd synth-matrix

# Run the server
node server.js

# Open in browser
open http://localhost:8000/synth-matrix-clean-preview.html
```

### Option 2: Python Server
```bash
# Run the CORS-enabled server
python3 cors-server.py

# Open in browser
open http://localhost:8000/synth-matrix-clean-preview.html
```

## 🌐 Deploy to Vercel

### Quick Deploy
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Or Deploy via GitHub
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repo
5. Click "Deploy"

Done! 🎉

## 📁 Project Structure

```
synth-matrix/
├── synth-matrix-clean-preview.html  # Main app (HTML + React)
├── server.js                         # Node.js server (local dev)
├── cors-server.py                    # Python server (local dev)
├── vercel.json                       # Vercel configuration
├── api/
│   └── messages.js                   # Vercel serverless function
├── .gitignore
└── README.md
```

## 🔑 API Key

This app requires an Anthropic API key to function. Users enter their own key which is:
- Stored locally in browser `localStorage`
- Never sent anywhere except Anthropic's API
- Can be updated anytime

**Cost:** ~$0.02 per full analysis (profile + matching)

## 🎨 Design Inspiration

- **Tron**: Neon aesthetic, light streaks, grid backgrounds
- **Nam June Paik**: CRT monitors, video art, electronic aesthetic
- **Luis Barragán**: Results page with warm architectural colors
- **Brian Eno**: Minimalist philosophy, ambient timing

## 🛠️ Tech Stack

- **Frontend**: React (via CDN), vanilla JavaScript
- **Backend**: Node.js serverless function (Vercel)
- **AI**: Claude Sonnet 4 (Anthropic API)
- **Hosting**: Vercel (free tier)

## 📊 How It Works

### Stage 1: Profile Generation
AI analyzes artists and scores 5 characteristics (0-100):
- Sonic Character
- Production Style
- Timbre Match
- Era Alignment
- Genre Overlap

### Stage 2: Synth Matching
AI uses the profile to select best synth from 12 options, providing:
- Match confidence percentage
- Detailed reasoning
- Artist-to-synth connections
- Specific track examples

## 🤝 Contributing

Contributions welcome! Feel free to:
- Add more synthesizers
- Improve matching algorithm
- Enhance UI/UX
- Fix bugs

## 📄 License

MIT License - feel free to use this project however you'd like!

## 🙏 Acknowledgments

- Anthropic for Claude API
- All the legendary synthesizer manufacturers
- The artists who made iconic music with these instruments

## 💡 Future Ideas

- [ ] Add slider adjustments for profile weights
- [ ] Save/share results
- [ ] Compare multiple synth matches
- [ ] Add synth sound samples
- [ ] Integration with music streaming APIs
- [ ] Historical timeline of synth evolution

---

**Built with ❤️ and AI**
