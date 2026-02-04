import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const QuickClickPanel = () => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4 quick-click-panel">
      {/* FB */}
      <a
        className="group w-14 h-14 rounded-full bg-white/90 border border-primary/15 shadow-lg backdrop-blur-sm flex items-center justify-center text-primary hover:bg-accent hover:border-accent/40 transition-all"
        href="#"
        aria-label="Facebook"
      >
        <FaFacebookF className="text-xl group-hover:scale-110 transition-transform" />
      </a>

      {/* IG */}
      <a
        className="group w-14 h-14 rounded-full bg-white/90 border border-primary/15 shadow-lg backdrop-blur-sm flex items-center justify-center text-primary hover:bg-accent hover:border-accent/40 transition-all"
        href="#"
        aria-label="Instagram"
      >
        <FaInstagram className="text-xl group-hover:scale-110 transition-transform" />
      </a>

      {/* Zalo (placeholder icon) */}
      <a
        className="group w-14 h-14 rounded-full bg-white/90 border border-primary/15 shadow-lg backdrop-blur-sm flex items-center justify-center text-primary hover:bg-accent hover:border-accent/40 transition-all"
        href="#"
        aria-label="Zalo"
      >
        <span className="font-body font-extrabold text-lg leading-none group-hover:scale-110 transition-transform">
          Z
        </span>
      </a>

      {/* Twitter */}
      <a
        className="group w-14 h-14 rounded-full bg-white/90 border border-primary/15 shadow-lg backdrop-blur-sm flex items-center justify-center text-primary hover:bg-accent hover:border-accent/40 transition-all"
        href="#"
        aria-label="Twitter"
      >
        <FaTwitter className="text-xl group-hover:scale-110 transition-transform" />
      </a>
    </div>
  )
}

export default QuickClickPanel
