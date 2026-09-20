import { Github, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";
import { site } from "../data/site";
export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:px-10 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="font-display text-2xl font-black tracking-[.14em]">
            IMPECCABLE TECH
          </div>
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
            Intelligence. Automation. Design. Words.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="social-chip" href={site.linkedin}>
            <Linkedin size={16} /> LinkedIn
          </a>

          <a className="social-chip" href={site.github}>
            <Github size={16} /> GitHub
          </a>

          <a className="social-chip" href={site.x}>
            <Twitter size={16} /> X
          </a>

          <a
            className="social-chip"
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>

          <a className="social-chip" href={`mailto:${site.email}`}>
            <Mail size={16} /> Email
          </a>
        </div>
        <p className="text-xs text-muted">
          © 2026 ImpeccableTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
