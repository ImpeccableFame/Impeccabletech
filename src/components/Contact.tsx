import { Github, Linkedin, Send, Twitter, MessageCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { site } from "../data/site";

export function Contact() {
  const [state, handleSubmit] = useForm("mqpaayew");

  return (
    <section id="contact" className="section-pad">
      <Container>
        <SectionHeading
          number="05"
          eyebrow="CONTACT"
          title="Have an idea? Let's build something impeccable."
          description="Whether you have a project in mind, a problem you'd like to solve, or simply want to explore an idea, let's connect and see what we can build together."
        />

        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          {/* DIRECT CHANNELS */}
          <div className="glass-card p-7 sm:p-9">
            <div className="eyebrow">DIRECT CHANNELS</div>

            <a
              href={`mailto:${site.email}`}
              className="mt-5 block break-all font-display text-xl font-semibold hover:text-violet"
            >
              {site.email}
            </a>

            <div className="mt-7 space-y-3">
              {[
                [Linkedin, "LinkedIn", site.linkedin],
                [Github, "GitHub", site.github],
                [Twitter, "X / Twitter", site.x],
                [MessageCircle, "WhatsApp", site.whatsapp],
              ].map(([I, label, href]) => {
                const IconComp = I as typeof Github;

                return (
                  <a
                    key={label as string}
                    href={href as string}
                    target="_blank"
                    rel="noreferrer"
                    className="social-row"
                  >
                    <IconComp size={18} />
                    <span>{label as string}</span>
                    <span className="ml-auto">↗</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* CONTACT FORM */}
          {state.succeeded ? (
            <div className="glass-card flex min-h-[400px] flex-col items-center justify-center p-7 text-center sm:p-9">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-violet/10 text-violet">
                <Send size={24} />
              </div>

              <h3 className="font-display text-2xl font-semibold">
                Message sent successfully.
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-muted">
                Thank you for reaching out. Your message has been received, and
                I'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form className="glass-card p-7 sm:p-9" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label>
                  <span className="field-label">Name</span>

                  <input required name="name" placeholder="Your name" />

                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </label>

                <label>
                  <span className="field-label">Email</span>

                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="field-label">Subject</span>

                <input
                  required
                  name="subject"
                  placeholder="What are we building?"
                />

                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </label>

              <label className="mt-5 block">
                <span className="field-label">Message</span>

                <textarea
                  required
                  name="message"
                  rows={6}
                  placeholder="Tell me a little about the idea..."
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </label>

              {state.errors && (
                <ValidationError
                  errors={state.errors}
                  className="mt-4 text-sm text-red-400"
                />
              )}

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button
                  className="primary-button"
                  type="submit"
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
