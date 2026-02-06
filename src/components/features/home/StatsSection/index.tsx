const StatsSection = () => {
  const stats = [
    { value: '10+', label: 'NĂM KINH NGHIỆM' },
    { value: '5k+', label: 'KHÁCH HÀNG HÀI LÒNG' },
    { value: '100%', label: 'BÁC SĨ CHUYÊN KHOA' },
    { value: 'TOP', label: 'CÔNG NGHỆ HIỆN ĐẠI' },
  ]

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <span className="block text-4xl md:text-5xl font-display font-bold text-accent mb-2">{stat.value}</span>
              <span className="text-white text-sm uppercase tracking-wider font-body">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
