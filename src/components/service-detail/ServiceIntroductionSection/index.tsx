interface ServiceIntroductionSectionProps {
  title: string
  description: string
  description2?: string
  image: string
  statValue?: string
  statLabel?: string
}

const ServiceIntroductionSection = ({
  title,
  description,
  description2,
  image,
  statValue = "98%",
  statLabel = "Khách hàng hài lòng sau liệu trình đầu tiên"
}: ServiceIntroductionSectionProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:col-span-7 flex flex-col gap-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px w-8 bg-accent"></div>
          <span className="text-accent font-bold uppercase text-xs tracking-widest font-body">Giới thiệu</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary dark:text-white">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-body">
          {description}
        </p>
        {description2 && (
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-body">
            {description2}
          </p>
        )}
      </div>
      <div className="md:col-span-5 relative">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-[200px] border-l-4 border-accent hidden md:block">
          <p className="font-display text-4xl font-bold text-primary dark:text-white mb-1">{statValue}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-body">{statLabel}</p>
        </div>
      </div>
    </section>
  )
}

export default ServiceIntroductionSection
