import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-60 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400" />
        <div className="absolute -bottom-24 -left-24 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-60 bg-gradient-to-tr from-indigo-400 via-blue-400 to-cyan-300" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=2940&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm uppercase tracking-widest text-indigo-600 font-semibold">Welcome to my world</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-black leading-tight text-zinc-900">
              Artha Handi Wijaya
            </h1>
            <p className="mt-4 text-zinc-700 text-lg leading-relaxed">
              I’m a creative enthusiast with a passion for video editing and graphic design. I love sports, especially basketball, and I bring that energy and discipline into everything I do.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm">Anime Lover</span>
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">Video Editing</span>
              <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm">Graphic Design</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-3xl overflow-hidden bg-white/90">
                <img
                  src="https://i.pinimg.com/736x/9c/2d/3d/9c2d3d0a6ec5973a3a61958090fcb9b5.jpg"
                  alt="Anime style avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-2 text-sm">
              Height: 170 cm
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
