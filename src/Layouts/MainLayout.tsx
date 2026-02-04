import { ReactNode } from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Footer from '../components/Footer'
import QuickClickPanel from '../components/QuickClickPanel'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background-light">
      <Header />
      <Navigation />
      <QuickClickPanel />
      <main className="flex-grow bg-background-light">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
