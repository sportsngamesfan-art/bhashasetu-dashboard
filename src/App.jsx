import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [robotPower, setRobotPower] = useState(true)
  const [isRecording, setIsRecording] = useState(false)
  const [recordingMode, setRecordingMode] = useState('auto')
  const [volume, setVolume] = useState(75)
  const [sensitivity, setSensitivity] = useState(60)
  const [language, setLanguage] = useState('varli-hindi')
  const [storageUsed, setStorageUsed] = useState(65)
  const [batteryLevel, setBatteryLevel] = useState(78)
  const [totalRecordings, setTotalRecordings] = useState(1247)
  const [autoSave, setAutoSave] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [darkTheme, setDarkTheme] = useState(true)
  const [autoUpload, setAutoUpload] = useState(false)
  const [quality, setQuality] = useState('high')
  const [logs, setLogs] = useState([
    { time: '14:32', message: 'Recording completed - 5 phrases' },
    { time: '14:30', message: 'Started recording session' },
  ])

  const addLog = (message) => {
    const now = new Date()
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    setLogs(prev => [{ time, message }, ...prev.slice(0, 9)])
  }

  const handleStartRecording = () => {
    setIsRecording(true)
    addLog('🎙️ Recording started')
  }

  const handleStopRecording = () => {
    setIsRecording(false)
    setTotalRecordings(prev => prev + Math.floor(Math.random() * 5) + 1)
    addLog('✓ Recording completed')
  }

  const handlePowerToggle = () => {
    setRobotPower(!robotPower)
    if (!robotPower) {
      addLog('🔋 Robot powered on')
    } else {
      setIsRecording(false)
      addLog('⊘ Robot powered off')
    }
  }

  const stats = [
    { icon: '🎙️', label: 'Total Recordings', value: totalRecordings, color: '#C4A747' },
    { icon: '🇮🇳', label: 'Varli Hindi', value: '756', color: '#4CAF50' },
    { icon: '🇬🇧', label: 'English', value: '491', color: '#2196F3' },
    { icon: '⏱️', label: 'Active Today', value: '2h 34m', color: '#FF6B6B' },
  ]

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="header-top">
          <div className="logo-brand">
            <span className="logo-icon">🤖</span>
            <h1>BhashaSetu</h1>
          </div>
          <div className="status-indicator">
            <span className={`status-dot ${robotPower ? 'active' : 'inactive'}`}></span>
            <span className="status-text">{robotPower ? 'Online' : 'Offline'}</span>
          </div>
        </div>

        {/* Quick Stats */}
        {currentPage === 'home' && (
          <div className="quick-stats">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-box" style={{ borderLeft: `4px solid ${stat.color}` }}>
                <span className="stat-icon">{stat.icon}</span>
                <div className="stat-info">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="app-main">
        {currentPage === 'home' && (
          <div className="home-view">
            {/* Recording Widget */}
            <div className="widget recording-widget">
              <div className="widget-header">
                <h2>🎙️ Recording</h2>
                <span className={`recording-indicator ${isRecording ? 'live' : ''}`}>
                  {isRecording ? '● LIVE' : 'Ready'}
                </span>
              </div>

              <div className="recording-status">
                <div className={`recording-visualizer ${isRecording ? 'active' : ''}`}>
                  {isRecording && (
                    <>
                      <div className="bar"></div>
                      <div className="bar"></div>
                      <div className="bar"></div>
                      <div className="bar"></div>
                      <div className="bar"></div>
                    </>
                  )}
                </div>
              </div>

              <div className="recording-controls">
                <button
                  className={`btn-large ${isRecording ? 'stop' : 'start'}`}
                  onClick={isRecording ? handleStopRecording : handleStartRecording}
                  disabled={!robotPower}
                >
                  {isRecording ? '⏹ Stop Recording' : '● Start Recording'}
                </button>
              </div>

              <div className="recording-info">
                <div className="info-row">
                  <span>Language</span>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="select-small"
                    disabled={!robotPower}
                  >
                    <option value="varli-hindi">Varli Hindi</option>
                    <option value="english">English</option>
                  </select>
                </div>
                <div className="info-row">
                  <span>Mode</span>
                  <select
                    value={recordingMode}
                    onChange={(e) => setRecordingMode(e.target.value)}
                    className="select-small"
                    disabled={!robotPower}
                  >
                    <option value="auto">Auto</option>
                    <option value="manual">Manual</option>
                    <option value="continuous">Continuous</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Control Panel Widget */}
            <div className="widget controls-widget">
              <div className="widget-header">
                <h2>⚙️ Controls</h2>
              </div>

              <div className="power-control">
                <span className="control-label">Robot Power</span>
                <button
                  className={`power-btn ${robotPower ? 'on' : 'off'}`}
                  onClick={handlePowerToggle}
                >
                  {robotPower ? '✓ ON' : '⊘ OFF'}
                </button>
              </div>

              <div className="sliders">
                <div className="slider-group">
                  <div className="slider-header">
                    <span>🔊 Volume</span>
                    <span className="slider-value">{volume}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="slider"
                    disabled={!robotPower}
                  />
                </div>

                <div className="slider-group">
                  <div className="slider-header">
                    <span>🎙️ Sensitivity</span>
                    <span className="slider-value">{sensitivity}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sensitivity}
                    onChange={(e) => setSensitivity(Number(e.target.value))}
                    className="slider"
                    disabled={!robotPower}
                  />
                </div>
              </div>
            </div>

            {/* Status Widget */}
            <div className="widget status-widget">
              <div className="widget-header">
                <h2>📊 System Status</h2>
              </div>

              <div className="status-items">
                <div className="status-item">
                  <span className="status-label">🔋 Battery</span>
                  <div className="battery-bar">
                    <div className="battery-fill" style={{ width: `${batteryLevel}%` }}></div>
                  </div>
                  <span className="status-value">{batteryLevel}%</span>
                </div>

                <div className="status-item">
                  <span className="status-label">💾 Storage</span>
                  <div className="storage-bar">
                    <div className="storage-fill" style={{ width: `${storageUsed}%` }}></div>
                  </div>
                  <span className="status-value">{storageUsed}%</span>
                </div>

                <div className="status-item">
                  <span className="status-label">📡 Connection</span>
                  <span className={`connection-status ${robotPower ? 'connected' : 'disconnected'}`}>
                    {robotPower ? '✓ Connected' : '✗ Disconnected'}
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Activity Widget */}
            <div className="widget activity-widget">
              <div className="widget-header">
                <h2>📋 Recent Activity</h2>
              </div>
              <div className="activity-list">
                {logs.slice(0, 5).map((log, idx) => (
                  <div key={idx} className="activity-item">
                    <span className="activity-time">{log.time}</span>
                    <span className="activity-msg">{log.message}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentPage === 'detail' && (
          <div className="detail-view">
            <h2>🔧 Detailed Controls</h2>
            <p>Coming soon...</p>
          </div>
        )}

        {currentPage === 'stats' && (
          <div className="stats-view">
            <h2>📈 Statistics</h2>
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <span className="stat-icon">{stat.icon}</span>
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === 'settings' && (
          <div className="settings-view">
            <h2>⚙️ Settings</h2>

            <div className="settings-section">
              <h3>Recording Settings</h3>
              <div className="settings-list">
                <div className="setting-item">
                  <div className="setting-label">
                    <span className="label-text">Recording Quality</span>
                    <span className="label-value">{quality.toUpperCase()}</span>
                  </div>
                  <select
                    value={quality}
                    onChange={(e) => setQuality(e.target.value)}
                    className="select-setting"
                  >
                    <option value="low">Low (Smaller files)</option>
                    <option value="medium">Medium</option>
                    <option value="high">High (Best quality)</option>
                  </select>
                </div>

                <div className="setting-toggle">
                  <div className="toggle-label">
                    <span>💾 Auto-Save Recordings</span>
                    <span className="toggle-desc">Automatically save after each recording</span>
                  </div>
                  <button
                    className={`toggle-switch ${autoSave ? 'active' : ''}`}
                    onClick={() => setAutoSave(!autoSave)}
                  >
                    {autoSave ? 'ON' : 'OFF'}
                  </button>
                </div>

                <div className="setting-toggle">
                  <div className="toggle-label">
                    <span>☁️ Auto-Upload</span>
                    <span className="toggle-desc">Upload recordings to cloud storage</span>
                  </div>
                  <button
                    className={`toggle-switch ${autoUpload ? 'active' : ''}`}
                    onClick={() => setAutoUpload(!autoUpload)}
                  >
                    {autoUpload ? 'ON' : 'OFF'}
                  </button>
                </div>
              </div>
            </div>

            <div className="settings-section">
              <h3>Notifications</h3>
              <div className="settings-list">
                <div className="setting-toggle">
                  <div className="toggle-label">
                    <span>🔔 Enable Notifications</span>
                    <span className="toggle-desc">Get alerts for important events</span>
                  </div>
                  <button
                    className={`toggle-switch ${notifications ? 'active' : ''}`}
                    onClick={() => setNotifications(!notifications)}
                  >
                    {notifications ? 'ON' : 'OFF'}
                  </button>
                </div>
              </div>
            </div>

            <div className="settings-section">
              <h3>Appearance</h3>
              <div className="settings-list">
                <div className="setting-toggle">
                  <div className="toggle-label">
                    <span>🌙 Dark Theme</span>
                    <span className="toggle-desc">Use dark mode (currently enabled)</span>
                  </div>
                  <button
                    className={`toggle-switch ${darkTheme ? 'active' : ''}`}
                    onClick={() => setDarkTheme(!darkTheme)}
                  >
                    {darkTheme ? 'ON' : 'OFF'}
                  </button>
                </div>
              </div>
            </div>

            <div className="settings-section">
              <h3>About</h3>
              <div className="about-list">
                <div className="about-item">
                  <span>App Version</span>
                  <span className="about-value">v1.0.0</span>
                </div>
                <div className="about-item">
                  <span>Robot Firmware</span>
                  <span className="about-value">v2.1.0</span>
                </div>
                <div className="about-item">
                  <span>Device ID</span>
                  <span className="about-value">BSR-00001234</span>
                </div>
              </div>
            </div>

            <div className="settings-actions">
              <button className="btn-settings primary">Save Settings</button>
              <button className="btn-settings secondary">Reset to Defaults</button>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button
          className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentPage('home')}
        >
          <span className="nav-icon">🏠</span>
          <span className="nav-label">Home</span>
        </button>
        <button
          className={`nav-btn ${currentPage === 'stats' ? 'active' : ''}`}
          onClick={() => setCurrentPage('stats')}
        >
          <span className="nav-icon">📈</span>
          <span className="nav-label">Stats</span>
        </button>
        <button
          className={`nav-btn ${currentPage === 'detail' ? 'active' : ''}`}
          onClick={() => setCurrentPage('detail')}
        >
          <span className="nav-icon">🔧</span>
          <span className="nav-label">Tools</span>
        </button>
        <button
          className={`nav-btn ${currentPage === 'settings' ? 'active' : ''}`}
          onClick={() => setCurrentPage('settings')}
        >
          <span className="nav-icon">⚙️</span>
          <span className="nav-label">Settings</span>
        </button>
      </nav>
    </div>
  )
}

export default App
