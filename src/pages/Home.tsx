import { lazy, Suspense } from 'react'
import { useSEO } from '../utils/seo'
import MainLayout from '../Layouts/MainLayout'

// Lazy load components for better performance
const ContactSection = lazy(() => import('../components/home/ContactSection'))
const HeroBanner = lazy(() => import('../components/home/HeroBanner'))
const AboutSection = lazy(() => import('../components/home/AboutSection'))
const ServicesSection = lazy(() => import('../components/home/ServicesSection'))
const HealthcareSection = lazy(() => import('../components/home/HealthcareSection'))
const DoctorsSection = lazy(() => import('../components/home/DoctorsSection'))
const WorkProcessSection = lazy(() => import('../components/home/WorkProcessSection'))
const FAQSection = lazy(() => import('../components/home/FAQSection'))
const ReviewsSection = lazy(() => import('../components/home/ReviewsSection'))
const NewsSection = lazy(() => import('../components/home/NewsSection'))

const LoadingFallback = () => (
  <div className="h-64 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
)

const Home = () => {
  useSEO({
    title: 'Trang Chủ - Medical | Phòng Khám Chất Lượng',
    description: 'Khám phá sức khỏe và trải nghiệm dịch vụ chất lượng cao tại Bệnh viện/Phòng khám của chúng tôi - nơi mang đến sự chăm sóc tận tâm và sự an tâm cho bạn và gia đình.',
    keywords: 'phòng khám, bệnh viện, y tế, chăm sóc sức khỏe, khám bệnh, điều trị, medical',
    canonical: typeof window !== 'undefined' ? window.location.origin : ''
  })

  return (
    <MainLayout>
      <Suspense fallback={<LoadingFallback />}>
        <HeroBanner />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <HealthcareSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <DoctorsSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <WorkProcessSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ReviewsSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <NewsSection />
      </Suspense>
    </MainLayout>
  )
}

export default Home
