import { Inter } from 'next/font/google'
import SideMenu from '../SideMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
       <SideMenu>
        {children}
      </SideMenu>    
  )
}
