import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";
import { skills } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="section-pad border-y border-white/5">
      <Container>
        <SectionHeading
          number="02"
          eyebrow="EXPERTISE"
          title="A practical stack for building, automating and communicating."
          description="The tools I use to turn ideas into working solutions, from AI and automation to development, data, and design. I’m always experimenting, and adding to the stack."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.04}>
              <article className="skill-card h-full">
                <div className="mb-6 flex items-center justify-between">
                  <span className="icon-orb">
                    <Icon name={group.icon} />
                  </span>
                  <span className="text-xs tracking-[.16em] text-muted">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold">
                  {group.category}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
