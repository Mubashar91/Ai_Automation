'use client'



import { useState } from 'react'

import { ChevronDown } from 'lucide-react'

import { useLanguage } from '@/components/providers'

import { languages } from '@/lib/languages'



export function FAQSection() {

  const { language } = useLanguage()

  const t = languages[language]

  const [openIndex, setOpenIndex] = useState<number | null>(null)



  const faqItems = language === 'en' ? [

    {

      question: 'Is the consultation really free?',

      answer: 'Yes, our initial 30-minute consultation is completely free. We analyze your current processes and show you where automation can create the most impact for your business.',

    },

    {

      question: 'How quickly will I see results?',

      answer: 'We aim to deliver first measurable results within 30 days. The timeline depends on your specific processes and complexity, but our proven methodology ensures rapid implementation and value delivery.',

    },

    {

      question: 'What does working with you cost?',

      answer: 'Pricing varies based on the scope of automation needed. Our packages range from Starter (single department) to Enterprise (custom solutions). We provide transparent pricing during your consultation.',

    },

    {

      question: 'Can existing data be transferred to new systems?',

      answer: 'Absolutely. We handle data migration carefully and securely. Our integration process ensures your existing data is transferred accurately to new automation systems without loss or downtime.',

    },

    {

      question: 'From what company size is process automation worthwhile?',

      answer: 'Process automation benefits companies of all sizes, from small businesses to enterprises. Even small companies can save significant time and costs by automating just one department.',

    },

    {

      question: 'When should I engage an external automation partner?',

      answer: 'Consider working with us when you notice inefficient manual processes, high operational costs, or growth limitations due to staffing constraints. Our consultation will help identify the best opportunities for your business.',

    },

  ] : [

    {

      question: 'Ist die Beratung wirklich kostenlos?',

      answer: 'Ja, unsere erste 30-minütige Beratung ist völlig kostenlos. Wir analysieren Ihre aktuellen Prozesse und zeigen Ihnen, wo Automatisierung den größten Einfluss auf Ihr Unternehmen haben kann.',

    },

    {

      question: 'Wie schnell werde ich Ergebnisse sehen?',

      answer: 'Wir streben an, erste messbare Ergebnisse innerhalb von 30 Tagen zu liefern. Der Zeitrahmen hängt von Ihren spezifischen Prozessen und der Komplexität ab, aber unsere bewährte Methodik gewährleistet eine schnelle Implementierung und Wertschöpfung.',

    },

    {

      question: 'Was kostet die Zusammenarbeit mit Ihnen?',

      answer: 'Die Preise variieren je nach Umfang der benötigten Automatisierung. Unsere Pakete reichen von Starter (einzelne Abteilung) bis Enterprise (maßgeschneiderte Lösungen). Wir bieten transparente Preise während Ihrer Beratung.',

    },

    {

      question: 'Können bestehende Daten in neue Systeme übertragen werden?',

      answer: 'Absolut. Wir handhaben die Datenmigration sorgfältig und sicher. Unser Integrationsprozess stellt sicher, dass Ihre vorhandenen Daten genau in neue Automatisierungssysteme übertragen werden, ohne Verlust oder Ausfallzeit.',

    },

    {

      question: 'Ab welcher Unternehmensgröße lohnt sich Prozessautomatisierung?',

      answer: 'Prozessautomatisierung kommt Unternehmen aller Größen zugute, von kleinen Unternehmen bis zu Großunternehmen. Selbst kleine Unternehmen können erhebliche Zeit und Kosten sparen, indem sie nur eine Abteilung automatisieren.',

    },

    {

      question: 'Wann sollte ich einen externen Automatisierungspartner beauftragen?',

      answer: 'Erwägen Sie die Zusammenarbeit mit uns, wenn Sie ineffiziente manuelle Prozesse, hohe Betriebskosten oder Wachstumsbeschränkungen aufgrund von Personalengpässen bemerken. Unsere Beratung hilft Ihnen, die besten Möglichkeiten für Ihr Unternehmen zu identifizieren.',

    },

  ]



  return (

    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">

      <div className="max-w-3xl mx-auto">

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-center animate-fade-in">

          {t.faq.title}

        </h3>

        <p className="text-base sm:text-lg md:text-lg text-foreground/60 dark:text-foreground/70 text-center mb-10 sm:mb-12 text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>

          {t.faq.subtitle}

        </p>



        <div className="space-y-4">

          {faqItems.map((item, index) => (

            <div

              key={index}

              className="group border-2 border-border dark:border-border/50 rounded-2xl overflow-hidden bg-card animate-slide-up hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20"

              style={{ animationDelay: `${0.05 * index}s` }}

            >

              <button

                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/0 transition-all duration-300"
              >
                <span className="font-bold text-foreground text-left group-hover:text-primary transition-colors text-base sm:text-lg md:text-base">
                  {item.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  <div className={`w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all ${openIndex === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 py-5 bg-card border-t-2 border-primary/20 dark:border-primary/30 animate-slide-down">
                  <p className="text-foreground/80 dark:text-foreground/90 leading-relaxed text-sm sm:text-base md:text-base">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>

          ))}

        </div>

      </div>

    </section>

  )

}

