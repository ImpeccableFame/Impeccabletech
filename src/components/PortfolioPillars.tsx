import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Feather, Palette, Layers3 } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { automates } from "../data/automates";
import { designs } from "../data/designs";
import { writes } from "../data/writes";

type Tab = "All" | "Automates" | "Designs" | "Writes";

const tabs: { label: Tab; icon: typeof Bot }[] = [
  { label: "All", icon: Layers3 },
  { label: "Automates", icon: Bot },
  { label: "Designs", icon: Palette },
  { label: "Writes", icon: Feather },
];

const introductions: Record<
  Tab,
  { eyebrow: string; title: string; body: string }
> = {
  All: {
    eyebrow: "IMPECCABLE PORTFOLIO",
    title: "Different disciplines. One portfolio.",
    body: "Explore work across AI and automation, web development and graphic design, and writing — all brought together under one creative technology practice.",
  },
  Automates: {
    eyebrow: "IMPECCABLE AUTOMATES",
    title: "Here, repetitive work becomes intelligent work.",
    body: "We turn repetitive processes into thoughtful automated workflows — connecting AI, APIs, data and tools to help people and businesses work smarter.",
  },
  Designs: {
    eyebrow: "IMPECCABLE DESIGNS",
    title: "Where technology meets creativity and user experience.",
    body: "From responsive websites and web applications to UI/UX and graphic design, we turn ideas into digital experiences and visual solutions that are functional, clear, engaging, and thoughtfully designed.",
  },
  Writes: {
    eyebrow: "IMPECCABLE WRITES",
    title: "Ideas, translated into words that connect.",
    body: "We turn technical concepts, research, observations and ideas into clear writing that informs, communicates and gives complex subjects a human voice.",
  },
};

export function PortfolioPillars() {
  const [tab, setTab] = useState<Tab>("All");

  const all = [
    ...automates.map((x) => ({
      ...x,
      pillar: "Automates" as const,
    })),
    ...designs.map((x) => ({
      ...x,
      pillar: "Designs" as const,
    })),
    ...writes.map((x) => ({
      ...x,
      pillar: "Writes" as const,
      tools: [x.category, x.readingTime],
    })),
  ];

  const visible = tab === "All" ? all : all.filter((x) => x.pillar === tab);
  const intro = introductions[tab];

  return (
    <section id="projects" className="portfolio-pillars section-pad">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="portfolio-subhead"
        >
          <SectionHeading
            number="03"
            eyebrow={intro.eyebrow}
            title={intro.title}
            description={intro.body}
          />

          <div
            className="pillar-tabs"
            role="tablist"
            aria-label="Project disciplines"
          >
            {tabs.map(({ label, icon: Icon }) => (
              <button
                key={label}
                role="tab"
                aria-selected={tab === label}
                onClick={() => setTab(label)}
                className={`pillar-tab ${tab === label ? "selected" : ""}`}
              >
                <Icon size={15} /> {label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <motion.article
              layout
              key={`${item.pillar}-${item.id}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.035 }}
              className={`pillar-card pillar-${item.pillar.toLowerCase()} ${
                "type" in item && item.type === "graphic" ? "graphic-card" : ""
              } ${
                "type" in item && item.type === "writing" ? "writing-card" : ""
              }`}
            >
              {"type" in item && item.type === "graphic" ? (
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-[.16em] text-violet">
                    Graphic Design
                  </div>

                  <h4 className="mt-2 font-display text-xl font-semibold">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tools.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : "type" in item && item.type === "writing" ? (
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-[.16em] text-violet">
                    Writing
                  </div>

                  <h4 className="mt-2 font-display text-xl font-semibold">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tools.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <div className="pillar-image">
                    <img
                      src={item.image}
                      alt={`${item.title} preview`}
                      loading="lazy"
                    />
                    <div className="pillar-overlay" />
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-bold uppercase tracking-[.16em] text-violet">
                      Impeccable {item.pillar}
                    </div>

                    <h4 className="mt-2 font-display text-xl font-semibold">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-muted">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tools.map((t) => (
                        <span className="tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={
                        item.link ??
                        ("caseStudy" in item ? item.caseStudy : undefined) ??
                        "#"
                      }
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:text-violet"
                    >
                      Explore <ArrowUpRight size={15} />
                    </a>
                  </div>
                </>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
