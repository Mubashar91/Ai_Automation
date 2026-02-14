'use client'

import { CheckCircle } from 'lucide-react'
import { useLanguage } from '@/components/providers'
import { languages } from '@/lib/languages'

export function BenefitsSection() {
  const { language } = useLanguage()
  const t = languages[language]

  return (
    <section id="benefits" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-center animate-fade-in tracking-tight">
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {t.benefits.title}
          </span>
        </h3>
        <p className="text-base sm:text-xl md:text-2xl text-foreground/70 text-center mb-10 sm:mb-16 text-balance animate-slide-up font-light max-w-3xl mx-auto" style={{ animationDelay: '0.1s' }}>
          {t.benefits.subtitle}
        </p>

        <div className="flex flex-col gap-6 sm:gap-8 md:grid md:grid-cols-3">
          {t.benefits.benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group p-5 sm:p-8 lg:p-10 rounded-2xl hover:bg-card/50 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-slide-up" 
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                {benefit.title}
              </h4>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-foreground/80 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
