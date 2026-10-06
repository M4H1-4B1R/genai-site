import Image from "next/image";

const projects = [
  {
    number: "01",
    type: "Healthcare AI",
    title: "Kaya Health Coach",
    copy: "A personalized health coaching experience powered by AI, from daily check-ins to guided sessions.",
    image: "/figma/selected-work-background.png",
    side: "left",
    art: "kaya",
    slug: "kaya",
  },
  {
    number: "02",
    type: "Trade Compliance AI",
    title: "Mingcheji China Cars",
    copy: "Bring trade documents, checks, and decisions into one workflow.",
    image: "/figma/mingcheji-showcase.png",
    side: "right",
    art: "single",
    slug: "mingcheji",
  },
  {
    number: "03",
    type: "Autonomous Logistics",
    title: "NEXAGENT",
    copy: "A venture studio fused with retail VC . we build and operate real products, then open the cap table so anyone can invest and help grow them.",
    image: "/figma/nexagent-showcase.png",
    side: "left",
    art: "single",
    slug: "nexagent",
  },
];

const kayaPhones = [
  { className: "kaya-phone-left", screen: "/figma/kaya-phone-right.png" },
  { className: "kaya-phone-center", screen: "/figma/kaya-phone-left.png" },
  {
    className: "kaya-phone-right",
    screen: "/figma/kaya-phone-right-screen.png",
  },
];

export function WorkShowcase() {
  return (
    <section className="work-section" id="work">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>What we&apos;ve actually built.</h2>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article
            className={`project project-${project.side} project-${project.slug}`}
            key={project.title}
          >
            <Image
              className="project-background"
              src={project.image}
              alt=""
              fill
              sizes="100vw"
            />
            {project.art === "kaya" ? (
              <div className="kaya-devices" aria-hidden="true">
                {kayaPhones.map((phone) => (
                  <div
                    className={`kaya-phone ${phone.className}`}
                    key={phone.className}
                  >
                    <Image
                      className="kaya-phone-frame"
                      src="/figma/kaya-phone-frame.png"
                      alt=""
                      fill
                      sizes="(max-width: 640px) 30vw, 22vw"
                    />
                    <Image
                      className="kaya-phone-screen"
                      src={phone.screen}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 30vw, 22vw"
                    />
                  </div>
                ))}
              </div>
            ) : null}
            <div className="project-copy">
              <p className="project-type">
                {project.number} — {project.type}
              </p>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
              <div className="tags">
                <span>AI</span>
                <span>Automation</span>
                <span>Infrastructure</span>
              </div>
              <a href="#contact">View project →</a>
            </div>
          </article>
        ))}
      </div>
      <a className="button button-muted" href="#contact">
        View all work →
      </a>
    </section>
  );
}
