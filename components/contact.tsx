export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-copy">
        <h2>Contact us</h2>
        <p>
          Stop experimenting and start engineering. Let&apos;s discuss how we
          can turn your complex requirements into a deployed solution.
        </p>
        <div className="contact-details">
          <span>
            Email<strong>support@genailabs.agency</strong>
          </span>
          <span>
            Phone<strong>00962776424784</strong>
          </span>
          <span>
            Office<strong>Amman, Jordan</strong>
          </span>
        </div>
      </div>
      <form className="contact-form">
        <div className="form-title">
          <h3>Project intake</h3>
          <span>* Required fields</span>
        </div>
        <div className="form-grid">
          <label>
            Name *<input placeholder="Your full name" />
          </label>
          <label>
            Work email *<input type="email" placeholder="name@company.com" />
          </label>
          <label>
            Company
            <input placeholder="Organization or studio" />
          </label>
          <label>
            Region
            <select defaultValue="">
              <option value="" disabled>
                Select a region
              </option>
              <option>Jordan</option>
              <option>North America</option>
              <option>Europe</option>
            </select>
          </label>
        </div>
        <label>
          What are you working on? *
          <textarea placeholder="Describe the problem, current constraints, and what success needs to look like." />
        </label>
        <label className="consent">
          <input type="checkbox" /> <span>Marketing consent</span>
          <small>
            I agree to receive relevant project and product updates. I can
            withdraw consent at any time.
          </small>
        </label>
        <button className="button button-primary" type="submit">
          Talk to our team →
        </button>
      </form>
    </section>
  );
}
