import { Link } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'

const AboutSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="about">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-pattern-floral"></div>
      <div className="px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1 group">
            <div className="absolute inset-0 border border-primary transform translate-x-4 translate-y-4 z-0 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img 
              alt="Doctor consulting patient" 
              className="relative z-10 w-full h-[450px] object-cover filter grayscale group-hover:grayscale-0 transition duration-1000 shadow-lg" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh8zCOSSrofklMOB0dXTFntuYczpAp9GK8SqiJC9Pf83wtDpxFb5n6PugelpGiN8GWxuJkygSwD1QVB3P1qozN5qEHOzxF9k3qnI33_joZR6jzYq-N0wWK5DfuWfg5afSISvd4wwblID45Mxb_2M56A9Yh660pfGu9FhcIt26ms7Rttq1WSO1l9RIfVy10zvjBKWlkUZBStSN_A895fR3OI5eKRo7RLRqhu-sA9o5XTOhxMYGckr7XrS_NAg_B4zemwgDUhKo-qGM"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 font-body">Về chúng tôi</h3>
            <h2 className="font-display text-4xl lg:text-5xl text-primary font-medium mb-8 leading-tight">
              Khoa học làn da <br/> <span className="italic font-normal">kết hợp</span> nghệ thuật
            </h2>
            <p className="text-gray-600 mb-8 leading-loose font-light text-justify font-body">
              Tại T&D, chúng tôi tin rằng vẻ đẹp thực sự bắt nguồn từ một làn da khỏe mạnh. Với đội ngũ bác sĩ chuyên khoa da liễu hàng đầu và công nghệ tiên tiến nhất từ Hàn Quốc, chúng tôi cam kết mang lại hiệu quả điều trị tối ưu.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center text-primary group cursor-default">
                <FaCheckCircle className="text-accent mr-4 text-xl group-hover:scale-110 transition" />
                <span className="font-medium text-sm font-body">Đội ngũ bác sĩ da liễu giàu kinh nghiệm</span>
              </div>
              <div className="flex items-center text-primary group cursor-default">
                <FaCheckCircle className="text-accent mr-4 text-xl group-hover:scale-110 transition" />
                <span className="font-medium text-sm font-body">Công nghệ FDA & KFDA chứng nhận</span>
              </div>
              <div className="flex items-center text-primary group cursor-default">
                <FaCheckCircle className="text-accent mr-4 text-xl group-hover:scale-110 transition" />
                <span className="font-medium text-sm font-body">Không gian thư giãn chuẩn 5 sao</span>
              </div>
            </div>
            <Link 
              to="/about" 
              className="inline-flex items-center text-primary border-b border-primary pb-1 font-bold text-sm uppercase tracking-widest hover:text-accent hover:border-accent transition group font-body"
            >
              Tìm hiểu thêm <span className="text-sm ml-2 group-hover:translate-x-1 transition">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
