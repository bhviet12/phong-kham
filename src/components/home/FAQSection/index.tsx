import { useState } from 'react'
import Container from '../../Container'
import { FaHeart, FaPlus, FaMinus } from 'react-icons/fa'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Bệnh viện có chấp nhận các loại bảo hiểm y tế nào?',
      answer:
        'Bệnh viện của chúng tôi chấp nhận đa số các loại bảo hiểm y tế, bao gồm bảo hiểm y tế tư nhân và các chương trình bảo hiểm y tế công cộng. Tuy nhiên, để đảm bảo rằng bệnh viện chấp nhận bảo hiểm của bạn, hãy liên hệ với chúng tôi hoặc kiểm tra trên trang web của chúng tôi để biết thông tin chi tiết về các loại bảo hiểm được chấp nhận.',
    },
    {
      question: 'Làm thế nào để đặt lịch hẹn tại bệnh viện?',
      answer:
        'Bạn có thể đặt lịch hẹn bằng nhiều cách: gọi điện trực tiếp, đặt lịch trực tuyến qua website, hoặc đến trực tiếp bệnh viện. Chúng tôi khuyến khích đặt lịch trước để đảm bảo thời gian phù hợp với bạn.',
    },
    {
      question: 'Bệnh nhân cần chuẩn bị những gì trước khi đến khám bệnh?',
      answer:
        'Bệnh nhân nên mang theo giấy tờ tùy thân, thẻ bảo hiểm y tế (nếu có), các kết quả xét nghiệm hoặc hồ sơ y tế trước đó, danh sách thuốc đang sử dụng, và các câu hỏi muốn hỏi bác sĩ.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 lg:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-start relative z-10">
          {/* Left - FAQ Content */}
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center">
                <FaHeart className="text-green-600 text-sm sm:text-base" />
              </div>
              <span className="text-green-500 font-semibold uppercase text-xs sm:text-sm tracking-wide">
                FAQS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 sm:mb-8">
              Giải Đáp Các Thắc Mắc
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-200 transition-colors"
                  >
                    <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 pr-3 sm:pr-4">
                      {String(index + 1).padStart(2, '0')}. {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <FaMinus className="text-green-600 text-base sm:text-lg" />
                      ) : (
                        <FaPlus className="text-green-600 text-base sm:text-lg" />
                      )}
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Doctor Image */}
          <div className="relative h-64 sm:h-80 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
              <div className="text-center text-blue-200">
                <p className="text-2xl sm:text-3xl mb-2">👩‍⚕️</p>
                <p className="text-xs sm:text-sm">Doctor Image</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FAQSection
