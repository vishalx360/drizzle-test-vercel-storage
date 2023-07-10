import { SWRConfig } from 'swr'
import './globals.css'
import { Inter } from 'next/font/google'
import { SWRProvider } from './swr-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo App',
  description: 'Using Next.js, Drizzle, and Vercel Storage to build a todo app.',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SWRProvider>
          {children}
        </SWRProvider>
      </body>
    </html>
  )
}
