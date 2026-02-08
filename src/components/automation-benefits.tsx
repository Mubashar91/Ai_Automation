import { TrendingUp } from 'lucide-react'

interface Benefit {
  metric: string
  description: string
}

const benefits: Benefit[] = [
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
]

export function AutomationBenefitsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in">
          <TrendingUp className="w-6 h-6 text-primary" />
          <h3 className="text-4xl font-bold text-foreground">
            AI-Driven Process Automation
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
