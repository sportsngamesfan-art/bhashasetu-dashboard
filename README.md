# BhashaSetu Robot Dashboard

A beautiful React dashboard for the BhashaSetu language collection robot, featuring real-time robot status monitoring, statistics, and recordings tracking.

## Features

- 🤖 **Robot Status Card** - Live display of robot status (Moving/Stopped/Recording)
- 📊 **Phrases Collected Counter** - Track total recorded phrases with progress indicator
- 🔋 **Battery Level Indicator** - Real-time battery status visualization
- 🗣️ **Last Phrase Recorded** - Display last recorded phrase in both Hindi and English
- 📈 **Weekly Recordings Chart** - Bar chart showing weekly recording statistics
- 🎨 **Indian-Themed Design** - Beautiful saffron (#FF9933) and navy (#0A1344) color scheme

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build

```bash
npm run build
```

## Project Structure

```
bhashasetu-dashboard/
├── src/
│   ├── App.jsx          # Main dashboard component
│   ├── App.css          # Component styles with Indian theme
│   ├── index.css        # Global styles
│   └── main.jsx         # React entry point
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies
└── README.md           # This file
```

## Design

The dashboard features a carefully crafted Indian-themed design with:
- **Saffron (#FF9933)** as the primary accent color
- **Navy (#0A1344)** as the primary dark color
- Smooth animations and transitions
- Responsive grid layout that adapts to all screen sizes
- Accessibility-focused styling

## Technologies

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Recharts** - Data visualization library
- **CSS3** - Styling with gradients and animations

## License

MIT
