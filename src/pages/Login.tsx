import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa'

type UserRole = 'admin' | 'receptionist' | 'doctor'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  // Auto-detect role from email
  const detectRoleFromEmail = (email: string): UserRole => {
    const emailLower = email.toLowerCase().trim()
    if (emailLower === 'admin@1' || emailLower.startsWith('admin@')) {
      return 'admin'
    } else if (emailLower === 'letan@1' || emailLower.startsWith('letan@')) {
      return 'receptionist'
    } else if (emailLower === 'bacsi@1' || emailLower.startsWith('bacsi@')) {
      return 'doctor'
    }
    // Default to admin if email doesn't match any pattern
    return 'admin'
  }

  // Load remembered email on mount
  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberEmail')
    if (rememberedEmail) {
      setEmail(rememberedEmail)
      setRememberMe(true)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Auto-detect role from email
    const detectedRole = detectRoleFromEmail(email)
    
    login(email, password, detectedRole)
    
    if (rememberMe) {
      localStorage.setItem('rememberEmail', email)
    } else {
      localStorage.removeItem('rememberEmail')
    }
    
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#1a2133] shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-gray-100 dark:border-gray-800 w-full max-w-5xl">
        {/* LEFT PANEL */}
        <div className="w-full md:w-5/12 bg-primary relative flex flex-col items-center justify-center p-12 text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#011542] to-black opacity-90"></div>
          <div className="relative z-20 flex flex-col items-center">
            <div className="size-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
              <svg className="text-white size-12" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-4 leading-tight">
              Phòng khám Da liễu<br/>Thẩm mỹ T&D
            </h2>
            <div className="h-1 w-12 bg-accent mb-6"></div>
            <p className="text-white/70 text-sm font-light leading-relaxed max-w-[280px] font-body">
              Nơi tôn vinh vẻ đẹp tự nhiên và chăm sóc làn da chuyên sâu với công nghệ hàng đầu.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-32 opacity-10">
            <svg className="w-full h-full" fill="none" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 50C50 20 150 80 200 50C250 20 350 80 400 50V100H0V50Z" fill="white"></path>
            </svg>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-7/12 p-8 md:p-14 bg-white dark:bg-[#1a2133] flex flex-col justify-center">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-primary dark:text-white font-display text-3xl font-bold mb-2">Hệ Thống Quản Trị</h1>
            <p className="text-gray-500 dark:text-gray-400 font-medium font-body">Chào mừng trở lại. Vui lòng đăng nhập để tiếp tục.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-2">
              <p className="text-primary dark:text-white text-sm font-semibold tracking-wide uppercase font-body">Tên đăng nhập hoặc Email</p>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <FaUser className="text-lg" />
                </div>
                <input
                  type="text"
                  placeholder="nhap@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-primary dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-primary dark:text-white text-sm font-semibold tracking-wide uppercase font-body">Mật khẩu</p>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <FaLock className="text-lg" />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg text-primary dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="size-5 rounded border-gray-300 dark:border-gray-700 text-primary focus:ring-primary/20 cursor-pointer"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium font-body">Ghi nhớ đăng nhập</span>
              </label>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  // TODO: Implement forgot password functionality
                  alert('Tính năng quên mật khẩu đang được phát triển')
                }}
                className="text-sm text-accent font-semibold hover:underline decoration-2 underline-offset-4 font-body"
              >
                Quên mật khẩu?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-4 px-6 rounded-lg font-bold text-lg shadow-lg hover:bg-[#032a8a] hover:shadow-accent/20 border border-transparent hover:border-accent transition-all duration-300 flex items-center justify-center gap-2 font-body"
            >
              <span>Đăng nhập</span>
              <FaSignInAlt />
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold font-body">
              Hệ Thống Nội Bộ T&D Clinic © 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
