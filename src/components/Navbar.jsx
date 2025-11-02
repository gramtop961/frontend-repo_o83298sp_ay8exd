import { useEffect, useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all ${
    scrolled ? 'bg-[#0B1020]/70 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
  }`;

  return (
    <header className={navClasses} aria-label="Site navigation">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 group" aria-label="Go to home">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#0EA5A4] to-[#7C3AED] grid place-items-center shadow-inner shadow-black/40">
              <Rocket className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-tight">Review Tech Club</p>
              <p className="text-xs text-white/60">Get techy in a tricky world</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/content" className="text-white/80 hover:text-white transition-colors">Content</a>
            <a href="/achievements" className="text-white/80 hover:text-white transition-colors">Achievements</a>
            <a href="/members" className="text-white/80 hover:text-white transition-colors">Members</a>
            <a href="/events" className="text-white/80 hover:text-white transition-colors">Events</a>
            <a href="/resources" className="text-white/80 hover:text-white transition-colors">Resources</a>
            <a href="/register" className="ml-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white bg-[#0EA5A4] hover:brightness-110 shadow-lg shadow-teal-500/20 transition-all" aria-label="Apply to Join">Apply</a>
          </nav>

          <button onClick={() => setOpen(true)} className="md:hidden text-white p-2" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#0B1020]/80 backdrop-blur-sm">
          <div className="absolute right-4 top-4">
            <button onClick={() => setOpen(false)} className="text-white p-2" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mx-6 mt-20 rounded-2xl border border-white/10 bg-[#0F172A] p-6 shadow-2xl">
            <div className="flex flex-col gap-4 text-base">
              <a href="/content" className="text-white/90 hover:text-white" onClick={() => setOpen(false)}>Content</a>
              <a href="/achievements" className="text-white/90 hover:text-white" onClick={() => setOpen(false)}>Achievements</a>
              <a href="/members" className="text-white/90 hover:text-white" onClick={() => setOpen(false)}>Members</a>
              <a href="/events" className="text-white/90 hover:text-white" onClick={() => setOpen(false)}>Events</a>
              <a href="/resources" className="text-white/90 hover:text-white" onClick={() => setOpen(false)}>Resources</a>
              <a href="/register" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white bg-[#0EA5A4] hover:brightness-110 shadow-lg shadow-teal-500/20" onClick={() => setOpen(false)}>Apply</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
