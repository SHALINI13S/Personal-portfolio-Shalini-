import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <h1 className="hero-title">Hi, I'm Shalini</h1>
          <p className="hero-role">MCA Student</p>
          <p className="hero-intro">
            I'm a BCA graduate with a foundation in Python, Java and C++,
            currently continuing my studies at the MCA level. I enjoy building
            small applications, learning how software systems fit together,
            and applying what I learn to real, practical problems.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-hidden="true">
          <span className="hero-monogram">SS</span>
          <div className="hero-panel-line" />
          <span className="hero-panel-caption">BCA &middot; 2025</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
