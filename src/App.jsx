import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(255,192,203,0.25)_0%,rgba(147,197,253,0.15)_40%,rgba(221,214,254,0.25)_100%)] text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Sections />
        <footer className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl p-6 bg-white/70 border border-zinc-200 text-center">
              <p className="text-sm text-zinc-600">© {new Date().getFullYear()} Artha Handi Wijaya. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
