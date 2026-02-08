'use client'

import { CheckCircle } from 'lucide-react'
import { useLanguage } from '@/components/providers'
import { languages } from '@/lib/languages'

export function BenefitsSection() {
  const { language } = useLanguage()
  const t = languages[language]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center animate-fade-in tracking-tight">
          {t.benefits.title}
        </h3>
        <p className="text-xl text-foreground/70 dark:text-foreground/80 text-center mb-16 text-balance animate-slide-up font-light max-w-3xl mx-auto" style={{ animationDelay: '0.1s' }}>
          {t.benefits.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {t.benefits.benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-white dark:bg-slate-800 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 animate-slide-up relative overflow-hidden" 
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-foreground/70 dark:text-foreground/80 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
