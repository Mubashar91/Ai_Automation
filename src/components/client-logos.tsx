'use client'

export function ClientLogos() {
  const clients = [
    'BAT Agrar', 'BAUER', 'Schlüter', 'Actovita', 'SWZS', 
    'Delta Sport', 'Auto Nagel', 'Beauty Addict', 'Dr. Jan Nebendahl',
    'BTB Energie', 'Sächsische', 'Lantzerath Group', 'Topteq', 'SAXS'
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-2xl font-bold text-foreground mb-4 animate-fade-in">Clients Who Trust Us</h3>
        <p className="text-center text-sm text-foreground/60 mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>ProzessAutomation.ai® is a brand of Weber Media®</p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll hover:pause">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div key={i} className="flex-shrink-0 w-48 h-24 mx-4 flex items-center justify-center bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 group">
                <span className="text-foreground/70 group-hover:text-primary font-semibold text-sm transition-colors">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
