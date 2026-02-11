'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/providers'
import { languages } from '@/lib/languages'

export function QuestionCTA({
  question,
  buttonText = 'Book Your Free Consultation',
}: {
  question: string
  buttonText?: string
}) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 sm:px-10 sm:py-12">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              {question}
            </h3>

            <Button
              onClick={() => {
                if (window.top) window.top.location.href = "https://app.reclaim.ai/m/gigi-business/process--automation-consultation"
              }}
              className="group bg-primary text-primary-foreground rounded-full px-8 py-6 text-base font-bold hover:bg-primary/90 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.03] inline-flex items-center gap-3 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                {buttonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  const { language } = useLanguage()
  const t = languages[language]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card to-background text-foreground transition-colors duration-300 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h3 className="text-5xl md:text-6xl font-extrabold mb-8 text-balance leading-tight animate-fade-in drop-shadow-lg tracking-tight">
          {t.cta.title}
        </h3>
        <p className="text-xl md:text-2xl mb-12 text-foreground/90 text-balance leading-relaxed animate-slide-up font-light" style={{ animationDelay: '0.1s' }}>
          {t.cta.description}
        </p>

        <Button
          onClick={() => {
            if (window.top) window.top.location.href = "https://app.reclaim.ai/m/gigi-business/process--automation-consultation"
          }}
          className="group bg-primary text-primary-foreground rounded-full px-10 py-6 text-lg font-bold hover:bg-primary/90 transition-all duration-300 hover:shadow-2xl hover:scale-110 inline-flex items-center gap-3 animate-slide-up relative overflow-hidden"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="relative z-10 flex items-center gap-3">
            {t.cta.button}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </Button>
      </div>
    </section>
  )
}
