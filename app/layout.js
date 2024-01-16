import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import Sidear from './components/sidebar/Sidear'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Dashboard',
  description: 'An Admin Dashboard',
}

export default function RootLayout({ children }) { 
  return (
    <html lang="en">
      <body className={inter.className}>
       <div className='max-h-screen'>
       <Navbar/> 
        <div className='flex'>  
        <Sidear/>
         {children}
        </div>
       </div>
      </body>
    </html>
  )
}
