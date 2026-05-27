import type { Metadata } from 'next'
import { Outfit, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Siddhi Kothari | Creative Developer',
  description: 'I craft digital experiences that feel alive — where visuals, motion, and emotion work together with purpose.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
