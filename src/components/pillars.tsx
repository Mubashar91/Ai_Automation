import React from "react"
import {
  Zap,
  Cog,
  Brain,
} from 'lucide-react'

interface Pillar {
  icon: React.ReactNode
  title: string
  description: string
}

const pillars: Pillar[] = [
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: 'Smart Software Solutions',
    description:
      'Implement tailored software solutions to optimize HR, sales, finance, and operations.',
  },
  {
    icon: <Cog className="w-12 h-12 text-primary" />,
    title: 'Optimized Workflows & Automation',
    description:
      'Design and implement efficient processes that eliminate manual work and reduce bottlenecks.',
  },
  {
    icon: <Brain className="w-12 h-12 text-primary" />,
    title: 'AI-enhanced Process Improvement',
    description:
      'Leverage AI and machine learning to continuously improve and optimize your operations.',
  },
]

export function PillarsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl font-bold text-foreground mb-4 text-center animate-fade-in">
          The 3 Pillars of Digitization and Process Optimization
        </h3>
        <p className="text-lg text-foreground/60 dark:text-foreground/70 text-center mb-16 text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
          SaaS. Workflows. AI. — How to make your company efficient, scalable, and future-proof.
        </p>

        <div className="flex flex-col gap-8 md:grid md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl text-center border-2 border-border dark:border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-slide-up bg-card hover:-translate-y-3 relative overflow-hidden"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/0 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {pillar.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-foreground/70 dark:text-foreground/80 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card p-10 rounded-2xl border-2 border-primary/20 dark:border-primary/30 animate-slide-up shadow-xl relative overflow-hidden group" style={{ animationDelay: '0.3s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          <p className="text-foreground/80 dark:text-foreground/90 text-center text-lg leading-relaxed relative z-10">
            🚀 Most routine tasks can be automated with the right technology. We implement tailored
            software solutions to optimize HR, sales, finance, and operations, improving efficiency
            and reducing overhead.
          </p>
        </div>
      </div>
    </section>
  )
}
