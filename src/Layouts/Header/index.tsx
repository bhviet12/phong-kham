import { FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"
import Container from "../../components/Container"
import "./index.css"

const Header = () => {
  return (
    <header className="w-full bg-blue-600 text-white font-bold">
      <Container>
        <div className="grid grid-cols-2 gap-4 py-3">
        {/* Left side - Contact info */}
        <div className="flex items-center gap-6 col-span-2 lg:col-span-1">
          {/* Phone */}
          <div className="flex items-center">
            <span className="icon">
              <FaPhoneAlt />
            </span>
            <p className="wrapper">1900 1234</p>
          </div>

          {/* Email */}
          <div className="flex items-center">
            <span className="icon">
              <MdOutlineEmail />
            </span>
            <p className="wrapper">info@clinic.com</p>
          </div>

          {/* Location */}
          <div className="flex items-center">
            <span className="icon">
              <FaLocationDot />
            </span>
            <p className="wrapper">123 Main Street, City</p>
          </div>
        </div>

        {/* Right side - Social icons */}
        <div className="flex justify-end items-center col-span-2 lg:col-span-1">
          <h2 className="text-sm mr-2">Mạng xã hộ :</h2>
          <a href="#" className="icon-social">
            <FaFacebook />
          </a>
          <a href="#" className="icon-social">
            <FaTwitter />
          </a>
          <a href="#" className="icon-social ">
            <FaLinkedin />
          </a>
        </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
