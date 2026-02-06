import { useState } from 'react'
import { FaClock, FaMoneyBillWave, FaUserMd } from 'react-icons/fa'
import Button from '../../Button'

const ServiceInfoCTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  return (
    <section className="bg-primary rounded-3xl overflow-hidden shadow-2xl relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
        <div className="p-10 lg:p-14 text-white flex flex-col justify-center">
          <h3 className="font-display text-3xl font-bold mb-6">Thông tin liệu trình</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-2 rounded-lg">
                <FaClock className="text-accent text-2xl" />
              </div>
              <div>
                <p className="text-sm text-gray-300 font-medium uppercase tracking-wide font-body">Thời gian thực hiện</p>
                <p className="text-xl font-bold font-display">60 - 90 phút</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-2 rounded-lg">
                <FaMoneyBillWave className="text-accent text-2xl" />
              </div>
              <div>
                <p className="text-sm text-gray-300 font-medium uppercase tracking-wide font-body">Chi phí</p>
                <p className="text-xl font-bold font-display">Từ 3.000.000 VNĐ</p>
                <p className="text-xs text-accent italic font-body">*Ưu đãi 20% cho khách hàng mới</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-2 rounded-lg">
                <FaUserMd className="text-accent text-2xl" />
              </div>
              <div>
                <p className="text-sm text-gray-300 font-medium uppercase tracking-wide font-body">Bác sĩ phụ trách</p>
                <p className="text-xl font-bold font-display">Dr. Tran Minh Duc</p>
                <p className="text-sm text-gray-300 font-body">Chuyên khoa II Da liễu</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-[#151a2d] p-10 lg:p-14 flex flex-col justify-center items-center text-center">
          <h3 className="font-display text-2xl font-bold text-primary dark:text-white mb-4">Bạn đã sẵn sàng thay đổi?</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm font-body">
            Để lại thông tin để được tư vấn miễn phí và nhận ưu đãi đặc biệt trong tháng này.
          </p>
          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
            <input
              type="text"
              placeholder="Họ và tên"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 dark:text-white font-body"
              required
            />
            <input
              type="tel"
              placeholder="Số điện thoại"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 dark:text-white font-body"
              required
            />
            <Button
              htmlType="submit"
              color="primary"
              size="large"
              shape="square"
              className="w-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Đặt lịch tư vấn ngay
            </Button>
          </form>
          <p className="text-xs text-gray-400 mt-4 font-body">Cam kết bảo mật thông tin khách hàng 100%</p>
        </div>
      </div>
    </section>
  )
}

export default ServiceInfoCTASection
