import { Link } from 'react-router-dom'
import { servicesSectionData } from '../../../../data/home/servicesSection'
import { FaChevronRight } from 'react-icons/fa'

const ServicesSection = () => {
  const { badge, title, services } = servicesSectionData

  return (
    <section className="py-24 bg-surface-light dark:bg-surface-dark transition-colors duration-300" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm font-body">{badge}</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary dark:text-white mt-2">{title}</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group bg-background-light dark:bg-background-dark p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 dark:border-gray-700 hover:border-accent dark:hover:border-accent relative overflow-hidden"
              >
                {/* Decorative pattern */}
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                  <svg className="w-24 h-24 fill-primary dark:fill-white" viewBox="0 0 100 100">
                    <path d="M52,48 C52,28 72,28 72,48 C72,48 72,48 52,48 Z" transform="rotate(-45 62 38)"></path>
                    <path d="M28,48 C28,28 48,28 48,48 C48,48 48,48 28,48 Z" transform="rotate(-135 38 38)"></path>
                    <path d="M28,72 C28,52 48,52 48,72 C48,72 48,72 28,72 Z" transform="rotate(135 38 62)"></path>
                    <path d="M52,72 C52,52 72,52 72,72 C72,72 72,72 52,72 Z" transform="rotate(45 62 62)"></path>
                  </svg>
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 bg-primary text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition">
                  <IconComponent className="text-3xl" />
                </div>
                
                {/* Title */}
                <h3 className="font-display text-xl font-bold text-primary dark:text-white mb-3">{service.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed font-body">{service.description}</p>
                
                {/* Link */}
                <Link 
                  to="/services" 
                  className="text-primary dark:text-accent text-sm font-bold uppercase tracking-wider flex items-center group-hover:gap-2 transition-all font-body"
                >
                  Xem chi tiết <FaChevronRight className="text-base ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
