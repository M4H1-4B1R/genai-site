// Replaces the old testimonial slider (placeholder quotes removed).
// Add real client quotes here only once they are supplied and approved.
export function ServicesProofSlider() {
  return (
    <div className="section-x py-12 max-[640px]:py-8">
      <section className="services-proof">
        <div className="services-proof-top">
          <strong>— Client reviews</strong>
          <span>● On digital platforms</span>
        </div>
        <blockquote>
          4.8/5 from 238 client reviews. Live products, real users, real
          payments.
        </blockquote>
        <div className="services-proof-meta">
          <span>
            Projects delivered
            <br />
            <small>230+</small>
          </span>
          <span>
            Idea to live product
            <br />
            <small>4–8 weeks</small>
          </span>
          <span>
            App users
            <br />
            <small>150+ countries</small>
          </span>
        </div>
      </section>
    </div>
  );
}
