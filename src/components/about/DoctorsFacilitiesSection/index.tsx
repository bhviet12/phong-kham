import { FaCheckCircle } from 'react-icons/fa'
import Button from '../../Button'

const DoctorsFacilitiesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 -skew-y-3 transform origin-top-left z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Doctors Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 border-2 border-primary transform translate-x-4 translate-y-4 rounded-2xl"></div>
            <img 
              className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC8GiSTGK0UV5W6KYOFW02Hjp20UrDXe4WujJwh6CMBVnwFQYRNhCA5Bnagen9osDSSfwtLNb9hYnkoTH67mRvshWViZa9D6YebcAwE9bhLVcsACIL8xXIeMe_7sV2Iasv-QBPQrE9SYV1mZhSVVxDzCaRpVXQ1bUlFLMkK_nTUl52KTJwdGVxZiGDCxbBLYgApoRMRvD7yTVZQXHIuk1NJeEiT9XhvsT-tfXEoex9SS4eacq9ZBL-zsFvWXkYr6BLxMoZnvR9P_8"
              alt="Doctors team"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="font-display text-4xl text-primary dark:text-white">Đội Ngũ Bác Sĩ Chuyên Môn Cao</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-body">
              Đội ngũ bác sĩ tại T&D Clinic đều tốt nghiệp từ các trường Đại học Y danh tiếng và có nhiều năm tu nghiệp tại nước ngoài.
            </p>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start">
                <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="font-body text-gray-700 dark:text-gray-300">100% Bác sĩ có chứng chỉ hành nghề da liễu.</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="font-body text-gray-700 dark:text-gray-300">Thường xuyên cập nhật công nghệ mới từ Hàn Quốc, Mỹ, Châu Âu.</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="font-body text-gray-700 dark:text-gray-300">Quy trình thăm khám 1:1 chuyên sâu và riêng tư.</span>
              </li>
            </ul>
            <Button 
              color="outline" 
              size="medium"
              shape="rounded"
              className="mt-6 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Xem Hồ Sơ Bác Sĩ
            </Button>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <img 
              className="rounded-xl shadow-lg w-full h-48 object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAigGQ2qKlYxXDqR5qIk2oaW9UGwj4oSjyWn3yDnMhdEbZ-YyJRqUxjqsY1KGA42vqtQVQLU3_gQVa5k3vnnGo9yTP-DARC3jS7FgYl3tKDQWZ8NzYyMJZOZYcUdJqoYGV_PFYlGuSsGCjaVA2GU55fEhF4-BpIns_B0Ygm_Ja-xvAvS23aH4iyq-jUXoBQZNXprA3tTWKFeLspI9IkQoycjkUrlM3rBb36mN7_1-AeN3T_t9l9S3pJJm2X7jsWLecE3QXiJ7g7K3c"
              alt="Facility 1"
            />
            <img 
              className="rounded-xl shadow-lg w-full h-48 object-cover translate-y-8" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDRIuiCeq83BRTrAKHgX9y9IBQt8LqU3Vky0gkCaAZNUi0YhJeT87RjUi4-nEORGrjbiVPGPEj4FNQA9tZcS_6QiNgWWtbwRqXxMP449Q_jhfgVe7U9EVI1nPc3DkOoGtL_Ex3Bnm9At10II_f-EnF58cRYYmnIexjESCqp6Uz4IrUwqzoMhU8tRwt_2UwIkaP1VoKZqGV2ADAl14yWf4qYyu35LlDBZBBdJ2tHUK79Rlz5jp5kMEEDiYBM0vI5OCg2QG13jPyj4g"
              alt="Facility 2"
            />
            <img 
              className="rounded-xl shadow-lg w-full h-48 object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDttbP7hEuhG8u42XquMT0Fr3h26kabcKJ8zjXSmmA7V1Qz2Zlc72YA2PMSVv81Nq4IPcGo_WX5A0bIThKIzX2VLMzkryCZ2SCEAuhf7i_AQ2P_8ZvSBgC6WoN318OkbFH_AbwoqUIZi4_fD-62jtwmo8eKgSWimoGYnYDtze3eBqKxbxFFTHLu_h_o8AroJASLPjRDwUrXsDjiF3hdAPL-OM_B9d37yyopE1fupr3ZbK7zEhfg7mp37ZBL6VdGfHPeoALMeZivsQs"
              alt="Facility 3"
            />
            <img 
              className="rounded-xl shadow-lg w-full h-48 object-cover translate-y-8" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxErljyrEGyV4sxbluHjOKRbvwtZ3EgTxIQy1CZrgkcewADW5f_jFcvZFfRFtKa8plLN87c15z1mkCftbhNXQXKIGQCC1itaTtZLSsi4OkLfsndI9Gd97N8cm_EOU5wElouRAvAfbuzFGH2FWMPkM61FyHT9ttpnGrjSgB57ra6eKBhNjLj5mcIQPfwpRLNvUcDimeKYULB1yvJvuFUb8SCZv1CF5ZypCecO9XvW8bwncnPneNu-PD5L2pFkn5Wr6s4LYBXROqXg"
              alt="Facility 4"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="font-display text-4xl text-primary dark:text-white">Cơ Sở Vật Chất Hiện Đại</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-body">
              Không gian tại T&D được thiết kế theo phong cách tối giản, sang trọng, mang lại cảm giác thư thái tuyệt đối cho khách hàng.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-white dark:bg-surface-dark p-4 rounded-lg shadow-sm border-l-4 border-accent">
                <h4 className="font-bold text-primary dark:text-white font-display">Công Nghệ Laser</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-body">PicoSure, CO2 Fractional thế hệ mới.</p>
              </div>
              <div className="bg-white dark:bg-surface-dark p-4 rounded-lg shadow-sm border-l-4 border-accent">
                <h4 className="font-bold text-primary dark:text-white font-display">Nâng Cơ Trẻ Hóa</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-body">Ultherapy, Thermage FLX chính hãng.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorsFacilitiesSection
