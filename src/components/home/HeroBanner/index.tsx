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
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 lg:py-20">
          {/* Left side - Content */}
          <div className="relative z-10">
            {/* Emergency service badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                <FaHeartbeat className="text-blue-600 text-lg" />
              </div>
              <span className="text-green-600 font-semibold text-sm lg:text-base">
                DỊCH VỤ KHẨN CẤP 24/7
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
              <span className="text-blue-900">Chăm sóc </span>
              <span className="text-green-600">tận tâm</span>
            </h1>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-blue-900">
              Sức khỏe hàng đầu
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base lg:text-lg mb-8 leading-relaxed max-w-lg">
              Khám phá sức khỏe và trải nghiệm dịch vụ chất lượng cao tại Bệnh viện/Phòng khám của chúng tôi - nơi mang đến sự chăm sóc tận tâm và sự an tâm cho bạn và gia đình.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button color="primary" size="large">
                KHÁM PHÁ
              </Button>
              <Button color="secondary" size="large">
                TẤT CẢ DỊCH VỤ
              </Button>
            </div>
          </div>

          {/* Right side - Doctor image */}
          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Placeholder for doctor image - replace with actual image */}
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 shadow-2xl">
                  <div className="aspect-square bg-white rounded-xl flex items-center justify-center">
                    <FaStethoscope className="text-6xl text-blue-600 opacity-30" />
                    {/* Replace this div with actual doctor image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Doctor Image</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements around image */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500 rounded-full opacity-10 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroBanner
