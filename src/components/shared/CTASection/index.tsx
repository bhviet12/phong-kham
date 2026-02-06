import { Link } from 'react-router-dom'
import { FaCalendarAlt } from 'react-icons/fa'

interface CTASectionProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

const CTASection = ({ 
  title = 'Bạn chưa biết liệu trình nào phù hợp?',
  description = 'Đội ngũ bác sĩ chuyên khoa da liễu của T&D luôn sẵn sàng lắng nghe và tư vấn miễn phí cho bạn.',
  buttonText = 'Đặt lịch tư vấn',
  buttonLink = '/contact'
}: CTASectionProps) => {
  return (
    <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#204D9E' }}>
      {/* Nền pattern chéo */}
      <div className="absolute inset-0">
        <svg className="absolute w-full h-full opacity-10" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="white" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      {/* Nội dung chính */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Text bên trái */}
        <div className="md:w-2/3 text-center md:text-left mb-8 md:mb-0">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg font-body" style={{ color: '#BFD7FF' }}>
            {description}
          </p>
        </div>

        {/* Nút bên phải */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <Link
            to={buttonLink}
            className="cta-button px-8 py-4 rounded-full font-bold shadow-lg 
                   transition-all transform hover:scale-105 flex items-center gap-2 font-body"
          >
            <FaCalendarAlt className="text-lg cta-icon" />
            <span>{buttonText}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection
