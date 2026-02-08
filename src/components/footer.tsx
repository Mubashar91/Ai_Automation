'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground dark:bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              AI<span className="text-white">WorldWideWorkforce</span>
            </h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              Intelligent automation solutions for businesses ready to transform their operations
              and scale efficiently.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/60 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Locations</p>
                  <p className="text-white/80">Austria & Poland</p>
                  <p className="text-white/80">Rynek Główny 28, 31-010 Krakow, Poland</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white/60 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href="tel:+4367762069472"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    +43 677 620 69 472
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white/60 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:admin@aiworldwideworkforce.com"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    admin@aiworldwideworkforce.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div>
            <h3 className="text-lg font-bold mb-6">Company Information</h3>

            <div className="space-y-4 text-white/80">
              <div>
                <p className="font-semibold text-white">Company Name</p>
                <p>AIWorldWideWorkforce</p>
              </div>

              <div>
                <p className="font-semibold text-white">Registration No.</p>
                <p>0001194589</p>
              </div>

              <div>
                <p className="font-semibold text-white">VAT ID</p>
                <p>PL 6762702873</p>
              </div>

              <div>
                <p className="font-semibold text-white">Represented by</p>
                <p>Gigel Nerghes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
            <p>© 2024 AIWorldWideWorkforce. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Imprint
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
