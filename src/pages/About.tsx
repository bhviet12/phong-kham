import { useSEO } from '../utils/seo'
import MainLayout from '../Layouts/MainLayout'
import Container from '../components/Container'

const About = () => {
  useSEO({
    title: 'Giới Thiệu - Medical | Phòng Khám Chất Lượng',
    description: 'Tìm hiểu về lịch sử, tầm nhìn và sứ mệnh của chúng tôi trong việc chăm sóc sức khỏe cộng đồng.',
    keywords: 'giới thiệu, về chúng tôi, lịch sử, tầm nhìn, sứ mệnh, phòng khám',
    canonical: typeof window !== 'undefined' ? `${window.location.origin}/about` : ''
  })

  return (
    <MainLayout>
      <section className="py-16">
        <Container>
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Giới Thiệu</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg">
              Nội dung trang giới thiệu sẽ được thêm vào đây...
            </p>
          </div>
        </Container>
      </section>
    </MainLayout>
  )
}

export default About
