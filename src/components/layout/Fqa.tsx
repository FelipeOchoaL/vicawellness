'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus } from 'lucide-react'

const Fqa: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const faqs = [
    {
      id: 1,
      question: 'What kind of approach does VicaWellness offer?',
      answer: 'VicaWellness blends holistic and creative tools to support emotional, spiritual, and expressive well-being. We combine mindfulness practices, creative expression, and personalized wellness plans to help you achieve inner balance and vitality.'
    },
    {
      id: 2,
      question: 'Do these services replace medical or psychological treatment?',
      answer: 'These are complementary services and do not replace professional medical, psychological, or psychiatric care. We work alongside traditional healthcare to support your overall wellness journey. Always consult with licensed healthcare providers for medical concerns.'
    },
    {
      id: 3,
      question: 'Who are these services for?',
      answer: 'For teenagers, adults, and older adults seeking emotional support, creative expression, or tools for inner connection. Our programs are designed to meet you wherever you are in your wellness journey, with specialized options for different life stages.'
    },
    {
      id: 4,
      question: 'How long is each session?',
      answer: 'Session lengths vary by service type. Vica Express sessions are designed for busy schedules (30-45 minutes), while comprehensive programs like Vica Harmony and Vica Support typically run 60-90 minutes. We can customize session lengths to fit your needs.'
    },
    {
      id: 5,
      question: 'Can I book sessions online?',
      answer: 'Yes! You can easily book all our services through our online platform. Simply choose your preferred service, select a time that works for you, and complete your booking. We also offer flexible rescheduling options.'
    }
  ]

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-20 lg:py-28 bg-vica-mint">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-vica-brown mb-4 font-rufina">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-vica-brown/80">
            Everything you need to know about our wellness services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className={`bg-white rounded-[20px] overflow-hidden transition-shadow duration-300 ${
                  expandedIndex === index ? 'shadow-lg' : 'shadow-md'
                }`}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 text-left group"
                >
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-vica-beige flex items-center justify-center">
                    <span className="text-vica-brown font-semibold text-sm">
                      {faq.id}
                    </span>
                  </div>

                  {/* Question Text */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-vica-brown group-hover:text-vica-greenletter transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <motion.div
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-vica-greenletter flex items-center justify-center"
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedIndex === index ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </motion.div>
                </button>

                {/* Answer Panel */}
                <AnimatePresence initial={false}>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 md:px-8 pb-6 pl-16 md:pl-20">
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-vica-brown/80 leading-relaxed"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-vica-brown mb-4">Still have questions?</p>
          <motion.button
            className="bg-vica-greenletter text-white px-8 py-3 rounded-full font-medium hover:bg-vica-greenletter/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Fqa
