'use client'

import { Mail, Phone, MapPin, Building } from 'lucide-react'

export function Footer() {
  return (
    <footer id="footer" className="bg-card text-foreground py-16 px-4 sm:px-6 lg:px-8 border-t border-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">AI</span>
              <span className="text-foreground">WorldWideWorkforce</span>
            </h2>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Intelligent automation solutions for businesses ready to transform their operations
              and scale efficiently.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Headquarters</p>
                  <p className="text-foreground/60 text-sm">Austria & Poland</p>
                  <p className="text-foreground/50 text-xs">Rynek Główny 28, 31-010 Krakow</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Contact</p>
                  <a
                    href="tel:+4367762069472"
                    className="text-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    +43 677 620 69 472
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <a
                    href="mailto:admin@aiworldwideworkforce.com"
                    className="text-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    admin@aiworldwideworkforce.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Building className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Company</h3>
            </div>
            
            <div className="space-y-3">
              <div className="pb-3 border-b border-border/20">
                <p className="text-xs text-foreground/50 mb-1">Legal Name</p>
                <p className="text-sm font-medium text-foreground">AIWorldWideWorkforce</p>
              </div>
              <div className="pb-3 border-b border-border/20">
                <p className="text-xs text-foreground/50 mb-1">Registration</p>
                <p className="text-sm font-medium text-foreground">0001194589</p>
              </div>
              <div className="pb-3 border-b border-border/20">
                <p className="text-xs text-foreground/50 mb-1">VAT ID</p>
                <p className="text-sm font-medium text-foreground">PL 6762702873</p>
              </div>
              <div>
                <p className="text-xs text-foreground/50 mb-1">Management</p>
                <p className="text-sm font-medium text-foreground">Gigel Nerghes</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Resources</h3>
            
            <div className="space-y-2">
              <a href="#" className="block text-foreground/70 hover:text-primary transition-colors text-sm py-1">
                Privacy Policy
              </a>
              <a href="#" className="block text-foreground/70 hover:text-primary transition-colors text-sm py-1">
                Terms of Service
              </a>
              <a href="#" className="block text-foreground/70 hover:text-primary transition-colors text-sm py-1">
                Imprint
              </a>
              <a href="#" className="block text-foreground/70 hover:text-primary transition-colors text-sm py-1">
                Documentation
              </a>
              <a href="#" className="block text-foreground/70 hover:text-primary transition-colors text-sm py-1">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
