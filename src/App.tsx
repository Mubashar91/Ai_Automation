import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero'
import { BenefitsSection } from '@/components/benefits'
import { ChallengesSection } from '@/components/challenges'
import { PillarsSection } from '@/components/pillars'
import { ProcessSection } from '@/components/process'
import { AutomationBenefitsSection } from '@/components/automation-benefits'
import { ToolsSection } from '@/components/tools'
import { PackagesSection } from '@/components/packages'
import { FAQSection } from '@/components/faq'
import { CTASection, QuestionCTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    if (window.self !== window.top) {
      document.documentElement.classList.add('iframe-mode')
    }
  }, [])

  return (
    <Providers>
      <div className="w-full max-w-full overflow-x-hidden min-h-screen">
        <main className="bg-background transition-colors duration-300 w-full">
          <Header />
          <HeroSection />
      
        <QuestionCTA question="Find out how you can cut costs?" />
        <BenefitsSection />
        <ChallengesSection />
        <QuestionCTA question="How can I scale without raising costs?" />
        <PillarsSection />
        <ProcessSection />
        <AutomationBenefitsSection />
        <ToolsSection />
        <PackagesSection />
        <QuestionCTA question="Where are hidden inefficiencies costing you money right now?" />
        <FAQSection />
          <CTASection />
          <Footer />
        </main>
      </div>
    </Providers>
  )
}

export default App
