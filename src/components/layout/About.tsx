import React from 'react'
import { CheckCircle, Users, Award, Heart } from 'lucide-react'

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Health-First Approach',
      description: 'We prioritize your health and wellbeing above all else, providing evidence-based solutions.',
    },
    {
      icon: Users,
      title: 'Community-Driven',
      description: 'Our platform is built by and for the wellness community, ensuring relevant and effective features.',
    },
    {
      icon: Award,
      title: 'Expert-Backed',
      description: 'All our programs and recommendations are developed by certified health and wellness professionals.',
    },
  ]

  const stats = [
    { number: '50K+', label: 'Users Transformed' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'Expert Support' },
    { number: '100+', label: 'Wellness Programs' },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About VicaWellness
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              VicaWellness was founded with a simple mission: to make comprehensive 
              health and wellness accessible to everyone. We believe that everyone 
              deserves the tools and support they need to live their healthiest life.
            </p>
            
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-primary-100 rounded-full">
                      <value.icon className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-primary-600">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Trusted by thousands of users worldwide</span>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Impact
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
