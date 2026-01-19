import { ReactNode } from 'react'
import Header from './Header'
import Navigation from './Navigation'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}

export default MainLayout
