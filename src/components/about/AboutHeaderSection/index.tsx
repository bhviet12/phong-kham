import { FaSpa, FaStar } from 'react-icons/fa'

const AboutHeaderSection = () => {
  return (
    <header className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-pattern z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 border border-primary/30 rounded-full bg-blue-50 dark:bg-blue-900/20">
              <span className="text-primary font-semibold text-xs tracking-[0.2em] uppercase font-body">Câu Chuyện Của Chúng Tôi</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl text-primary font-medium leading-tight">
              Nâng Tầm Vẻ Đẹp <br/><span className="italic font-light">Nguyên Bản</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg font-body">
              Tại Phòng khám Da liễu Thẩm mỹ T&D, chúng tôi tin rằng vẻ đẹp thực sự bắt nguồn từ làn da khỏe mạnh.
              Kết hợp giữa y học hiện đại và nghệ thuật thẩm mỹ, T&D mang đến giải pháp chăm sóc toàn diện, an toàn và hiệu quả nhất.
            </p>
            <div className="flex items-center gap-12 pt-4">
              <div className="text-center">
                <p className="text-4xl font-display text-primary font-bold">10+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1 font-body">Năm Kinh Nghiệm</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-display text-primary font-bold">15k+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1 font-body">Khách Hàng Hài Lòng</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <img 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdaoC_IyBM-pZmVCm8jo4bUZ66Z20py0Me2xdWaqHfwuNbK6Qg-gN6_LIBGiIMeGJeWA6LnOHz8j39Pyh7bhtCV2824r1wEIs9cVS8ean4TZwsmI8RCpfurz8mmljnkJK6ALVtuCoPp9LYwJkPt7a2I9_c91XoYMDnGg5N05CVAiDJ50O7UkknrACN8yxgtJcGQ9knH5_VnoMrqXto28FaVCUG7umEmQB00bLkt_azCD5ei6p92UbF0rRC54Ph_SuFk7apg-SGW0Y"
                  alt="Clinic interior"
                />
                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                  <FaSpa className="text-primary text-3xl mb-2" />
                  <h3 className="font-display text-xl text-primary dark:text-white mb-2">Liệu Pháp Tự Nhiên</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-body">Kết hợp công nghệ cao với các dưỡng chất thiên nhiên lành tính.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-primary text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center h-48">
                  <span className="font-display text-4xl mb-2">4.9</span>
                  <div className="flex text-accent mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-sm fill-current" />
                    ))}
                  </div>
                  <p className="text-sm font-light opacity-90 font-body">Đánh giá trung bình từ khách hàng trên Google & Facebook.</p>
                </div>
                <img 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC-8T7P8x3BFw8VLRIrsE11o4cPqfgRA1WZ4770D5hVOCIrZ9uYK2oEBFARNfwIJNOSGqKcGECx6IoT8oRX8Eagjz2eFvoWDBNDZlFA6TI1TXDCurb3sLdQeC8yG1Vawp1bKDxsQsanJ4ke89q0mVT8icNyDTwuuPe5pCuQRg5bWCl-odJy8x2IJHMLsv94WjwqLvUh9v2IkIqz1gbWBix-U6PcbDJm5clLKfadreOM0wpIQDQhG_X6DskAFMY3o0k0kYjQyMi4eY"
                  alt="Clinic treatment room"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AboutHeaderSection
