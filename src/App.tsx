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

function App() {
  return (
    <Providers>
      <div style={{
        width: '100%',
        maxWidth: '100%',
        margin: '0 auto',
        overflowX: 'hidden',
        minHeight: '100vh'
      }}>
        <main className="bg-background transition-colors duration-300">
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
