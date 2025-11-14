import { motion } from 'framer-motion'
import { Mail, Instagram, Youtube, Star, Sparkles, GraduationCap, Heart } from 'lucide-react'

const Section = ({ id, title, children, icon: Icon }) => (
  <section id={id} className="py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-8">
        {Icon && <Icon className="text-indigo-600" />}
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">{title}</h2>
      </div>
      {children}
    </div>
  </section>
)

export default function Sections() {
  return (
    <div>
      <Section id="about" title="About Me" icon={Sparkles}>
        <div className="grid md:grid-cols-2 gap-8 text-zinc-700">
          <p>
            I’m Artha, an anime-inspired creator who loves turning ideas into visuals. I specialize in video editing and graphic design, blending dynamic energy with clean aesthetics. I believe in consistency and effort—it's okay to aim high, but actions must match the words.
          </p>
          <div className="bg-white/70 backdrop-blur border border-zinc-200 p-4 rounded-xl">
            <ul className="space-y-2 text-sm">
              <li><span className="font-semibold">Height:</span> 170 cm</li>
              <li><span className="font-semibold">Age:</span> Not disclosed</li>
              <li><span className="font-semibold">Dream:</span> To become rich</li>
              <li><span className="font-semibold">Life Motto:</span> "It's okay to aim high, but your actions must match your words."</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills" icon={Star}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["Video Editing", "Graphic Design", "Motion Graphics", "Thumbnail Design", "Short-form Content", "Brand Visuals"].map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-4 rounded-xl border border-zinc-200 bg-white/70 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <p className="font-medium text-zinc-800">{s}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education" icon={GraduationCap}>
        <div className="p-4 rounded-xl border border-zinc-200 bg-white/70">
          <p className="text-zinc-800 font-semibold">SMKS PASUNDAN SUBANG</p>
          <p className="text-zinc-600">Major in Accounting</p>
        </div>
      </Section>

      <Section id="hobbies" title="Hobbies" icon={Heart}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl border border-zinc-200 bg-white/70">
            <p className="font-medium">Sports</p>
            <p className="text-zinc-600 text-sm">Especially basketball — discipline, teamwork, and energy inspire my creative process.</p>
          </div>
          <div className="p-4 rounded-xl border border-zinc-200 bg-white/70">
            <p className="font-medium">Anime</p>
            <p className="text-zinc-600 text-sm">I love bright colors, bold characters, and cinematic storytelling.</p>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Contact" icon={Mail}>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thanks! Your message has been noted.')
            }}
            className="bg-white/70 border border-zinc-200 p-6 rounded-xl"
          >
            <div className="grid gap-4">
              <input className="w-full px-3 py-2 rounded-md border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your Name" required />
              <input className="w-full px-3 py-2 rounded-md border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email or Instagram" required />
              <textarea rows={4} className="w-full px-3 py-2 rounded-md border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your message" required />
              <button className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
                Send
              </button>
            </div>
            <p className="text-xs text-zinc-500 mt-3">For demo purposes only. This form does not send emails.</p>
          </form>

          <div className="space-y-3">
            <p className="text-zinc-700">Let’s connect! I’m open to collaborations and creative projects.</p>
            <div className="flex gap-3">
              <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-pink-100 text-pink-700" href="#">
                <Instagram size={16} /> Instagram
              </a>
              <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-red-100 text-red-700" href="#">
                <Youtube size={16} /> YouTube
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
