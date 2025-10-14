import React from 'react'
import { 
  Heart, 
  Activity, 
  Brain, 
  Moon, 
  Users, 
  BarChart3,
  Shield,
  Smartphone
} from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Personalized Health Plans',
      description: 'Get customized wellness plans tailored to your specific health goals, lifestyle, and preferences.',
    },
    {
      icon: Activity,
      title: 'Fitness Tracking',
      description: 'Monitor your workouts, track progress, and stay motivated with our comprehensive fitness tools.',
    },
    {
      icon: Brain,
      title: 'Mental Wellness',
      description: 'Access meditation guides, stress management tools, and mental health resources.',
    },
    {
      icon: Moon,
      title: 'Sleep Optimization',
      description: 'Improve your sleep quality with personalized recommendations and sleep tracking.',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with like-minded individuals and get support from our wellness community.',
    },
    {
      icon: BarChart3,
      title: 'Progress Analytics',
      description: 'Visualize your progress with detailed analytics and insights into your wellness journey.',
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your health data is protected with enterprise-grade security and privacy measures.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Access your wellness tools anywhere with our intuitive mobile application.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Your Wellness Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and resources you need 
            to achieve your health and wellness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
