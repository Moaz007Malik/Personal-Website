import { getPages } from '@/sanity/sanity.utils'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Know About Me!',
  description: 'Generated by Next + Sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pages = await getPages();
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl py-10 mx-auto">
          <header className='flex items-center justify-between'>
            <Link href="/" className='text-lg font-bold text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text'>Moaz</Link>
          <div className='flex items-center gap-5 text-sm text-gray-600'>
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline">
                {page.title}
              </Link>
              ))}
          </div>
          
          </header>
          
          <main className="py-20">{children}</main>
          </div>
        </body>
    </html>
  )
}