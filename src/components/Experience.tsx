import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { experience } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <Container>
        <SectionHeading
          number="07"
          eyebrow="EXPERIENCE / JOURNEY"
          title="The journey is still being written."
          description="Keep this timeline honest and editable from src/data/experience.ts."
        />
        <div className="timeline">
          {experience.map((item, i) => (
            <Reveal key={`${item.year}-${item.title}`} delay={i * 0.04}>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-meta">
                  <span>{item.year}</span>
                  <span>{item.type}</span>
                </div>
                <div className="glass-card p-6 sm:p-7">
                  <h3 className="font-display text-xl font-semibold">
                    {item.title}
                  </h3>
                  <div className="mt-1 text-sm text-violet">
                    {item.organization}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
