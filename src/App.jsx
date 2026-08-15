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

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const email = e.target.email.value
    const involvement = e.target.involvement.value
    const message = e.target.message.value

    const whatsappMessage = `Hello! I'm interested in BhashaSetu%0A%0AName: ${name}%0AEmail: ${email}%0AHow I want to help: ${involvement}%0AMessage: ${message}`
    const whatsappUrl = `https://wa.me/919820313607?text=${whatsappMessage}`

    window.open(whatsappUrl, '_blank')
    setShowModal(false)
    e.target.reset()
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
            <p>Made by teenagers. Built for communities. Designed for Katkari & Warli preservation.</p>
          </div>

          <div className="approach-content">
            <div className="approach-text">
              <p className="approach-lead">
                We're not a corporate startup. We're high school students who saw a problem and built a solution. BhashaSetu is fundamentally different—it's built with real communities, for real languages.
              </p>
              <p>
                Our focus is clear: preserving Katkari and Warli languages before it's too late. We designed everything with elderly speakers in mind. Simple voice interface. Natural conversation. No complicated screens. Just speak, and BhashaSetu listens, records, transcribes, and preserves forever.
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
              <h3>Our Primary Focus</h3>
              <div className="language-list">
                <span className="language-tag featured">Katkari</span>
                <span className="language-tag featured">Warli</span>
              </div>
              <p className="language-description">Indigenous languages of Western India. Spoken by the Katkari and Warli tribes, these languages hold unique cultural knowledge and traditions spanning generations.</p>
            </div>

            <div className="language-group">
              <h3>Supported Languages</h3>
              <div className="language-list">
                <span className="language-tag">Hindi</span>
                <span className="language-tag">Marathi</span>
                <span className="language-tag">English</span>
              </div>
              <p className="language-description">Languages for transcription and translation support.</p>
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
              <p className="team-role">Hardware</p>
              <p className="team-bio">Designing accessible hardware that works for everyone, regardless of technical skill.</p>
            </div>
            <div className="team-card">
              <h3>Riaan Laiwala</h3>
              <p className="team-role">Software</p>
              <p className="team-bio">Building intelligent systems that transcribe, translate, and preserve voices with precision.</p>
            </div>
            <div className="team-card">
              <h3>Siddharth Thawani</h3>
              <p className="team-role">Software</p>
              <p className="team-bio">Developing core features and ensuring seamless integration across the platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="section section-alt">
        <div className="section-container">
          <div className="section-header">
            <h2>Our Impact</h2>
            <p>Real numbers, real change in language preservation.</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">2</div>
              <p className="stat-label">Languages Focused</p>
              <p className="stat-detail">Katkari & Warli</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <p className="stat-label">Speakers Reached</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">2000+</div>
              <p className="stat-label">Minutes Recorded</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <p className="stat-label">Community Owned</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <h2>Community Voices</h2>
            <p>Stories from the communities we serve.</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"Our Warli stories are now being heard by the world. Our children can learn from their grandparents without fear of losing our language."</p>
              <p className="testimonial-author">— Warli Community Elder</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"Katkari has been spoken for generations, but nobody was recording it. BhashaSetu finally gave us a way to save it for our grandchildren."</p>
              <p className="testimonial-author">— Katkari Speaker</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"These are teenagers saving our languages. They understand our needs better than big organizations. This is our future."</p>
              <p className="testimonial-author">— Community Leader</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt">
        <div className="section-container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about BhashaSetu.</p>
          </div>

          <div className="faq-container">
            <div className="faq-item">
              <h4>How does BhashaSetu preserve languages?</h4>
              <p>We use a multi-step process: recording native speakers, transcribing in their language, translating to major languages, and securely archiving all data with metadata.</p>
            </div>
            <div className="faq-item">
              <h4>Is the technology difficult to use?</h4>
              <p>No! BhashaSetu is designed specifically for elderly and non-technical users. Simple voice interface, no complex screens needed.</p>
            </div>
            <div className="faq-item">
              <h4>Who can access the recorded data?</h4>
              <p>Recordings are shared with researchers, schools, and communities with proper permissions. Privacy and cultural sensitivity are always protected.</p>
            </div>
            <div className="faq-item">
              <h4>How can we get BhashaSetu in our community?</h4>
              <p>Contact us via WhatsApp or the Get Involved form. We work with local organizations and schools to deploy and support the system.</p>
            </div>
            <div className="faq-item">
              <h4>What happens to the recorded data?</h4>
              <p>All data is stored locally and backed up securely to the cloud. Communities have full ownership and control of their cultural heritage.</p>
            </div>
            <div className="faq-item">
              <h4>Can I volunteer with BhashaSetu?</h4>
              <p>Yes! We need help with field work, technical support, translations, and community outreach. Use the Get Involved form to apply.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <h2>From the Field</h2>
            <p>Moments from our work preserving languages and cultures.</p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item placeholder-gallery">
              <div className="gallery-placeholder">📸</div>
              <p>Community Recording Session</p>
            </div>
            <div className="gallery-item placeholder-gallery">
              <div className="gallery-placeholder">🎙️</div>
              <p>Elder Speaker</p>
            </div>
            <div className="gallery-item placeholder-gallery">
              <div className="gallery-placeholder">👥</div>
              <p>Team in Action</p>
            </div>
            <div className="gallery-item placeholder-gallery">
              <div className="gallery-placeholder">🏘️</div>
              <p>Village Visit</p>
            </div>
            <div className="gallery-item placeholder-gallery">
              <div className="gallery-placeholder">📚</div>
              <p>Archive Storage</p>
            </div>
            <div className="gallery-item placeholder-gallery">
              <div className="gallery-placeholder">🌍</div>
              <p>Global Impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="section section-alt">
        <div className="section-container">
          <div className="section-header">
            <h2>Success Stories</h2>
            <p>How BhashaSetu is making a real difference.</p>
          </div>

          <div className="stories-grid">
            <div className="story-card">
              <h3>Warli Stories Preserved</h3>
              <p className="story-date">2024</p>
              <p>We recorded 100+ hours of authentic Warli speakers sharing tribal stories, songs, and cultural wisdom. Their voices are now preserved forever, accessible to Warli youth worldwide.</p>
            </div>
            <div className="story-card">
              <h3>Katkari Language Initiative</h3>
              <p className="story-date">2024</p>
              <p>Started documenting Katkari language with 30+ speakers across Western India. Created a living archive that helps new generations connect with their roots and identity.</p>
            </div>
            <div className="story-card">
              <h3>Made By Teenagers, For Communities</h3>
              <p className="story-date">2024</p>
              <p>A team of high school students built hardware and software to solve a real problem. Katkari and Warli communities trusted them to preserve what matters most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <h2>Our Partners & Supporters</h2>
            <p>Working together to preserve linguistic heritage.</p>
          </div>

          <div className="partners-grid">
            <div className="partner-card">
              <h4>Jamnabai Narsee School</h4>
              <p>Our founding organization and home base in Mumbai.</p>
            </div>
            <div className="partner-card">
              <h4>Local Communities</h4>
              <p>The heart of our mission—speakers and storytellers who trust us with their voices.</p>
            </div>
            <div className="partner-card">
              <h4>Research Institutions</h4>
              <p>Partners using our data for linguistic and cultural research.</p>
            </div>
            <div className="partner-card">
              <h4>Volunteers Worldwide</h4>
              <p>Developers, translators, and advocates helping the mission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Initiatives Section */}
      <section className="section section-alt">
        <div className="section-container">
          <div className="section-header">
            <h2>Coming Soon</h2>
            <p>Exciting developments in our language preservation journey.</p>
          </div>

          <div className="future-grid">
            <div className="future-card">
              <h3>🚀 New Feature</h3>
              <p>Something exciting is in development. Check back soon!</p>
            </div>
            <div className="future-card">
              <h3>🌍 Expansion</h3>
              <p>We're growing into new regions and languages. More communities coming soon.</p>
            </div>
            <div className="future-card">
              <h3>💡 Innovation</h3>
              <p>Next-generation preservation technology in the works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>Reach out directly to discuss how you can support BhashaSetu.</p>
          </div>

          <div className="contact-content">
            <div className="contact-card">
              <h3>WhatsApp</h3>
              <p className="contact-label">Message us instantly</p>
              <a href="https://wa.me/919820313607" target="_blank" rel="noopener noreferrer" className="contact-button">
                +91 9820313607
              </a>
            </div>

            <div className="contact-card">
              <h3>Location</h3>
              <p className="contact-label">Visit us at</p>
              <p className="contact-info">Jamnabai Narsee School<br />Mumbai, India</p>
            </div>

            <div className="contact-card">
              <h3>Mission</h3>
              <p className="contact-label">What we do</p>
              <p className="contact-info">Preserve endangered languages and cultural heritage for future generations.</p>
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

            <form className="modal-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label>How can we work together?</label>
                <select name="involvement" required>
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
                <textarea name="message" placeholder="Tell us more..." rows="4"></textarea>
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
