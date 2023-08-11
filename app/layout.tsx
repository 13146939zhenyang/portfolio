import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zhen Yang - Fullstack Developer',
  description: 'Fullstack Developer based in sydney, Australia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='w-screen h-screen'>
        {children}
      </body>
    </html>
  )
}
