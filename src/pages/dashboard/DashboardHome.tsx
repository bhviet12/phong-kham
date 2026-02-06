import { useAuth } from '../../contexts/AuthContext'
import { FaSearch, FaTimes } from 'react-icons/fa'
import DashboardHeader from '../../components/features/dashboard/DashboardHeader'

const DashboardHome = () => {
  const { user } = useAuth()

  return (
    <div>
      {user?.role === 'receptionist' && <ReceptionistDashboard />}
      {user?.role === 'admin' && (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold text-primary dark:text-white mb-4 font-display">Admin Dashboard</h2>
          <div className="text-gray-500 dark:text-gray-400 text-sm font-body">
            Dashboard cho Admin đang được phát triển...
          </div>
        </div>
      )}
      {user?.role === 'doctor' && (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold text-primary dark:text-white mb-4 font-display">Doctor Dashboard</h2>
          <div className="text-gray-500 dark:text-gray-400 text-sm font-body">
            Dashboard cho Bác sĩ đang được phát triển...
          </div>
        </div>
      )}
    </div>
  )
}

// Receptionist Dashboard Component
const ReceptionistDashboard = () => {
  const appointments = [
    {
      id: 1,
      customer: 'Nguyễn Văn An',
      phone: '090 123 4567',
      time: '09:00 AM',
      service: 'Trị mụn chuyên sâu',
      doctor: 'BS. Minh Tú',
      status: 'pending',
      statusLabel: 'Chờ xác nhận'
    },
    {
      id: 2,
      customer: 'Lê Thị Mai',
      phone: '091 888 9999',
      time: '10:30 AM',
      service: 'Tiêm Botox vùng trán',
      doctor: 'BS. Lan Hương',
      status: 'confirmed',
      statusLabel: 'Đã xác nhận'
    },
    {
      id: 3,
      customer: 'Trần Minh Quân',
      phone: '097 555 1111',
      time: '02:15 PM',
      service: 'Tư vấn sẹo rỗ',
      doctor: 'BS. Minh Tú',
      status: 'arrived',
      statusLabel: 'Đã đến'
    }
  ]

  const doctors = [
    { name: 'BS. Minh Tú', status: 'available', statusLabel: 'Trống', time: 'Trống lúc 14:00' },
    { name: 'BS. Lan Hương', status: 'busy', statusLabel: 'Đang khám', time: 'Dự kiến xong: 10:45' },
    { name: 'BS. Quang Huy', status: 'off', statusLabel: 'Nghỉ ca', time: 'Bắt đầu lúc 13:30' }
  ]

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
      case 'confirmed':
        return 'bg-accent/10 text-accent'
      case 'arrived':
        return 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
      default:
        return 'bg-gray-100 text-gray-500'
    }
  }

  const getDoctorStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-700'
      case 'busy':
        return 'bg-amber-100 text-amber-700'
      case 'off':
        return 'bg-gray-100 text-gray-500'
      default:
        return 'bg-gray-100 text-gray-500'
    }
  }

  return (
    <div className="flex-1 max-w-[1024px] mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* SIDEBAR */}
        <aside className="lg:col-span-3 flex flex-col gap-6">
          {/* Nút tạo lịch hẹn */}
          <button className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-[#032a8a] text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 font-body">
            <span className="text-sm tracking-wide">Tạo lịch hẹn mới</span>
          </button>

          {/* Menu chính */}
          <nav className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] px-3 mb-4 font-body">Menu chính</p>
            <ul className="space-y-1.5">
              <li>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/5 text-primary font-bold transition-all font-body" href="#">
                  <span className="text-sm">Tổng quan</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group font-body" href="#">
                  <span className="text-sm group-hover:text-primary">Tra cứu khách</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group font-body" href="#">
                  <span className="text-sm group-hover:text-primary">Lịch trực bác sĩ</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group font-body" href="#">
                  <span className="text-sm group-hover:text-primary">Cấu hình</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Trạng thái bác sĩ */}
          <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-accent/20 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <h4 className="text-primary dark:text-accent font-bold text-xs uppercase tracking-wider font-body">Trạng thái Bác sĩ</h4>
            </div>

            <div className="space-y-4">
              {doctors.map((doctor, index) => (
                <div key={index}>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-gray-700 dark:text-gray-300 font-body">{doctor.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-bold font-body ${getDoctorStatusBadgeClass(doctor.status)}`}>
                        {doctor.statusLabel}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 font-body">{doctor.time}</p>
                  </div>
                  {index < doctors.length - 1 && <div className="h-px bg-gray-50 dark:bg-gray-800 mt-4"></div>}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* NỘI DUNG CHÍNH */}
        <div className="lg:col-span-9 flex flex-col gap-6">
          {/* Tiêu đề */}
          <DashboardHeader title="Tổng quan & Lịch trực Bác sĩ" />

          {/* Thống kê */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-1 border-l-4 border-l-primary">
              <p className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider font-body">Hẹn hôm nay</p>
              <p className="text-primary dark:text-white text-3xl font-extrabold font-display">24</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-1 border-l-4 border-l-accent">
              <p className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider font-body">Đã xác nhận</p>
              <p className="text-primary dark:text-white text-3xl font-extrabold font-display">18</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-1 border-l-4 border-l-green-500">
              <p className="text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider font-body">Khách đã đến</p>
              <p className="text-primary dark:text-white text-3xl font-extrabold font-display">12</p>
            </div>
          </div>

          {/* Ô tìm kiếm */}
          <div className="bg-white dark:bg-gray-900 p-2 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <label className="flex items-center w-full px-4 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg group">
              <FaSearch className="text-gray-400 mr-3" />
              <input 
                className="w-full bg-transparent border-none focus:ring-0 text-sm placeholder:text-gray-400 text-gray-800 dark:text-white font-body" 
                placeholder="Nhập tên khách hoặc SĐT để tra cứu..." 
              />
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 border border-gray-300 rounded text-[10px] text-gray-400 font-sans">CMD+K</kbd>
            </label>
          </div>

          {/* Bảng lịch hẹn */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-50 dark:border-gray-800 flex justify-between items-center">
              <h2 className="text-lg font-extrabold text-primary dark:text-white font-display">Lịch hẹn trong ngày</h2>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-xs font-bold text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors font-body">Tất cả</button>
                <button className="px-3 py-1.5 text-xs font-bold text-gray-500 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 transition-colors font-body">Lọc</button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] font-body">Khách hàng</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] font-body">Thời gian</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] font-body">Dịch vụ</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] font-body">Bác sĩ</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] font-body">Trạng thái</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em] text-right font-body">Thao tác</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                  {appointments.map((appointment) => (
                    <tr key={appointment.id} className="hover:bg-background-soft/50 dark:hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-800 dark:text-white font-body">{appointment.customer}</span>
                          <span className="text-xs text-gray-400 font-body">{appointment.phone}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 font-medium font-body">{appointment.time}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 font-body">{appointment.service}</td>
                      <td className="px-6 py-4 text-xs font-medium text-primary dark:text-gray-400 font-body">{appointment.doctor}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider font-body ${getStatusBadgeClass(appointment.status)}`}>
                          {appointment.statusLabel}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {appointment.status === 'pending' && (
                          <>
                            <button className="px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-all font-body mr-2">Xác nhận</button>
                            <button className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                              <FaTimes />
                            </button>
                          </>
                        )}
                        {appointment.status === 'confirmed' && (
                          <>
                            <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-500 text-xs font-bold rounded-lg cursor-not-allowed font-body mr-2">Đã xong</button>
                            <button className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                              <FaTimes />
                            </button>
                          </>
                        )}
                        {appointment.status === 'arrived' && (
                          <button className="px-3 py-1.5 bg-green-600 text-white text-xs font-bold rounded-lg hover:bg-green-700 transition-all font-body">Tại chỗ</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-800/30 flex justify-center border-t border-gray-50 dark:border-gray-800">
              <button className="text-xs font-bold text-primary hover:underline tracking-wide font-body">Xem toàn bộ lịch trình ngày hôm nay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
