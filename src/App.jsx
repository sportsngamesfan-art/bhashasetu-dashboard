import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [robotPower, setRobotPower] = useState(true)
  const [isRecording, setIsRecording] = useState(false)
  const [recordingMode, setRecordingMode] = useState('auto')
  const [volume, setVolume] = useState(75)
  const [sensitivity, setSensitivity] = useState(60)
  const [language, setLanguage] = useState('varli-hindi')
  const [batteryLevel, setBatteryLevel] = useState(78)
  const [expandedPanel, setExpandedPanel] = useState('recording')
  const [showMenu, setShowMenu] = useState(false)

  const handleStartRecording = () => {
    if (!robotPower) return
    setIsRecording(true)
  }

  const handleStopRecording = () => {
    setIsRecording(false)
  }

  const togglePower = () => {
    setRobotPower(!robotPower)
    if (isRecording) setIsRecording(false)
  }

  return (
    <div className="app-container">
      {/* Side Menu */}
      <div className={`side-menu ${showMenu ? 'open' : ''}`}>
        <div className="menu-brand">
          <span>🤖</span>
          <h1>BhashaSetu</h1>
        </div>

        <nav className="menu-items">
          <button className="menu-item active">
            <span className="menu-icon">🎙️</span>
            <span>Record</span>
          </button>
          <button className="menu-item">
            <span className="menu-icon">📊</span>
            <span>Analytics</span>
          </button>
          <button className="menu-item">
            <span className="menu-icon">⚙️</span>
            <span>Configure</span>
          </button>
          <button className="menu-item">
            <span className="menu-icon">💾</span>
            <span>Storage</span>
          </button>
          <button className="menu-item">
            <span className="menu-icon">ℹ️</span>
            <span>About</span>
          </button>
        </nav>

        <div className="menu-footer">
          <p>v1.0</p>
        </div>
      </div>

      {/* Overlay */}
      {showMenu && <div className="menu-overlay" onClick={() => setShowMenu(false)}></div>}

      {/* Main Content */}
      <main className="main-content">
        {/* Floating Menu Button */}
        <button
          className={`float-menu-btn ${showMenu ? 'open' : ''}`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Header Section */}
        <div className="header-section">
          <div className="header-text">
            <p className="greeting">Welcome back</p>
            <h2>Control Center</h2>
          </div>
          <div className={`status-badge ${robotPower ? 'active' : 'inactive'}`}>
            <span className="pulse"></span>
            {robotPower ? 'Online' : 'Offline'}
          </div>
        </div>

        {/* Big Recording Button */}
        <div className="recording-hub">
          <button
            className={`big-record-btn ${isRecording ? 'recording' : ''}`}
            onClick={isRecording ? handleStopRecording : handleStartRecording}
            disabled={!robotPower}
          >
            <span className="record-icon">●</span>
            <span className="record-text">
              {isRecording ? 'Recording...' : 'Start Recording'}
            </span>
            {isRecording && <span className="record-pulse"></span>}
          </button>
          <div className="recording-info">
            <p className="lang-badge">{language === 'varli-hindi' ? '🇮🇳 Varli Hindi' : '🇬🇧 English'}</p>
            <p className="mode-badge">{recordingMode.charAt(0).toUpperCase() + recordingMode.slice(1)} Mode</p>
          </div>
        </div>

        {/* Control Panels */}
        <div className="control-panels">
          {/* Power Panel */}
          <div className="control-panel power-panel">
            <div className="panel-header">
              <h3>⚡ Power</h3>
              <button
                className={`power-toggle ${robotPower ? 'on' : 'off'}`}
                onClick={togglePower}
              >
                {robotPower ? '✓' : '✗'}
              </button>
            </div>
            <div className="panel-content">
              <div className="power-status">
                <span>{robotPower ? 'System Online' : 'System Offline'}</span>
              </div>
            </div>
          </div>

          {/* Audio Panel */}
          <div className="control-panel audio-panel">
            <div className="panel-header">
              <h3>🔊 Audio</h3>
            </div>
            <div className="panel-content">
              <div className="audio-control">
                <label>Volume</label>
                <div className="volume-display">{volume}%</div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  disabled={!robotPower}
                  className="control-slider"
                />
              </div>
              <div className="audio-control">
                <label>Sensitivity</label>
                <div className="sensitivity-display">{sensitivity}%</div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sensitivity}
                  onChange={(e) => setSensitivity(Number(e.target.value))}
                  disabled={!robotPower}
                  className="control-slider"
                />
              </div>
            </div>
          </div>

          {/* Language Panel */}
          <div className="control-panel language-panel">
            <div className="panel-header">
              <h3>🌐 Language</h3>
            </div>
            <div className="panel-content">
              <div className="language-buttons">
                <button
                  className={`lang-btn ${language === 'varli-hindi' ? 'active' : ''}`}
                  onClick={() => setLanguage('varli-hindi')}
                  disabled={!robotPower}
                >
                  🇮🇳 Varli Hindi
                </button>
                <button
                  className={`lang-btn ${language === 'english' ? 'active' : ''}`}
                  onClick={() => setLanguage('english')}
                  disabled={!robotPower}
                >
                  🇬🇧 English
                </button>
              </div>
            </div>
          </div>

          {/* Mode Panel */}
          <div className="control-panel mode-panel">
            <div className="panel-header">
              <h3>🎯 Mode</h3>
            </div>
            <div className="panel-content">
              <div className="mode-buttons">
                {['auto', 'manual', 'continuous'].map(mode => (
                  <button
                    key={mode}
                    className={`mode-btn ${recordingMode === mode ? 'active' : ''}`}
                    onClick={() => setRecordingMode(mode)}
                    disabled={!robotPower}
                  >
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Battery Panel */}
          <div className="control-panel battery-panel">
            <div className="panel-header">
              <h3>🔋 Battery</h3>
              <span className="battery-percent">{batteryLevel}%</span>
            </div>
            <div className="panel-content">
              <div className="battery-visualization">
                <svg viewBox="0 0 100 60" className="battery-chart">
                  <defs>
                    <linearGradient id="batteryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#C4A747" />
                      <stop offset="100%" stopColor="#D4B76C" />
                    </linearGradient>
                  </defs>
                  <rect x="5" y="10" width={batteryLevel * 0.9} height="40" fill="url(#batteryGradient)" rx="4" />
                  <rect x="5" y="10" width="90" height="40" fill="none" stroke="#C4A747" strokeWidth="2" rx="4" />
                </svg>
              </div>
              <div className="battery-status">
                {batteryLevel > 50 ? '✓ Good' : batteryLevel > 20 ? '⚠ Low' : '🔴 Critical'}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="quick-stats">
          <div className="stat-item">
            <span className="stat-number">1,247</span>
            <span className="stat-label">Recordings</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">756</span>
            <span className="stat-label">Varli Hindi</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">491</span>
            <span className="stat-label">English</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
