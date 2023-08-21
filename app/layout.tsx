import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Zy } from '@/public'
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: 'Zhen Yang - Fullstack Developer',
  description: 'Fullstack Developer based in sydney, Australia',
  icons: [Zy.src],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`w-screen h-screen ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
