import Image from 'next/image'

const HERO_IMAGE =
  '/htcimage2.webp'

export default function Courses() {
  return (
    <main>
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image src={HERO_IMAGE} alt="Free Courses" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex items-end h-full pb-12 px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-12 bg-[#ff0080]" />
              <h1 className="text-white text-3xl md:text-5xl font-bold">Free Courses</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-2 bg-[#ff0080]" />

      <section className="w-full bg-[#f5f5f5] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-12" id="courses">
              <p className="text-[#4b5563]">No courses available (or error in the AWS service).</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
