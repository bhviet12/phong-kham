import { useState } from 'react'
import { useSEO, generateOrganizationSchema, generateBreadcrumbSchema } from '../utils/seo'
import MainLayout from '../Layouts/MainLayout'
import Container from '../components/shared/Container'
import { FaCalendarAlt, FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { FaClock, FaLocationDot } from 'react-icons/fa6'
import { contactPageData } from '../data/pages/contactPage'
import Button from '../components/shared/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  })

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  const contactUrl = `${baseUrl}/contact`

  const breadcrumbs = [
    { name: 'Trang chủ', url: baseUrl },
    { name: 'Liên hệ', url: contactUrl }
  ]

  const { regions, operatingHours, contactSchema: schemaData } = contactPageData

  // ContactPage structured data
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'MedicalBusiness',
      name: schemaData.businessName,
      address: {
        '@type': 'PostalAddress',
        addressCountry: schemaData.country,
        addressLocality: schemaData.locality
      },
      telephone: schemaData.telephone,
      email: schemaData.email
    }
  }

  useSEO({
    title: 'Liên Hệ - Medical | Phòng Khám Chất Lượng',
    description: 'Liên hệ với chúng tôi để được tư vấn và đặt lịch hẹn. Chúng tôi luôn sẵn sàng phục vụ bạn.',
    keywords: 'liên hệ, đặt lịch, tư vấn, phòng khám, bệnh viện',
    canonical: contactUrl,
    ogUrl: contactUrl,
    structuredData: [
      generateOrganizationSchema(baseUrl),
      generateBreadcrumbSchema(breadcrumbs),
      contactSchema
    ]
  })


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <MainLayout>
      {/* Luxury Contact / Booking */}
      <section className="py-14 lg:py-20 bg-background-soft">
        <Container>
          <div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden min-h-[700px] bg-white">
            {/* Left: Booking form */}
            <div className="w-full lg:w-5/12 bg-primary p-8 md:p-12 relative flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <FaCalendarAlt className="text-8xl text-white" />
              </div>

              <h2 className="font-display text-3xl text-accent mb-2">Book Appointment</h2>
              <p className="text-white/70 mb-8 font-light text-sm font-body">
                Please fill out the form below and we will get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 gap-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-accent uppercase tracking-wider mb-1 font-body">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Nguyen Van A"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="block w-full bg-white/0 border-0 border-b border-white/30 text-white placeholder-white/40 focus:ring-0 focus:border-accent transition-colors px-0 py-2 sm:text-sm font-body"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-accent uppercase tracking-wider mb-1 font-body">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. 090 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="block w-full bg-white/0 border-0 border-b border-white/30 text-white placeholder-white/40 focus:ring-0 focus:border-accent transition-colors px-0 py-2 sm:text-sm font-body"
                      required
                    />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-accent uppercase tracking-wider mb-1 font-body">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="block w-full bg-white/0 border-0 border-b border-white/30 text-white focus:ring-0 focus:border-accent transition-colors px-0 py-2 sm:text-sm font-body [&>option]:text-gray-900"
                      required
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      <option>Acne Treatment</option>
                      <option>Skin Rejuvenation</option>
                      <option>Pigmentation & Melasma</option>
                      <option>Botox & Fillers</option>
                      <option>Laser Therapy</option>
                    </select>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-xs font-bold text-accent uppercase tracking-wider mb-1 font-body">
                        Date
                      </label>
                      <input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="block w-full bg-white/0 border-0 border-b border-white/30 text-white placeholder-white/40 focus:ring-0 focus:border-accent transition-colors px-0 py-2 sm:text-sm font-body [color-scheme:dark]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-xs font-bold text-accent uppercase tracking-wider mb-1 font-body">
                        Time
                      </label>
                      <select
                        id="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="block w-full bg-white/0 border-0 border-b border-white/30 text-white focus:ring-0 focus:border-accent transition-colors px-0 py-2 sm:text-sm font-body [&>option]:text-gray-900"
                        required
                      >
                        <option value="" disabled>
                          Select...
                        </option>
                        <option>09:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>02:00 PM</option>
                        <option>03:00 PM</option>
                        <option>04:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-accent uppercase tracking-wider mb-1 font-body">
                      Additional Notes
                    </label>
                    <textarea
                      id="message"
                      rows={2}
                      placeholder="Any specific concerns?"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="block w-full bg-white/0 border-0 border-b border-white/30 text-white placeholder-white/40 focus:ring-0 focus:border-accent transition-colors px-0 py-2 sm:text-sm resize-none font-body"
                    ></textarea>
                  </div>

                  {/* Button */}
                  <Button
                    htmlType="submit"
                    color="accent"
                    size="large"
                    shape="square"
                    className="mt-6 w-full tracking-[0.15em] uppercase"
                    style={{ borderRadius: 2 }}
                  >
                    Confirm Booking
                  </Button>
                </div>
              </form>
            </div>

            {/* Right: Contact info + map */}
            <div className="w-full lg:w-7/12 bg-white dark:bg-surface-dark flex flex-col">
              <div className="p-8 md:p-12 border-b border-gray-100 dark:border-primary/20 bg-background-light">
                <h3 className="font-display text-2xl text-primary dark:text-white mb-8 font-bold">Get In Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent">
                        <FaLocationDot />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-bold text-primary dark:text-accent uppercase tracking-wide font-body">Address</p>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-body">
                        {regions?.[0]?.address || '88 Luxury Avenue, District 1,'}
                        <br />
                        Ho Chi Minh City, Vietnam
                      </p>
                    </div>
                  </div>

                  {/* Hotline */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent">
                        <FaPhoneAlt />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-bold text-primary dark:text-accent uppercase tracking-wide font-body">Hotline</p>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 font-body">
                        <a href={`tel:${schemaData.telephone}`} className="hover:underline">
                          {schemaData.telephone}
                        </a>
                        <br />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-body">
                          {operatingHours?.weekdays || 'Mon–Sun: 9am – 8pm'}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent">
                        <FaEnvelope />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-bold text-primary dark:text-accent uppercase tracking-wide font-body">Email</p>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 font-body">
                        <a href={`mailto:${schemaData.email}`} className="hover:underline">
                          {schemaData.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent">
                        <FaClock />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-bold text-primary dark:text-accent uppercase tracking-wide font-body">Social</p>
                      <div className="flex space-x-3 mt-2">
                        <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-accent transition" aria-label="Facebook">
                          <FaFacebookF className="text-sm" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-accent transition" aria-label="Instagram">
                          <FaInstagram className="text-sm" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-accent transition" aria-label="Twitter">
                          <FaTwitter className="text-sm" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="flex-grow h-64 lg:h-auto bg-gray-200 dark:bg-gray-800 relative w-full">
                <iframe
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4946681007846!2d106.69911331533413!3d10.77337426219665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f40a3b49e59%3A0x8674996956276f70!2sBitexco%20Financial%20Tower!5e0!3m2!1sen!2s!4v1620123456789!5m2!1sen!2s"
                  title="Clinic Location"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  )
}

export default Contact
