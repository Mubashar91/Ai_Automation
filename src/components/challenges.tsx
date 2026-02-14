'use client'

import { useLanguage } from '@/components/providers'
import { languages } from '@/lib/languages'

export function ChallengesSection() {
  const { language } = useLanguage()
  const t = languages[language]
  const challenges = t.challenges.challenges

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 text-center animate-fade-in">
          {t.challenges.title}
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-foreground/60 dark:text-foreground/70 text-center mb-10 sm:mb-16 text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {t.challenges.subtitle}
        </p>

        <div className="space-y-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="border-l-4 border-primary pl-4 sm:pl-6 py-3 animate-slide-up dark:border-primary/70"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3">
                {challenge.title}
              </h4>
              <p className="text-sm sm:text-base md:text-lg text-foreground/70 dark:text-foreground/80 leading-relaxed">
                {challenge.problem} {challenge.issue}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
