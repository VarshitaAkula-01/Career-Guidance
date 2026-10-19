import { useState } from "react";
import Assessment from "./Assessment";
import "./App.css";

function App() {
  const [showAssessment, setShowAssessment] = useState(false);

  if (showAssessment) {
    return (
      <div className="app">
        <button
          className="login-btn"
          onClick={() => setShowAssessment(false)}
          style={{ margin: "20px" }}
        >
          ← Back to Home
        </button>
        <Assessment />
      </div>
    );
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="brand">
          <span className="brand-icon">✦</span>
          <span>CareerCompass</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#pathways">Career Pathways</a>
          <a href="#about">How It Works</a>
        </div>

        <div className="nav-actions">
          <button className="login-btn" onClick={() => setShowAssessment(true)}>
            Get Started
          </button>
          <button className="nav-cta" onClick={() => setShowAssessment(true)}>
            Find My Career →
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="hero-tag">✨ YOUR FUTURE, YOUR WAY</div>

          <h1>
            Discover a career
            <br />
            <span>that feels like you.</span>
          </h1>

          <p>
            Confused about your career? Let AI help you discover your
            strengths, explore exciting career paths, and build a roadmap
            toward your dream future.
          </p>

          <div className="hero-buttons">
            <button className="nav-cta" onClick={() => setShowAssessment(true)}>
              Start Your Assessment →
            </button>
            <a className="login-btn" href="#pathways">
              Explore Pathways ↓
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>AI-Powered</strong>
              <span>Career Guidance</span>
            </div>
            <div>
              <strong>Personalized</strong>
              <span>Recommendations</span>
            </div>
            <div>
              <strong>Your Future</strong>
              <span>Starts Here</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orb">
            <div className="orb-inner">✦</div>
          </div>

          <div className="floating-card card-one">
            <span>🧠</span>
            <div>
              <strong>Discover yourself</strong>
              <p>Understand your strengths</p>
            </div>
          </div>

          <div className="floating-card card-two">
            <span>🚀</span>
            <div>
              <strong>Explore possibilities</strong>
              <p>Find your next step</p>
            </div>
          </div>

          <div className="floating-card card-three">
            <span>🎯</span>
            <div>
              <strong>Build your roadmap</strong>
              <p>Turn goals into action</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="pathways-section" id="pathways">
        <div className="section-heading">
          <span className="hero-tag">EXPLORE YOUR OPTIONS</span>
          <h2>
            Find your <span>pathway.</span>
          </h2>
          <p>
            Discover different career directions and find the one that
            matches your interests and goals.
          </p>
        </div>

        <div className="pathway-grid">
          <div className="pathway-card">
            <img
              className="pathway-image"
              src="/images/technology-it.jpeg"
              alt="Software development workspace"
            />
            <div className="pathway-card-content">
              <div className="pathway-icon">💻</div>
              <h3>Technology &amp; IT</h3>
              <p>
                Explore software development, web development, cloud
                computing, and more.
              </p>
              <button onClick={() => setShowAssessment(true)}>
                Explore Careers →
              </button>
            </div>
          </div>

          <div className="pathway-card">
            <img
              className="pathway-image"
              src="/images/ai-data-science.jpeg"
              alt="AI and data science illustration"
            />
            <div className="pathway-card-content">
              <div className="pathway-icon">🤖</div>
              <h3>AI &amp; Data Science</h3>
              <p>
                Discover artificial intelligence, machine learning, data
                analytics, and emerging technologies.
              </p>
              <button onClick={() => setShowAssessment(true)}>
                Explore Careers →
              </button>
            </div>
          </div>

          <div className="pathway-card">
            <img
              className="pathway-image"
              src="/images/business-finance.jpeg"
              alt="Business analytics dashboard"
            />
            <div className="pathway-card-content">
              <div className="pathway-icon">📊</div>
              <h3>Business &amp; Finance</h3>
              <p>
                Explore business analysis, finance, product management,
                and data-driven decision-making.
              </p>
              <button onClick={() => setShowAssessment(true)}>
                Explore Careers →
              </button>
            </div>
          </div>

          <div className="pathway-card">
            <img
              className="pathway-image"
              src="/images/creative-thinking.jpeg"
              alt="Creative thinking and innovation"
            />
            <div className="pathway-card-content">
              <div className="pathway-icon">🎨</div>
              <h3>Creative Thinking</h3>
              <p>
                Explore UI/UX design, animation, creative technology,
                and innovative ideas.
              </p>
              <button onClick={() => setShowAssessment(true)}>
                Explore Careers →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="about-section" id="about">
        <div className="section-heading">
          <span className="hero-tag">YOUR JOURNEY STARTS HERE</span>
          <h2>
            Three steps to <span>clarity.</span>
          </h2>
          <p>
            A simple, personalized approach to help you make confident
            career decisions.
          </p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <img
              className="step-image"
              src="/images/know-yourself.jpeg"
              alt="Know yourself through learning and healthy habits"
            />
            <div className="step-card-content">
              <span className="step-number">01</span>
              <div className="pathway-icon">📝</div>
              <h3>Know Yourself</h3>
              <p>
                Answer a few questions about your interests, skills,
                education, and aspirations.
              </p>
            </div>
          </div>

          <div className="step-card">
            <img
              className="step-image"
              src="/images/plan-your-future.jpeg"
              alt="Plan your future and work toward success"
            />
            <div className="step-card-content">
              <span className="step-number">02</span>
              <div className="pathway-icon">🗺️</div>
              <h3>Plan Your Future</h3>
              <p>
                Build a roadmap with skills to learn and goals to work
                toward.
              </p>
            </div>
          </div>

          <div className="step-card">
            <img
              className="step-image"
              src="/images/discover-your-match.jpeg"
              alt="Discover your career match through business and growth"
            />
            <div className="step-card-content">
              <span className="step-number">03</span>
              <div className="pathway-icon">✨</div>
              <h3>Discover Your Match</h3>
              <p>
                Explore career directions that align with your preferences
                and strengths.
              </p>
            </div>
          </div>
        </div>

        <div className="final-cta">
          <h2>Ready to discover what's possible?</h2>
          <p>Your next chapter starts with one small step.</p>
          <button className="nav-cta" onClick={() => setShowAssessment(true)}>
            Find My Career Path →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="brand">
          <span className="brand-icon">✦</span>
          <span>CareerCompass</span>
        </a>
        <p>Find your direction. Build your future.</p>
        <span>© 2026 CareerCompass. Your future starts here.</span>
      </footer>
    </div>
  );
}

export default App;
