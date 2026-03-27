import { Sparkles, Zap, Rabbit } from 'lucide-react'
import { RabbitPopCard } from './RabbitPopCard.jsx'

const CARDS = [
  {
    color: 'text-emerald-500',
    title: 'Forest Scout',
    inner: 'Equipped with long-range seismic sensors.',
    icon: <Zap />,
  },
  {
    color: 'text-teal-500',
    title: 'Burrow Logic',
    inner: 'Advanced navigational mapping systems.',
    icon: <Sparkles />,
  },
  {
    color: 'text-lime-500',
    title: 'Chrono Hopper',
    inner: 'Time-dilation stabilizers found in fur.',
    icon: <Rabbit />,
  },
]

export function GallerySection() {
  return (
    <section className="px-10 py-40 bg-white/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20 border-b border-emerald-900/10 pb-10">
          <div>
            <h3 className="text-4xl font-light mb-2 text-emerald-950">
              Internal Scans
            </h3>
            <p className="text-emerald-800/40 font-mono text-xs uppercase tracking-widest">
              Laboratory Report // 001
            </p>
          </div>
          <div className="flex items-center gap-2 text-emerald-300">
            <span className="text-[10px] font-bold uppercase">
              Sensors Active
            </span>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {CARDS.map((item, idx) => (
            <RabbitPopCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
