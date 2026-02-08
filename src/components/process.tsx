import { Card } from '@/components/ui/card'

interface ProcessStep {
  step: number
  title: string
  items: string[]
}

const steps: ProcessStep[] = [
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
]

export function ProcessSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl font-bold text-foreground mb-4 text-center animate-fade-in">
          Our Collaboration Process - Step by Step to Maximum Efficiency
        </h3>
        <p className="text-lg text-foreground/60 dark:text-foreground/70 text-center mb-12 text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
          A proven 4-step methodology to transform your operations
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <Card
              key={step.step}
              className="group border-2 border-primary/20 dark:border-primary/30 p-8 hover:border-primary dark:hover:border-primary/60 transition-all duration-500 dark:bg-slate-900 animate-slide-up hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 relative overflow-hidden"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-purple-600 text-white font-bold text-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
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
