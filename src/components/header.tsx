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
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-xl border-b border-border/50 z-50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="w-[110px] h-[80px] flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
              <img
                src={isDark ? '/LOGO%205%20DARK.png' : '/logo%201.png'}
                alt="AIWorldWideWorkforce"
                className="w-[110px] h-[80px] object-contain"
              />
            </div>
            <h1 className="text-3xl md:text-2xl font-bold">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">AI</span>
              <span className="text-foreground">WorldWideWorkforce</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className={isMobile ? 'hidden' : 'flex gap-8 items-center'}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/70 hover:text-primary transition-all text-sm font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-foreground/70" />
              )}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 px-3 py-1 rounded-full border border-border hover:bg-foreground/5 transition-colors text-sm"
              >
                <Globe className="w-4 h-4 text-foreground" />
                {language.toUpperCase()}
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
              className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full px-6 py-2 text-sm hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105 relative z-50 cursor-pointer font-medium h-10"
            >
              {t.nav.bookConsultation}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className={isMobile ? 'flex items-center gap-2' : 'hidden'}>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-foreground/70" />
              )}
            </button>
            <button
              className={isMobile ? '' : 'hidden'}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className={isMobile ? 'pb-4 space-y-2 animate-slide-down' : 'hidden'}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-foreground/70 hover:text-foreground transition-colors"
                style={{ fontSize: '1.5rem' }}
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="px-4 py-2 border-t border-border">
              <div className="font-semibold text-foreground/70 mb-2" style={{ fontSize: '1.25rem' }}>Language</div>
              <div className="flex gap-2">
                {(['en', 'de'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang)
                      setShowLangMenu(false)
                    }}
                    className={`px-3 py-1 rounded transition-colors ${
                      language === lang
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-foreground/5 hover:bg-foreground/10'
                    }`}
                    style={{ fontSize: '1.25rem' }}
                  >
                    {lang === 'en' ? 'EN' : 'DE'}
                  </button>
                ))}
              </div>
            </div>

            <div className="px-4 pt-2">
              <button
                onClick={() => {
                  window.open(
                    "https://app.reclaim.ai/m/gigi-business/process--automation-consultation",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium h-12"
                style={{ fontSize: '1.25rem' }}
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
