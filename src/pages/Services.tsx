import { Suspense, lazy } from 'react'
import { useSEO } from '../utils/seo'
import MainLayout from '../Layouts/MainLayout'
import PageHeader from '../components/PageHeader'

const ServicesSection = lazy(() => import('../components/services/ServicesSection'))

const LoadingFallback = (
  <div className="py-16 lg:py-24">
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-gray-500">Đang tải...</div>
    </div>
  </div>
)

const Services = () => {
  useSEO({
    title: 'Dịch Vụ - Medical | Phòng Khám Chất Lượng',
    description: 'Khám phá các dịch vụ y tế chất lượng cao của chúng tôi, từ khám tổng quát đến điều trị chuyên khoa.',
    keywords: 'dịch vụ y tế, khám bệnh, điều trị, chuyên khoa, phòng khám',
    canonical: typeof window !== 'undefined' ? `${window.location.origin}/services` : ''
  })

  return (
    <MainLayout>
      <PageHeader pageKey="services" />

      <Suspense fallback={LoadingFallback}>
        <ServicesSection />
      </Suspense>
    </MainLayout>
  )
}

export default Services
