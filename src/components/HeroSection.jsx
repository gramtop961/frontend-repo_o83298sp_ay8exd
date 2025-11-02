import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const handleJoinClick = () => {
    window.open('https://wa.me/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-[90vh] pt-20 overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(14,165,164,0.25),transparent_60%)] mix-blend-screen" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(14,165,164,0.2)]">
              Review Tech Club — Plug into the pulse of campus tech
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              Reels • Videos • LinkedIn • Hackathons — join the WhatsApp crew for real-time updates.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={handleJoinClick}
                className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-[#0EA5A4] px-6 py-3 text-white font-medium shadow-lg shadow-teal-500/20 hover:brightness-110 active:scale-[0.98] transition-all"
                aria-label="Join WhatsApp Group"
              >
                Join WhatsApp Group
              </button>
              <a
                href="/register"
                className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white hover:bg-white/10 transition-colors"
                aria-label="Apply to Join"
              >
                Apply to Join
              </a>
            </div>
          </motion.div>
          <div className="hidden lg:block" />
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B1020] to-transparent" />
    </section>
  );
}
