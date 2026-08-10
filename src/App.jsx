import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('contact')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openModal = (type) => {
    setModalType(type)
    setShowModal(true)
  }

  return (
    <div className={`website ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <span className="brand-icon">🎙️</span>
            <span className="brand-text">BhashaSetu</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => scrollToSection('hero')}>Home</a></li>
            <li><a href="#problem" onClick={() => scrollToSection('problem')}>The Problem</a></li>
            <li><a href="#solution" onClick={() => scrollToSection('solution')}>Solution</a></li>
            <li><a href="#howitworks" onClick={() => scrollToSection('howitworks')}>How It Works</a></li>
            <li><a href="#impact" onClick={() => scrollToSection('impact')}>Impact</a></li>
            <li><a href="#team" onClick={() => scrollToSection('team')}>Team</a></li>
          </ul>
          <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button className="cta-button" onClick={() => openModal('contact')}>Get Involved</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Before the last voice fades,<br />
              <span className="highlight">we listen.</span>
            </h1>
            <p className="hero-subtitle">
              BhashaSetu is a language and cultural preservation platform that records, transcribes, translates, and preserves the voices, stories, and traditions of endangered languages and communities.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary btn-large" onClick={() => scrollToSection('problem')}>
                Learn More
              </button>
              <button className="btn btn-secondary btn-large" onClick={() => openModal('contact')}>
                Get Involved
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-device">
              <div className="device-wrapper">
                <span className="device-emoji">🎙️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="problem">
        <div className="section-container">
          <h2 className="section-title">The Problem</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">🌍</div>
              <h3>Languages Disappearing</h3>
              <p>Every 2 weeks, a language disappears forever. Countless dialects, traditions, and ways of understanding the world are being lost as communities shift to dominant languages.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📖</div>
              <h3>Oral Knowledge at Risk</h3>
              <p>Elderly speakers hold centuries of oral history, stories, traditions, and cultural knowledge. When they pass, this irreplaceable wisdom vanishes without trace.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">👥</div>
              <h3>Barrier to Technology</h3>
              <p>Many elderly community members are uncomfortable with complex technology. Standard translation tools demand technical literacy that they don't have.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">💔</div>
              <h3>Loss of Identity</h3>
              <p>Language is more than words—it's identity, culture, history. Its loss is a loss of community heritage and continuity across generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section id="solution" className="solution">
        <div className="section-container">
          <h2 className="section-title">Our Solution</h2>
          <div className="solution-content">
            <div className="solution-text">
              <p className="solution-headline">
                <strong>Don't make the elder learn the technology.<br />Make the technology reach the elder.</strong>
              </p>
              <p>
                BhashaSetu is fundamentally different from translation apps. We're not just translating—we're preserving.
              </p>
              <p>
                Our platform is designed with elderly and non-technical users in mind. Simple voice interface. Natural conversation. No screens needed. Just speak, and BhashaSetu listens, records, transcribes, translates, and preserves.
              </p>
              <p>
                The entire workflow is built on three principles:
              </p>
              <ul className="solution-list">
                <li><strong>Accessibility:</strong> Technology that adapts to people, not the other way around</li>
                <li><strong>Preservation:</strong> Every word recorded, transcribed, and archived for future generations</li>
                <li><strong>Dignity:</strong> Respecting voices, cultures, and knowledge without judgment</li>
              </ul>
            </div>
            <div className="solution-visual">
              <div className="principle-card principle-card-1">
                <span className="principle-emoji">🎤</span>
                <p>Speak Naturally</p>
              </div>
              <div className="principle-card principle-card-2">
                <span className="principle-emoji">📝</span>
                <p>We Transcribe</p>
              </div>
              <div className="principle-card principle-card-3">
                <span className="principle-emoji">🌐</span>
                <p>We Translate</p>
              </div>
              <div className="principle-card principle-card-4">
                <span className="principle-emoji">💾</span>
                <p>We Preserve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet BhashaSetu Section */}
      <section className="meet-bhashasetu">
        <div className="section-container">
          <h2 className="section-title">Meet BhashaSetu</h2>
          <p className="section-subtitle">The hardware that makes language preservation accessible</p>

          <div className="device-showcase">
            <div className="device-image-placeholder">
              <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="deviceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#C4A747" stopOpacity="0.1"/>
                  </linearGradient>
                </defs>
                <rect x="50" y="20" width="300" height="450" rx="30" fill="url(#deviceGrad)" stroke="#C4A747" strokeWidth="2"/>
                <circle cx="200" cy="80" r="25" fill="#FFD700" opacity="0.6"/>
                <circle cx="200" cy="150" r="40" fill="#FFD700" opacity="0.4"/>
                <text x="200" y="160" fontSize="40" textAnchor="middle" fill="#FFD700">🎙️</text>
                <circle cx="150" cy="250" r="20" fill="#FFD700" opacity="0.3"/>
                <circle cx="250" cy="250" r="20" fill="#FFD700" opacity="0.3"/>
                <rect x="120" y="320" width="160" height="100" rx="10" fill="#FFD700" opacity="0.2" stroke="#C4A747" strokeWidth="1"/>
                <text x="200" y="375" fontSize="14" textAnchor="middle" fill="#FFD700">Display</text>
              </svg>
            </div>
            <div className="device-specs">
              <div className="spec-item">
                <span className="spec-icon">🎤</span>
                <div>
                  <h4>Microphone Array</h4>
                  <p>Crystal-clear audio capture even in noisy environments</p>
                </div>
              </div>
              <div className="spec-item">
                <span className="spec-icon">📸</span>
                <div>
                  <h4>Camera</h4>
                  <p>Optional visual documentation and gesture recognition</p>
                </div>
              </div>
              <div className="spec-item">
                <span className="spec-icon">🔌</span>
                <div>
                  <h4>Raspberry Pi Core</h4>
                  <p>Affordable, open-source computing for accessibility</p>
                </div>
              </div>
              <div className="spec-item">
                <span className="spec-icon">🔊</span>
                <div>
                  <h4>Speaker</h4>
                  <p>Clear audio feedback and translations for users</p>
                </div>
              </div>
              <div className="spec-item">
                <span className="spec-icon">📊</span>
                <div>
                  <h4>Sensors</h4>
                  <p>Environmental and user-state detection</p>
                </div>
              </div>
              <div className="spec-item">
                <span className="spec-icon">💻</span>
                <div>
                  <h4>Local Processing</h4>
                  <p>Runs on affordable hardware, no expensive cloud required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="howitworks" className="how-it-works">
        <div className="section-container">
          <h2 className="section-title">How It Works</h2>
          <div className="workflow">
            <div className="workflow-step">
              <div className="step-number">1</div>
              <div className="step-emoji">🎤</div>
              <h3>Speak</h3>
              <p>User speaks in their native language—no special setup required</p>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="step-number">2</div>
              <div className="step-emoji">📡</div>
              <h3>Listen</h3>
              <p>BhashaSetu captures the audio with precision</p>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="step-number">3</div>
              <div className="step-emoji">📝</div>
              <h3>Transcribe</h3>
              <p>Convert speech to text in the original language</p>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="step-number">4</div>
              <div className="step-emoji">🌐</div>
              <h3>Translate</h3>
              <p>Translate to English, Hindi, or other languages</p>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="step-number">5</div>
              <div className="step-emoji">💾</div>
              <h3>Preserve</h3>
              <p>Store with metadata for future research and access</p>
            </div>
            <div className="workflow-arrow">→</div>
            <div className="workflow-step">
              <div className="step-number">6</div>
              <div className="step-emoji">🤝</div>
              <h3>Share</h3>
              <p>Make stories accessible to community and researchers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Preservation Section */}
      <section className="story-preservation">
        <div className="section-container">
          <h2 className="section-title">Stories We Preserve</h2>
          <p className="section-subtitle">Real examples of voices being saved for future generations</p>

          <div className="story-cards">
            <div className="story-card">
              <div className="story-header">
                <div className="story-avatar">👵</div>
                <div>
                  <h4>Devi Sharma</h4>
                  <p className="story-meta">Age 78 | Tamil Native Speaker</p>
                </div>
              </div>
              <div className="story-content">
                <p className="story-excerpt">"A traditional folk tale about the monsoon gods, passed down through my family for generations..."</p>
                <div className="story-details">
                  <span className="detail-tag">Language: Tamil</span>
                  <span className="detail-tag">Duration: 12 min</span>
                  <span className="detail-tag">Date: 2024</span>
                </div>
              </div>
              <div className="story-actions">
                <button className="story-btn">Play Audio</button>
                <button className="story-btn">View Transcript</button>
              </div>
            </div>

            <div className="story-card">
              <div className="story-header">
                <div className="story-avatar">👴</div>
                <div>
                  <h4>Ramesh Naik</h4>
                  <p className="story-meta">Age 82 | Marathi Native Speaker</p>
                </div>
              </div>
              <div className="story-content">
                <p className="story-excerpt">"The craft and wisdom of traditional village agriculture, sustainable farming techniques my grandfather taught me..."</p>
                <div className="story-details">
                  <span className="detail-tag">Language: Marathi</span>
                  <span className="detail-tag">Duration: 18 min</span>
                  <span className="detail-tag">Date: 2024</span>
                </div>
              </div>
              <div className="story-actions">
                <button className="story-btn">Play Audio</button>
                <button className="story-btn">View Transcript</button>
              </div>
            </div>

            <div className="story-card">
              <div className="story-header">
                <div className="story-avatar">👴</div>
                <div>
                  <h4>Janardan Rao</h4>
                  <p className="story-meta">Age 76 | Odia Native Speaker</p>
                </div>
              </div>
              <div className="story-content">
                <p className="story-excerpt">"Ancient Odia poetry and songs from my childhood, verses that are rarely heard anymore in modern times..."</p>
                <div className="story-details">
                  <span className="detail-tag">Language: Odia</span>
                  <span className="detail-tag">Duration: 15 min</span>
                  <span className="detail-tag">Date: 2024</span>
                </div>
              </div>
              <div className="story-actions">
                <button className="story-btn">Play Audio</button>
                <button className="story-btn">View Transcript</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="languages">
        <div className="section-container">
          <h2 className="section-title">Languages We Support</h2>

          <div className="languages-grid">
            <div className="language-group">
              <h3 className="language-group-title">Currently Supported</h3>
              <div className="language-list">
                <div className="language-item supported">
                  <span className="language-flag">🔤</span>
                  <span className="language-name">Sanskrit</span>
                </div>
                <div className="language-item supported">
                  <span className="language-flag">🔤</span>
                  <span className="language-name">Tamil</span>
                </div>
                <div className="language-item supported">
                  <span className="language-flag">🔤</span>
                  <span className="language-name">Marathi</span>
                </div>
                <div className="language-item supported">
                  <span className="language-flag">🔤</span>
                  <span className="language-name">Odia</span>
                </div>
                <div className="language-item supported">
                  <span className="language-flag">🔤</span>
                  <span className="language-name">Hindi</span>
                </div>
                <div className="language-item supported">
                  <span className="language-flag">🔤</span>
                  <span className="language-name">English</span>
                </div>
              </div>
            </div>

            <div className="language-group">
              <h3 className="language-group-title">Coming Soon</h3>
              <div className="language-list">
                <div className="language-item future">
                  <span className="language-flag">🔜</span>
                  <span className="language-name">Warli</span>
                </div>
                <div className="language-item future">
                  <span className="language-flag">🔜</span>
                  <span className="language-name">Kashmiri</span>
                </div>
                <div className="language-item future">
                  <span className="language-flag">🔜</span>
                  <span className="language-name">Konkani</span>
                </div>
                <div className="language-item future">
                  <span className="language-flag">🔜</span>
                  <span className="language-name">Sindhi</span>
                </div>
                <div className="language-item future">
                  <span className="language-flag">🔜</span>
                  <span className="language-name">Manipuri</span>
                </div>
                <div className="language-item future">
                  <span className="language-flag">🔜</span>
                  <span className="language-name">More...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="technology">
        <div className="section-container">
          <h2 className="section-title">The Technology Behind BhashaSetu</h2>
          <p className="section-subtitle">Built on proven, accessible platforms</p>

          <div className="tech-stack">
            <div className="tech-card">
              <h3>Hardware</h3>
              <ul>
                <li>Raspberry Pi (affordable, open-source)</li>
                <li>Microphone Array for clarity</li>
                <li>Optional Camera module</li>
                <li>Speaker for audio feedback</li>
              </ul>
            </div>

            <div className="tech-card">
              <h3>Audio Processing</h3>
              <ul>
                <li>Noise reduction for real-world environments</li>
                <li>Speech-to-text conversion</li>
                <li>Audio format optimization for storage</li>
              </ul>
            </div>

            <div className="tech-card">
              <h3>Language Processing</h3>
              <ul>
                <li>Speech recognition in multiple Indian languages</li>
                <li>Translation APIs for cross-language support</li>
                <li>Metadata tagging and archival</li>
              </ul>
            </div>

            <div className="tech-card">
              <h3>Storage & Access</h3>
              <ul>
                <li>Local storage on Raspberry Pi</li>
                <li>Optional cloud backup for safety</li>
                <li>Secure, indexed archives for researchers</li>
              </ul>
            </div>
          </div>

          <div className="tech-note">
            <p><strong>Note:</strong> We only use proven, established technologies. No invented capabilities. All hardware and software components are real, affordable, and accessible.</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="impact">
        <div className="section-container">
          <h2 className="section-title">Real-World Impact</h2>
          <p className="section-subtitle">Where BhashaSetu makes a difference</p>

          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon">🏘️</div>
              <h3>Villages</h3>
              <p>Preserve the voices and wisdom of rural communities, supporting cultural continuity and heritage documentation.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🏥</div>
              <h3>Old-Age Homes</h3>
              <p>Enable elderly residents to share their life stories, traditions, and knowledge with family and future generations.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🎓</div>
              <h3>Schools</h3>
              <p>Connect students with living elders to learn history, culture, and traditions directly from native speakers.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🏛️</div>
              <h3>Museums</h3>
              <p>Build rich digital archives of cultural heritage and oral history for exhibition and public access.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">📚</div>
              <h3>Libraries</h3>
              <p>Create digital collections of endangered languages and regional literature for preservation and research.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🔬</div>
              <h3>Researchers</h3>
              <p>Provide linguists and anthropologists with authentic, annotated data for language and cultural studies.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🎨</div>
              <h3>Cultural Organizations</h3>
              <p>Support NGOs and cultural groups in documenting and promoting endangered traditions and languages.</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">👨‍👩‍👧‍👦</div>
              <h3>Families</h3>
              <p>Help families preserve their unique voice and stories as legacy for children and grandchildren.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="future-vision">
        <div className="section-container">
          <h2 className="section-title">The Evolution of BhashaSetu</h2>
          <p className="section-subtitle">From robot to platform to accessibility</p>

          <div className="evolution-timeline">
            <div className="evolution-step">
              <div className="evolution-icon">🤖</div>
              <h3>Phase 1: Robot</h3>
              <p>Raspberry Pi-based hardware for community centers and institutions. Clear, simple interface.</p>
              <span className="evolution-status">Now</span>
            </div>
            <div className="evolution-arrow">→</div>
            <div className="evolution-step">
              <div className="evolution-icon">💻</div>
              <h3>Phase 2: Smart Device</h3>
              <p>Affordable device comparable to Amazon Echo or iPad. Brings BhashaSetu to homes and small communities.</p>
              <span className="evolution-status">Soon</span>
            </div>
            <div className="evolution-arrow">→</div>
            <div className="evolution-step">
              <div className="evolution-icon">📱</div>
              <h3>Phase 3: Mobile App</h3>
              <p>Smartphone application for iOS and Android. Makes language preservation accessible to anyone with a phone.</p>
              <span className="evolution-status">Coming</span>
            </div>
            <div className="evolution-arrow">→</div>
            <div className="evolution-step">
              <div className="evolution-icon">🌐</div>
              <h3>Phase 4: Platform</h3>
              <p>Global archive and community platform for language preservation, research, and cultural exchange.</p>
              <span className="evolution-status">Vision</span>
            </div>
          </div>

          <div className="business-model">
            <h3>Making It Sustainable & Accessible</h3>
            <p>BhashaSetu succeeds when technology reaches those who need it most. We're committed to:</p>
            <ul>
              <li><strong>Affordability:</strong> Products priced for communities, not corporations</li>
              <li><strong>Open Access:</strong> Archives accessible to researchers, families, and communities</li>
              <li><strong>Partnerships:</strong> Working with schools, museums, NGOs, and cultural organizations</li>
              <li><strong>Sustainability:</strong> Building a model that preserves languages for generations to come</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="section-container">
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-subtitle">Heritage Hackers | Jamnabai Narsee School, Mumbai</p>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">👨</div>
              <h3>Ayansh Agarwal</h3>
              <p className="team-role">Project Lead</p>
              <p className="team-bio">Visionary behind BhashaSetu, leading the mission to preserve endangered languages through technology.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👨</div>
              <h3>Riaan Laiwala</h3>
              <p className="team-role">Hardware & Systems</p>
              <p className="team-bio">Designing the accessible hardware that makes BhashaSetu work for everyone, regardless of technical skill.</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👨</div>
              <h3>Siddharth Thawani</h3>
              <p className="team-role">Software & Integration</p>
              <p className="team-bio">Building the intelligent systems that transcribe, translate, and preserve voices with precision and care.</p>
            </div>
          </div>

          <div className="team-school">
            <p>From <strong>Jamnabai Narsee School</strong>, Mumbai</p>
            <p>A team of passionate students dedicated to solving real-world problems through innovation and technology.</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="section-container">
          <h2 className="cta-title">Every language carries a world.</h2>
          <p className="cta-subtitle">Before the last voice fades, we listen.</p>
          <button className="btn btn-primary btn-large btn-cta" onClick={() => openModal('contact')}>
            Get Involved Today
          </button>
          <p className="cta-footer">Help us preserve the voices and stories that shape our world.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>BhashaSetu</h4>
            <p>Preserving voices. Bridging languages. Honoring cultures.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#problem">About</a></li>
              <li><a href="#howitworks">How It Works</a></li>
              <li><a href="#impact">Impact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Jamnabai Narsee School<br />Mumbai, India</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <p>🐦 Twitter | 📘 Facebook | 📸 Instagram</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 BhashaSetu | Heritage Hackers. All languages matter.</p>
        </div>
      </footer>

      {/* Contact Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            <h2>Get Involved with BhashaSetu</h2>
            <p>Help us preserve languages and cultures for future generations.</p>

            <form className="modal-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>How would you like to get involved?</label>
                <select>
                  <option value="">Select an option</option>
                  <option value="volunteer">Volunteer with us</option>
                  <option value="partnership">Discuss partnership</option>
                  <option value="donation">Make a donation</option>
                  <option value="research">Research collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell us more..." rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <div className="modal-contact-info">
              <p><strong>Direct Contact:</strong></p>
              <p>📧 Email: heritage.hackers@jns.edu</p>
              <p>📱 Phone: +91-XXXXXXXXXX</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
