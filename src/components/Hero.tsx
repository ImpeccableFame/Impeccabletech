import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  MoveUpRight,
  Sparkles,
  Twitter,
} from "lucide-react";
import { Container } from "./Container";
import { site } from "../data/site";

export function Hero() {
  const socials = [
    { label: "LinkedIn", href: site.linkedin, icon: Linkedin },
    { label: "GitHub", href: site.github, icon: Github },
    { label: "X", href: site.x, icon: Twitter },
    { label: "WhatsApp", href: site.whatsapp, icon: MessageCircle },
    { label: "Email", href: `mailto:${site.email}`, icon: Mail },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />

      <Container className="relative grid gap-14 py-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow inline-flex items-center gap-2"
          >
            <Sparkles size={14} /> BUILD • AUTOMATE • INNOVATE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[.98] tracking-[-.04em] sm:text-6xl lg:text-7xl"
          >
            Building <span className="gradient-text">intelligent systems.</span>
            <br />
            Designing digital experiences.
            <br />
            Writing ideas that matter.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg"
          >
            I'm <strong className="text-ink-strong">Impeccable</strong> — I
            build intelligent systems, software and digital experiences. I bring
            together technology, design and clear thinking to turn complex ideas
            into practical solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a className="primary-button" href="#projects">
              Explore My Work <MoveUpRight size={17} />
            </a>

            <a className="secondary-button" href="#contact">
              Let's Connect <ArrowDownRight size={17} />
            </a>
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {socials.map(({ label, href, icon: I }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="social-chip"
                aria-label={label}
              >
                <I size={17} /> <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-md flex-col items-center"
        >
          {/* FOCUS — normal flow on mobile, floating on desktop */}
          <div className="order-1 mb-5 w-[calc(100%-1rem)] max-w-sm rounded-2xl border border-white/10 bg-black/50 p-4 shadow-2xl backdrop-blur-xl md:absolute md:-left-5 md:top-14 md:z-10 md:mb-0 md:w-auto md:max-w-none">
            <div className="text-xs text-white/70">FOCUS</div>
            <div className="mt-1 font-display font-semibold">
              Intelligent Systems
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="relative order-2 w-full">
            <div className="profile-halo" />

            <img
              src={`${import.meta.env.BASE_URL}profile.webp`}
              alt="ImpeccableTech"
              className="block h-auto w-full object-cover"
              style={{
                borderRadius: "42% 58% 48% 52% / 35% 42% 58% 65%",
              }}
              loading="eager"
            />
          </div>

          {/* IDENTITY — normal flow on mobile, floating on desktop */}
          <div className="order-3 mt-5 w-[calc(100%-1rem)] max-w-sm rounded-2xl border border-white/10 bg-black/50 p-4 shadow-2xl backdrop-blur-xl md:absolute md:-right-5 md:bottom-14 md:z-10 md:mt-0 md:w-auto md:max-w-none">
            <div className="text-xs text-white/70">IDENTITY</div>
            <div className="mt-1 font-display font-semibold">
              Intelligence. Design. Words.
            </div>
          </div>
        </motion.div>
      </Container>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[.2em] text-muted md:flex"
      >
        Scroll to explore <ArrowDownRight size={15} />
      </a>
    </section>
  );
}
