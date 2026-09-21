import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  const stats = [
    ["01", "Projects Built", "20+"],
    ["02", "Technologies", "10+"],
    ["03", "Years Experience", "5+"],
    ["04", "Expertise Areas", "5"],
  ];
  return (
    <section id="about" className="section-pad">
      <Container>
        <SectionHeading
          number="01"
          eyebrow="ABOUT IMPECCABLE"
          title="One builder. Three creative engines. One clear purpose."
          description="Technology should not just work. It should remove friction, communicate clearly and create room for better work."
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <Reveal>
            <div className="glass-card p-7 sm:p-9">
              <p className="text-lg leading-8 text-ink-strong sm:text-xl">
                I’m exploring the intersection of{" "}
                <span className="accent-word">
                  AI, data, automation and digital experiences
                </span>
                , and how these technologies can be brought together to solve
                practical problems and create better ways of working.
              </p>
              <p className="mt-6 leading-7 text-muted">
                My work spans AI-powered systems, workflow automation, software
                development, web and graphic design, and technical writing. I
                enjoy taking an idea or a problem, breaking it down,
                understanding how the pieces connect, and building something
                useful from it.
              </p>
              <p className="mt-6 leading-7 text-muted">
                What connects these different areas is my curiosity about how
                technology can make complex things simpler. Whether I’m building
                an intelligent workflow, developing a website, designing a
                digital experience, or translating an idea into clear words, I
                care about creating solutions that are functional, thoughtful,
                and easy to understand.
              </p>
              <p className="mt-6 leading-7 text-muted">
                Through ImpeccableTech, I’m continuously learning,
                experimenting, building, and exploring what becomes possible
                when technology, creativity, and ideas come together.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "AI & Automation",
                  "Software Development",
                  "Data",
                  "Design",
                  "Writing",
                ].map((x) => (
                  <span key={x} className="tag">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-3">
            {stats.map(([n, label, value], i) => (
              <Reveal key={n} delay={i * 0.06}>
                <div className="stat-card">
                  <span>{n}</span>
                  <strong>{value}</strong>
                  <p>{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
