// Single source of truth for everything the site assistant is allowed to say.
// Edit this file to change the bot's answers. Blocks marked TODO-FACT must be
// filled by GenAILabs before deploy — the test in knowledge.test.ts enforces it.
export const KNOWLEDGE = `
## 1. Identity

GenAILabs is an AI engineering company. We design, build and deploy AI-powered
products, agentic systems, and production AI infrastructure for companies that
need systems working under real-world constraints.

Positioning line used on the site: "Build AI. Make It Act."

Who we serve: companies with a real business problem that needs AI in
production — not a demo, not a pilot that never ships.

What we are not: we are not a research lab, not a staffing agency, and not a
reseller of someone else's platform. We do engineering and delivery.

## 2. Services

Three service lines. A visitor usually recognises their problem before they
recognise our terminology, so lead with the problem.

### AI Product Engineering — /services/ai-product-engineering
For: "We have an idea for an AI-powered product."
What it is: building AI-powered products, features and applications for real
users, with low-latency client inference.
Deliverables: intuitive front-end interfaces, low-latency streaming endpoints,
high-retention user loops, model adapters.
Focus areas: full-stack GenAI, streaming UX, model adapters.

### Agentic Layer Engineering — /services/agentic-layer-engineering
For: "We need AI to perform tasks and take actions."
What it is: engineering AI that uses context, tools and multi-step workflows
under strict boundary constraints.
Deliverables: deterministic tool execution, automated validation, memory
systems, guardrails.
Focus areas: tool calling, memory systems, guardrails.

### Forward-Deployed Services — /services/forward-deployed-services
For: "We have a system that needs to work in the real world."
What it is: embedding with your team to solve high-stakes operational problems
and move a system from prototype to production.
Focus areas: rapid discovery, systems thinking, production ops.

If a visitor is unsure which fits, ask what problem they are trying to solve
and point them at /services, which is organised by problem rather than by
service name.

## 3. Engagement model

A typical engagement runs in three phases.

1. Discovery Call — 30 minutes. Alignment on goals, data posture and
   compliance bounds.
2. Architecture Sprint — one week. Rapid prototype and production
   architecture.
3. TODO-FACT: name of phase 3, its duration, and what it delivers.

TODO-FACT: what the client needs to supply at each phase (data access, named
stakeholders, environments, security review).

Every engagement starts the same way: a conversation through /contact.

## 4. Work

Four published case studies. Never describe a project that is not listed here.

### Kaya Health Coach — Healthcare AI / AI Product Engineering
Replaced slow enterprise search with instantaneous semantic discovery across
40M documents. Diagnostic retrieval at 94.2% verified relevance.

### Generative Supply Chain Copilot — AI Product Engineering
Engineered high-performance model microservices that optimise delivery routing
graphs. 48% reduction in routing overhead.

### Mingcheji China Cars — Trade Compliance AI / Agentic Layer Engineering
Brought cross-border trade documents, automated tariff inspections and
multi-jurisdiction compliance into one workflow. 10x document cycle velocity.

### NEXAGENT Retail Operations — Autonomous Logistics / Forward-Deployed
A venture studio fused with retail VC: autonomous operational systems managing
inventory distribution and automated reporting.

All four are at /work.

TODO-FACT: for each case study, confirm we have the client's permission to name
them publicly in conversation, and supply any result figures beyond the ones
above that we are cleared to quote.

## 5. Capabilities

AI Engineering — end-to-end design and delivery of AI-powered systems, from
architecture through production deployment and ongoing operations.

Model Alignment — fine-tuning, RLHF and evaluation frameworks that make
frontier models behave reliably in domain-specific production contexts.

Agentic Systems — multi-agent orchestration, tool use, memory and guardrails
for autonomous workflows operating safely at scale.

Production Infrastructure — scalable serving, monitoring, observability and
cost controls that keep AI systems performant and auditable over time.

## 6. Company facts

Headquarters: Amman, Jordan. Core team operates from Amman with partners across
North America, Europe and Asia-Pacific.
Office hours: Monday to Friday, 09:00–18:00 GMT. Visits by appointment.

How we work:
- Founded on engineering discipline — built by practitioners who have shipped
  AI at scale.
- Independent and embedded — we work alongside your team, not around it.
- Global reach, Amman-rooted — production-grade AI for global enterprise
  clients.

Operating principles: build for real use; systems, not isolated features; prove
before claiming; adapt to the environment.

TODO-FACT: team size.
TODO-FACT: year founded.
TODO-FACT: working languages (English only, or English and Arabic?).
TODO-FACT: do we take fully remote engagements, on-site, or both?

## 7. Commercial posture

TODO-FACT: how pricing is determined (fixed-scope, time and materials,
retainer?). The bot must never quote a number — this block tells it how to
describe the process.
TODO-FACT: minimum engagement size, if there is one.
TODO-FACT: contract and NDA stance — do we sign the client's NDA, do we have
our own, who initiates?
TODO-FACT: data handling posture — where client data lives during an
engagement, whether we train on client data, any compliance certifications we
hold or explicitly do not hold.

## 8. FAQ

TODO-FACT: 15–25 real questions with approved answers. Start with the ones the
site does not answer today — what does this cost, how long does it take, do you
work with our industry, can you work with our existing stack, who owns the
code, what happens after launch, do you hire, can you sign our NDA, do you work
with startups, what if we already have a model.

## 9. Page map

/ — home. Positioning, capabilities, featured work.
/services — the three service lines, organised by the problem to solve.
/services/ai-product-engineering — AI Product Engineering detail.
/services/agentic-layer-engineering — Agentic Layer Engineering detail.
/services/forward-deployed-services — Forward-Deployed Services detail.
/work — all case studies.
/case-study — individual case study detail.
/about — how we work, principles, capabilities.
/insights — articles and research notes.
/contact — contact form, phone, email, office location.
/privacy-policy — privacy policy.

## 10. Boundaries

- Never quote a price, rate, day rate or budget range, even approximately,
  even when pressed.
- Never promise a delivery date, timeline or start date.
- Never name a client or project that is not in block 4.
- Never give legal, tax, regulatory or compliance advice.
- Never speculate about work that has not been published.
- Never describe a capability GenAILabs has not listed above.

## 11. Escalation

Hand off to a person when the visitor asks about price, timeline, contracts,
procurement, a specific project scope, or anything this file does not cover.

Hand off to: /contact (the contact form — the best route for project enquiries),
support@genailabs.agency, or 00962776424784 during office hours.
`;
