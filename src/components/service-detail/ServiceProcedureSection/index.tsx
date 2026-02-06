interface ProcedureStep {
  number: string
  title: string
  description: string
}

const procedures: ProcedureStep[] = [
  {
    number: '1',
    title: 'Thăm khám & Soi da',
    description: 'Bác sĩ chuyên khoa kiểm tra tình trạng da và lên phác đồ điều trị riêng biệt.'
  },
  {
    number: '2',
    title: 'Làm sạch & Ủ tê',
    description: 'Vệ sinh da mặt chuyên sâu và ủ tê để đảm bảo sự thoải mái trong quá trình thực hiện.'
  },
  {
    number: '3',
    title: 'Tiến hành liệu trình',
    description: 'Sử dụng máy công nghệ cao tác động chính xác vào vùng da cần điều trị.'
  },
  {
    number: '4',
    title: 'Điện di & Dặn dò',
    description: 'Điện di tinh chất phục hồi và bác sĩ hướng dẫn chăm sóc tại nhà.'
  }
]

const ServiceProcedureSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <span className="text-accent font-bold uppercase text-xs tracking-widest mb-2 block font-body">Quy trình chuẩn y khoa</span>
          <h2 className="font-display text-3xl font-bold text-primary dark:text-white">Quy trình thực hiện</h2>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm md:w-1/3 text-right md:text-left font-body">
          Được thực hiện trực tiếp bởi đội ngũ bác sĩ da liễu giàu kinh nghiệm trong môi trường vô khuẩn.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>
        {procedures.map((procedure, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#1a1f36] p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm relative group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="size-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold font-display mb-4 border-4 border-white dark:border-[#1a1f36] shadow-md group-hover:bg-accent transition-colors">
              {procedure.number}
            </div>
            <h4 className="font-bold text-lg mb-2 text-primary dark:text-white font-display">{procedure.title}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-body">{procedure.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServiceProcedureSection
