import Button from "../../../shared/Button"
import { FaCalendarAlt } from 'react-icons/fa'

interface ServiceHeroSectionProps {
  badge?: string
  title: string
  quote: string
  backgroundImage: string
}

const ServiceHeroSection = ({ 
  badge = "Dịch vụ cao cấp", 
  title, 
  quote,
  backgroundImage 
}: ServiceHeroSectionProps) => {
  return (
    <section 
      className="w-full relative bg-cover bg-center bg-no-repeat h-[500px] lg:h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 19, 35, 0.3) 0%, rgba(15, 19, 35, 0.6) 100%), url("${backgroundImage}")`
      }}
    >
      <div className="max-w-[1024px] px-6 text-center text-white flex flex-col items-center gap-6">
        <span className="uppercase tracking-[0.2em] text-sm font-medium text-accent font-body">
          {badge}
        </span>
        <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="font-display italic text-xl lg:text-2xl font-light text-gray-100 max-w-2xl drop-shadow-md">
          {quote}
        </p>
        <Button
          color="accent"
          size="large"
          shape="rounded"
          leftIcon={<FaCalendarAlt />}
          className="mt-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
        >
          Đặt lịch ngay
        </Button>
      </div>
    </section>
  )
}

export default ServiceHeroSection
