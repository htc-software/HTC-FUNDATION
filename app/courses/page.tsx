import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'

const courses = [
  {
    title: 'CONSTRUCTION: ELECTRICAL',
    campus: 'Campus: North-Bergen',
    schedule: 'Sunday, 9:00 AM - 2:00 PM, 24 week/s',
    price: '$0',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80'
  }
]

export default function Courses() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">
              Available Courses, apply too see if you qualify!
            </h1>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-64">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{course.campus}</p>
                    <p className="text-gray-600 mb-4">{course.schedule}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-blue-900">{course.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-800 to-purple-900 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white mb-8">
              Join our technical training programs and empower yourself with in-demand skills.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
