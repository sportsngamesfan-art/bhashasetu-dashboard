import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)

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

  return (
    <div className={`website ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="brand-text">BhashaSetu</span>
          </div>
          <ul className="nav-links">
            <li><a href="#problem" onClick={() => scrollToSection('problem')}>About</a></li>
            <li><a href="#howitworks" onClick={() => scrollToSection('howitworks')}>How It Works</a></li>
            <li><a href="#impact" onClick={() => scrollToSection('impact')}>Impact</a></li>
            <li><a href="#team" onClick={() => scrollToSection('team')}>Team</a></li>
          </ul>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)} title="Toggle theme">
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button className="cta-button" onClick={() => setShowModal(true)}>Get Involved</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-wrapper">
          <h1 className="hero-title">
            Before the last voice fades,<br />
            <span className="highlight">we listen.</span>
          </h1>
          <p className="hero-subtitle">
            A language and cultural preservation platform that records, transcribes, translates, and preserves the voices and stories of endangered languages and communities.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('problem')}>
              Learn More
            </button>
            <button className="btn btn-secondary" onClick={() => setShowModal(true)}>
              Get Involved
            </button>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>↓</span>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="section">
        <div className="section-container">
          <div className="section-header">
            <h2>The Problem</h2>
            <p>Languages disappear. Voices are lost. Knowledge fades away.</p>
          </div>

          <div className="problem-grid">
            <div className="problem-item">
              <h3>Languages at Risk</h3>
              <p>Every 2 weeks, a language disappears forever. Countless dialects and ways of understanding the world are being lost as communities shift to dominant languages.</p>
            </div>
            <div className="problem-item">
              <h3>Oral Knowledge Lost</h3>
              <p>Elderly speakers hold centuries of oral history, stories, and cultural knowledge. When they pass, this irreplaceable wisdom vanishes forever.</p>
            </div>
            <div className="problem-item">
              <h3>The Technology Barrier</h3>
              <p>Most technology demands technical literacy. Elderly community members are left behind by tools not designed with them in mind.</p>
            </div>
            <div className="problem-item">
              <h3>Cultural Identity Lost</h3>
              <p>Language is identity. Its loss is the loss of heritage, community history, and continuity across generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section section-alt">
        <div className="section-container">
          <div className="section-header">
            <h2>Our Approach</h2>
            <p>Technology should reach people. Not the other way around.</p>
          </div>

          <div className="approach-content">
            <div className="approach-text">
              <p className="approach-lead">
                BhashaSetu is fundamentally different from translation apps. We're not just translating—we're preserving.
              </p>
              <p>
                Our platform is designed with elderly and non-technical users in mind. Simple voice interface. Natural conversation. No screens needed. Just speak, and BhashaSetu listens, records, transcribes, translates, and preserves.
              </p>
              <div className="principles">
                <div className="principle">
                  <span className="principle-number">1</span>
                  <h4>Accessibility</h4>
                  <p>Technology that adapts to people, not the other way around.</p>
                </div>
                <div className="principle">
                  <span className="principle-number">2</span>
                  <h4>Preservation</h4>
                  <p>Every word recorded, transcribed, and archived for future generations.</p>
                </div>
                <div className="principle">
                  <span className="principle-number">3</span>
                  <h4>Dignity</h4>
                  <p>Respecting voices, cultures, and knowledge without judgment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="howitworks" className="section">
        <div className="section-container">
          <div className="section-header">
            <h2>How It Works</h2>
          </div>

          <div className="workflow-grid">
            <div className="workflow-item">
              <div className="workflow-number">01</div>
              <h3>Speak</h3>
              <p>User speaks in their native language—naturally, without setup.</p>
            </div>
            <div className="workflow-item">
              <div className="workflow-number">02</div>
              <h3>Listen</h3>
              <p>BhashaSetu captures audio with precision and clarity.</p>
            </div>
            <div className="workflow-item">
              <div className="workflow-number">03</div>
              <h3>Transcribe</h3>
              <p>Convert speech to text in the original language.</p>
            </div>
            <div className="workflow-item">
              <div className="workflow-number">04</div>
              <h3>Translate</h3>
              <p>Translate to English, Hindi, or other languages.</p>
            </div>
            <div className="workflow-item">
              <div className="workflow-number">05</div>
              <h3>Preserve</h3>
              <p>Store with metadata for research and access.</p>
            </div>
            <div className="workflow-item">
              <div className="workflow-number">06</div>
              <h3>Share</h3>
              <p>Make stories accessible to community and researchers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="section section-alt">
        <div className="section-container">
          <div className="section-header">
            <h2>Languages We Support</h2>
          </div>

          <div className="languages-grid">
            <div className="language-group">
              <h3>Currently Supported</h3>
              <div className="language-list">
                <span className="language-tag">Sanskrit</span>
                <span className="language-tag">Tamil</span>
                <span className="language-tag">Marathi</span>
                <span className="language-tag">Odia</span>
                <span className="language-tag">Hindi</span>
                <span className="language-tag">English</span>
              </div>
            </div>

            <div className="language-group">
              <h3>Coming Soon</h3>
              <div className="language-list">
                <span className="language-tag coming">Warli</span>
                <span className="language-tag coming">Kashmiri</span>
                <span className="language-tag coming">Konkani</span>
                <span className="language-tag coming">Sindhi</span>
                <span className="language-tag coming">Manipuri</span>
                <span className="language-tag coming">More...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <h2>Technology</h2>
            <p>Built on proven, accessible platforms. No invented capabilities.</p>
          </div>

          <div className="tech-grid">
            <div className="tech-item">
              <h3>Hardware</h3>
              <ul>
                <li>Raspberry Pi (affordable, open-source)</li>
                <li>Microphone Array</li>
                <li>Optional Camera</li>
                <li>Speaker for feedback</li>
              </ul>
            </div>
            <div className="tech-item">
              <h3>Audio</h3>
              <ul>
                <li>Noise reduction</li>
                <li>Speech-to-text conversion</li>
                <li>Format optimization</li>
              </ul>
            </div>
            <div className="tech-item">
              <h3>Language</h3>
              <ul>
                <li>Multi-language recognition</li>
                <li>Translation support</li>
                <li>Metadata tagging</li>
              </ul>
            </div>
            <div className="tech-item">
              <h3>Storage</h3>
              <ul>
                <li>Local storage</li>
                <li>Cloud backup</li>
                <li>Secure archives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="section section-alt">
        <div className="section-container">
          <div className="section-header">
            <h2>Real-World Impact</h2>
            <p>Where BhashaSetu makes a difference.</p>
          </div>

          <div className="impact-grid">
              <div className="impact-item">
                <h3>Villages</h3>
                <p>Preserve voices and wisdom of rural communities.</p>
              </div>
              <div className="impact-item">
                <h3>Old-Age Homes</h3>
                <p>Enable residents to share life stories with future generations.</p>
              </div>
              <div className="impact-item">
                <h3>Schools</h3>
                <p>Connect students with elders to learn history and culture directly.</p>
              </div>
              <div className="impact-item">
                <h3>Museums</h3>
                <p>Build rich digital archives of cultural heritage.</p>
              </div>
              <div className="impact-item">
                <h3>Libraries</h3>
                <p>Create collections of endangered languages and regional literature.</p>
              </div>
              <div className="impact-item">
                <h3>Researchers</h3>
                <p>Provide authentic, annotated data for language studies.</p>
              </div>
            </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <h2>Our Vision</h2>
            <p>From hardware to platform to global accessibility.</p>
          </div>

          <div className="vision-timeline">
            <div className="vision-step">
              <div className="vision-marker">
                <span>Now</span>
              </div>
              <h3>Robot</h3>
              <p>Raspberry Pi-based hardware for community centers and institutions.</p>
            </div>
            <div className="vision-step">
              <div className="vision-marker">
                <span>Soon</span>
              </div>
              <h3>Smart Device</h3>
              <p>Affordable device comparable to Echo or iPad.</p>
            </div>
            <div className="vision-step">
              <div className="vision-marker">
                <span>Coming</span>
              </div>
              <h3>Mobile App</h3>
              <p>iOS and Android app for anyone with a smartphone.</p>
            </div>
            <div className="vision-step">
              <div className="vision-marker">
                <span>Vision</span>
              </div>
              <h3>Global Platform</h3>
              <p>Archive and community platform for language preservation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section section-alt">
        <div className="section-container">
          <div className="section-header">
            <h2>The Team</h2>
            <p>Heritage Hackers | Jamnabai Narsee School, Mumbai</p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <h3>Ayansh Agarwal</h3>
              <p className="team-role">Project Lead</p>
              <p className="team-bio">Visionary behind BhashaSetu, leading the mission to preserve endangered languages.</p>
            </div>
            <div className="team-card">
              <h3>Riaan Laiwala</h3>
              <p className="team-role">Hardware & Systems</p>
              <p className="team-bio">Designing accessible hardware that works for everyone, regardless of technical skill.</p>
            </div>
            <div className="team-card">
              <h3>Siddharth Thawani</h3>
              <p className="team-role">Software & Integration</p>
              <p className="team-bio">Building intelligent systems that transcribe, translate, and preserve voices with precision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-cta">
        <div className="section-container">
          <h2>Every language carries a world.</h2>
          <p>Before the last voice fades, we listen.</p>
          <button className="btn btn-primary btn-large" onClick={() => setShowModal(true)}>
            Get Involved
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <h4>BhashaSetu</h4>
              <p>Preserving voices. Bridging languages. Honoring cultures.</p>
            </div>
            <div className="footer-links">
              <h4>Links</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#problem">About</a></li>
                <li><a href="#howitworks">How It Works</a></li>
                <li><a href="#impact">Impact</a></li>
                <li><a href="#team">Team</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Contact</h4>
              <p>Jamnabai Narsee School<br />Mumbai, India</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 BhashaSetu. All languages matter.</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            <h2>Get Involved</h2>
            <p>Help us preserve languages and cultures for future generations.</p>

            <form className="modal-form" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label>How can we work together?</label>
                <select required>
                  <option value="">Select an option</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="partner">Partnership</option>
                  <option value="donate">Donate</option>
                  <option value="research">Research</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell us more..." rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
