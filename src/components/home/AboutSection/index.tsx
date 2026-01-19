import Button from '../../Button'
import { Heart } from 'lucide-react'

const AboutSection = () => {
  const features = [
    { label: "Chuyên gia y tế" },
    { label: "Công nghệ tiên tiến" },
    { label: "Chất lượng dịch vụ" },
    { label: "Thiết bị hiện đại" },
    { label: "Tư vấn y tế" },
    { label: "Quy trình rõ ràng" }
  ]

  return (
    <section className="w-full py-20 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-end">
          
          {/* Left Column - Stacked Images */}
          <div className="space-y-4 lg:space-y-5">
            {/* Top image */}
            <div className="relative w-full aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <p className="text-sm mb-2">👨‍⚕️ 👩‍⚕️</p>
                  <p className="text-xs">Image: Doctors reviewing tablet</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Bottom image with testimonial */}
            <div className="relative w-full aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <p className="text-sm mb-2">👩‍⚕️ 👵</p>
                  <p className="text-xs">Image: Nurse taking blood pressure</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Testimonial overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-gray-800 rounded-lg p-4 shadow-2xl text-white">
                <h4 className="font-bold text-white mb-2 text-base">Dr. Esita Jabed</h4>
                <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                  Tôi rất ấn tượng với đội ngũ y bác sĩ tại Bệnh viện
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <span className="text-sm">📞</span>
                  <span className="text-sm font-medium">+(84) 0313-728-397</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Main Image */}
          <div className="relative w-full h-96 lg:h-[560px] rounded-3xl overflow-hidden shadow-3xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-lg mb-2">🏥</p>
                <p className="text-sm">Main Image: Medical facility</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/20" />
          </div>

          {/* Right Column - Content positioned at bottom */}
          <div className="space-y-6 lg:space-y-5">
            {/* Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full">
              <div className="w-2 h-2 bg-teal-500 rounded-full" />
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">
                GIỚI THIỆU
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 leading-tight">
              Giải Pháp Chăm Sóc Sức Khỏe Hợp Lý
            </h2>

            {/* Description */}
            <p className="text-base text-gray-700 leading-relaxed">
              Tại Bệnh viện/Phòng khám, chúng tôi tận tâm chăm sóc từng bệnh nhân, đặt sự an toàn và sự thoải mái lên hàng đầu. Chúng tôi cung cấp các dịch vụ y tế đa dạng và chuyên sâu, từ khám bệnh, chẩn đoán, điều trị cho đến phục hồi và chăm sóc sau khi xuất viện.
            </p>

            {/* Features Grid - 2 Columns */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2.5 group">
                  <Heart size={16} className="text-teal-500 fill-teal-500 flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-4">
              <Button color="primary" size="large">
                TÌM HIỂU THÊM
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
