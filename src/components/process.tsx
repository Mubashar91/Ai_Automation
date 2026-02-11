import { Card } from '@/components/ui/card'
import { useLanguage } from '@/components/providers'
import { languages } from '@/lib/languages'

export function ProcessSection() {
  const { language } = useLanguage()
  const t = languages[language]

  const steps = language === 'en' ? [
    {
      step: 1,
      title: 'Initial Consultation - Discover Potentials',
      items: [
        'In a non-binding conversation, we get to know your company and challenges',
        'Together, we identify where the greatest levers for more efficiency lie',
        'Discover opportunities for lower costs and smarter processes',
        'Free consultation to explore automation potential',
      ],
    },
    {
      step: 2,
      title: 'Process Analysis - Uncover Bottlenecks & Find Solutions',
      items: [
        'Our experts closely examine your workflows',
        'Identify hidden time wasters and unnecessary cost centers',
        'Find automation opportunities across departments',
        'Create detailed optimization roadmap',
      ],
    },
    {
      step: 3,
      title: 'Implementation - From Strategy to Reality',
      items: [
        'Implement the planned automations',
        'Seamlessly connect your systems',
        'Ensure your team understands and utilizes new workflows',
        'Monitor and adjust during rollout phase',
      ],
    },
    {
      step: 4,
      title: 'Continuous Improvement - The Turbo for Your Growth',
      items: [
        'Efficiency isn\'t a one-time project but an ongoing process',
        'Regularly analyze workflows with you and your team',
        'Adapt to new challenges and opportunities',
        'Maximize long-term value and ROI',
      ],
    },
  ] : [
    {
      step: 1,
      title: 'Erstberatung - Potenziale Entdecken',
      items: [
        'In einem unverbindlichen Gespräch lernen wir Ihr Unternehmen und Ihre Herausforderungen kennen',
        'Gemeinsam identifizieren wir, wo die größten Hebel für mehr Effizienz liegen',
        'Entdecken Sie Möglichkeiten für niedrigere Kosten und intelligentere Prozesse',
        'Kostenlose Beratung zur Erkundung des Automatisierungspotenzials',
      ],
    },
    {
      step: 2,
      title: 'Prozessanalyse - Engpässe Aufdecken & Lösungen Finden',
      items: [
        'Unsere Experten untersuchen Ihre Workflows genau',
        'Identifizieren Sie versteckte Zeitfresser und unnötige Kostenstellen',
        'Finden Sie Automatisierungsmöglichkeiten in allen Abteilungen',
        'Erstellen Sie eine detaillierte Optimierungs-Roadmap',
      ],
    },
    {
      step: 3,
      title: 'Implementierung - Von Der Strategie Zur Realität',
      items: [
        'Implementieren Sie die geplanten Automatisierungen',
        'Verbinden Sie Ihre Systeme nahtlos',
        'Stellen Sie sicher, dass Ihr Team neue Workflows versteht und nutzt',
        'Überwachen und anpassen während der Rollout-Phase',
      ],
    },
    {
      step: 4,
      title: 'Kontinuierliche Verbesserung - Der Turbo Für Ihr Wachstum',
      items: [
        'Effizienz ist kein einmaliges Projekt, sondern ein fortlaufender Prozess',
        'Analysieren Sie regelmäßig Workflows mit Ihnen und Ihrem Team',
        'Passen Sie sich an neue Herausforderungen und Chancen an',
        'Maximieren Sie langfristigen Wert und ROI',
      ],
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl font-bold text-foreground mb-4 text-center animate-fade-in">
          {t.process.title}
        </h3>
        <p className="text-lg text-foreground/60 dark:text-foreground/70 text-center mb-12 text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {t.process.subtitle}
        </p>

        <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
          {steps.map((step, idx) => (
            <Card
              key={step.step}
              className="group border-2 border-primary/20 dark:border-primary/30 p-8 hover:border-primary dark:hover:border-primary/60 transition-all duration-500 bg-card animate-slide-up hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 relative overflow-hidden"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground font-bold text-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h4>
                  <ul className="space-y-2">
                    {step.items.map((item, index) => (
                      <li key={index} className="flex gap-2 text-muted-foreground">
                        <span className="text-primary font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
