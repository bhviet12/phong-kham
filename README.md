******** LENH KHOI TAO DU AN ***********

# 1. Tạo dự án Vite + React + TypeScript
npm create vite@latest clinic-website -- --template react-ts

# 2. Vào thư mục dự án
cd clinic-website

# 3. Cài đặt dependencies
npm install

# 4. Cài đặt TailwindCSS + PostCSS
npm install -D tailwindcss postcss autoprefixer

# 5. Khởi tạo Tailwind config
npx tailwindcss init -p

# 6. Cài đặt Ant Design
npm install antd

# 7. Cài đặt React Router
npm install react-router-dom

# 8. Cài đặt Axios
npm install axios

# 9. Cài đặt Lucide React icons (optional)
npm install lucide-react

# 10. Chạy dev server
npm run dev

************ SO DO THU MUC **************

clinic-website/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
│       ├── logo.png
│       └── doctors/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── styles/
│   │       ├── globals.css
│   │       ├── variables.css
│   │       └── responsive.css
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── home/
│   │   │   ├── HeroBanner.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── CTA.tsx
│   │   ├── clinic/
│   │   │   ├── DoctorCard.tsx
│   │   │   ├── DoctorList.tsx
│   │   │   └── Departments.tsx
│   │   ├── appointment/
│   │   │   ├── AppointmentForm.tsx
│   │   │   ├── TimeSlot.tsx
│   │   │   └── AppointmentConfirm.tsx
│   │   └── blog/
│   │       ├── BlogCard.tsx
│   │       └── BlogList.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Clinic.tsx
│   │   ├── Doctors.tsx
│   │   ├── Services.tsx
│   │   ├── Appointment.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogDetail.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── layouts/
│   │   ├── MainLayout.tsx
│   │   ├── AuthLayout.tsx
│   │   └── AdminLayout.tsx
│   ├── hooks/
│   │   ├── useApi.ts
│   │   └── useWindowSize.ts
│   ├── services/
│   │   ├── api.ts
│   │   ├── doctorService.ts
│   │   ├── appointmentService.ts
│   │   └── clinicService.ts
│   ├── types/
│   │   ├── doctor.ts
│   │   ├── appointment.ts
│   │   ├── clinic.ts
│   │   └── common.ts
│   ├── constants/
│   │   ├── routes.ts
│   │   ├── api.ts
│   │   └── messages.ts
│   ├── utils/
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   ├── seo.ts
│   │   └── helpers.ts
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── .env.local
├── .gitignore
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md


## Tóm tắt cấu trúc

- **assets/** - Hình ảnh, icon, CSS toàn cục
- **components/** - Components tái sử dụng, chia theo tính năng
- **pages/** - Các trang chính của ứng dụng
- **layouts/** - Layout wrapper cho các trang
- **hooks/** - Custom React hooks
- **services/** - API calls, business logic
- **types/** - TypeScript types/interfaces
- **constants/** - Hằng số, routes, messages
- **utils/** - Utility functions, helpers, SEO tools



# phong-kham
