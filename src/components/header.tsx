'use client'
import { Menu, X, Moon, Sun, Globe } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/components/providers'
import { languages } from '@/lib/languages'
import { useIsMobile } from '@/hooks/use-mobile'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const { language, setLanguage, isDark, setIsDark } = useLanguage()
  const t = languages[language]
  const isMobile = useIsMobile()

  const navItems = [
    { label: t.nav.home, href: '#' },
    { label: t.nav.contact, href: '#footer' },
  ]

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/50 z-50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-20">
          {/* Logo */}
          <div className="flex items-center group min-w-0 flex-1 sm:flex-initial">
            <div className="w-[44px] sm:w-[80px] h-[34px] sm:h-[60px] lg:w-[110px] lg:h-[80px] flex items-center justify-center mr-2 sm:mr-3 group-hover:scale-105 transition-transform flex-shrink-0">
              <img
                src={isDark ? '/LOGO%205%20DARK.png' : '/logo%201.png'}
                alt="AIWorldWideWorkforce"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold truncate">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">AI</span>
              <span className="text-foreground hidden sm:inline">WorldWideWorkforce</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className={isMobile ? 'hidden' : 'flex gap-4 sm:gap-6 lg:gap-8 items-center flex-shrink-0'}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/70 hover:text-primary transition-all text-xs sm:text-sm font-medium relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-1.5 sm:p-2 rounded-full hover:bg-foreground/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70" />
              )}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full border border-border hover:bg-foreground/5 transition-colors text-xs sm:text-sm"
              >
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-foreground" />
                <span className="hidden sm:inline">{language.toUpperCase()}</span>
                <span className="sm:hidden">{language.slice(0, 2).toUpperCase()}</span>
              </button>
              {showLangMenu && (
                <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50">
                  {(['en', 'de'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang)
                        setShowLangMenu(false)
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        language === lang
                          ? 'bg-primary text-primary-foreground font-bold'
                          : 'text-foreground hover:bg-foreground/5'
                      }`}
                    >
                      {lang === 'en' ? 'English' : 'Deutsch'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                window.open(
                  "https://app.reclaim.ai/m/gigi-business/process--automation-consultation",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full px-3 sm:px-4 lg:px-6 py-2 text-xs sm:text-sm hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105 relative z-50 cursor-pointer font-medium h-8 sm:h-9 lg:h-10 whitespace-nowrap"
            >
              <span className="hidden sm:inline">{t.nav.bookConsultation}</span>
              <span className="sm:hidden">Consult</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className={isMobile ? 'flex items-center gap-1 sm:gap-2' : 'hidden'}>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-1.5 sm:p-2 rounded-full hover:bg-foreground/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70" />
              )}
            </button>
            <button
              className={isMobile ? '' : 'hidden'}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className={isMobile ? 'pb-4 space-y-1 sm:space-y-2 animate-slide-down' : 'hidden'}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 sm:px-4 py-2 sm:py-3 text-foreground/70 hover:text-foreground transition-colors text-sm sm:text-lg lg:text-xl"
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="px-3 sm:px-4 py-2 sm:py-3 border-t border-border">
              <div className="font-semibold text-foreground/70 mb-2 text-base sm:text-lg">Language</div>
              <div className="flex gap-2">
                {(['en', 'de'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang)
                      setShowLangMenu(false)
                    }}
                    className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded transition-colors text-sm sm:text-base ${
                      language === lang
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-foreground/5 hover:bg-foreground/10'
                    }`}
                  >
                    {lang === 'en' ? 'EN' : 'DE'}
                  </button>
                ))}
              </div>
            </div>

            <div className="px-3 sm:px-4 pt-2 sm:pt-3">
              <button
                onClick={() => {
                  window.open(
                    "https://app.reclaim.ai/m/gigi-business/process--automation-consultation",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium h-10 sm:h-11 lg:h-12 text-sm sm:text-base"
              >
                {t.nav.bookConsultation}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
