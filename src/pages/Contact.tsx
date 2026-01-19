import { useSEO } from '../utils/seo'
import MainLayout from '../Layouts/MainLayout'
import Container from '../components/Container'

const Contact = () => {
  useSEO({
    title: 'Liên Hệ - Medical | Phòng Khám Chất Lượng',
    description: 'Liên hệ với chúng tôi để được tư vấn và đặt lịch hẹn. Chúng tôi luôn sẵn sàng phục vụ bạn.',
    keywords: 'liên hệ, đặt lịch, tư vấn, phòng khám, bệnh viện',
    canonical: typeof window !== 'undefined' ? `${window.location.origin}/contact` : ''
  })

  return (
    <MainLayout>
      <section className="py-16">
        <Container>
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Liên Hệ</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg">
              Thông tin liên hệ và form sẽ được thêm vào đây...
            </p>
          </div>
        </Container>
      </section>
    </MainLayout>
  )
}

export default Contact
