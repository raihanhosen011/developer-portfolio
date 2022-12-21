// imports
import { Urbanist } from '@next/font/google';
//
import Mail from '@widgets/Mail';
import Glassify from '@components/Glassify';
import Socials from '@widgets/Socials';
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
      <body className='text-base bg-white dark:bg-slate-900 dark:text-slate-200' >
        
        <Socials />
        <Mail />
        <Glassify />

        {children}
      
      </body>
    </html>
  )
}
