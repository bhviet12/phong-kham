import { Link } from 'react-router-dom'
import { FaCalendarAlt } from 'react-icons/fa'
import Button from '../../Button'

const HeroBanner = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Serene clinic environment" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF85ERQ-ewYbGyLjXYwrlwtRJqMEDdryV2Y9MaiG9KgSdtKwO6-nkSIGGTlH_46jqQKo-xwXdwxc9dZVvlFjka5WDoi_1i_fVgp7dhI5MlYUwvcyW0A7wDiOLYdCB0-RSNOFmb10advYFhvYrSFzXiSX3pp12Bv5HZyNW358LkvGfb56AEOkS828o_0fwvDr_Lpt7UvuWD1_Lfrj_K28XA9L77T0YZiRyGPnCAnnRdwxg-CcC-Kr3OIvYMEBcvhFA1cqbCadEcYrA"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="mb-6 flex justify-center">
          <svg className="w-20 h-20 fill-accent opacity-90 animate-fade-in-up" viewBox="0 0 100 100">
            <path d="M52,48 C52,28 72,28 72,48 C72,48 72,48 52,48 Z" transform="rotate(-45 62 38)"></path>
            <path d="M28,48 C28,28 48,28 48,48 C48,48 48,48 28,48 Z" transform="rotate(-135 38 38)"></path>
            <path d="M28,72 C28,52 48,52 48,72 C48,72 48,72 28,72 Z" transform="rotate(135 38 62)"></path>
            <path d="M52,72 C52,52 72,52 72,72 C72,72 72,72 52,72 Z" transform="rotate(45 62 62)"></path>
          </svg>
        </div>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
          Nâng tầm vẻ đẹp <br/> <span className="text-accent italic">từ làn da khỏe mạnh</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-body">
          Phòng khám Da liễu Thẩm mỹ T&D mang đến giải pháp chăm sóc da chuyên sâu, chuẩn y khoa trong không gian sang trọng và thư thái.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="#booking" className="w-full sm:w-auto">
            <Button
              color="accent"
              size="large"
              shape="rounded"
              leftIcon={<FaCalendarAlt />}
              className="w-full sm:w-auto shadow-xl shadow-accent/30"
            >
              Đặt lịch ngay
            </Button>
          </Link>
          <Link to="#consultation" className="w-full sm:w-auto">
            <Button
              color="outline"
              size="large"
              shape="rounded"
              className="w-full sm:w-auto"
              style={{
                border: "2px solid #ffffff",
                color: "#ffffff",
                background: "transparent"
              }}
            >
              Tư vấn miễn phí
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background-light to-transparent z-20"></div>
    </section>
  )
}

export default HeroBanner
