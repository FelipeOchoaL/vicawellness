'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'motion/react'

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-vica-beige relative overflow-hidden">
      {/* Watermark - Logo placeholder in background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-[600px] h-[600px] flex items-center justify-center">
          {/* Placeholder for Vica Logo - Add your logo image here */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-vica-brown"
          >
            <path
              d="M20 5L15 15H25L20 5Z"
              fill="currentColor"
            />
            <path
              d="M10 20C10 25.5228 14.4772 30 20 30C25.5228 30 30 25.5228 30 20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M8 35H32"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          {/* To use your own logo image, replace the SVG above with:
          <Image 
            src="/vica-logo-watermark.png" 
            alt="Vica Wellness" 
            fill
            className="object-contain"
          />
          */}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-vica-greenletter hover:text-vica-brown transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-vica-greenletter mb-4 font-rufina tracking-wide">
            TERMS AND CONDITIONS
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-lg max-w-none"
        >
          {/* Introduction */}
          <div className="mb-8 text-vica-brown/80 leading-relaxed">
            <p className="text-base">
              Welcome to VicaWellness. Thank you for choosing our space for wellness, art, and connection. By booking or 
              participating in our services, you agree to comply with the following terms and conditions.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8 text-vica-brown">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-semibold text-vica-greenletter mb-3">1. Who are our services for?</h2>
              <p className="text-base leading-relaxed text-vica-brown/80">
                Services at Vica Wellness are open to adults (18 years of age). If you are a minor, you must participate with a responsible adult. 
                Certain activities, therapies and digital products may contain themes or language not suitable for all ages.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-semibold text-vica-greenletter mb-3">2. Health and Safety</h2>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed text-vica-brown/80">
                <li>
                  <strong>Wellness Services:</strong> It goes well-being, calm and creative expression. However, they are not a substitute for medical, psychological, 
                  legal or professional treatment. If you have concerns or physical or psychological symptoms, we recommend consulting a qualified 
                  healthcare provider before participating in any of our services.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-semibold text-vica-greenletter mb-3">3. Bookings and Payments</h2>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed text-vica-brown/80">
                <li>All bookings must be made through our website, social media, or direct contacts.</li>
                <li>Full payment is required at the time of booking, unless otherwise stated.</li>
                <li>We accept payments by PayPal, Zelle and other payment platforms.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-semibold text-vica-greenletter mb-3">4. Cancellations and Refunds</h2>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed text-vica-brown/80">
                <li>If you need to cancel, please notify us at least 24 hours in advance to receive a refund or reschedule your session.</li>
                <li>Cancellations made within 24 hours of your booking time may not be eligible for a refund.</li>
              </ul>
              <p className="text-sm mt-2 text-vica-brown/70 italic">
                Note: Digital services, recorded workshops, and personalized services are non-refundable except in exceptional cases.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-semibold text-vica-greenletter mb-3">5. Code of Conduct</h2>
              <p className="text-base leading-relaxed text-vica-brown/80 mb-2">
                All participants are expected to uphold a positive environment in every session. Therefore, we ask that you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed text-vica-brown/80">
                <li>Treat others with respect and kindness.</li>
                <li>Avoid being rude or disruptive.</li>
                <li>Be respectful of facilitators and fellow participants.</li>
                <li>Follow the guidelines of each specific activity, whether it's in-person or in the case of inappropriate behavior.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-semibold text-vica-greenletter mb-3">6. Copyright and Use of Materials</h2>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed text-vica-brown/80">
                <li>All recorded content, graphics, resources and materials shared with events and institution of VicaWellness.</li>
                <li>You are welcome to use our recordings, worksheets for personal use only. They should NOT be shared, reproduced, 
                or sold without our explicit written consent.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-semibold text-vica-greenletter mb-3">7. Photos and Recordings</h2>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed text-vica-brown/80">
                <li>We may take photos or recordings during events or sessions for promotional use.</li>
                <li>If you prefer not to be featured in media or photos, please contact us beforehand or appear off-screen at virtual online events.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-semibold text-vica-greenletter mb-3">8. Privacy and Data Protection</h2>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed text-vica-brown/80">
                <li>We value your privacy and use your name and email to provide better experience.</li>
                <li>Your personal information will only be shared with third parties as required by law or technical regulations.</li>
                <li>We will never sell or share your information without your consent.</li>
                <li>You may request access, correction, or deletion of your data at any time through{' '}
                  <a href="mailto:vicawellness@gmail.com" className="text-vica-greenletter underline hover:text-vica-brown transition-colors">
                    vicawellness@gmail.com
                  </a>.
                </li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-semibold text-vica-greenletter mb-3">9. Use of Cookies</h2>
              <p className="text-base leading-relaxed text-vica-brown/80">
                We use cookies to enhance your experience on our website. Some track ensure the site works smoothly, others help us 
                understand how you visit our pages. By continuing to use our website, you agree to our use of cookies.
              </p>
              <p className="text-sm mt-2 text-vica-brown/70 italic">
                Please see our Cookie Policy for more information.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl font-semibold text-vica-greenletter mb-3">10. Limitation of Liability</h2>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed text-vica-brown/80">
                <li>We do not assume to provide results from our activities.</li>
                <li>We are not responsible for any personal, emotional, or financial losses or damages directly or indirectly related to the use of our services.</li>
              </ul>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl font-semibold text-vica-greenletter mb-3">11. Jurisdiction</h2>
              <p className="text-base leading-relaxed text-vica-brown/80">
                All activities and these terms are governed by the laws of the State of Florida, USA.
              </p>
              <p className="text-base leading-relaxed text-vica-brown/80 mt-2">
                Any legal disputes must be resolved in the courts of Miami-Dade County.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-xl font-semibold text-vica-greenletter mb-3">12. Changes to These Terms</h2>
              <p className="text-base leading-relaxed text-vica-brown/80">
                We reserve the right to revise these terms at any time. If we do, we will update the date at the top of this document and 
                notify you by email, website announcement, or these changes.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-xl font-semibold text-vica-greenletter mb-3">13. Questions?</h2>
              <p className="text-base leading-relaxed text-vica-brown/80">
                If you have any questions or need assistance, please contact us:{' '}
                <a href="mailto:info@vicawellness.com" className="text-vica-greenletter underline hover:text-vica-brown transition-colors">
                  info@vicawellness.com
                </a>
              </p>
              <p className="text-base leading-relaxed text-vica-brown/80 mt-2">
                <a href="https://www.vicawellness.com" className="text-vica-greenletter underline hover:text-vica-brown transition-colors">
                  www.vicawellness.com
                </a>
              </p>
            </section>
          </div>

          {/* Bottom Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-vica-brown/20 text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-vica-greenletter text-white px-8 py-3 rounded-full font-medium hover:bg-vica-brown transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsAndConditions

