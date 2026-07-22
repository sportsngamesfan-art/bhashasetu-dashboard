import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState('control')
  const [robotPower, setRobotPower] = useState(true)
  const [isRecording, setIsRecording] = useState(false)
  const [recordingMode, setRecordingMode] = useState('auto')
  const [volume, setVolume] = useState(75)
  const [sensitivity, setSensitivity] = useState(60)
  const [language, setLanguage] = useState('varli-hindi')
  const [storageUsed, setStorageUsed] = useState(65)
  const [batteryLevel, setBatteryLevel] = useState(78)
  const [autoSave, setAutoSave] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [logs, setLogs] = useState([
    { time: '14:32', message: 'Robot powered on' },
    { time: '14:30', message: 'System initialized' },
  ])

  const addLog = (message) => {
    const now = new Date()
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    setLogs(prev => [{ time, message }, ...prev.slice(0, 9)])
  }

  const handleStartRecording = () => {
    setIsRecording(true)
    addLog('Recording started')
  }

  const handleStopRecording = () => {
    setIsRecording(false)
    addLog('Recording stopped')
  }

  const handlePowerToggle = () => {
    setRobotPower(!robotPower)
    addLog(robotPower ? 'Robot powered off' : 'Robot powered on')
  }

  const handleReset = () => {
    setIsRecording(false)
    setRecordingMode('auto')
    setVolume(75)
    setSensitivity(60)
    addLog('System reset to defaults')
  }

  const handleClearLogs = () => {
    setLogs([])
  }

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo-section">
          <div className="logo">🤖</div>
          <h2>BhashaSetu</h2>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <h4>Main</h4>
            <button
              className={`nav-item ${currentPage === 'control' ? 'active' : ''}`}
              onClick={() => setCurrentPage('control')}
            >
              <span className="nav-icon">🎮</span>
              <span className="nav-label">Control Panel</span>
            </button>
          </div>
          <div className="nav-section">
            <h4>System</h4>
            <button
              className={`nav-item ${currentPage === 'logs' ? 'active' : ''}`}
              onClick={() => setCurrentPage('logs')}
            >
              <span className="nav-icon">📝</span>
              <span className="nav-label">Logs</span>
            </button>
            <button
              className={`nav-item ${currentPage === 'settings' ? 'active' : ''}`}
              onClick={() => setCurrentPage('settings')}
            >
              <span className="nav-icon">⚙️</span>
              <span className="nav-label">Settings</span>
            </button>
            <button
              className={`nav-item ${currentPage === 'info' ? 'active' : ''}`}
              onClick={() => setCurrentPage('info')}
            >
              <span className="nav-icon">ℹ️</span>
              <span className="nav-label">Info</span>
            </button>
          </div>
        </nav>

        <div className="sidebar-footer">
          <p>v1.0.0</p>
        </div>
      </aside>

      <main className="control-panel">
        {currentPage === 'control' && (
          <>
        <div className="control-header">
          <h1>🤖 Robot Control Panel</h1>
          <div className="header-status">
            <span className={`status-badge ${robotPower ? 'online' : 'offline'}`}>
              {robotPower ? '● Online' : '● Offline'}
            </span>
          </div>
        </div>

        <div className="controls-grid">
          {/* Power Control */}
          <div className="control-section">
            <h3>⚡ Power Management</h3>
            <div className="control-item">
              <label>Robot Power</label>
              <button
                className={`toggle-btn large ${robotPower ? 'active' : ''}`}
                onClick={handlePowerToggle}
              >
                {robotPower ? '✓ POWERED ON' : '⊘ POWERED OFF'}
              </button>
            </div>
          </div>

          {/* Recording Control */}
          <div className="control-section">
            <h3>🎙️ Recording Control</h3>
            <div className="control-item">
              <label>Recording Status</label>
              <div className="button-group">
                <button
                  className={`action-btn ${isRecording ? 'active' : ''} primary`}
                  onClick={handleStartRecording}
                  disabled={!robotPower}
                >
                  ● START
                </button>
                <button
                  className={`action-btn ${!isRecording ? 'active' : ''} secondary`}
                  onClick={handleStopRecording}
                  disabled={!robotPower}
                >
                  ⊘ STOP
                </button>
              </div>
            </div>
            <div className="control-item">
              <label>Recording Mode</label>
              <select
                value={recordingMode}
                onChange={(e) => setRecordingMode(e.target.value)}
                className="select-input"
                disabled={!robotPower}
              >
                <option value="auto">Auto Detection</option>
                <option value="manual">Manual Trigger</option>
                <option value="continuous">Continuous</option>
              </select>
            </div>
          </div>

          {/* Audio Settings */}
          <div className="control-section">
            <h3>🔊 Audio Settings</h3>
            <div className="control-item">
              <label>Volume: <span className="value">{volume}%</span></label>
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
            <div className="control-item">
              <label>Microphone Sensitivity: <span className="value">{sensitivity}%</span></label>
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

          {/* Language & Storage */}
          <div className="control-section">
            <h3>🌐 Language & Storage</h3>
            <div className="control-item">
              <label>Recording Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="select-input"
                disabled={!robotPower}
              >
                <option value="varli-hindi">Varli Hindi</option>
                <option value="english">English</option>
              </select>
            </div>
            <div className="storage-display">
              <div className="storage-bar">
                <div className="storage-used" style={{ width: `${storageUsed}%` }}></div>
              </div>
              <span className="storage-text">{storageUsed}% Storage Used</span>
            </div>
          </div>

          {/* System Status */}
          <div className="control-section status-panel">
            <h3>📊 System Status</h3>
            <div className="status-grid">
              <div className="status-item">
                <span className="label">Battery</span>
                <span className="value">{batteryLevel}%</span>
              </div>
              <div className="status-item">
                <span className="label">Recording</span>
                <span className={`value ${isRecording ? 'active' : ''}`}>{isRecording ? 'ON' : 'OFF'}</span>
              </div>
              <div className="status-item">
                <span className="label">Power</span>
                <span className={`value ${robotPower ? 'active' : ''}`}>{robotPower ? 'ON' : 'OFF'}</span>
              </div>
              <div className="status-item">
                <span className="label">Mode</span>
                <span className="value">{recordingMode.charAt(0).toUpperCase() + recordingMode.slice(1)}</span>
              </div>
            </div>
          </div>

          {/* Advanced Options */}
          <div className="control-section">
            <h3>⚙️ Advanced Options</h3>
            <div className="toggle-list">
              <div className="toggle-item">
                <span>Auto-Save Recordings</span>
                <button
                  className={`mini-toggle ${autoSave ? 'active' : ''}`}
                  onClick={() => setAutoSave(!autoSave)}
                >
                  {autoSave ? 'ON' : 'OFF'}
                </button>
              </div>
              <div className="toggle-item">
                <span>Notifications</span>
                <button
                  className={`mini-toggle ${notifications ? 'active' : ''}`}
                  onClick={() => setNotifications(!notifications)}
                >
                  {notifications ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="control-section full-width">
            <h3>🔧 System Actions</h3>
            <div className="button-group full">
              <button className="action-btn primary" onClick={handleReset}>
                Reset to Defaults
              </button>
              <button className="action-btn secondary">
                Save Configuration
              </button>
              <button className="action-btn tertiary">
                Shutdown
              </button>
            </div>
          </div>
        </div>

        {/* Activity Log */}
        <div className="activity-log">
          <div className="log-header">
            <h3>📋 Activity Log</h3>
            <button className="clear-btn" onClick={handleClearLogs}>Clear</button>
          </div>
          <div className="log-entries">
            {logs.length === 0 ? (
              <p className="empty-log">No activity yet</p>
            ) : (
              logs.map((log, idx) => (
                <div key={idx} className="log-entry">
                  <span className="log-time">{log.time}</span>
                  <span className="log-message">{log.message}</span>
                </div>
              ))
            )}
          </div>
        </div>
          </>
        )}

        {currentPage === 'logs' && (
          <div className="page-content">
            <div className="page-header">
              <h1>📋 Activity Logs</h1>
            </div>
            <div className="full-log">
              {logs.length === 0 ? (
                <p className="empty-log">No activity yet</p>
              ) : (
                <div className="log-entries-full">
                  {logs.map((log, idx) => (
                    <div key={idx} className="log-entry-full">
                      <span className="log-time">{log.time}</span>
                      <span className="log-message">{log.message}</span>
                    </div>
                  ))}
                </div>
              )}
              <button className="action-btn secondary" onClick={handleClearLogs} style={{ marginTop: '20px' }}>
                Clear All Logs
              </button>
            </div>
          </div>
        )}

        {currentPage === 'settings' && (
          <div className="page-content">
            <div className="page-header">
              <h1>⚙️ Settings</h1>
            </div>
            <div className="settings-grid">
              <div className="setting-group">
                <h3>Recording Preferences</h3>
                <div className="setting-item">
                  <label>Default Recording Language</label>
                  <select className="select-input">
                    <option>Varli Hindi</option>
                    <option>English</option>
                  </select>
                </div>
                <div className="setting-item">
                  <label>Default Recording Mode</label>
                  <select className="select-input">
                    <option>Auto Detection</option>
                    <option>Manual Trigger</option>
                    <option>Continuous</option>
                  </select>
                </div>
              </div>

              <div className="setting-group">
                <h3>Audio Preferences</h3>
                <div className="setting-item">
                  <label>Default Volume: {volume}%</label>
                  <input type="range" min="0" max="100" value={volume} onChange={(e) => setVolume(Number(e.target.value))} className="slider" />
                </div>
                <div className="setting-item">
                  <label>Default Sensitivity: {sensitivity}%</label>
                  <input type="range" min="0" max="100" value={sensitivity} onChange={(e) => setSensitivity(Number(e.target.value))} className="slider" />
                </div>
              </div>

              <div className="setting-group">
                <h3>System Settings</h3>
                <div className="toggle-item">
                  <span>Auto-Save Recordings</span>
                  <button className={`mini-toggle ${autoSave ? 'active' : ''}`} onClick={() => setAutoSave(!autoSave)}>
                    {autoSave ? 'ON' : 'OFF'}
                  </button>
                </div>
                <div className="toggle-item">
                  <span>Enable Notifications</span>
                  <button className={`mini-toggle ${notifications ? 'active' : ''}`} onClick={() => setNotifications(!notifications)}>
                    {notifications ? 'ON' : 'OFF'}
                  </button>
                </div>
              </div>

              <button className="action-btn primary" style={{ gridColumn: '1 / -1', marginTop: '20px' }}>
                Save Settings
              </button>
            </div>
          </div>
        )}

        {currentPage === 'info' && (
          <div className="page-content">
            <div className="page-header">
              <h1>ℹ️ System Information</h1>
            </div>
            <div className="info-grid">
              <div className="info-card">
                <h3>Device Information</h3>
                <div className="info-row">
                  <span className="label">Device Name</span>
                  <span className="value">BhashaSetu Robot</span>
                </div>
                <div className="info-row">
                  <span className="label">Model</span>
                  <span className="value">BS-2024-v1</span>
                </div>
                <div className="info-row">
                  <span className="label">Serial Number</span>
                  <span className="value">BSR-00001234</span>
                </div>
              </div>

              <div className="info-card">
                <h3>Software Information</h3>
                <div className="info-row">
                  <span className="label">Firmware Version</span>
                  <span className="value">v2.1.0</span>
                </div>
                <div className="info-row">
                  <span className="label">Dashboard Version</span>
                  <span className="value">v1.0.0</span>
                </div>
                <div className="info-row">
                  <span className="label">Last Update</span>
                  <span className="value">2024-07-22</span>
                </div>
              </div>

              <div className="info-card">
                <h3>System Status</h3>
                <div className="info-row">
                  <span className="label">Uptime</span>
                  <span className="value">2 days 14 hours</span>
                </div>
                <div className="info-row">
                  <span className="label">Storage Used</span>
                  <span className="value">{storageUsed}%</span>
                </div>
                <div className="info-row">
                  <span className="label">Battery Level</span>
                  <span className="value">{batteryLevel}%</span>
                </div>
              </div>

              <div className="info-card">
                <h3>Recording Statistics</h3>
                <div className="info-row">
                  <span className="label">Total Recordings</span>
                  <span className="value">1,247</span>
                </div>
                <div className="info-row">
                  <span className="label">Varli Hindi</span>
                  <span className="value">756</span>
                </div>
                <div className="info-row">
                  <span className="label">English</span>
                  <span className="value">491</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )

}

export default App
