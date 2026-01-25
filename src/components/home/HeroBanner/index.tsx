import Button from '../../Button'
import Container from '../../Container'
import { FaHeartbeat, FaStethoscope } from "react-icons/fa"

const HeroBanner = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Medical crosses */}
        <div className="absolute top-10 left-10 w-16 h-16 text-green-500 opacity-20">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 w-20 h-20 text-green-500 opacity-15">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z"/>
          </svg>
        </div>
        <div className="absolute top-20 right-32 w-24 h-24 text-blue-500 opacity-15">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z"/>
          </svg>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center py-8 sm:py-12 lg:py-20">
          {/* Left side - Content */}
          <div className="relative z-10 order-2 lg:order-1">
            {/* Emergency service badge */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full">
                <FaHeartbeat className="text-blue-600 text-sm sm:text-lg" />
              </div>
              <span className="text-green-600 font-semibold text-xs sm:text-sm lg:text-base">
                DỊCH VỤ KHẨN CẤP 24/7
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
              <span className="text-blue-900">Chăm sóc </span>
              <span className="text-green-600">tận tâm</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-blue-900">
              Sức khỏe hàng đầu
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed max-w-lg">
              Khám phá sức khỏe và trải nghiệm dịch vụ chất lượng cao tại Bệnh viện/Phòng khám của chúng tôi - nơi mang đến sự chăm sóc tận tâm và sự an tâm cho bạn và gia đình.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button color="primary" size="large" className="w-full sm:w-auto">
                KHÁM PHÁ
              </Button>
              <Button color="secondary" size="large" className="w-full sm:w-auto">
                TẤT CẢ DỊCH VỤ
              </Button>
            </div>
          </div>

          {/* Right side - Doctor image */}
          <div className="relative z-10 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Placeholder for doctor image - replace with actual image */}
              <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                  <div className="aspect-square bg-white rounded-xl flex items-center justify-center">
                    <FaStethoscope className="text-4xl sm:text-5xl lg:text-6xl text-blue-600 opacity-30" />
                    {/* Replace this div with actual doctor image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400 text-xs sm:text-sm">Doctor Image</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements around image */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full opacity-10 blur-xl"></div>
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroBanner
