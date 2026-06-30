import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Offshore Pro Academy | Building World-Class Offshore Professionals',
  description: 'Technical education, career development and professional resources for offshore oil and gas professionals.',
  keywords: ['Offshore Pro Academy', 'offshore training', 'subsea engineering', 'BOP systems', 'well control'],
  openGraph: {
    title: 'Offshore Pro Academy',
    description: 'Building World-Class Offshore Professionals',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
