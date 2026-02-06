/**
 * 📄 FILE SEO UTILITIES (seo.tsx)
 * 
 * Mục đích: Quản lý SEO (Search Engine Optimization) cho website
 * 
 * Tác dụng chính:
 * 1. Tự động cập nhật thẻ meta (title, description, keywords) cho mỗi trang
 * 2. Thêm Open Graph tags để hiển thị đẹp khi share lên Facebook, Twitter, LinkedIn
 * 3. Tạo structured data (JSON-LD) giúp Google hiểu nội dung trang tốt hơn
 * 4. Thiết lập canonical URL để tránh duplicate content
 * 
 * Cách sử dụng:
 * - Import và gọi useSEO() trong mỗi page component
 * - Truyền vào các thông tin SEO cần thiết (title, description, etc.)
 * - Hook sẽ tự động cập nhật <head> của HTML
 */

import { useEffect } from 'react'

/**
 * Interface định nghĩa các props cho useSEO hook
 */
interface SEOProps {
  title?: string              // Tiêu đề trang (hiển thị trên tab browser)
  description?: string        // Mô tả ngắn về trang (hiển thị trong kết quả tìm kiếm)
  keywords?: string           // Từ khóa liên quan (giúp search engine index)
  ogImage?: string            // Hình ảnh khi share lên mạng xã hội
  ogUrl?: string              // URL khi share (Open Graph)
  canonical?: string          // URL chính thức của trang (tránh duplicate)
  type?: 'website' | 'article' | 'product' | 'localBusiness'  // Loại nội dung
  structuredData?: object | object[]  // Dữ liệu có cấu trúc (JSON-LD) cho Google
}

/**
 * Hook chính để quản lý SEO
 * 
 * Tự động cập nhật:
 * - Document title (tab browser)
 * - Meta tags (description, keywords)
 * - Open Graph tags (Facebook, LinkedIn)
 * - Twitter Card tags
 * - Canonical URL
 * - Structured Data (JSON-LD)
 */
export const useSEO = ({
  title = 'Medical - Phòng Khám Chất Lượng',
  description = 'Khám phá sức khỏe và trải nghiệm dịch vụ chất lượng cao tại Bệnh viện/Phòng khám của chúng tôi - nơi mang đến sự chăm sóc tận tâm và sự an tâm cho bạn và gia đình.',
  keywords = 'phòng khám, bệnh viện, y tế, chăm sóc sức khỏe, khám bệnh, điều trị',
  ogImage = '/og-image.jpg',
  ogUrl = '',
  canonical = '',
  type = 'website',
  structuredData
}: SEOProps) => {
  useEffect(() => {
    // ========== 1. CẬP NHẬT TITLE ==========
    // Title hiển thị trên tab browser và trong kết quả tìm kiếm Google
    document.title = title

    // ========== 2. HÀM HỖ TRỢ: CẬP NHẬT/CẬP NHẬT META TAGS ==========
    /**
     * Tìm hoặc tạo mới meta tag và cập nhật nội dung
     * @param name - Tên của meta tag (vd: 'description', 'og:title')
     * @param content - Nội dung của meta tag
     * @param attribute - Loại attribute ('name' hoặc 'property' cho Open Graph)
     */
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // ========== 3. META TAGS CƠ BẢN ==========
    // Description: Hiển thị dưới title trong kết quả Google
    updateMetaTag('description', description)
    // Keywords: Giúp search engine hiểu nội dung trang (ít quan trọng hơn trước)
    updateMetaTag('keywords', keywords)

    // ========== 4. OPEN GRAPH TAGS (Facebook, LinkedIn) ==========
    // Khi share link lên Facebook/LinkedIn, các tag này quyết định cách hiển thị
    updateMetaTag('og:title', title, 'property')           // Tiêu đề khi share
    updateMetaTag('og:description', description, 'property') // Mô tả khi share
    updateMetaTag('og:image', ogImage, 'property')          // Hình ảnh preview
    updateMetaTag('og:type', type, 'property')             // Loại nội dung
    if (ogUrl) {
      updateMetaTag('og:url', ogUrl, 'property')           // URL chính thức
    } else if (typeof window !== 'undefined') {
      updateMetaTag('og:url', window.location.href, 'property') // Dùng URL hiện tại nếu không có
    }

    // ========== 5. TWITTER CARD TAGS ==========
    // Tương tự Open Graph nhưng dành riêng cho Twitter
    updateMetaTag('twitter:card', 'summary_large_image')   // Kiểu card: large image
    updateMetaTag('twitter:title', title)                   // Tiêu đề trên Twitter
    updateMetaTag('twitter:description', description)        // Mô tả trên Twitter
    updateMetaTag('twitter:image', ogImage)                 // Hình ảnh trên Twitter

    // ========== 6. CANONICAL URL ==========
    // URL chính thức của trang, giúp Google biết đâu là bản gốc
    // Tránh vấn đề duplicate content (nhiều URL trỏ đến cùng nội dung)
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = canonical
    } else if (typeof window !== 'undefined') {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = window.location.href
    }

    // ========== 7. STRUCTURED DATA (JSON-LD) ==========
    // Dữ liệu có cấu trúc giúp Google hiểu rõ hơn về nội dung trang
    // Ví dụ: Organization, BreadcrumbList, FAQPage, Product, etc.
    // Google có thể hiển thị rich snippets (kết quả tìm kiếm đẹp hơn)
    if (structuredData) {
      // Xóa các structured data cũ (tránh duplicate)
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
      existingScripts.forEach(script => script.remove())

      // Hỗ trợ cả object đơn hoặc array of objects
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData]
      
      // Thêm structured data vào <head> dưới dạng JSON-LD
      dataArray.forEach((data, index) => {
        const script = document.createElement('script')
        script.type = 'application/ld+json'  // Định dạng JSON-LD
        script.id = `structured-data-${index}`
        script.text = JSON.stringify(data)    // Chuyển object thành JSON string
        document.head.appendChild(script)
      })
    }

    // ========== 8. CLEANUP FUNCTION ==========
    // Dọn dẹp khi component unmount (chuyển trang)
    return () => {
      // Xóa structured data khi component unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]')
      scripts.forEach(script => script.remove())
    }
  }, [title, description, keywords, ogImage, ogUrl, canonical, type, structuredData])
}

// ========== HELPER FUNCTIONS ==========

/**
 * Tạo Organization Schema (Schema.org)
 * 
 * Mục đích: Giúp Google hiểu thông tin về doanh nghiệp/phòng khám
 * 
 * Lợi ích:
 * - Hiển thị rich snippet trong kết quả tìm kiếm (có logo, đánh giá, giờ mở cửa)
 * - Google Knowledge Graph có thể hiển thị thông tin doanh nghiệp
 * - Tăng độ tin cậy và CTR (click-through rate)
 * 
 * @param url - URL của website
 * @returns Object chứa structured data theo chuẩn Schema.org
 */
export const generateOrganizationSchema = (url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Medical - Phòng Khám Chất Lượng',
  description: 'Phòng khám chất lượng cao với đội ngũ bác sĩ chuyên nghiệp',
  url: url,
  logo: `${url}/logo.png`,
  image: `${url}/og-image.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'VN',
    addressLocality: 'Việt Nam'
  },
  telephone: '+84-xxx-xxx-xxx',
  priceRange: '$$',
  medicalSpecialty: [  // Các chuyên khoa y tế
    'General Practice',
    'Dentistry',
    'Cardiology',
    'Dermatology'
  ]
})

/**
 * Tạo BreadcrumbList Schema (Schema.org)
 * 
 * Mục đích: Hiển thị breadcrumb (đường dẫn) trong kết quả Google
 * 
 * Ví dụ: Trang chủ > Dịch vụ > Trị mụn
 * 
 * Lợi ích:
 * - Người dùng dễ hiểu cấu trúc website
 * - Tăng CTR vì breadcrumb hiển thị trong kết quả tìm kiếm
 * - Giúp Google hiểu cấu trúc site tốt hơn
 * 
 * @param items - Mảng các item breadcrumb [{ name: 'Trang chủ', url: '/' }, ...]
 * @returns Object chứa BreadcrumbList structured data
 */
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
})

/**
 * Tạo FAQPage Schema (Schema.org)
 * 
 * Mục đích: Hiển thị FAQ dạng rich snippet trong Google
 * 
 * Lợi ích:
 * - FAQ hiển thị trực tiếp trong kết quả tìm kiếm (không cần click vào)
 * - Tăng khả năng hiển thị ở vị trí #0 (featured snippet)
 * - Tăng CTR và giảm bounce rate
 * 
 * Ví dụ sử dụng:
 * ```tsx
 * const faqs = [
 *   { question: 'Giờ mở cửa?', answer: '9:00 - 20:00 hàng ngày' },
 *   { question: 'Có đặt lịch online không?', answer: 'Có, bạn có thể đặt lịch trên website' }
 * ]
 * useSEO({ structuredData: generateFAQSchema(faqs) })
 * ```
 * 
 * @param faqs - Mảng các câu hỏi và câu trả lời
 * @returns Object chứa FAQPage structured data
 */
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
})
