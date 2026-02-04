import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import logo from '../../assets/static/TD logo_Artboard 4 copy 3.png'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
  FaGlobe,
} from 'react-icons/fa'
import { FaLocationDot, FaClock } from 'react-icons/fa6'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const links = [
    { text: 'Về chúng tôi', path: '/about' },
    { text: 'Đội ngũ bác sĩ', path: '/doctors' },
    { text: 'Dịch vụ & Bảng giá', path: '/services' },
    { text: 'Tin tức & Sự kiện', path: '/news' },
    { text: 'Liên hệ', path: '/contact' },
  ]

  const featuredServices = [
    { text: 'Điều trị mụn chuẩn y khoa', path: '/services' },
    { text: 'Trị nám - Tàn nhang', path: '/services' },
    { text: 'Trẻ hóa da công nghệ cao', path: '/services' },
    { text: 'Nâng cơ Ultherapy', path: '/services' },
    { text: 'Tiêm Filler & Botox', path: '/services' },
  ]

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      <Container>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-12 lg:py-16 relative z-10">
          {/* Column 1: T&D CLINIC */}
          <div className="space-y-4">
            {/* Logo */}
            <Link to="/" className="mb-4 inline-block">
              <img src={logo} alt="T&D Clinic Logo" className="w-32 sm:w-36 md:w-40 lg:w-44 h-auto" />
            </Link>

            {/* Description */}
            <p className="text-sm text-white/90 leading-relaxed font-body">
              Phòng khám Da liễu Thẩm mỹ T&D tự hào là địa chỉ uy tín trong lĩnh vực điều trị và chăm sóc da. Chúng tôi cam kết mang lại vẻ đẹp tự nhiên và an toàn cho khách hàng.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary border-2 border-accent flex items-center justify-center text-white hover:bg-accent/20 transition-all"
                aria-label="Website"
              >
                <FaGlobe className="text-sm" />
              </a>
              <a
                href="mailto:info@tdclinic.com"
                className="w-10 h-10 rounded-full bg-primary border-2 border-accent flex items-center justify-center text-white hover:bg-accent/20 transition-all"
                aria-label="Email"
              >
                <FaEnvelope className="text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2: LIÊN KẾT */}
          <div>
            <h4 className="text-lg font-bold font-display text-accent mb-4">
              LIÊN KẾT
            </h4>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-white hover:text-accent transition-colors font-body"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: DỊCH VỤ NỔI BẬT */}
          <div>
            <h4 className="text-lg font-bold font-display text-accent mb-4">
              DỊCH VỤ NỔI BẬT
            </h4>
            <ul className="space-y-3">
              {featuredServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-sm text-white hover:text-accent transition-colors font-body"
                  >
                    {service.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: LIÊN HỆ */}
          <div>
            <h4 className="text-lg font-bold font-display text-accent mb-4">
              LIÊN HỆ
            </h4>
            <div className="space-y-3">
              {/* Location */}
              <div className="flex items-start gap-3">
                <FaLocationDot className="text-accent mt-1 flex-shrink-0 text-base" />
                <p className="text-sm text-white font-body">
                  123 Nguyễn Trãi, Quận 1, TP. Hồ Chí Minh
                </p>
              </div>

              {/* Hotline */}
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-accent flex-shrink-0 text-base" />
                <a href="tel:19001234" className="text-sm text-white hover:text-accent transition-colors font-body">
                  Hotline: 1900 1234
                </a>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3">
                <FaClock className="text-accent flex-shrink-0 text-base" />
                <p className="text-sm text-white font-body">
                  Thứ 2 - Chủ Nhật: 9:00 - 20:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 gap-4">
            {/* Copyright */}
            <p className="text-xs sm:text-sm text-white/80 text-center sm:text-left font-body">
              © 2023 T&D Aesthetic Clinic. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-4">
              <Link
                to="/privacy"
                className="text-xs sm:text-sm text-white/80 hover:text-accent transition-colors font-body"
              >
                Chính sách bảo mật
              </Link>
              <Link
                to="/terms"
                className="text-xs sm:text-sm text-white/80 hover:text-accent transition-colors font-body"
              >
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-accent hover:bg-accent/90 text-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50 text-sm sm:text-base"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  )
}

export default Footer
