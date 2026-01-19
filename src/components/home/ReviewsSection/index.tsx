import { useState, useEffect } from 'react'
import Container from '../../Container'
import { FaHeart, FaStar } from 'react-icons/fa'

const ReviewsSection = () => {
  const reviews = [
    {
      rating: 4,
      quote:
        'Dịch vụ khám bệnh tại đây rất thuận tiện và nhanh chóng. Tôi không phải chờ đợi lâu và quy trình khám bệnh được thực hiện một cách suôn sẻ.',
      name: 'Alexa Milton',
      role: 'Khách hàng',
      avatar: '/placeholder-avatar-1.jpg',
    },
    {
      rating: 5,
      quote:
        'Bệnh viện/Phòng khám có trang thiết bị y tế hiện đại và tiên tiến, giúp chẩn đoán và điều trị các bệnh một cách chính xác và hiệu quả.',
      name: 'Pelican Steve',
      role: 'Khách hàng',
      avatar: '/placeholder-avatar-2.jpg',
    },
    {
      rating: 5,
      quote:
        'Đội ngũ bác sĩ rất chuyên nghiệp và tận tâm. Họ lắng nghe và giải thích rõ ràng về tình trạng sức khỏe của tôi.',
      name: 'Sarah Johnson',
      role: 'Khách hàng',
      avatar: '/placeholder-avatar-3.jpg',
    },
    {
      rating: 4,
      quote:
        'Không gian phòng khám sạch sẽ, thoáng mát. Nhân viên phục vụ rất nhiệt tình và chu đáo.',
      name: 'Michael Chen',
      role: 'Khách hàng',
      avatar: '/placeholder-avatar-4.jpg',
    },
    {
      rating: 5,
      quote:
        'Tôi rất hài lòng với dịch vụ tại đây. Thời gian chờ đợi ngắn và quy trình đơn giản, thuận tiện.',
      name: 'Emily Davis',
      role: 'Khách hàng',
      avatar: '/placeholder-avatar-5.jpg',
    },
    {
      rating: 4,
      quote:
        'Giá cả hợp lý và chất lượng dịch vụ tốt. Tôi sẽ quay lại và giới thiệu cho bạn bè.',
      name: 'David Wilson',
      role: 'Khách hàng',
      avatar: '/placeholder-avatar-6.jpg',
    },
  ]

  // Chia reviews thành các nhóm 2 cards mỗi slide
  const reviewsPerSlide = 2
  const totalSlides = Math.ceil(reviews.length / reviewsPerSlide)
  const [activeSlide, setActiveSlide] = useState(0)

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides)
    }, 5000) // Chuyển slide mỗi 5 giây

    return () => clearInterval(interval)
  }, [totalSlides])

  // Lấy reviews cho slide hiện tại
  const getCurrentSlideReviews = () => {
    const start = activeSlide * reviewsPerSlide
    return reviews.slice(start, start + reviewsPerSlide)
  }

  const handleDotClick = (index: number) => {
    setActiveSlide(index)
  }

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decorative patterns */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      <Container>
        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <FaHeart className="text-blue-600" />
            </div>
            <span className="text-green-500 font-semibold uppercase text-sm tracking-wide">
              ĐÁNH GIÁ TÍCH CỰC
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900">
            Đánh Giá Từ Khách Hàng
          </h2>
        </div>

        {/* Review Cards Carousel */}
        <div className="relative mb-8 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeSlide * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const slideReviews = reviews.slice(
                slideIndex * reviewsPerSlide,
                slideIndex * reviewsPerSlide + reviewsPerSlide
              )
              return (
                <div
                  key={slideIndex}
                  className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-2"
                >
                  {slideReviews.map((review, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 lg:p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      {/* Quote icon - bottom right */}
                      <div className="absolute bottom-4 right-4 text-green-200 text-6xl lg:text-7xl font-serif leading-none">
                        "
                      </div>

                      {/* Star rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-lg ${
                              i < review.rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Quote text */}
                      <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-6 pr-8">
                        {review.quote}
                      </p>

                      {/* Customer info */}
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0">
                          <span className="text-gray-400 text-xs">Avatar</span>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{review.name}</p>
                          <p className="text-sm text-gray-500">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 relative z-10">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                index === activeSlide
                  ? 'bg-green-500 border-2 border-green-300 scale-110'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ReviewsSection
