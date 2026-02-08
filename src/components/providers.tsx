'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import type { Language } from '@/lib/languages'

interface ContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isDark: boolean
  setIsDark: (dark: boolean) => void
}

const Context = createContext<ContextType | undefined>(undefined)

export function Providers({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [isDark, setIsDarkState] = useState(false)

  useEffect(() => {
    // Get saved preferences from localStorage
    const savedLang = localStorage.getItem('language') as Language | null
    const savedDark = localStorage.getItem('dark-mode') === 'true'

    if (savedLang) setLanguageState(savedLang)
    if (savedDark) setIsDarkState(savedDark)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const setIsDark = (dark: boolean) => {
    setIsDarkState(dark)
    localStorage.setItem('dark-mode', dark.toString())
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <Context.Provider value={{ language, setLanguage, isDark, setIsDark }}>
      <div className={isDark ? 'dark' : ''}>
        {children}
      </div>
    </Context.Provider>
  )
}

export function useLanguage() {
  const context = useContext(Context)
  if (!context) {
    throw new Error('useLanguage must be used within Providers')
  }
  return context
}
