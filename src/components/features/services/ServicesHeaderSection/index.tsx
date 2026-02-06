const ServicesHeaderSection = () => {
  return (
    <header className="relative bg-accent/30 dark:bg-surface-dark py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary/10 dark:bg-primary/30 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-white mb-6">
          Tinh Hoa Công Nghệ &<br className="hidden md:block"/> Nghệ Thuật Làm Đẹp
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed font-body">
          Khám phá các liệu trình chăm sóc da chuyên sâu và thẩm mỹ công nghệ cao được thiết kế riêng biệt cho vẻ đẹp độc bản của bạn.
        </p>
      </div>
    </header>
  )
}

export default ServicesHeaderSection
