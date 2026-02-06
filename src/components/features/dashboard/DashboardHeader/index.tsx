interface DashboardHeaderProps {
  title: string
  subtitle?: string
}

const DashboardHeader = ({ title, subtitle }: DashboardHeaderProps) => {

  const getCurrentDate = () => {
    const today = new Date()
    const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
    const months = ['tháng 1', 'tháng 2', 'tháng 3', 'tháng 4', 'tháng 5', 'tháng 6', 'tháng 7', 'tháng 8', 'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12']
    
    const dayName = days[today.getDay()]
    const day = today.getDate()
    const month = months[today.getMonth()]
    const year = today.getFullYear()
    
    return `${dayName} ngày ${day} ${month}, ${year}`
  }

  return (
    <div className="flex flex-col gap-1 mb-6">
      <h1 className="text-2xl font-extrabold text-primary dark:text-white font-display">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm text-gray-500 dark:text-gray-400 font-body">
          {subtitle}
        </p>
      )}
      {!subtitle && (
        <p className="text-sm text-gray-500 dark:text-gray-400 font-body">
          {getCurrentDate()}
        </p>
      )}
    </div>
  )
}

export default DashboardHeader
