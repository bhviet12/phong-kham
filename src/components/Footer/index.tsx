import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import logo from '../../assets/static/images.png'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaChevronRight,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaArrowUp,
} from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

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
    'About Us',
    'Our Services',
    'Our Team',
    'Latest Blog',
    'Đặt lịch ngay',
    'Help & FAQs',
    'Contact Us',
  ]

  const popularServices = [
    'Cardiology Care',
    'Urgent Care',
    'Orthopedic Care',
    'Diagnosis department',
    'Gastroenterology',
    'Therapy department',
    'Dental service',
  ]

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <Container>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-12 lg:py-16 relative z-10">
          {/* Column 1: Brand and Contact Info */}
          <div className="space-y-4">
            {/* Logo */}
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="Logo" className="w-12 p-1 mr-3" />
              <div>
                <h3 className="text-xl font-bold text-white">Medical</h3>
                <p className="text-sm text-green-500">Mona Media</p>
              </div>
            </Link>

            {/* Description */}
            <p className="text-sm text-gray-300 leading-relaxed">
              Subscribe to out newsletter today to receive latest news administrate cost effective for tactical data.
            </p>

            {/* Contact Details */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <FaLocationDot className="text-green-500 mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  90 street, Ward 1, District 1, City 1
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-500 flex-shrink-0" />
                <a href="mailto:info@themona.global" className="text-sm text-gray-300 hover:text-green-500 transition-colors">
                  info@themona.global
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-500 flex-shrink-0" />
                <a href="tel:+840313728397" className="text-sm text-gray-300 hover:text-green-500 transition-colors">
                  (+84) 98765423456
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Liên Kết */}
          <div>
            <h4 className="text-lg font-bold mb-4 pb-2 border-b-2 border-green-500 inline-block">
              Liên Kết
            </h4>
            <ul className="space-y-2 mt-4">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-green-500 transition-colors group"
                  >
                    <FaChevronRight className="text-gray-500 text-xs group-hover:text-green-500 transition-colors" />
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Dịch Vụ Phổ Biến */}
          <div>
            <h4 className="text-lg font-bold mb-4 pb-2 border-b-2 border-green-500 inline-block">
              Dịch Vụ Phổ Biến
            </h4>
            <ul className="space-y-2 mt-4">
              {popularServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-green-500 transition-colors group"
                  >
                    <FaChevronRight className="text-gray-500 text-xs group-hover:text-green-500 transition-colors" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Addresses */}
          <div className="space-y-6">
            {/* Miền Nam */}
            <div>
              <h4 className="text-lg font-bold mb-3">Miền Nam:</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <FaLocationDot className="text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    789 street, Ward 1, District 1, City 1
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-green-500 flex-shrink-0" />
                  <a href="tel:+842838123456" className="text-sm text-gray-300 hover:text-green-500 transition-colors">
                    (+84) 567895432
                  </a>
                </div>
              </div>
            </div>

            {/* Miền Trung */}
            <div>
              <h4 className="text-lg font-bold mb-3">Miền Trung:</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <FaLocationDot className="text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    123 street, Ward 1, District 1, City 1
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-green-500 flex-shrink-0" />
                  <a href="tel:+842352345678" className="text-sm text-gray-300 hover:text-green-500 transition-colors">
                    (+84) 23456789345
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="bg-slate-800 border-t border-slate-700 relative z-10">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-300 text-center md:text-left">
              © Thiết kế và lập trình đội N
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  )
}

export default Footer
