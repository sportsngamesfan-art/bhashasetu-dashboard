import React, { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import './App.css'

const App = () => {
  const [robotStatus, setRobotStatus] = useState('recording')
  const [phrasesCollected, setPhrasesCollected] = useState(1247)
  const [batteryLevel, setBatteryLevel] = useState(78)
  const [lastPhraseHindi, setLastPhraseHindi] = useState('नमस्ते भाषा संग्रह')
  const [lastPhraseEnglish, setLastPhraseEnglish] = useState('Hello language collection')

  const recordingsData = [
    { date: 'Mon', recordings: 145 },
    { date: 'Tue', recordings: 189 },
    { date: 'Wed', recordings: 178 },
    { date: 'Thu', recordings: 210 },
    { date: 'Fri', recordings: 195 },
    { date: 'Sat', recordings: 220 },
    { date: 'Sun', recordings: 156 },
  ]

  const statusColors = {
    recording: '#FF9933',
    moving: '#0A1344',
    stopped: '#666'
  }

  const statusIcons = {
    recording: '🔴',
    moving: '▶️',
    stopped: '⏸️'
  }

  useEffect(() => {
    const statusRotation = ['recording', 'moving', 'stopped']
    const interval = setInterval(() => {
      setRobotStatus(prev => {
        const currentIndex = statusRotation.indexOf(prev)
        return statusRotation[(currentIndex + 1) % 3]
      })
    }, 4000)

    const batteryDecay = setInterval(() => {
      setBatteryLevel(prev => Math.max(prev - 1, 0))
    }, 5000)

    return () => {
      clearInterval(interval)
      clearInterval(batteryDecay)
    }
  }, [])

  return (
    <div className="dashboard">
      <header className="header">
        <div className="header-content">
          <h1>🤖 BhashaSetu Dashboard</h1>
          <p className="subtitle">Language Collection Robot</p>
        </div>
      </header>

      <main className="main-content">
        <div className="grid-container">
          {/* Robot Status Card */}
          <div className="card status-card">
            <div className="card-header">
              <h2>Robot Status</h2>
            </div>
            <div className="status-content">
              <div className="status-icon" style={{ color: statusColors[robotStatus] }}>
                {statusIcons[robotStatus]}
              </div>
              <div className="status-text">
                <p className="status-label">Current Status</p>
                <p className="status-value" style={{ color: statusColors[robotStatus] }}>
                  {robotStatus.charAt(0).toUpperCase() + robotStatus.slice(1)}
                </p>
              </div>
            </div>
          </div>

          {/* Phrases Collected Counter */}
          <div className="card counter-card">
            <div className="card-header">
              <h2>Phrases Collected</h2>
            </div>
            <div className="counter-content">
              <div className="counter-value">{phrasesCollected.toLocaleString()}</div>
              <p className="counter-label">Total Recorded Phrases</p>
              <div className="counter-bar">
                <div className="counter-progress" style={{ width: '67%' }}></div>
              </div>
              <p className="counter-goal">Target: 2,000 phrases</p>
            </div>
          </div>

          {/* Battery Level Indicator */}
          <div className="card battery-card">
            <div className="card-header">
              <h2>Battery Level</h2>
            </div>
            <div className="battery-content">
              <div className="battery-display">
                <svg viewBox="0 0 100 50" className="battery-svg">
                  <rect x="5" y="10" width="85" height="30" fill="none" stroke="#0A1344" strokeWidth="2" rx="3" />
                  <rect x="7" y="12" width="81" height="26" fill="none" stroke="#0A1344" strokeWidth="0.5" />
                  <rect x="8" y="13" width={(batteryLevel / 100) * 79} height="24" fill="#FF9933" rx="2" />
                  <circle cx="94" cy="25" r="2" fill="#0A1344" />
                </svg>
              </div>
              <p className="battery-percentage">{batteryLevel}%</p>
              <p className="battery-status">
                {batteryLevel > 50 ? '✓ Good' : batteryLevel > 20 ? '⚠ Low' : '🔴 Critical'}
              </p>
            </div>
          </div>
        </div>

        {/* Last Phrase Recorded */}
        <div className="card full-width-card phrase-card">
          <div className="card-header">
            <h2>Last Phrase Recorded</h2>
          </div>
          <div className="phrase-content">
            <div className="phrase-item">
              <div className="language-label">Hindi</div>
              <div className="phrase-text">{lastPhraseHindi}</div>
            </div>
            <div className="divider"></div>
            <div className="phrase-item">
              <div className="language-label">English</div>
              <div className="phrase-text">{lastPhraseEnglish}</div>
            </div>
          </div>
        </div>

        {/* Total Recordings Chart */}
        <div className="card full-width-card chart-card">
          <div className="card-header">
            <h2>Weekly Recordings</h2>
          </div>
          <div className="chart-content">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={recordingsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E8E8E8" />
                <XAxis dataKey="date" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#FFF', border: '2px solid #FF9933' }}
                  formatter={(value) => [value, 'Recordings']}
                />
                <Bar dataKey="recordings" fill="#FF9933" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>BhashaSetu • Language Collection Initiative</p>
      </footer>
    </div>
  )
}

export default App
