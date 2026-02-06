import { FaEye, FaHandHoldingHeart, FaBrain } from 'react-icons/fa'

const CoreValuesSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold text-xs tracking-[0.2em] uppercase mb-4 block font-body">Giá Trị Cốt Lõi</span>
          <h2 className="font-display text-4xl text-primary dark:text-white mb-6">Tầm Nhìn & Sứ Mệnh</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-background-light dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition duration-300 relative overflow-hidden">
            <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition">
              <FaEye className="text-3xl" />
            </div>
            <h3 className="font-display text-2xl text-primary dark:text-white mb-4">Tầm Nhìn</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-body">
              Trở thành hệ thống phòng khám da liễu thẩm mỹ hàng đầu, nơi chuẩn mực y khoa hội tụ cùng trải nghiệm đẳng cấp 5 sao.
            </p>
          </div>
          <div className="group bg-background-light dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition duration-300 relative overflow-hidden">
            <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition">
              <FaHandHoldingHeart className="text-3xl" />
            </div>
            <h3 className="font-display text-2xl text-primary dark:text-white mb-4">Sứ Mệnh</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-body">
              Đánh thức vẻ đẹp tiềm ẩn của mỗi khách hàng thông qua phác đồ điều trị cá nhân hóa, an toàn và hiệu quả bền vững.
            </p>
          </div>
          <div className="group bg-background-light dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition duration-300 relative overflow-hidden">
            <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition">
              <FaBrain className="text-3xl" />
            </div>
            <h3 className="font-display text-2xl text-primary dark:text-white mb-4">Tận Tâm</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-body">
              Luôn lắng nghe và thấu hiểu. Mỗi khách hàng đến với T&D đều được chăm sóc như người thân với sự tận tụy cao nhất.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreValuesSection
