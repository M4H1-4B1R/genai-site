export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <strong>⬡ GenAILabs</strong>
        <p>
          Monthly intelligence, architecture blueprints, and product deployment
          debriefs.
        </p>
      </div>
      <div>
        <span className="footer-label">Services</span>
        <a href="#services">AI Product Engineering</a>
        <a href="#services">Agentic Layer Engineering</a>
        <a href="#services">Forward-Deployed Services</a>
      </div>
      <div>
        <span className="footer-label">Explore</span>
        <a href="#work">Work</a>
        <a href="#services">Architecture</a>
        <a href="#about">About</a>
      </div>
      <div>
        <span className="footer-label">Connect</span>
        <a href="#contact">Talk to Our Team</a>
        <a href="#contact">Careers</a>
        <a href="#contact">Contact</a>
        <div className="subscribe">
          <input placeholder="Enter your work mail..." />
          <button className="button button-primary">Subscribe →</button>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 GENAILABS INC. ALL RIGHTS RESERVED.</span>
        <span>Privacy policy　 Terms of use　 Security</span>
      </div>
    </footer>
  );
}
