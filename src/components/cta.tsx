'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/providers'
import { languages } from '@/lib/languages'

export function CTASection() {
  const { language } = useLanguage()
  const t = languages[language]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 text-white transition-colors duration-300 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h3 className="text-5xl md:text-6xl font-extrabold mb-8 text-balance leading-tight animate-fade-in drop-shadow-lg tracking-tight">
          {t.cta.title}
        </h3>
        <p className="text-xl md:text-2xl mb-12 text-white/95 text-balance leading-relaxed animate-slide-up font-light" style={{ animationDelay: '0.1s' }}>
          {t.cta.description}
        </p>

        <Button
          asChild
          className="group bg-white text-primary rounded-full px-10 py-6 text-lg font-bold hover:bg-white/95 transition-all duration-300 hover:shadow-2xl hover:scale-110 inline-flex items-center gap-3 animate-slide-up relative overflow-hidden"
          style={{ animationDelay: '0.2s' }}
        >
          <a href="https://app.reclaim.ai/m/gigi-business/process--automation-consultation">
            <span className="relative z-10 flex items-center gap-3">
              {t.cta.button}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        </Button>
      </div>
    </section>
  )
}
