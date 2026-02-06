import { Link } from 'react-router-dom'
import { FaCalendarAlt } from 'react-icons/fa'
import Button from '../../Button'

const CTASection = () => {
  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <svg className="absolute w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="white" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3 text-center md:text-left mb-8 md:mb-0">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Bạn chưa biết liệu trình nào phù hợp?
          </h2>
          <p className="text-blue-100 text-lg font-body">
            Đội ngũ bác sĩ chuyên khoa da liễu của T&D luôn sẵn sàng lắng nghe và tư vấn miễn phí cho bạn.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <Link to="/contact">
            <Button
              color="accent"
              size="large"
              shape="rounded"
              leftIcon={<FaCalendarAlt />}
              className="shadow-lg hover:scale-105 transition-transform"
            >
              Đặt lịch tư vấn
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection
