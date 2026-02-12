'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/providers'
import { languages } from '@/lib/languages'

export function HeroSection() {
  const { language } = useLanguage()
  const t = languages[language]

  const handleBooking = () => {
    window.open(
      "https://app.reclaim.ai/m/gigi-business/process--automation-consultation",
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section className="relative pt-12 sm:pt-16 md:pt-20 pb-6 px-4 bg-gradient-to-br from-background via-background to-card transition-colors duration-300 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, hsl(var(--foreground) / 0.10) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-16 left-6 sm:top-20 sm:left-10 w-72 h-72 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl motion-safe:animate-pulse motion-reduce:animate-none"></div>
        <div className="absolute bottom-16 right-6 sm:bottom-20 sm:right-10 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-primary/10 rounded-full blur-3xl motion-safe:animate-pulse motion-reduce:animate-none" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] sm:w-[700px] sm:h-[700px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 py-4 sm:py-12">
        <div className="inline-block mb-2 sm:mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-card/80 backdrop-blur-xl border border-border rounded-full text-base font-semibold text-foreground shadow-lg shadow-foreground/5">
            <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
            Enterprise-Grade AI Automation
          </span>
        </div>

        {/* ✅ FIXED: REMOVED CLAMP, USING RESPONSIVE TAILWIND CLASSES */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-balance leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
            {t.hero.title}
          </span>
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 dark:text-foreground/80 mb-8 max-w-2xl mx-auto text-balance leading-relaxed font-light">
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center motion-safe:animate-slide-up motion-reduce:animate-none" style={{ animationDelay: '0.2s' }}>
          
          {/* ✅ FIXED: BOOKING BUTTON NOW USES onClick + window.top.location.href */}
          <Button
            className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg sm:text-xl font-bold shadow-2xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.03] border-0 ring-1 ring-primary/30"
            onClick={handleBooking}
          >
            <span className="flex items-center gap-2">
              {t.hero.button1}
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>

          {/* ✅ SECONDARY BUTTON (unchanged, scrolls to benefits) */}
          <Button
            variant="outline"
            className="group rounded-full px-8 py-6 text-lg sm:text-xl border-2 bg-card/70 backdrop-blur-xl border-border text-foreground hover:border-primary transition-all duration-300 font-bold hover:scale-[1.03] shadow-lg hover:bg-card"
            asChild
          >
            <a href="#benefits">
              <span className="flex items-center gap-2">
                {t.hero.button2}
                <span className="text-2xl sm:text-xl group-hover:rotate-12 transition-transform">🎯</span>
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}