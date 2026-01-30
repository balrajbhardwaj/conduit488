import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://conduit488.com'),
  title: {
    default: 'Conduit488 | Engineering Reliable Data to Earn Your Trust',
    template: '%s | Conduit488'
  },
  description: 'Conduit488 builds transparent AI and data platforms where every insight shows its confidence, every decision reveals its reasoning, and every limitation is acknowledged.',
  keywords: ['data engineering', 'AI transparency', 'glass box AI', 'trusted data', 'machine learning', 'data governance'],
  authors: [{ name: 'Conduit488' }],
  creator: 'Conduit488',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://conduit488.com',
    siteName: 'Conduit488',
    title: 'Conduit488 | Engineering Reliable Data to Earn Your Trust',
    description: 'Honest AI. Built for trust. We build data platforms where every insight shows its confidence level.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Conduit488 - Engineering Reliable Data',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conduit488 | Engineering Reliable Data to Earn Your Trust',
    description: 'Honest AI. Built for trust.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-sovereign-50 font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
