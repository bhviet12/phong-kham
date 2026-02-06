const DoctorsFacilitiesSection = () => {
  // Dữ liệu 3 bác sĩ
  const doctors = [
    {
      id: 1,
      name: 'ThS. BS. Sarah Nguyễn',
      position: 'Giám đốc Chuyên môn',
      description: 'Hơn 15 năm kinh nghiệm trong điều trị da liễu lâm sàng và thẩm mỹ công nghệ cao. Chuyên gia về trẻ hóa da và điều trị sắc tố.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzs4brLDbvxWei3gxPkEXpIJhhNGelR9vh_6EYYc6-BrEcNfimDD_o45gHyoO5MqxDRxFHw_GBYNJ_ijV6ELFafR5vaP-bFg41Pe0vJFtwdt57iPc5yiFUbpHxasW8-KyjAQmWesIT51wCinwfXLjbHscADEEjQVOG_-7RVq07wuj3a6F8-7ae1vaXMrDo4HyAiPln_Hj-S99OvuQgWheDz7xhP3AtfGBIRYaAqGr18EvAeXCg4HpzwlrRrR0Hh0pkoV-FUCb1rGU',
      rotation: 'rotate-45'
    },
    {
      id: 2,
      name: 'BS. CKI. Trần Minh Tuấn',
      position: 'Trưởng Khoa Laser',
      description: 'Chuyên sâu về ứng dụng Laser trong điều trị sẹo rỗ và nám. Từng tu nghiệp tại Hàn Quốc và Hoa Kỳ.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcKpmHAlIEzLrhECwqSrcKSak_HLenkJkR7LOFp_dY-0QcbK8aX-kOoDhU6pP-kZQmBPbcgGsCMQzzkEZRUixQEIqprdFNG1oTXzX9HBrcjxvEn_AYKX6gqh3SDzXpLZG4FjZ6sthP-ws81B0hT1kAukPUVI87kY_oT8gaSHn7h0bpF7mzmRdVy3ePhWro3FZXk0Pzv0ld0tWowldRDmAglIJ2il3ZdptZDAbBhxg1usBMDx17Zd_1MO2jboSUUs5HJ0JE5rUvtxE',
      rotation: '-rotate-12'
    },
    {
      id: 3,
      name: 'BS. Emily Lê',
      position: 'Chuyên Khoa Thẩm Mỹ',
      description: 'Chuyên gia về tiêm Filler, Botox và các kỹ thuật làm đẹp không xâm lấn. Được đào tạo tại Singapore và Thái Lan.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC8GiSTGK0UV5W6KYOFW02Hjp20UrDXe4WujJwh6CMBVnwFQYRNhCA5Bnagen9osDSSfwtLNb9hYnkoTH67mRvshWViZa9D6YebcAwE9bhLVcsACIL8xXIeMe_7sV2Iasv-QBPQrE9SYV1mZhSVVxDzCaRpVXQ1bUlFLMkK_nTUl52KTJwdGVxZiGDCxbBLYgApoRMRvD7yTVZQXHIuk1NJeEiT9XhvsT-tfXEoex9SS4eacq9ZBL-zsFvWXkYr6BLxMoZnvR9P_8',
      rotation: 'rotate-12'
    }
  ]

  return (
    <>
      {/* Doctors Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tiêu đề */}
          <div className="text-center mb-16">
            <span className="text-accent font-bold text-[10px] tracking-[0.3em] uppercase mb-3 block font-body">
              Chuyên Gia Của Chúng Tôi
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-4 italic">
              Đội Ngũ Bác Sĩ Đầu Ngành
            </h2>
            <div className="w-20 h-[2px] bg-accent mx-auto"></div>
          </div>

          {/* Lưới 3 bác sĩ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            {doctors.map((doctor) => (
              <div 
                key={doctor.id}
                className="group relative bg-white dark:bg-surface-dark rounded-t-[5rem] rounded-b-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-primary/30"
              >
                <div className="absolute top-0 w-full h-32 bg-primary/5 dark:bg-black/20 z-0"></div>
                <div className="relative z-10 px-6 pt-12 pb-8 text-center">
                  <div className="relative mx-auto w-48 h-48 mb-6">
                    <div className={`absolute inset-0 rounded-full border-[3px] border-accent transform ${doctor.rotation} group-hover:rotate-0 transition-transform duration-700`}></div>
                    <div className="absolute inset-0 rounded-full border border-primary/20 dark:border-white/10 m-2"></div>
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-full object-cover rounded-full shadow-md border-4 border-white dark:border-surface-dark"
                    />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary dark:text-white mb-1">{doctor.name}</h3>
                  <p className="text-accent font-bold text-xs uppercase tracking-widest mb-4 font-body">{doctor.position}</p>
                  <div className="w-12 h-0.5 bg-accent/50 mx-auto mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-body">
                    {doctor.description}
                  </p>
                </div>
                <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-primary"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 -skew-y-3 transform origin-top-left z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

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
    </>
  )
}

export default DoctorsFacilitiesSection
