import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";
import { services } from "../data/services";

export function Services() {
  return (
    <section id="services" className="section-pad border-y border-white/5">
      <Container>
        <SectionHeading
          number="04"
          eyebrow="SERVICES"
          title="From idea to useful digital system."
          description="I help turn ideas, challenges, and opportunities into practical digital solutions, from intelligent automation and AI consulting to websites, visual design, and technical content"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <article className="service-card h-full">
                <span className="icon-orb">
                  <Icon name={s.icon} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {s.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
