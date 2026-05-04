import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Work with us - HTC Foundation",
  description: "Job application - Work with HTC Foundation.",
}

export default function JobsPage() {
  return (
    <main className="w-full">
      {/* Banner */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="https://foundationhtc.ong/do/wp-content/uploads/2025/01/customer-service-agent-financial-advisor-call-center-employee-sits-desk-company-scaled-1.jpg"
          alt="Jobs Banner"
          fill
          className="object-cover object-[67%_21%]"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-8">
          <div className="border-l-[10px] border-[#ff008f] pl-6 mt-20 md:mt-0">
            <h2 className="text-white text-4xl md:text-5xl font-bold">Empleos</h2>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-[#f5f5f5] py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#3f3f3f] mb-2">Job Application</h1>
              <h3 className="text-xl md:text-2xl text-[#3f3f3f] font-medium mb-6">Interested in joining the Hudson Training Center Foundation team?</h3>
              <hr className="my-6 border-gray-300" />
              <p className="text-[#3f3f3f] text-base leading-relaxed mb-6">
                If you want to be part of our team, explore our job openings by filling out this simple form. You can apply for the position that best suits your profile, send us your Curriculum, Resume, or CV, and we will get in touch with you.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#3f3f3f] mb-8">Requirements to Apply:</h2>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="bg-white rounded-[25px] p-6 md:p-8 shadow-sm">
                  <p className="text-[#3f3f3f] text-lg font-bold">1era Etapa: (Online)</p>
                  <hr className="my-4 border-gray-100" />
                  <p className="text-[#3f3f3f] italic mb-4">
                    Fill out the form and attach your <strong>curriculum</strong> vitae in the application.
                  </p>
                  <ul className="list-disc list-inside text-[#3f3f3f]">
                    <li>Curriculum Vitae</li>
                  </ul>
                </div>

                {/* Step 2 */}
                <div className="bg-white rounded-[25px] p-6 md:p-8 shadow-sm">
                  <p className="text-[#555555] text-lg font-bold">Step 2: (In-Person)</p>
                  <hr className="my-4 border-gray-100" />
                  <p className="text-[#3f3f3f] italic mb-4">
                    If you are contacted via <strong>phone or email</strong>, you must have the following documents ready.
                  </p>
                  <ul className="list-disc list-inside text-[#3f3f3f]">
                    <li>Copy of degree certificate</li>
                    <li>Birth certificate</li>
                    <li>Certificate of No Criminal Record</li>
                    <li>Copy of National ID</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="bg-white rounded-[44px] p-6 md:p-10 shadow-sm">
              <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-6 relative">
                <div className="absolute bottom-0 left-0 h-1 bg-[#0073aa] w-[33%]" />
                
                <div className="flex flex-col items-center flex-1">
                  <div className="w-8 h-8 rounded-full bg-[#0073aa] text-white flex items-center justify-center font-bold mb-2 z-10">1</div>
                  <span className="text-xs font-semibold text-[#0073aa]">Tipo de perfil</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold mb-2 z-10">2</div>
                  <span className="text-xs font-semibold text-gray-400 text-center">Datos personales</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold mb-2 z-10">3</div>
                  <span className="text-xs font-semibold text-gray-400">Documentos</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#00139b] mb-6">Tipo de solicitud</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-3">¿Cómo te gustaría ser parte de nosotros?</label>
                  <div className="flex flex-col sm:flex-row border border-gray-200 rounded-xl overflow-hidden bg-white">
                    <label className="flex-1 p-4 border-b sm:border-b-0 sm:border-r border-gray-200 hover:bg-gray-50 cursor-pointer flex items-center">
                      <input type="radio" name="tipo" value="Instructor" className="mr-3" />
                      <span>Instructor</span>
                    </label>
                    <label className="flex-1 p-4 border-b sm:border-b-0 sm:border-r border-gray-200 hover:bg-gray-50 cursor-pointer flex items-center">
                      <input type="radio" name="tipo" value="Staff" className="mr-3" />
                      <span>Staff</span>
                    </label>
                    <label className="flex-1 p-4 hover:bg-gray-50 cursor-pointer flex items-center">
                      <input type="radio" name="tipo" value="Oficina" className="mr-3" />
                      <span>Oficina</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Seleccione una opción</label>
                  <select className="w-full border border-gray-300 rounded-xl px-4 h-12 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#0073aa]">
                    <option value="">—Please choose an option—</option>
                    <optgroup label="Idiomas">
                      <option value="Frances">Frances</option>
                      <option value="Ingles Para Niños">Ingles Para Niños</option>
                      <option value="Inglés">Inglés</option>
                    </optgroup>
                    <optgroup label="Belleza y Estética">
                      <option value="Uñas Acrílicas">Uñas Acrílicas</option>
                      <option value="Velones Aromáticos">Velones Aromáticos</option>
                      <option value="Facial">Facial</option>
                    </optgroup>
                    <optgroup label="Salud">
                      <option value="Enfermería">Enfermería</option>
                      <option value="Auxiliar de Farmacia">Auxiliar de Farmacia</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">¿Cuantos años de experiencia tiene?</label>
                  <select className="w-full border border-gray-300 rounded-xl px-4 h-12 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#0073aa]">
                    <option value="">—Please choose an option—</option>
                    <option value="1 año">1 año</option>
                    <option value="2 años">2 años</option>
                    <option value="3 años">3 años</option>
                    <option value="4 años">4 años</option>
                    <option value="5 o más">5 o más</option>
                  </select>
                </div>

                <div className="pt-4 flex justify-end">
                  <button type="button" className="bg-transparent text-gray-500 px-6 py-3 mr-2 hover:bg-gray-100 rounded-full transition-colors font-medium">
                    Volver
                  </button>
                  <button type="button" className="bg-[#ff008f] text-white px-8 py-3 rounded-full hover:bg-[#d60078] transition-colors font-medium shadow-md">
                    Siguiente
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
