'use client'

import { useLanguage } from '@/components/providers'
import { languages } from '@/lib/languages'

export function ChallengesSection() {
  const { language } = useLanguage()
  const t = languages[language]
  const challenges = t.challenges.challenges

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl font-bold text-foreground mb-4 text-center animate-fade-in">
          {t.challenges.title}
        </h3>
        <p className="text-lg text-foreground/60 dark:text-foreground/70 text-center mb-16 text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {t.challenges.subtitle}
        </p>

        <div className="space-y-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="border-l-4 border-primary pl-6 py-3 animate-slide-up dark:border-primary/70"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <h4 className="text-xl font-bold text-foreground mb-3">
                {challenge.title}
              </h4>
              <p className="text-foreground/70 dark:text-foreground/80 text-sm leading-relaxed">
                {challenge.problem} {challenge.issue}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
