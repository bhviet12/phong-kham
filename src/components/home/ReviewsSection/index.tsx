import { useState, useEffect } from 'react'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const reviews = [
  {
    quote: "Dịch vụ tuyệt vời, không gian sang trọng. Bác sĩ tư vấn rất kỹ, mình điều trị mụn 3 buổi đã thấy da cải thiện rõ rệt.",
    rating: 5,
    name: "Minh Anh",
    location: "TP. Hồ Chí Minh"
  },
  {
    quote: "Tôi rất hài lòng với liệu trình nâng cơ Hifu tại đây. Nhân viên nhiệt tình, nhẹ nhàng, cảm giác thư giãn như đi nghỉ dưỡng.",
    rating: 5,
    name: "Chị Lan",
    location: "Đồng Nai"
  },
  {
    quote: "Công nghệ laser trị sẹo rất hiệu quả. Sau 2 tháng sẹo rỗ của mình đã đầy lên được 80%. Cảm ơn T&D rất nhiều.",
    rating: 4.5,
    name: "Tuấn Kiệt",
    location: "TP. Hồ Chí Minh"
  },
  {
    quote: "Điều trị nám tại T&D rất chuyên nghiệp. Sau 4 buổi laser, nám của tôi đã mờ đi đáng kể. Bác sĩ tư vấn rất tận tâm.",
    rating: 5,
    name: "Ngọc Hà",
    location: "Bình Dương"
  },
  {
    quote: "Chăm sóc da tại đây như đi spa 5 sao. Liệu trình phù hợp với da tôi, da căng bóng và mịn màng hơn rất nhiều.",
    rating: 5,
    name: "Thanh Mai",
    location: "TP. Hồ Chí Minh"
  },
  {
    quote: "Tiêm Filler tại T&D rất an toàn và tự nhiên. Kết quả vượt ngoài mong đợi, không đau và không sưng nhiều.",
    rating: 4.5,
    name: "Hương Giang",
    location: "Đà Nẵng"
  },
  {
    quote: "Trẻ hóa da với công nghệ Thermage cho kết quả tuyệt vời. Da căng, nhăn mờ đi rõ rệt sau 1 liệu trình.",
    rating: 5,
    name: "Thu Trang",
    location: "TP. Hồ Chí Minh"
  },
  {
    quote: "Phòng khám sạch sẽ, hiện đại. Đội ngũ nhân viên chuyên nghiệp, tư vấn chi tiết và tận tình.",
    rating: 5,
    name: "Văn Đức",
    location: "Long An"
  }
]

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Tính số lượng slides (mỗi slide hiển thị 3 reviews)
  const totalSlides = Math.ceil(reviews.length / 3)

  // Auto slide
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 5000) // Chuyển slide mỗi 5 giây

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalSlides])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  // Tính toán translateX để trượt ngang
  const translateX = -(currentIndex * 100)

  return (
    <section className="py-24 px-6 bg-background-light" id="reviews">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl text-primary mb-3">Khách hàng nói gì?</h2>
        <div className="w-16 h-[1px] bg-accent mx-auto mb-4"></div>
        <p className="text-gray-500 font-light italic font-display">Niềm tin được khẳng định qua hàng ngàn khách hàng</p>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Container với overflow hidden */}
        <div className="overflow-hidden">
          {/* Reviews Container - trượt ngang */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {/* Tạo các nhóm 3 reviews */}
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const startIndex = slideIndex * 3
              const slideReviews = reviews.slice(startIndex, startIndex + 3)
              
              return (
                <div 
                  key={slideIndex}
                  className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-2"
                >
                  {slideReviews.map((review, index) => (
                    <div 
                      key={`${slideIndex}-${index}`}
                      className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg transition duration-300 relative"
                    >
                      <div className="absolute -top-4 left-8 text-6xl text-accent/20 font-serif leading-none">"</div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => {
                          const isFull = i < Math.floor(review.rating)
                          const isHalf = i < review.rating && i >= Math.floor(review.rating)
                          return (
                            <FaStar 
                              key={i}
                              className={`text-sm ${
                                isFull 
                                  ? 'text-accent fill-accent' 
                                  : isHalf 
                                  ? 'text-accent fill-accent opacity-50' 
                                  : 'text-accent/20 fill-accent/20'
                              }`}
                              style={{
                                color: isFull || isHalf ? '#F5D67B' : 'rgba(245, 214, 123, 0.2)',
                                fill: isFull ? '#F5D67B' : isHalf ? 'rgba(245, 214, 123, 0.5)' : 'rgba(245, 214, 123, 0.2)'
                              }}
                            />
                          )
                        })}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 italic font-body">
                        {review.quote}
                      </p>
                      <div className="flex items-center mt-auto border-t border-gray-50 pt-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mr-3">
                          <span className="text-xs">👤</span>
                        </div>
                        <div>
                          <h4 className="font-display text-primary font-bold text-sm">{review.name}</h4>
                          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-body">{review.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation Arrows */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-accent hover:text-primary transition-all z-10"
              aria-label="Previous reviews"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-accent hover:text-primary transition-all z-10"
              aria-label="Next reviews"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-accent w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ReviewsSection
