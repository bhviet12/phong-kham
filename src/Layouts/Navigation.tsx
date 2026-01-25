import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '../components/Button/index.tsx'
import Container from '../components/Container'
import logo from '../assets/static/images.png'
import { FaSearch } from 'react-icons/fa'

const Navigation = () => {
  const { t, i18n } = useTranslation()

  const currentLang = i18n.language === 'en' ? 'en' : 'vi'

  const toggleLanguage = () => {
    const nextLang = currentLang === 'vi' ? 'en' : 'vi'
    void i18n.changeLanguage(nextLang)
  }

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
              <li>
                <Link to="/" className="text-sm text-gray-700 hover:text-blue-600 font-medium">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-700 hover:text-blue-600 font-medium">
                  {t('navigation.about')}
                </Link>
              </li>
              {/* <li>
                <a href="/products" className="text-sm text-gray-700 hover:text-blue-600 font-medium">
                  {t('navigation.products')}
                </a>
              </li> */}
              <li>
                <Link to="/services" className="text-sm text-gray-700 hover:text-blue-600 font-medium">
                  {t('navigation.services')}
                </Link>
              </li>
              <li>
                <a href="/news" className="text-sm text-gray-700 hover:text-blue-600 font-medium">
                  {t('navigation.news')}
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-700 hover:text-blue-600 font-medium">
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Icons & Button */}
          <div className="flex-shrink-0 flex items-center gap-4">
            {/* Search Icon */}
            <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <FaSearch className="text-xl" />
            </button>

            {/* Language toggle */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs font-semibold border border-gray-300 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              {currentLang === 'vi' ? 'VI' : 'EN'}
            </button>

            {/* Contact Button */}
            <Link to="/contact">
              <Button color="primary" size="large">
                {t('navigation.contactNow')}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation; 