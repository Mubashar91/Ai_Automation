'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/providers'
import { languages } from '@/lib/languages'
import { motion } from 'framer-motion'

export function HeroSection() {
  const { language } = useLanguage()
  const t = languages[language]

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background elements - constrained for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-4 sm:right-10 w-56 h-56 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="inline-block">
            <span className="px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-500/20">
              Enterprise-Grade AI Automation
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {t.hero.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8"
              onClick={() => {
                window.open(
                  "https://app.reclaim.ai/m/gigi-business/process--automation-consultation",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              {t.hero.button1}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8"
            >
              {t.hero.button2} 🎯
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}