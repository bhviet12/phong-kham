import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

interface Service {
  id: number
  title: string
  description: string
  image: string
  category: string
    badge?: {
      text: string
      type: 'popular' | 'new'
    }
  slug: string
}

const services: Service[] = [
  {
    id: 1,
    title: 'Trị mụn – Thâm',
    description: 'Phác đồ điều trị mụn chuẩn y khoa kết hợp công nghệ ánh sáng sinh học giúp loại bỏ nhân mụn tận gốc, ngăn ngừa sẹo thâm và tái phát.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZHYMjX5D0wdHDc8JkuD7QSA-qC3Nhfhu0m3TMhmPGqF5gxrUmCXvMERB7foXWDUaKprDT8LsDGoeZ7_MxOC_xwRu5DSy_VAxQY80TqBnEcgTkD7zuqogzGqQZTJfeqMvquW8ng8nPgbFKiKLx4-0N12wi0UYl0SmRh9bDytkl-3T1Lf7tGEh4bIVcPOG2__aGftXOH-v88-VCnJvdlmnGzLES0uUNGAt-GX4TBS-WkmCUbjLZkzoODmC4oFUGx-w51IOqj1_JjIE',
    category: 'Điều trị da',
    badge: {
      text: 'Phổ biến',
      type: 'popular'
    },
    slug: 'tri-mun-tham'
  },
  {
    id: 2,
    title: 'Trẻ hóa da',
    description: 'Liệu pháp nâng cơ, xóa nhăn và căng bóng da sử dụng tinh chất quý hiếm và công nghệ phi kim hiện đại, trả lại làn da thanh xuân.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA48p5iB97FogjXI--CgrLvv5gxnl1UnKIkytUGxR9hGiiXdrg8EDaId5cNkuq2ShfFdknu4rQgvvuknb0_vosC_aeU5xjjoo5dPbDoj-l6oVGJGqTyob-_sbvhKkdU_jBP58OtZcDYox3A_wnG6aNzb7QD3rd5x59eoeCW3YAxvjwrXfuNYpSB5gXznoSklrQCUF4H5umf6IX_wbUs6wfwVtOnHHg_fuc-ftECd9izPFyQp-JQSDKOE0ND2Fm0qKmLldgZLHhx8BU',
    category: 'Thẩm mỹ',
    slug: 'tre-hoa-da'
  },
  {
    id: 3,
    title: 'Laser & Công nghệ cao',
    description: 'Giải pháp hàng đầu cho nám, tàn nhang và sẹo rỗ. Sử dụng Laser Pico và Laser CO2 Fractional tiên tiến nhất thế giới hiện nay.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvhbCIApSTkGVRAhtdaRKAoHF5J3IiG7O-UCAUXEfM91Xoc83fdaiax6ipGtcEyX18DYMXyBnlyQWOydJP2sNqYT898RzHuqlVMZr-d40a7wDRnNHlbg5-DN9kg6lULnxuNbRmZBS2n8IiF3wunUUEsrSNv8HCDUL8ko1yY6_byRP-4hrfSwPnDD364NhYAWpJplhGfwvlczuf8gxfTKmyHF1FtDu4kQCjZFO9TFh3u1-6Igrst-j_qYOqnDM_uzxIEMPILotS_Es',
    category: 'Thẩm mỹ',
    badge: {
      text: 'Công nghệ mới',
      type: 'new'
    },
    slug: 'laser-cong-nghe-cao'
  },
  {
    id: 4,
    title: 'Điều trị Sẹo',
    description: 'Giải pháp cắt đáy sẹo, laser CO2 Fractional lấp đầy sẹo rỗ, trả lại làn da mịn màng.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAigGQ2qKlYxXDqR5qIk2oaW9UGwj4oSjyWn3yDnMhdEbZ-YyJRqUxjqsY1KGA42vqtQVQLU3_gQVa5k3vnnGo9yTP-DARC3jS7FgYl3tKDQWZ8NzYyMJZOZYcUdJqoYGV_PFYlGuSsGCjaVA2GU55fEhF4-BpIns_B0Ygm_Ja-xvAvS23aH4iyq-jUXoBQZNXprA3tTWKFeLspI9IkQoycjkUrlM3rBb36mN7_1-AeN3T_t9l9S3pJJm2X7jsWLecE3QXiJ7g7K3c',
    category: 'Điều trị da',
    slug: 'dieu-tri-seo'
  },
  {
    id: 5,
    title: 'Chăm sóc da',
    description: 'Liệu trình chăm sóc da chuyên sâu, thư giãn, cấp ẩm và phục hồi làn da hư tổn.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDRIuiCeq83BRTrAKHgX9y9IBQt8LqU3Vky0gkCaAZNUi0YhJeT87RjUi4-nEORGrjbiVPGPEj4FNQA9tZcS_6QiNgWWtbwRqXxMP449Q_jhfgVe7U9EVI1nPc3DkOoGtL_Ex3Bnm9At10II_f-EnF58cRYYmnIexjESCqp6Uz4IrUwqzoMhU8tRwt_2UwIkaP1VoKZqGV2ADAl14yWf4qYyu35LlDBZBBdJ2tHUK79Rlz5jp5kMEEDiYBM0vI5OCg2QG13jPyj4g',
    category: 'Thư giãn',
    slug: 'cham-soc-da'
  },
  {
    id: 6,
    title: 'Trị nám & Tàn nhang',
    description: 'Giải pháp điều trị nám và tàn nhang bằng công nghệ laser tiên tiến, mang lại làn da đều màu và rạng rỡ.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDttbP7hEuhG8u42XquMT0Fr3h26kabcKJ8zjXSmmA7V1Qz2Zlc72YA2PMSVv81Nq4IPcGo_WX5A0bIThKIzX2VLMzkryCZ2SCEAuhf7i_AQ2P_8ZvSBgC6WoN318OkbFH_AbwoqUIZi4_fD-62jtwmo8eKgSWimoGYnYDtze3eBqKxbxFFTHLu_h_o8AroJASLPjRDwUrXsDjiF3hdAPL-OM_B9d37yyopE1fupr3ZbK7zEhfg7mp37ZBL6VdGfHPeoALMeZivsQs',
    category: 'Điều trị da',
    slug: 'tri-nam-tan-nhang'
  },
  {
    id: 7,
    title: 'Tiêm Filler & Botox',
    description: 'Dịch vụ tiêm Filler và Botox an toàn, giúp làm đầy nếp nhăn, tạo hình khuôn mặt tự nhiên và hài hòa.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxErljyrEGyV4sxbluHjOKRbvwtZ3EgTxIQy1CZrgkcewADW5f_jFcvZFfRFtKa8plLN87c15z1mkCftbhNXQXKIGQCC1itaTtZLSsi4OkLfsndI9Gd97N8cm_EOU5wElouRAvAfbuzFGH2FWMPkM61FyHT9ttpnGrjSgB57ra6eKBhNjLj5mcIQPfwpRLNvUcDimeKYULB1yvJvuFUb8SCZv1CF5ZypCecO9XvW8bwncnPneNu-PD5L2pFkn5Wr6s4LYBXROqXg',
    category: 'Thẩm mỹ',
    slug: 'tiem-filler-botox'
  }
]

const categories = ['Tất cả', 'Điều trị da', 'Thẩm mỹ', 'Thư giãn']

const ServicesListSection = () => {
  const [activeCategory, setActiveCategory] = useState('Tất cả')

  const filteredServices = activeCategory === 'Tất cả' 
    ? services 
    : services.filter(service => service.category === activeCategory)

  return (
    <section className="py-16 md:py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-body transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="service-card group bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                {service.badge && (
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm mb-2 font-body ${
                        service.badge.type === 'popular'
                          ? 'bg-accent/90 text-primary'
                          : 'bg-primary/90 text-white'
                      }`}
                    >
                      {service.badge.text}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 font-body leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={`/service/${service.slug}`}
                  className="inline-flex items-center text-primary dark:text-accent font-semibold hover:tracking-wide transition-all font-body"
                >
                  Xem chi tiết <FaArrowRight className="ml-1 text-sm" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesListSection
