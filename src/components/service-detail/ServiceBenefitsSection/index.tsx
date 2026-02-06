import { FaStar, FaTint, FaShieldAlt } from 'react-icons/fa'

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    icon: <FaStar className="text-3xl" />,
    title: 'Xóa nhăn tức thì',
    description: 'Làm đầy các rãnh nhăn nông và sâu, mang lại bề mặt da phẳng mịn ngay sau khi thực hiện.'
  },
  {
    icon: <FaTint className="text-3xl" />,
    title: 'Cấp ẩm tầng sâu',
    description: 'Đưa dưỡng chất vào sâu trong lớp trung bì, giúp da ngậm nước và căng bóng tự nhiên.'
  },
  {
    icon: <FaShieldAlt className="text-3xl" />,
    title: 'An toàn tuyệt đối',
    description: 'Công nghệ được FDA chứng nhận, không xâm lấn, không cần thời gian nghỉ dưỡng.'
  }
]

const ServiceBenefitsSection = () => {
  return (
    <section className="bg-white dark:bg-[#1a1f36] rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl font-bold text-primary dark:text-white mb-4">Lợi ích vượt trội</h2>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="flex flex-col items-center text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
          >
            <div className="size-14 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary dark:text-blue-300 mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 font-display">{benefit.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-body">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServiceBenefitsSection
