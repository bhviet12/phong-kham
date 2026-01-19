import { Link } from 'react-router-dom'
import Button from '../components/Button/index.tsx';
import Container from '../components/Container';
import logo from '../assets/static/images.png';
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="w-full bg-white sticky top-0 z-50 border-b border-gray-200 transition-shadow duration-300 hover:shadow-md">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className='w-14 p-1 mr-3' />
              <div>
                <h1 className="text-2xl font-bold text-blue-900">Medical</h1>
                <p className="text-sm text-gray-600">Mona Media</p>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex justify-center">
            <ul className="flex gap-6 items-center">
              <li><Link to="/" className="text-sm text-gray-700 hover:text-blue-600 font-medium">TRANG CHỦ</Link></li>
              <li><Link to="/about" className="text-sm text-gray-700 hover:text-blue-600 font-medium">GIỚI THIỆU</Link></li>
              <li><a href="/products" className="text-sm text-gray-700 hover:text-blue-600 font-medium">SẢN PHẨM +</a></li>
              <li><Link to="/services" className="text-sm text-gray-700 hover:text-blue-600 font-medium">DỊCH VỤ +</Link></li>
              <li><a href="/news" className="text-sm text-gray-700 hover:text-blue-600 font-medium">TIN TỨC</a></li>
              <li><Link to="/contact" className="text-sm text-gray-700 hover:text-blue-600 font-medium">LIÊN HỆ</Link></li>
            </ul>
          </div>

          {/* Icons & Button */}
          <div className="flex-shrink-0 flex items-center gap-4">
            {/* Search Icon */}
            <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <FaSearch className="text-xl" />
            </button>

            {/* Wishlist Icon */}
            <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <FaHeart className="text-xl" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>

            {/* Cart Icon */}
            <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <FaShoppingCart className="text-xl" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>

            {/* Contact Button */}
            <Link to="/contact">
              <Button color="primary" size="large">LIÊN HỆ NGAY</Button>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation; 