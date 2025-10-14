import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Rufina } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({ subsets: ['latin'] })
const rufina = Rufina({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-rufina'
})

export const metadata: Metadata = {
  title: 'VicaWellness - Your Health & Wellness Partner',
  description: 'Transform your health and wellness journey with VicaWellness. Access personalized health plans, track your progress, and achieve your wellness goals.',
  keywords: ['wellness', 'health', 'fitness', 'nutrition', 'mental health', 'lifestyle'],
  authors: [{ name: 'VicaWellness Team' }],
  creator: 'VicaWellness',
  publisher: 'VicaWellness',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vicawellness.com'),
  openGraph: {
    title: 'VicaWellness - Your Health & Wellness Partner',
    description: 'Transform your health and wellness journey with VicaWellness.',
    url: 'https://vicawellness.com',
    siteName: 'VicaWellness',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VicaWellness - Health & Wellness Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VicaWellness - Your Health & Wellness Partner',
    description: 'Transform your health and wellness journey with VicaWellness.',
    images: ['/og-image.jpg'],
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
    <html lang="en" className="h-full">
      <body className={`${inter.className} ${rufina.variable} h-full antialiased`}>
        <LanguageProvider>
          <div className="min-h-full">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
