import { MoveUpRight } from 'lucide-react'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import type { PillarItem } from '../types'

type Props = { id: string; number: string; eyebrow: string; title: string; description: string; items: PillarItem[]; tone: 'auto' | 'design' }

export function PillarSection({ id, number, eyebrow, title, description, items, tone }: Props) {
  return <section id={id} className={`section-pad ${tone === 'auto' ? 'pillar-auto' : 'pillar-design'}`}>
    <Container>
      <SectionHeading number={number} eyebrow={eyebrow} title={title} description={description} />
      <div className="grid gap-5 lg:grid-cols-3">
        {items.map((item, i) => <Reveal key={item.id} delay={i * .05}><article className="pillar-card h-full">
          <div className="pillar-image"><img src={item.image} alt={`${item.title} preview`} loading="lazy" /><div className="scanline" /></div>
          <div className="p-6"><h3 className="font-display text-2xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{item.description}</p><div className="mt-5 flex flex-wrap gap-2">{item.tools.map(t => <span className="tag" key={t}>{t}</span>)}</div><div className="mt-6 flex flex-wrap gap-3">{item.link && <a href={item.link} className="inline-flex items-center gap-2 text-sm font-semibold hover:text-violet">View <MoveUpRight size={15} /></a>}{item.caseStudy && <span className="text-sm text-muted">{item.caseStudy}</span>}</div></div>
        </article></Reveal>)}
      </div>
    </Container>
  </section>
}