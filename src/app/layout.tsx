// imports
import { Urbanist } from '@next/font/google';
//
import '../shared/styles/globals.css'

// font
const urbanist = Urbanist({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={urbanist.className} >
      <head>
        <title> Home : Next 13 blog </title>
      </head>

      <body className='text-base text-white bg-slate-900' >
        {children}
      </body>
    </html>
  )
}
