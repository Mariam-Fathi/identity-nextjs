import '../styles/globals.css'
import { Navbar } from '../components'


export const metadata = {
  title: 'identity',
  description: 'Event Agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black text-montserrat mt-[90px] max-sm:mt-[40px]'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
