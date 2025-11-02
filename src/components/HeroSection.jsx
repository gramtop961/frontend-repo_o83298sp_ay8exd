import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  // Cursor glow that follows the mouse within the hero
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 300, damping: 40 });
  const sy = useSpring(my, { stiffness: 300, damping: 40 });

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  const handleJoinClick = () => {
    window.open('https://wa.me/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      className="relative min-h-[92vh] pt-20 overflow-hidden"
      aria-label="Hero"
      onMouseEnter={() => setMounted(true)}
      onMouseMove={onMouseMove}
    >
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Brand gradients - non-blocking overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(14,165,164,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.25),transparent_60%)] blur-3xl" />
      </div>

      {/* Cursor glow follower */}
      {mounted && (
        <motion.div
          className="pointer-events-none absolute h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.18),transparent_60%)] mix-blend-screen"
          style={{ translateX: sx, translateY: sy }}
          transition={{ type: 'spring', stiffness: 300, damping: 40 }}
        />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.7)]" />
              Youth tech club • Creative + Professional
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(14,165,164,0.2)]">
              Review Tech Club
              <span className="block bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent">Build. Learn. Shine.</span>
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              Reels, videos, LinkedIn highlights, events and hackathons — plug into a modern, neon-tech community.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={handleJoinClick}
                className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-cyan-500/90 px-6 py-3 text-white font-medium shadow-[0_10px_30px_rgba(34,211,238,0.25)] ring-1 ring-cyan-300/40 hover:brightness-110 hover:shadow-[0_10px_40px_rgba(34,211,238,0.45)] active:scale-[0.98] transition-all"
                aria-label="Join WhatsApp Group"
              >
                Join WhatsApp Group
              </button>
              <a
                href="/register"
                className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white backdrop-blur hover:bg-white/10 hover:border-white/25 transition-colors"
                aria-label="Apply to Join"
              >
                Apply to Join
              </a>
            </div>
          </motion.div>

          {/* Revy minimal mascot: floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center"
            aria-hidden
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl shadow-purple-500/10"
            >
              <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-fuchsia-500/40 via-cyan-400/30 to-purple-500/40 grid place-items-center">
                <span className="text-4xl" role="img" aria-label="Revy mascot">🤖</span>
              </div>
              <p className="mt-3 text-sm text-white/70">Revy is live — say hi!</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B1020] to-transparent" />
    </section>
  );
}
