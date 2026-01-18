import Button from '../components/Button/index.tsx';
import logo from '../assets/static/images.png';
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="w-full bg-white sticky top-0 z-50 border-b border-gray-200 transition-shadow duration-300 hover:shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src={logo} alt="Logo" className='w-9 p-1 mr-2' />
              <div>
                <h1 className="text-xl font-bold text-blue-900">Medical</h1>
                <p className="text-xs text-gray-600">Mona Media</p>
              </div>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex justify-center">
            <ul className="flex gap-6 items-center">
              <li><a href="/" className="text-gray-700 hover:text-blue-600 font-medium">TRANG CHỦ</a></li>
              <li><a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">GIỚI THIỆU</a></li>
              <li><a href="/products" className="text-gray-700 hover:text-blue-600 font-medium">SẢN PHẨM +</a></li>
              <li><a href="/services" className="text-gray-700 hover:text-blue-600 font-medium">DỊCH VỤ +</a></li>
              <li><a href="/news" className="text-gray-700 hover:text-blue-600 font-medium">TIN TỨC</a></li>
              <li><a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">LIÊN HỆ</a></li>
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
            <Button color="primary">LIÊN HỆ NGAY</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 