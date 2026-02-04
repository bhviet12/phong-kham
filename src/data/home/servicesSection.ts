import { IconType } from 'react-icons'
import { FaMagic, FaSun, FaSyringe } from 'react-icons/fa'
import { FaDroplet, FaFaceSmile, FaSpa } from 'react-icons/fa6'

export interface Service {
  icon: IconType
  title: string
  subtitle: string
  description: string
}

export const servicesSectionData = {
  badge: "Dịch vụ chuyên sâu",
  title: "Giải pháp toàn diện cho làn da",
  description: "Chúng tôi cung cấp đa dạng các dịch vụ y tế chất lượng cao để đáp ứng mọi nhu cầu chăm sóc sức khỏe của bạn",
  services: [
    {
      icon: FaDroplet,
      title: 'Trị mụn & Thâm',
      subtitle: '',
      description: 'Phác đồ điều trị mụn y khoa kết hợp công nghệ ánh sáng sinh học, xóa tan nỗi lo mụn thâm.',
    },
    {
      icon: FaMagic,
      title: 'Trẻ hóa da',
      subtitle: '',
      description: 'Công nghệ nâng cơ Hifu, Thermage giúp xóa nhăn, căng bóng và trẻ hóa làn da tức thì.',
    },
    {
      icon: FaFaceSmile,
      title: 'Điều trị Sẹo',
      subtitle: '',
      description: 'Giải pháp cắt đáy sẹo, laser CO2 Fractional lấp đầy sẹo rỗ, trả lại làn da mịn màng.',
    },
    {
      icon: FaSpa,
      title: 'Chăm sóc da',
      subtitle: '',
      description: 'Liệu trình chăm sóc da chuyên sâu, thư giãn, cấp ẩm và phục hồi làn da hư tổn.',
    },
    {
      icon: FaSun,
      title: 'Trị nám & Tàn nhang',
      subtitle: '',
      description: 'Công nghệ laser Q-Switch, IPL xóa bỏ nám, tàn nhang hiệu quả, an toàn, không để lại thâm.',
    },
    {
      icon: FaSyringe,
      title: 'Tiêm Filler & Botox',
      subtitle: '',
      description: 'Làm đầy nếp nhăn, tạo đường nét thanh tú với Filler và Botox chuẩn y khoa Hàn Quốc.',
    },
  ] as Service[],
  footerText: "Hơn 20 dịch vụ ưu đãi khác...",
  viewAllText: "XEM TẤT CẢ DỊCH VỤ",
  buttonText: "XEM THÊM"
}
