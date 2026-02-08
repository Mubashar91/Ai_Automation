import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Ann-Carolin Koschare',
    role: 'Marketing',
    company: 'Autohaus Meyer GmbH',
    quote: 'Weber Media was recommended to us and after a familiarisation phase we have engaged the agency on a long-term basis. So far, we are convinced by the surprisingly fast successes.',
  },
  {
    name: 'Janina Schönau',
    role: 'Assistant to the management',
    company: '',
    quote: 'Super service & performance! The co-operation is fun and we are very satisfied with the results. We look forward to planning and realising further topics and projects.',
  },
  {
    name: 'Mick Stommel',
    role: 'Assistant to the management',
    company: '',
    quote: 'We are extremely satisfied with Weber Media\'s digital marketing advice. The team is professional, competent and always up to date with the latest digital trends.',
  },
  {
    name: 'Lisa-Marie Hohnsbehn',
    role: 'Head of Recruiting & Personnel Marketing',
    company: '',
    quote: 'The expertise of Weber Media Consulting UG is outstanding. Weber Media works in a very structured and service-orientated manner and is always on hand to offer advice.',
  },
  {
    name: 'Evgenia Almai',
    role: 'Human resources / payroll accounting',
    company: '',
    quote: 'We appreciate the agency\'s collaborative approach and their ability to react quickly to changes and continuously bring in new, creative ideas.',
  },
  {
    name: 'Rafael Sommerfeld',
    role: 'Regional Manager',
    company: '',
    quote: 'An absolute recommendation! The cooperation with the agency was communicative at the highest level from day one - fast, clear and uncomplicated.',
  },
  {
    name: 'Sandra Marszan',
    role: 'Management Consultant',
    company: '',
    quote: 'Mr Weber from Weber Media is extremely professional and reliable. The cooperation is always supportive and the 24/7 availability has helped us enormously.',
  },
  {
    name: 'Wolfgang Schlüter',
    role: 'Management',
    company: '',
    quote: 'Many thanks for the good and trusting cooperation. We were able to achieve good results together. Strategically good preparation and realisation of the campaign.',
  },
  {
    name: 'Jan-Eric Reinhard',
    role: 'Member of the Executive Board',
    company: '',
    quote: 'We are extremely satisfied with Weber Media! Our vacancies were successfully filled quickly, professionally and without the typical hassle of job boards.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-foreground mb-4 text-center animate-fade-in">
          Clients Who Trust Us
        </h3>
        <p className="text-lg text-foreground/60 dark:text-foreground/70 text-center mb-16 text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Real results from companies that transformed their operations
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card border border-border dark:border-border/50 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500 rounded-2xl animate-slide-up group hover:-translate-y-2 relative overflow-hidden"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/0 transition-all duration-500"></div>
              
              <div className="relative z-10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-foreground/70 dark:text-foreground/80 mb-4 leading-relaxed text-sm">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-foreground/60">{testimonial.role}</p>
                {testimonial.company && <p className="text-xs text-foreground/50">{testimonial.company}</p>}
              </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
