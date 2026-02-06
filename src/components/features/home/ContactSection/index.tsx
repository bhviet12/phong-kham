import Button from "../../../shared/Button"

const ContactSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background-light" id="booking">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-surface-light -skew-y-3 z-0"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-accent">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-primary mb-4">Đặt lịch tư vấn miễn phí</h2>
            <p className="text-gray-600 font-body">Để lại thông tin, đội ngũ bác sĩ của chúng tôi sẽ liên hệ tư vấn lộ trình phù hợp nhất cho làn da của bạn.</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-body">Họ và tên</label>
                <input 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-accent focus:border-accent font-body" 
                  placeholder="Nguyễn Văn A" 
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-body">Số điện thoại</label>
                <input 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-accent focus:border-accent font-body" 
                  placeholder="0909 xxx xxx" 
                  type="tel"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 font-body">Dịch vụ quan tâm</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-accent focus:border-accent font-body">
                <option>Tư vấn da liễu chung</option>
                <option>Điều trị mụn</option>
                <option>Điều trị sẹo</option>
                <option>Trẻ hóa da</option>
                <option>Khác</option>
              </select>
            </div>
            <Button 
              color="form" 
              size="large" 
              className="w-full"
            >
              Gửi đăng ký ngay
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
