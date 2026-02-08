'use client'
import { Clock, TrendingDown, Zap } from 'lucide-react'

export function Statistics() {
  const stats = [
    { icon: Clock, value: '10h+', label: 'Weekly savings per employee' },
    { icon: TrendingDown, value: '80%', label: 'Less manual work through automation' },
    { icon: Zap, value: '30%', label: 'Cost savings through optimized processes' }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 text-white transition-colors duration-300 overflow-hidden relative">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center animate-slide-up group" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="inline-block p-5 bg-white/10 backdrop-blur-sm rounded-3xl mb-6 group-hover:bg-white/20 transition-all group-hover:scale-110 group-hover:rotate-3 shadow-2xl">
                <stat.icon className="w-14 h-14 mx-auto" />
              </div>
              <div className="text-7xl font-extrabold mb-3 group-hover:scale-110 transition-transform tracking-tight">{stat.value}</div>
              <p className="text-white/95 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
