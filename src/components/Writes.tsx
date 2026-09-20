import { ArrowUpRight, Clock } from "lucide-react";
import { writes } from "../data/writes";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Writes() {
  return (
    <section id="writes" className="section-pad border-y border-white/5">
      <Container>
        <SectionHeading
          number="06"
          eyebrow="IMPECCABLE WRITES"
          title="Ideas transformed into clear, meaningful words."
          description="An editorial corner for technical writing, research, reflections and creative work."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {writes.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <article className="write-card h-full">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[.13em] text-muted">
                    <span>{item.category}</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between text-sm text-muted">
                    <span className="inline-flex items-center gap-2">
                      <Clock size={15} /> {item.readingTime}
                    </span>
                    <a
                      href={item.link ?? "#"}
                      className="inline-flex items-center gap-2 font-semibold text-ink-strong"
                    >
                      Read <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
