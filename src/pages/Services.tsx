import { Suspense, lazy } from 'react'
import { useSEO, generateBreadcrumbSchema } from '../utils/seo'
import MainLayout from '../Layouts/MainLayout'
import CTASection from '../components/shared/CTASection'

const ServicesHeaderSection = lazy(() => import('../components/features/services/ServicesHeaderSection'))
const ServicesListSection = lazy(() => import('../components/features/services/ServicesListSection'))

const LoadingFallback = (
  <div className="py-16 lg:py-24">
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-gray-500">Đang tải...</div>
    </div>
  </div>
)

const Services = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const servicesUrl = `${baseUrl}/services`

  const breadcrumbs = [
    { name: 'Trang chủ', url: baseUrl },
    { name: 'Dịch vụ', url: servicesUrl }
  ]

  useSEO({
    title: 'Dịch Vụ - Medical | Phòng Khám Chất Lượng',
    description: 'Khám phá các dịch vụ y tế chất lượng cao của chúng tôi, từ khám tổng quát đến điều trị chuyên khoa.',
    keywords: 'dịch vụ y tế, khám bệnh, điều trị, chuyên khoa, phòng khám',
    canonical: servicesUrl,
    ogUrl: servicesUrl,
    structuredData: generateBreadcrumbSchema(breadcrumbs)
  })

  return (
    <MainLayout>
      <Suspense fallback={LoadingFallback}>
        <ServicesHeaderSection />
      </Suspense>
      <Suspense fallback={LoadingFallback}>
        <ServicesListSection />
      </Suspense>
      <CTASection />
    </MainLayout>
  )
}

export default Services
