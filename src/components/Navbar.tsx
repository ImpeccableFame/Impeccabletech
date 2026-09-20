import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["services", "Services"],
  ["contact", "Contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(
    () => localStorage.getItem("impeccable-theme") === "light",
  );
  const active = useActiveSection(links.map(([id]) => id));

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
    localStorage.setItem("impeccable-theme", light ? "light" : "dark");
  }, [light]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all sm:px-5 ${scrolled ? "nav-glass shadow-2xl" : "border-transparent bg-transparent"}`}
        aria-label="Primary navigation"
      >
        <button
          onClick={() => go("home")}
          className="group flex items-center gap-2"
          aria-label="Go to home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#08070d] text-sm font-black text-white ring-1 ring-violet-500/50 transition-transform group-hover:rotate-6">
            IT
          </span>
          <span className="font-display text-sm font-bold tracking-[.18em]">
            IMPECCABLE TECH
          </span>
        </button>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([id, label]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`nav-link ${active === id ? "active" : ""}`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            className="icon-button"
            onClick={() => setLight((v) => !v)}
            aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
          >
            {light ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <a
            href={`mailto:${site.email}`}
            className="hidden rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-lg sm:block"
          >
            Let's Work Together
          </a>
          <button
            className="icon-button lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="nav-glass mx-3 mt-2 rounded-2xl border p-3 lg:hidden"
          >
            {links.map(([id, label]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm ${active === id ? "bg-white/10 text-white" : "text-muted hover:bg-white/5 hover:text-white"}`}
              >
                {label}
              </button>
            ))}
            <a
              href={`mailto:${site.email}`}
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black"
            >
              Let's Work Together
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
