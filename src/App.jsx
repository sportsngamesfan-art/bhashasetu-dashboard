import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)

  React.useEffect(() => {
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

  const handleGetStarted = () => {
    setShowModal(true)
  }

  return (
    <div className="website">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <span className="brand-icon">🤖</span>
            <span className="brand-text">BhashaSetu</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => setCurrentPage('home')}>Home</a></li>
            <li><a href="#about" onClick={() => setCurrentPage('about')}>About</a></li>
            <li><a href="#features" onClick={() => setCurrentPage('features')}>Features</a></li>
            <li><a href="#impact" onClick={() => setCurrentPage('impact')}>Impact</a></li>
            <li><a href="#contact" onClick={() => setCurrentPage('contact')}>Contact</a></li>
          </ul>
          <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Preserve Languages<br />
              <span className="highlight">With Technology</span>
            </h1>
            <p className="hero-subtitle">
              BhashaSetu is revolutionizing language preservation by collecting and documenting rare and endangered languages with AI-powered robots.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleGetStarted}>Start Collection</button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('features')}>Learn More</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="robot-illustration">
              <span className="robot-emoji">🤖</span>
              <div className="robot-glow"></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>↓</span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat">
          <h3 className="stat-number">1,247</h3>
          <p className="stat-label">Phrases Recorded</p>
        </div>
        <div className="stat">
          <h3 className="stat-number">2</h3>
          <p className="stat-label">Languages Documented</p>
        </div>
        <div className="stat">
          <h3 className="stat-number">95%</h3>
          <p className="stat-label">Accuracy Rate</p>
        </div>
        <div className="stat">
          <h3 className="stat-number">24/7</h3>
          <p className="stat-label">Active Collection</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎙️</div>
            <h3>AI-Powered Recording</h3>
            <p>Advanced audio processing captures every nuance of speech with 95% accuracy</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Multi-Language Support</h3>
            <p>Document endangered languages like Varli Hindi and English variants</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Real-time Analytics</h3>
            <p>Track progress with detailed statistics and insights on language preservation</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Secure Storage</h3>
            <p>Cloud-based storage ensures your data is safe and accessible anywhere</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>24/7 Operation</h3>
            <p>Autonomous collection with minimal human intervention required</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Precision Targeting</h3>
            <p>Focus on specific dialects and linguistic variations</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">01</div>
            <h3>Deploy</h3>
            <p>Place BhashaSetu robot in communities</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">02</div>
            <h3>Record</h3>
            <p>AI captures language samples</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">03</div>
            <h3>Process</h3>
            <p>Advanced processing and analysis</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">04</div>
            <h3>Preserve</h3>
            <p>Archive and study data</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <h2 className="section-title">Meet the Team</h2>
        <p className="about-subtitle">Proud innovators from Jamnabi Narsee School, 7th Grade</p>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">A</div>
            <h3>Ayansh</h3>
            <p className="team-role">Co-Founder</p>
            <p className="team-bio">Passionate about language preservation and AI technology</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">R</div>
            <h3>Riaan</h3>
            <p className="team-role">Co-Founder</p>
            <p className="team-bio">Dedicated to documenting endangered languages</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">S</div>
            <h3>Siddharth</h3>
            <p className="team-role">Co-Founder</p>
            <p className="team-bio">Building the future of linguistic heritage preservation</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <h2 className="section-title">Our Impact</h2>
        <div className="impact-content">
          <div className="impact-text">
            <h3>Preserving Linguistic Heritage</h3>
            <p>
              Language extinction is a silent crisis. Every 13 days, a language disappears forever, taking with it centuries of culture, knowledge, and human diversity. BhashaSetu is on a mission to change this.
            </p>
            <p>
              By using cutting-edge AI technology, we're creating a comprehensive archive of endangered languages, ensuring that future generations can learn from and appreciate the linguistic diversity of our world.
            </p>
            <ul className="impact-list">
              <li>✓ Documented 1,247+ language phrases</li>
              <li>✓ 95% accuracy in preservation</li>
              <li>✓ Supporting 2 major language initiatives</li>
              <li>✓ Building a global language database</li>
            </ul>
          </div>
          <div className="impact-visual">
            <div className="impact-card">
              <span className="impact-emoji">🌍</span>
              <p>Global Language Preservation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">What People Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"BhashaSetu has revolutionized how we approach language preservation. It's incredible technology in service of cultural heritage."</p>
            <div className="testimonial-author">
              <span>Dr. Rajesh Kumar</span>
              <span>Linguist, Language Foundation</span>
            </div>
          </div>
          <div className="testimonial">
            <p>"This technology gives us hope that endangered languages can be preserved for future generations. The accuracy is remarkable."</p>
            <div className="testimonial-author">
              <span>Priya Sharma</span>
              <span>Cultural Preservation Officer</span>
            </div>
          </div>
          <div className="testimonial">
            <p>"We've never seen such efficient language documentation. BhashaSetu is changing the game in our field."</p>
            <div className="testimonial-author">
              <span>Prof. Vikram Singh</span>
              <span>University Linguistics Department</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Preserve Languages?</h2>
        <p>Join us in our mission to document and preserve endangered languages</p>
        <div className="cta-buttons">
          <button className="btn btn-primary btn-large" onClick={handleGetStarted}>Get Started Today</button>
          <button className="btn btn-secondary btn-large" onClick={() => alert('Demo scheduled! We will contact you soon.')}>Schedule a Demo</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About BhashaSetu</h4>
            <p>Preserving linguistic heritage through AI technology</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#twitter">Twitter</a>
              <a href="#facebook">Facebook</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 BhashaSetu. Preserving Languages for Tomorrow.</p>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <h2>Connect with Us</h2>
            <p>Choose how you'd like to get started with BhashaSetu:</p>

            <div className="contact-options">
              <a href="https://wa.me/919876543210?text=Hi%20BhashaSetu!%20I'm%20interested%20in%20learning%20more%20about%20language%20preservation."
                 target="_blank"
                 rel="noopener noreferrer"
                 className="contact-option whatsapp">
                <span className="contact-icon">💬</span>
                <span className="contact-text">
                  <strong>WhatsApp Chat</strong>
                  <small>Quick message to our team</small>
                </span>
                <span className="arrow">→</span>
              </a>

              <a href="mailto:hello@bhashasetu.org?subject=BhashaSetu%20Demo%20Request"
                 className="contact-option email">
                <span className="contact-icon">✉️</span>
                <span className="contact-text">
                  <strong>Send Email</strong>
                  <small>Get detailed info</small>
                </span>
                <span className="arrow">→</span>
              </a>

              <a href="tel:+919876543210"
                 className="contact-option phone">
                <span className="contact-icon">📞</span>
                <span className="contact-text">
                  <strong>Call Us</strong>
                  <small>Talk to our team</small>
                </span>
                <span className="arrow">→</span>
              </a>

              <a href="https://cal.com/bhashasetu/demo"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="contact-option calendar">
                <span className="contact-icon">📅</span>
                <span className="contact-text">
                  <strong>Book a Demo</strong>
                  <small>Schedule a meeting</small>
                </span>
                <span className="arrow">→</span>
              </a>
            </div>

            <div className="modal-divider">Or fill the form below:</div>

            <form onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you! We will contact you soon.')
              setShowModal(false)
            }}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <select required>
                <option value="">Select your interest...</option>
                <option value="demo">Schedule a Demo</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="research">Research Collaboration</option>
                <option value="other">Other</option>
              </select>
              <textarea placeholder="Tell us about your interest..." rows="3"></textarea>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
