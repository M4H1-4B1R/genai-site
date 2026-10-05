import Image from "next/image";

const projects = [
  {
    number: "01",
    type: "Healthcare AI",
    title: "Kaya Health Coach",
    copy: "A personalized health coaching experience powered by AI, from daily check-ins to guided sessions.",
    image: "/figma/raw-20.png",
    side: "left",
  },
  {
    number: "02",
    type: "Trade Compliance AI",
    title: "Mingcheji China Cars",
    copy: "Bring trade documents, checks, and decisions into one workflow.",
    image: "/figma/raw-12.png",
    side: "right",
  },
  {
    number: "03",
    type: "Autonomous Logistics",
    title: "NEXAGENT",
    copy: "A venture studio fused with retail VC. We build and operate real products, then open the cap table so anyone can invest and help grow them.",
    image: "/figma/raw-1.png",
    side: "left",
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
            className={`project project-${project.side}`}
            key={project.title}
          >
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
            />
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
