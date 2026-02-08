'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/providers'
import { languages } from '@/lib/languages'

export function HeroSection() {
  const { language } = useLanguage()
  const t = languages[language]

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block mb-8 animate-bounce-slow">
          <span className="px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 rounded-full text-sm font-semibold text-blue-700 dark:text-blue-300 shadow-sm">✨ Enterprise-Grade AI Automation</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-extrabold text-foreground mb-8 text-balance leading-tight animate-fade-in tracking-tight">
          {t.hero.title}
        </h2>
        <p className="text-xl md:text-2xl text-foreground/70 dark:text-foreground/80 mb-12 max-w-3xl mx-auto text-balance leading-relaxed animate-slide-up font-light" style={{ animationDelay: '0.1s' }}>
          {t.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button
            asChild
            className="group bg-gradient-to-r from-primary to-purple-600 text-white rounded-full px-8 py-6 text-base hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 font-semibold relative overflow-hidden"
          >
            <a href="https://app.reclaim.ai/m/gigi-business/process--automation-consultation">
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.button1}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </Button>
          <Button
            variant="outline"
            className="group rounded-full px-8 py-6 text-base border-2 border-primary/30 dark:border-primary/50 text-foreground hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 bg-transparent hover:border-primary font-semibold hover:scale-105"
          >
            <span className="flex items-center gap-2">
              {t.hero.button2}
              <span className="text-xl group-hover:rotate-12 transition-transform">🎯</span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
