import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useLanguage } from '@/components/providers'
import { languages } from '@/lib/languages'

export function PackagesSection() {
  const { language } = useLanguage()
  const t = languages[language]

  const packages = [
    {
      name: language === 'en' ? 'Starter' : 'Starter',
      description: language === 'en' ? 'Optimize One Business Area' : 'Optimieren Sie Einen Geschäftsbereich',
      features: language === 'en' ? [
        'For companies that want to automate a specific area',
        'Perfect for automating Sales, HR, Finance, or IT processes',
        'Initial automation solutions for increased efficiency',
        'Analysis & automation of one business area',
        'Smart process optimization for time & cost savings',
        'Integration into existing systems (CRM, ERP, Accounting)',
        'Optimized workflows with automation',
        'Monthly monitoring & data-driven improvements',
      ] : [
        'Für Unternehmen, die einen bestimmten Bereich automatisieren möchten',
        'Perfekt für die Automatisierung von Vertriebs-, HR-, Finanz- oder IT-Prozessen',
        'Erste Automatisierungslösungen für mehr Effizienz',
        'Analyse & Automatisierung eines Geschäftsbereichs',
        'Intelligente Prozessoptimierung für Zeit- und Kostenersparnis',
        'Integration in bestehende Systeme (CRM, ERP, Buchhaltung)',
        'Optimierte Workflows mit Automatisierung',
        'Monatliches Monitoring & datenbasierte Verbesserungen',
      ],
    },
    {
      name: language === 'en' ? 'Growth' : 'Wachstum',
      description: language === 'en' ? 'Scalable Automation for Multiple Departments' : 'Skalierbare Automatisierung Für Mehrere Abteilungen',
      features: language === 'en' ? [
        'For companies aiming to automate several departments',
        'Automate Sales, HR, Finance & Operations seamlessly',
        'Scalable automation with connected workflows',
        'Automation & linking of multiple business areas',
        'Advanced security & access controls for teams',
        'Company-wide process strategy for long-term efficiency',
        'Dedicated consultant & tailored strategy',
        'Live dashboards with real-time analytics',
      ] : [
        'Für Unternehmen, die mehrere Abteilungen automatisieren möchten',
        'Automatisieren Sie Vertrieb, HR, Finanzen & Betrieb nahtlos',
        'Skalierbare Automatisierung mit verbundenen Workflows',
        'Automatisierung & Verknüpfung mehrerer Geschäftsbereiche',
        'Erweiterte Sicherheit & Zugriffskontrollen für Teams',
        'Unternehmensweite Prozessstrategie für langfristige Effizienz',
        'Dedizierter Berater & maßgeschneiderte Strategie',
        'Live-Dashboards mit Echtzeit-Analysen',
      ],
      highlighted: true,
    },
    {
      name: language === 'en' ? 'Enterprise' : 'Unternehmen',
      description: language === 'en' ? 'Custom Automation, Integrations & Software' : 'Individuelle Automatisierung, Integrationen & Software',
      features: language === 'en' ? [
        'For enterprises needing highly customized solutions',
        'Fully tailored process automation',
        'Custom software, tools & integrations',
        'Seamless system integration for maximum efficiency',
        'End-to-end automation strategy',
        'Dedicated support team',
        'Priority implementation',
        'Custom SLA agreements',
      ] : [
        'Für Unternehmen, die hochgradig angepasste Lösungen benötigen',
        'Vollständig maßgeschneiderte Prozessautomatisierung',
        'Individuelle Software, Tools & Integrationen',
        'Nahtlose Systemintegration für maximale Effizienz',
        'End-to-End-Automatisierungsstrategie',
        'Dediziertes Support-Team',
        'Prioritäre Implementierung',
        'Individuelle SLA-Vereinbarungen',
      ],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-foreground mb-4 text-center animate-fade-in">
          {t.packages.title}
        </h3>
        <p className="text-lg text-foreground/60 dark:text-foreground/70 text-center mb-16 text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {t.packages.subtitle}
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 place-items-center xl:place-items-stretch">
          {packages.map((pkg, idx) => (
            <Card
              key={pkg.name}
              className={`p-6 sm:p-8 flex flex-col h-full rounded-2xl transition-all duration-500 animate-slide-up relative overflow-hidden group w-full max-w-[26rem] sm:max-w-full xl:max-w-none ${
                pkg.highlighted
                  ? 'bg-gradient-to-br from-primary via-primary to-card text-primary-foreground border-0 shadow-2xl shadow-primary/20 scale-105'
                  : 'bg-card border-2 border-border dark:border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105'
              }`}
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              {pkg.highlighted && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="mb-4 relative z-10">
                    <span className="inline-block px-4 py-1.5 bg-background/20 backdrop-blur-sm text-primary-foreground text-xs font-bold rounded-full shadow-lg">
                      ⭐ {language === 'en' ? 'MOST POPULAR' : 'AM BELIEBTESTEN'}
                    </span>
                  </div>
                </>
              )}

              <h4 className={`text-2xl sm:text-2xl font-bold mb-3 sm:mb-2 ${pkg.highlighted ? 'text-primary-foreground' : 'text-foreground'}`}>
                {pkg.name}
              </h4>
              <p className={`mb-6 sm:mb-8 text-base sm:text-sm leading-relaxed ${pkg.highlighted ? 'text-primary-foreground/80' : 'text-foreground/60'}`}>
                {pkg.description}
              </p>

              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-1 text-sm sm:text-sm">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <Check className={`w-5 h-5 sm:w-4 sm:h-4 flex-shrink-0 mt-1 ${pkg.highlighted ? 'text-primary-foreground' : 'text-primary'}`} />
                    <span className={pkg.highlighted ? 'text-primary-foreground/90' : 'text-foreground/70'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => {
                  window.open(
                    "https://app.reclaim.ai/m/gigi-business/process--automation-consultation",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className={`w-full rounded-xl py-5 sm:py-7 text-base sm:text-base font-bold transition-all duration-300 relative z-10 ${
                  pkg.highlighted
                    ? 'bg-background text-foreground hover:bg-background/95 hover:shadow-xl hover:scale-105'
                    : 'bg-primary text-primary-foreground hover:shadow-xl hover:shadow-primary/30 hover:scale-105'
                }`}
              >
                {language === 'en' ? 'Get Started' : 'Jetzt Starten'}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
