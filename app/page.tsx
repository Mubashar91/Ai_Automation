'use client'

import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero'
import { BenefitsSection } from '@/components/benefits'
import { ChallengesSection } from '@/components/challenges'
import { PillarsSection } from '@/components/pillars'
import { ProcessSection } from '@/components/process'
import { AutomationBenefitsSection } from '@/components/automation-benefits'
import { ToolsSection } from '@/components/tools'
import { PackagesSection } from '@/components/packages'
import { TestimonialsSection } from '@/components/testimonials'
import { FAQSection } from '@/components/faq'
import { CTASection } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-950 transition-colors duration-300">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ChallengesSection />
      <PillarsSection />
      <ProcessSection />
      <AutomationBenefitsSection />
      <ToolsSection />
      <PackagesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
