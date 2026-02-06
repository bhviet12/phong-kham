import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useSEO, generateOrganizationSchema, generateBreadcrumbSchema } from '../utils/seo'
import MainLayout from '../Layouts/MainLayout'
import Container from '../components/shared/Container'
import { FaCalendarAlt, FaChevronRight, FaComment, FaSearch, FaUser } from 'react-icons/fa'
import { newsPageData } from '../data/pages/newsPage'
import Button from '../components/shared/Button'

const News = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const [searchParams] = useSearchParams()
  const urlSearchQuery = searchParams.get('search') || ''
  const [searchQuery, setSearchQuery] = useState(urlSearchQuery)

  // Update search query when URL changes
  useEffect(() => {
    setSearchQuery(urlSearchQuery)
  }, [urlSearchQuery])

  const { articles, sidebar, buttonText, emptyStateText } = newsPageData

  const filteredArticles = searchQuery
    ? articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : articles

  useSEO({
    title: 'Tin Tức & Blog - Medical | Phòng Khám Chất Lượng',
    description: 'Cập nhật tin tức y tế mới nhất, các bài viết về sức khỏe, và thông tin hữu ích từ phòng khám của chúng tôi.',
    keywords: 'tin tức y tế, blog sức khỏe, thông tin y khoa, phòng khám, medical news',
    canonical: `${baseUrl}/news`,
    ogUrl: `${baseUrl}/news`,
    structuredData: [
      generateOrganizationSchema(baseUrl),
      generateBreadcrumbSchema([
        { name: 'Trang chủ', url: baseUrl },
        { name: 'Tin tức', url: `${baseUrl}/news` }
      ])
    ]
  })

  return (
    <MainLayout>
      <div className="bg-background-soft min-h-screen py-8 lg:py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {filteredArticles.map((article, index) => (
                <article
                  key={article.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 hover-lift"
                >
                  {/* Article Image */}
                  <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    {index === 0 && (
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                          <FaChevronRight className="text-gray-700 rotate-180" />
                        </button>
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                          <FaChevronRight className="text-gray-700" />
                        </button>
                      </div>
                    )}
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Article Image {article.id}</span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1.5">
                        <FaUser className="text-xs" />
                        <span>Bởi {article.author}</span>
                      </div>
                      <span>-</span>
                      <div className="flex items-center gap-1.5">
                        <FaCalendarAlt className="text-xs" />
                        <span>{article.date}</span>
                      </div>
                      <span>-</span>
                      <div className="flex items-center gap-1.5">
                        <FaComment className="text-xs" />
                        <span>Bình luận ({article.comments})</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary mb-4">
                      {article.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {article.description}
                    </p>

                    {/* Read More Button */}
                    <Link
                      to={`/news/${article.slug}`}
                      className="inline-block px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg font-body text-sm uppercase tracking-wider"
                    >
                      {buttonText}
                    </Link>
                  </div>
                </article>
              ))}

              {filteredArticles.length === 0 && (
                <div className="bg-white rounded-xl p-12 text-center">
                  <p className="text-gray-500 text-lg">{emptyStateText}</p>
                </div>
              )}
            </div>

            {/* Sidebar - Right Column */}
            <div className="lg:col-span-1 space-y-6">
              {/* Search Bar */}
              <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-gray-100 dark:border-primary/20">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder={sidebar.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none text-sm font-body dark:bg-background-dark dark:text-white dark:border-primary/30"
                  />
                  <button className="px-4 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors flex items-center justify-center">
                    <FaSearch />
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-primary/20">
                <h3 className="text-lg font-display font-bold text-primary dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-primary/20">
                  Danh mục
                </h3>
                <ul className="space-y-3 text-sm font-body">
                  <li>
                    <a href="#" className="flex justify-between text-gray-700 dark:text-gray-300 hover:text-accent transition-colors">
                      Kiến thức da liễu
                      <span className="text-xs bg-gray-100 dark:bg-primary/20 dark:text-white px-2 py-1 rounded-full">12</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex justify-between text-gray-700 dark:text-gray-300 hover:text-accent transition-colors">
                      Công nghệ điều trị
                      <span className="text-xs bg-gray-100 dark:bg-primary/20 dark:text-white px-2 py-1 rounded-full">8</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex justify-between text-gray-700 dark:text-gray-300 hover:text-accent transition-colors">
                      Review sản phẩm
                      <span className="text-xs bg-gray-100 dark:bg-primary/20 dark:text-white px-2 py-1 rounded-full">15</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Recent posts */}
              <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-primary/20">
                <h3 className="text-lg font-display font-bold text-primary dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-primary/20">
                  Bài viết gần đây
                </h3>
                <div className="space-y-4">
                  <a href="#" className="flex gap-3 group">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7BxocabPAjgUGca5klFKm2gr_4vD44_9y5tm7QPGuHDt0ZyHVV4fzWyzaaV4FH4nHifFUC3ZIl7BpeOEtHtBa_FGWsNKI1KDA79GZbf9AfVy2eiIWQRk8bMy9mSE_xteQ0afQT8Nc7k0RZm09HVsMlbW90nvVyv5H_p6AGQdY9258IsRXkLmtNtCphLnVBeCcGuWbnfxRAZl7Vc_IRqa4K1oX3shuaxA6BiwXAxMPuk8vCOEnVqDznl8WK6t9CbmUz71SluV8F-4"
                        alt="Recent post"
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary dark:text-white group-hover:text-accent transition-colors line-clamp-2">
                        Quy trình chăm sóc da mụn chuẩn y khoa tại nhà
                      </h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-body">22 Th9, 2023</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Free consultation */}
              <div className="relative rounded-xl overflow-hidden bg-primary text-white p-8 text-center">
                <div className="absolute inset-0 opacity-20">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH7eZvFRONr6c4IKEe26NNVuSMP6yec9dAxYUOVKAey0WZwNxSi4ZVF2OdEdsTyo54gZBFdX9RouyNNlxDgDEsQ8LCFOJeTk361KoUPZHPL80p4EXQNwMHrhBum-xpkDjlB_sjR9NTwSe1FUDnlAn_zLcqUFi0AsCcNuHUWNrQhZqq02lXJQA4V1-umNXdxTrC26WERrLzYfydeTkpiZXE5U8YMeOP4J6eOTP18EM69e-rqmH_RYJPb3MyaYbGWfpHxUOqbOO_sWc"
                    className="object-cover w-full h-full"
                    alt="Consultation background"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-bold mb-2">Tư vấn miễn phí</h3>
                  <p className="text-sm text-white/80 mb-6 font-body">
                    Bạn đang gặp vấn đề về da? Đặt lịch tư vấn ngay với bác sĩ chuyên khoa.
                  </p>
                  <Link to="/contact" className="block">
                    <Button color="accent" size="medium" shape="rounded" className="w-full font-body font-bold">
                      Đặt lịch ngay
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  )
}

export default News
