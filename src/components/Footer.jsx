export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-white/10 bg-[#0F172A]/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-white font-semibold">Review Tech Club</p>
            <p className="mt-1 text-sm text-white/60">Organized by ReView AI Tech and Solutions</p>
            <p className="mt-4 max-w-md text-sm text-white/70">Bridge campus talent with real-world tech events and opportunities. Reels, videos, events & hackathons — all in one vibrant hub.</p>
          </div>
          <div className="sm:text-right">
            <a
              href="/register"
              className="inline-flex items-center justify-center rounded-full bg-[#7C3AED] px-5 py-3 text-white font-medium hover:brightness-110 shadow-lg shadow-purple-500/20"
            >
              Apply to Join
            </a>
            <div className="mt-4 text-sm text-white/60">
              <p>Contact: reviewrv25@gmail.com • +91 8341105135</p>
              <p className="mt-1">Website: www.reviewrv25.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Review Tech Club. All rights reserved.</p>
          <a href="/content" className="hover:text-white/80">Fresh Picks</a>
        </div>
      </div>
    </footer>
  );
}
