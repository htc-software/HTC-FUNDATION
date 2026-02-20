import Image from "next/image"
import Link from "next/link"

const courses = [
  {
    image: "/images/course-electrical.jpg",
    title: "CONSTRUCTION: ELECTRICAL",
    campus: "Campus: North-Bergen",
    schedule: "Sunday, 9:00 AM - 2:00 PM, 24 week/s",
    price: "$0",
  },
]

export function CoursesSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-16 px-4">
      <h2 className="text-[#0a0a6e] text-2xl md:text-3xl font-bold text-center mb-12">
        Available Courses, apply too see if you qualify!
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Link
            key={course.title}
            href="/contact-us"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="text-[#0a0a2e] font-bold text-lg mb-2">{course.title}</h3>
              <p className="text-[#6b7280] text-sm">{course.campus}</p>
              <p className="text-[#9ca3af] text-sm mt-1">{course.schedule}</p>
              <p className="text-[#0a0a6e] font-bold text-lg mt-3">{course.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
