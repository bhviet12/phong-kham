import { useSEO } from '../utils/seo'
import MainLayout from '../Layouts/MainLayout'
import Container from '../components/Container'
import PageHeader from '../components/PageHeader'

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

      <section className="py-16">
        <Container>
          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg">
              Danh sách dịch vụ sẽ được thêm vào đây...
            </p>
          </div>
        </Container>
      </section>
    </MainLayout>
  )
}

export default Services
