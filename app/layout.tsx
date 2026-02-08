import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Providers } from '@/components/providers'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AIWorldWideWorkforce - AI-Powered Process Automation',
  description: 'Transform your business operations with intelligent automation solutions. Save time, reduce costs, and scale efficiently with AI-driven process automation.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-white dark:bg-slate-950 text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
