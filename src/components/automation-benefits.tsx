import { TrendingUp } from 'lucide-react'
import { useLanguage } from '@/components/providers'
import { languages } from '@/lib/languages'

export function AutomationBenefitsSection() {
  const { language } = useLanguage()
  const t = languages[language]

  const benefits = language === 'en' ? [
    {
      metric: 'Reduce repetitive work',
      description: 'and increase productivity',
    },
    {
      metric: 'Save 10+ hours weekly',
      description: 'for your team members',
    },
    {
      metric: 'Improve efficiency',
      description: 'with intelligent workflows and predictive analytics',
    },
    {
      metric: 'Cut up to 80%',
      description: 'of manual work',
    },
    {
      metric: 'Lower costs by up to 30%',
      description: 'through optimized processes',
    },
    {
      metric: 'Scale operations',
      description: 'without proportional cost increases',
    },
  ] : [
    {
      metric: 'Reduzieren Sie sich wiederholende Arbeit',
      description: 'und steigern Sie die Produktivität',
    },
    {
      metric: 'Sparen Sie 10+ Stunden wöchentlich',
      description: 'für Ihre Teammitglieder',
    },
    {
      metric: 'Verbessern Sie die Effizienz',
      description: 'mit intelligenten Workflows und prädiktiven Analysen',
    },
    {
      metric: 'Reduzieren Sie bis zu 80%',
      description: 'der manuellen Arbeit',
    },
    {
      metric: 'Senken Sie die Kosten um bis zu 30%',
      description: 'durch optimierte Prozesse',
    },
    {
      metric: 'Skalieren Sie den Betrieb',
      description: 'ohne proportionale Kostensteigerungen',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in">
          <TrendingUp className="w-6 h-6 text-primary" />
          <h3 className="text-4xl font-bold text-foreground">
            {t.automationBenefits.title}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 items-start animate-slide-up" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                  ✓
                </div>
              </div>
              <div>
                <p className="font-bold text-foreground">
                  {benefit.metric}
                </p>
                <p className="text-foreground/70 dark:text-foreground/80">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
