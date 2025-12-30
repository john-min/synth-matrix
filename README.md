# 🎹 Synth Matrix

An AI-powered synthesizer recommendation app that analyzes your music taste and matches you with a legendary synthesizer from music history.

![Synth Matrix](https://img.shields.io/badge/status-live-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🎯 What It Does

1. **Browse the synth gallery** - Explore 12 legendary synthesizers in a CRT monitor grid
2. **Click any synth** to learn its history, iconic tracks, and sonic character
3. **OR use AI matching**: Enter your favorite artists for personalized recommendations
4. **Get matched** with detailed reasoning, scorecard analysis, and artist connections

## 🎨 Features

### Interactive Synth Gallery
- **4×3 CRT monitor grid** with flip card animations
- **Click any synth** to view detailed information
- **Hover effects** with Tron-inspired neon borders
- **Lazy-loaded images** for optimal performance

### AI-Powered Matching (Optional)
- **Two-stage analysis**: Profile generation → Synth matching
- **Taste profiling**: 5-dimensional analysis of your musical preferences
- **Probabilistic scorecard**: Visual breakdown of match reasoning
- **Artist-to-synth connections**: Specific examples linking your artists to the synth

### Results Page
- **Barragan-inspired design**: Warm architectural colors and minimalism
- **Historical context**: Learn about each synth's impact on music
- **Iconic tracks**: See which legendary songs used each instrument
- **Animated gradients**: Brian Eno-inspired ambient aesthetics

## 🎹 Featured Synthesizers

1. **Moog Minimoog** (1970) - Set template for all analog synths
2. **Roland TB-303** (1982) - Created acid house genre
3. **Yamaha DX7** (1983) - Best-seller, defined 80s sound
4. **Prophet-5** (1978) - First programmable polysynth
5. **Roland TR-808** (1980) - Foundation of hip-hop/trap
6. **Roland TR-909** (1983) - Blueprint for house/techno
7. **Fairlight CMI** (1979) - Introduced sampling
8. **ARP 2600** (1971) - Semi-modular innovation
9. **Oberheim OB-XA** (1980) - Analog polyphonic standard
10. **Yamaha CS-80** (1977) - Cinematic synthesizer king
11. **Roland Juno-106** (1984) - Democratized polysynth
12. **Korg M1** (1988) - Workstation revolution

## 🚀 Live Demo

[**Try it live →**](https://synth-matrix.vercel.app)

## 💻 Local Development

### Prerequisites
- Node.js (v14+) for local development server
- Anthropic API key ([get one here](https://console.anthropic.com)) - only needed for AI matching

### Running Locally
```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/synth-matrix.git
cd synth-matrix

# Install dependencies
npm install

# Run development server
node server.js

# Open in browser
open http://localhost:8000
```

### Without AI Matching (No API Key Needed)
You can still browse all synths and view their details - just click any card!

## 🌐 Deploy to Vercel

### One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/synth-matrix)

### Manual Deploy
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
5. Vercel auto-detects configuration
6. Click "Deploy"

Done! 🎉

## 📁 Project Structure

```
synth-matrix/
├── index.html                        # Main app (single-file React app)
├── server.js                         # Node.js dev server
├── vercel.json                       # Vercel deployment config
├── package.json                      # Dependencies
├── api/
│   └── messages.js                   # Serverless API endpoint for Claude
├── public/
│   └── images/
│       └── synths/
│           ├── minimoog.jpeg         # All 12 synth images
│           ├── tb-303.jpeg
│           ├── dx7.jpeg
│           └── ... (12 total)
├── .gitignore
└── README.md
```

## 🔑 API Key (Optional)

The AI matching feature requires an Anthropic API key. Users:
- Enter their own API key (optional)
- Key is stored locally in browser `localStorage`
- Never sent anywhere except Anthropic's API
- Can browse synths without an API key

**Cost:** ~$0.02 per full AI analysis (profile + matching)

**Without API key:** Browse and click any synth to view details!

## 🎨 Design Philosophy

### Visual Language
- **Tron-inspired neon**: Cyan borders, animated light streaks, grid patterns
- **Nam June Paik**: CRT monitor aesthetic, video art influence
- **Luis Barragán**: Results page with warm architectural minimalism
- **Brian Eno**: Ambient timing, generative aesthetics, slow animations

### Color Palettes
Each synth has a unique color palette for its results page:
- **Minimoog**: Deep navy blue (`#2C4A6B`)
- **TB-303**: Acid lime green (`#3D5E3D`)
- **DX7**: Warm beige/tan (`#8B7355`)
- **Prophet-5**: Deep mauve (`#8B5A7C`)
- **TR-808**: Terracotta red (`#A85446`)
- **TR-909**: Dusty pink (`#9B5B7A`)
- **Fairlight CMI**: Steel blue (`#5B7B9B`)
- **ARP 2600**: Deep violet (`#6B4A7C`)
- **OB-XA**: Burnt orange (`#A86446`)
- **CS-80**: Warm amber (`#9B7A46`)
- **Juno-106**: Coral/peach (`#FFD6A5`)
- **M1**: Sage green (`#5B8B6B`)

## 🛠️ Tech Stack

- **Frontend**: React 18 (CDN), Babel (runtime JSX compilation)
- **Backend**: Node.js serverless function (Vercel)
- **AI**: Claude Sonnet 4 (Anthropic API)
- **Hosting**: Vercel (free tier)
- **Images**: Local hosting (~200KB total, all <50KB each)
- **Styling**: Vanilla CSS with animations

## 📊 How It Works

### Browse Mode (No API Key)
1. View 4×3 grid of synth cards
2. Hover to see images (flip animation)
3. Click any card to view full details
4. See history, iconic tracks, and impact

### AI Matching Mode (API Key Required)

**Stage 1: Profile Generation**
Claude analyzes your artists and creates a taste profile with 5 scores (0-100):
- **Sonic Character**: How much you value specific sonic textures
- **Production Style**: Experimental vs. polished production approach  
- **Timbre Match**: Preference for specific instrument timbres
- **Era Alignment**: Connection to specific musical eras
- **Genre Overlap**: Genre consistency vs. eclecticism

**Stage 2: Synth Matching**
Claude uses your profile to select the best synth, providing:
- Match confidence percentage (85-98%)
- Detailed reasoning (2-3 sentences)
- Sonic profile description
- Artist-to-synth connections with specific examples
- Visual scorecard breakdown

## 🎯 Key Features

### Interactive Elements
- ✅ Flip card animations on hover
- ✅ Click-to-explore synth details
- ✅ Animated gradients and light effects
- ✅ Cursor glow effect
- ✅ Scanline overlays (CRT aesthetic)

### Performance Optimizations
- ✅ Lazy-loaded images (`loading="lazy"`)
- ✅ Optimized image sizes (<50KB each)
- ✅ Local image hosting (no external CDNs)
- ✅ `object-fit: contain` for proper image scaling

### AI Features
- ✅ Two-stage analysis (profile → matching)
- ✅ Probabilistic scoring (0-100 scale)
- ✅ Detailed explanations with examples
- ✅ Historical context integration

## 🤝 Contributing

Contributions welcome! Ideas:
- Add more synthesizers to the library
- Improve AI matching prompts
- Enhance animations and UI effects
- Add synth sound samples
- Create comparison mode
- Build timeline view

## 📄 License

MIT License - feel free to use this project however you'd like!

## 🙏 Acknowledgments

- Anthropic for Claude Sonnet 4 API
- All the legendary synthesizer manufacturers
- The artists who created iconic music with these instruments
- Nam June Paik for video art inspiration
- Luis Barragán for architectural color theory
- Brian Eno for ambient design philosophy

## 💡 Future Roadmap

- [ ] Migrate to Vite for better performance
- [ ] Add profile weight sliders (user adjustments)
- [ ] Save/share results with unique URLs
- [ ] Compare multiple synth matches side-by-side
- [ ] Integrate Web Audio API for synth demos
- [ ] Add MIDI controller support
- [ ] Create historical timeline visualization
- [ ] Mobile app version
- [ ] Spotify/Apple Music integration

## 📈 Performance

- **Initial Load**: ~400KB (React + Babel from CDN)
- **Images**: ~200KB total (12 optimized JPEGs)
- **First Contentful Paint**: <2s
- **Time to Interactive**: <3s
- **Lighthouse Score**: 85+ (Performance)

**Note**: Migrating to Vite would reduce bundle size to ~140KB and improve TTI to <1s.

---

**Built with ❤️ and Claude Sonnet 4**
