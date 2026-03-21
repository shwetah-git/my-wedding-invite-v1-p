import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import MusicPlayer from './MusicPlayer'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  display: 'swap',
})

const lora = Lora({ 
  subsets: ["latin"],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Our Wedding Invitation',
  description: 'You are cordially invited to celebrate our special day',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/Wedding-intials-logo-dark-1.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/Wedding-intials-logo-dark-1.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/Wedding-intials-logo-dar-APPLE.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5e6d3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: lora.style.fontFamily }}>
        <MusicPlayer />
        {children}
        <Analytics />
        <style>{`
          :root {
            --font-serif: ${playfair.style.fontFamily};
            --font-sans: ${lora.style.fontFamily};
          }
          .font-serif {
            font-family: ${playfair.style.fontFamily};
          }
          .font-sans {
            font-family: ${lora.style.fontFamily};
          }
        `}</style>
      </body>
    </html>
  )
}
