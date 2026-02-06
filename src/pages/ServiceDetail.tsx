import { useParams } from 'react-router-dom'
import { useSEO, generateBreadcrumbSchema } from '../utils/seo'
import MainLayout from '../Layouts/MainLayout'
import ServiceHeroSection from '../components/features/service-detail/ServiceHeroSection'
import ServiceIntroductionSection from '../components/features/service-detail/ServiceIntroductionSection'
import ServiceBenefitsSection from '../components/features/service-detail/ServiceBenefitsSection'
import ServiceProcedureSection from '../components/features/service-detail/ServiceProcedureSection'
import ServiceInfoCTASection from '../components/features/service-detail/ServiceInfoCTASection'

// Service data mapping
const serviceDataMap: Record<string, {
  title: string
  quote: string
  backgroundImage: string
  introTitle: string
  introDescription: string
  introDescription2?: string
  introImage: string
}> = {
  'tre-hoa-da': {
    title: 'Trẻ hóa da',
    quote: '"Khôi phục vẻ đẹp thanh xuân với liệu trình độc quyền tại T&D Aesthetic"',
    backgroundImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlGYfR9Aob2lDskGlL5o-2mTJkz4jVa3WBd6rwwv0lDJAG5YJoU8UvwldAyYm2bkNP3xTEEkkAUtG-PSxITjTso4CgL5UOFn0aA_-vSWT9-3cATI9JSPbKJd-NPrwQBM0FA8LBoGeRcYbfMX6jMSor0vGVt3ndE6id8SSKNv3NxZgClQClPHU7kmtmApkOp_LxQJlbbOGEu5tMeD7QFQwZqhqoPlS2p3zTdvNnYtJnJJ1KNtfPd2772Scr3u-bAqgevkfn_VeT8FE',
    introTitle: 'Đánh thức làn da tuổi đôi mươi',
    introDescription: 'Thời gian là kẻ thù của sắc đẹp, nhưng với công nghệ Trẻ hóa da (Skin Rejuvenation) tại T&D, chúng tôi giúp bạn quay ngược thời gian. Liệu trình sử dụng kết hợp đa công nghệ tiên tiến nhất để kích thích sản sinh Collagen tự nhiên, xóa mờ nếp nhăn và mang lại làn da căng bóng, mịn màng.',
    introDescription2: 'Phù hợp cho mọi loại da và độ tuổi, đặc biệt hiệu quả với làn da bắt đầu xuất hiện các dấu hiệu lão hóa như chùng nhão, sạm nám và vết chân chim.',
    introImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXZM2yDpVcSodCFtDPwPnsEzrnmyVYOrFEI09AnCq3x54onCCJKmR4jHvpKrfhreaiB6nVUY0RSlcTiFHME4AQIU5stfPSXuOxvGjeY1lSFWsOQUpS1P9vGdQz_a86lKB4kctrtJ3J0Tdjxa7uMXy7XHSOzwDF84_pObP6aFfg83pjtnWosqwuKuZUXofKkvV9ywzDa370iRYA7sW3NAwFjgAV2bJ1wiwD4SWdSFV6_wFOm4wio7wzyikQqhm3PXCj6zJSFRREco8'
  },
  'tri-mun-tham': {
    title: 'Trị mụn – Thâm',
    quote: '"Giải pháp điều trị mụn chuẩn y khoa, trả lại làn da sạch mụn và đều màu"',
    backgroundImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZHYMjX5D0wdHDc8JkuD7QSA-qC3Nhfhu0m3TMhmPGqF5gxrUmCXvMERB7foXWDUaKprDT8LsDGoeZ7_MxOC_xwRu5DSy_VAxQY80TqBnEcgTkD7zuqogzGqQZTJfeqMvquW8ng8nPgbFKiKLx4-0N12wi0UYl0SmRh9bDytkl-3T1Lf7tGEh4bIVcPOG2__aGftXOH-v88-VCnJvdlmnGzLES0uUNGAt-GX4TBS-WkmCUbjLZkzoODmC4oFUGx-w51IOqj1_JjIE',
    introTitle: 'Xóa tan nỗi lo mụn và thâm',
    introDescription: 'Phác đồ điều trị mụn chuẩn y khoa kết hợp công nghệ ánh sáng sinh học giúp loại bỏ nhân mụn tận gốc, ngăn ngừa sẹo thâm và tái phát.',
    introDescription2: 'Phù hợp cho mọi loại mụn từ mụn đầu đen, mụn viêm đến mụn nang, mang lại làn da sạch mụn và đều màu.',
    introImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAigGQ2qKlYxXDqR5qIk2oaW9UGwj4oSjyWn3yDnMhdEbZ-YyJRqUxjqsY1KGA42vqtQVQLU3_gQVa5k3vnnGo9yTP-DARC3jS7FgYl3tKDQWZ8NzYyMJZOZYcUdJqoYGV_PFYlGuSsGCjaVA2GU55fEhF4-BpIns_B0Ygm_Ja-xvAvS23aH4iyq-jUXoBQZNXprA3tTWKFeLspI9IkQoycjkUrlM3rBb36mN7_1-AeN3T_t9l9S3pJJm2X7jsWLecE3QXiJ7g7K3c'
  },
  'laser-cong-nghe-cao': {
    title: 'Laser & Công nghệ cao',
    quote: '"Giải pháp hàng đầu cho nám, tàn nhang và sẹo rỗ với công nghệ laser tiên tiến"',
    backgroundImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvhbCIApSTkGVRAhtdaRKAoHF5J3IiG7O-UCAUXEfM91Xoc83fdaiax6ipGtcEyX18DYMXyBnlyQWOydJP2sNqYT898RzHuqlVMZr-d40a7wDRnNHlbg5-DN9kg6lULnxuNbRmZBS2n8IiF3wunUUEsrSNv8HCDUL8ko1yY6_byRP-4hrfSwPnDD364NhYAWpJplhGfwvlczuf8gxfTKmyHF1FtDu4kQCjZFO9TFh3u1-6Igrst-j_qYOqnDM_uzxIEMPILotS_Es',
    introTitle: 'Công nghệ laser đỉnh cao',
    introDescription: 'Giải pháp hàng đầu cho nám, tàn nhang và sẹo rỗ. Sử dụng Laser Pico và Laser CO2 Fractional tiên tiến nhất thế giới hiện nay.',
    introDescription2: 'Công nghệ không xâm lấn, an toàn và hiệu quả cao, phù hợp cho mọi loại da và tình trạng.',
    introImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDRIuiCeq83BRTrAKHgX9y9IBQt8LqU3Vky0gkCaAZNUi0YhJeT87RjUi4-nEORGrjbiVPGPEj4FNQA9tZcS_6QiNgWWtbwRqXxMP449Q_jhfgVe7U9EVI1nPc3DkOoGtL_Ex3Bnm9At10II_f-EnF58cRYYmnIexjESCqp6Uz4IrUwqzoMhU8tRwt_2UwIkaP1VoKZqGV2ADAl14yWf4qYyu35LlDBZBBdJ2tHUK79Rlz5jp5kMEEDiYBM0vI5OCg2QG13jPyj4g'
  }
}

const defaultServiceData = {
  title: 'Trẻ hóa da',
  quote: '"Khôi phục vẻ đẹp thanh xuân với liệu trình độc quyền tại T&D Aesthetic"',
  backgroundImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlGYfR9Aob2lDskGlL5o-2mTJkz4jVa3WBd6rwwv0lDJAG5YJoU8UvwldAyYm2bkNP3xTEEkkAUtG-PSxITjTso4CgL5UOFn0aA_-vSWT9-3cATI9JSPbKJd-NPrwQBM0FA8LBoGeRcYbfMX6jMSor0vGVt3ndE6id8SSKNv3NxZgClQClPHU7kmtmApkOp_LxQJlbbOGEu5tMeD7QFQwZqhqoPlS2p3zTdvNnYtJnJJ1KNtfPd2772Scr3u-bAqgevkfn_VeT8FE',
  introTitle: 'Đánh thức làn da tuổi đôi mươi',
  introDescription: 'Thời gian là kẻ thù của sắc đẹp, nhưng với công nghệ Trẻ hóa da (Skin Rejuvenation) tại T&D, chúng tôi giúp bạn quay ngược thời gian. Liệu trình sử dụng kết hợp đa công nghệ tiên tiến nhất để kích thích sản sinh Collagen tự nhiên, xóa mờ nếp nhăn và mang lại làn da căng bóng, mịn màng.',
  introDescription2: 'Phù hợp cho mọi loại da và độ tuổi, đặc biệt hiệu quả với làn da bắt đầu xuất hiện các dấu hiệu lão hóa như chùng nhão, sạm nám và vết chân chim.',
  introImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXZM2yDpVcSodCFtDPwPnsEzrnmyVYOrFEI09AnCq3x54onCCJKmR4jHvpKrfhreaiB6nVUY0RSlcTiFHME4AQIU5stfPSXuOxvGjeY1lSFWsOQUpS1P9vGdQz_a86lKB4kctrtJ3J0Tdjxa7uMXy7XHSOzwDF84_pObP6aFfg83pjtnWosqwuKuZUXofKkvV9ywzDa370iRYA7sW3NAwFjgAV2bJ1wiwD4SWdSFV6_wFOm4wio7wzyikQqhm3PXCj6zJSFRREco8'
}

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const currentSlug = slug || 'tre-hoa-da'
  const service = serviceDataMap[currentSlug] || defaultServiceData

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const currentUrl = `${baseUrl}/service/${currentSlug}`

  const breadcrumbs = [
    { name: 'Trang chủ', url: baseUrl },
    { name: 'Dịch vụ', url: `${baseUrl}/services` },
    { name: service.title, url: currentUrl }
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalService',
    name: service.title,
    description: service.introDescription,
    provider: {
      '@type': 'MedicalBusiness',
      name: 'T&D Aesthetic Clinic'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Vietnam'
    },
    serviceType: service.title
  }

  useSEO({
    title: `${service.title} - Chi tiết dịch vụ | T&D Aesthetic`,
    description: service.introDescription,
    keywords: `${service.title}, dịch vụ thẩm mỹ, da liễu, T&D Aesthetic`,
    canonical: currentUrl,
    ogUrl: currentUrl,
    type: 'product',
    structuredData: [
      generateBreadcrumbSchema(breadcrumbs),
      serviceSchema
    ]
  })

  return (
    <MainLayout>
      <ServiceHeroSection
        title={service.title}
        quote={service.quote}
        backgroundImage={service.backgroundImage}
      />
      
      <div className="bg-background-light dark:bg-background-dark">
        <ServiceIntroductionSection
          title={service.introTitle}
          description={service.introDescription}
          description2={service.introDescription2}
          image={service.introImage}
        />
        
        <ServiceBenefitsSection />
        
        <ServiceProcedureSection />
        
        <ServiceInfoCTASection />
      </div>
    </MainLayout>
  )
}

export default ServiceDetail
