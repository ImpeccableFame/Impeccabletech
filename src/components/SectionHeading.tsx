import { motion } from "framer-motion";

type Props = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ number, eyebrow, title, description }: Props) {
  return (
    <div className="mb-12 grid gap-4 md:grid-cols-[100px_1fr] md:items-end">
      <div className="section-number">{number}</div>
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-3 max-w-4xl font-display text-4xl font-bold tracking-tight sm:text-5xl"
        >
          {title}
        </motion.h2>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
