import { useState, useEffect } from 'react'
import { FaMapMarkerAlt, FaPhone, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'
import Button from '../Button'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  })

  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const availableTimes = [
    '09:00 AM',
    '10:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM'
  ]

  const services = [
    'Chăm sóc da chuyên sâu',
    'Điều trị Laser công nghệ cao',
    'Tiêm Filler / Botox',
    'Tư vấn thẩm mỹ tổng quát'
  ]

  // Calendar logic
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    // Empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }
    return days
  }

  const monthNames = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const handleDateSelect = (date: Date | null) => {
    if (date) {
      setSelectedDate(date)
      const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
      setFormData({ ...formData, date: dateStr })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    // Handle form submission
    onClose()
  }

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const days = getDaysInMonth(currentMonth)
  const today = new Date()
  const isToday = (date: Date | null) => {
    if (!date) return false
    return date.toDateString() === today.toDateString()
  }
  const isSelected = (date: Date | null) => {
    if (!date || !selectedDate) return false
    return date.toDateString() === selectedDate.toDateString()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-[900px] bg-background-light rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-fade-in-up">
        {/* Left Side */}
        <div className="hidden md:flex w-1/3 bg-primary text-white flex-col justify-between p-8 relative">
          <div>
            <h2 className="text-2xl font-extrabold text-accent mb-2 font-display">T&D CLINIC</h2>
            <p className="text-sm opacity-90 font-body">Tinh hoa thẩm mỹ - Nâng tầm vẻ đẹp Việt</p>
          </div>
          <div className="mt-auto space-y-4 text-sm">
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" />
              <p className="font-body">123 Đường Nguyễn Văn Cừ, Quận 1, TP. Hồ Chí Minh</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-accent flex-shrink-0" />
              <p className="font-body">1900 1234 56</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 p-8 bg-background-light">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-primary text-2xl font-bold leading-tight font-display">Đặt lịch tư vấn</h3>
              <p className="text-gray-600 text-sm mt-1 font-body">Vui lòng điền thông tin để chúng tôi hỗ trợ bạn tốt nhất.</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Họ và tên / SĐT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2 font-body">Họ và tên</label>
                <input
                  type="text"
                  placeholder="Nhập họ tên của bạn"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary/30 outline-none font-body"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2 font-body">Số điện thoại</label>
                <input
                  type="tel"
                  placeholder="09xxxxxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary/30 outline-none font-body"
                  required
                />
              </div>
            </div>

            {/* Dịch vụ */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2 font-body">Dịch vụ quan tâm</label>
              <div className="relative">
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 appearance-none focus:ring-2 focus:ring-primary/30 outline-none font-body [&>option]:text-gray-900"
                  required
                >
                  <option value="" disabled>Chọn dịch vụ</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
                <FaChevronRight className="absolute right-3 top-3 text-gray-500 rotate-90 pointer-events-none" />
              </div>
            </div>

            {/* Ngày và giờ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Calendar */}
              <div>
                <p className="text-sm font-semibold text-primary mb-2 font-body">Ngày hẹn</p>
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-3 text-primary">
                    <button
                      type="button"
                      onClick={handlePrevMonth}
                      className="hover:bg-gray-100 rounded p-1 transition-colors"
                    >
                      <FaChevronLeft className="text-sm" />
                    </button>
                    <p className="font-bold text-sm font-display">
                      {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </p>
                    <button
                      type="button"
                      onClick={handleNextMonth}
                      className="hover:bg-gray-100 rounded p-1 transition-colors"
                    >
                      <FaChevronRight className="text-sm" />
                    </button>
                  </div>
                  <div className="grid grid-cols-7 text-center text-xs text-gray-500 mb-1 font-body">
                    {weekDays.map((day, index) => (
                      <span key={index}>{day}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-sm">
                    {days.map((date, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleDateSelect(date)}
                        disabled={!date}
                        className={`h-8 w-8 rounded-full transition-colors font-body ${
                          !date
                            ? 'cursor-default'
                            : isSelected(date)
                            ? 'bg-primary text-white font-semibold shadow'
                            : isToday(date)
                            ? 'bg-accent/20 text-primary font-semibold hover:bg-accent/30'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {date ? date.getDate() : ''}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Time slots */}
              <div>
                <p className="text-sm font-semibold text-primary mb-2 font-body">Giờ hẹn khả dụng</p>
                <div className="grid grid-cols-2 gap-2">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, time })}
                      className={`border rounded-lg py-2 transition-colors font-body ${
                        formData.time === time
                          ? 'border-primary bg-primary/10 text-primary font-medium'
                          : 'border-gray-300 hover:border-primary hover:text-primary'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <Button
                htmlType="submit"
                color="primary"
                size="large"
                shape="square"
                className="bg-primary hover:bg-[#001a88] text-accent font-bold shadow-lg transition-all"
              >
                Xác nhận đặt lịch
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
