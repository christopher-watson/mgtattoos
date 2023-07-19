import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'Michael Gary Tattoos',
   description: 'Michael Gary Tattoos',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <nav>
               navbar
            </nav>
            <main>
               {children}
            </main>
         </body>
      </html>
   )
}
