import { motion } from 'framer-motion';

const seedItems = [
  { id: '1', type: 'reel', title: 'Campus Hackathon — Finals', embed_url: 'https://www.instagram.com/p/EXAMPLE', tags: ['hackathon','highlights'] },
  { id: '2', type: 'youtube', title: 'Intro to ReView Club', embed_url: 'https://www.youtube.com/watch?v=EXAMPLE', tags: ['intro','welcome'] },
  { id: '3', type: 'linkedin', title: 'Project Spotlight: ML in Healthcare', embed_url: 'https://www.linkedin.com/posts/EXAMPLE', tags: ['ml','health'] },
  { id: '4', type: 'blog', title: 'Hackathon Prep: What to Pack', embed_url: '/blog/hackathon-prep', tags: ['guide'] },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wide text-white/70">
      {children}
    </span>
  );
}

function Card({ item }) {
  const palette = {
    reel: 'from-[#FF6B6B]/40 to-transparent',
    youtube: 'from-[#7C3AED]/40 to-transparent',
    linkedin: 'from-[#0EA5A4]/40 to-transparent',
    blog: 'from-white/20 to-transparent',
  }[item.type];

  return (
    <motion.a
      href={item.embed_url}
      target={item.type === 'blog' ? '_self' : '_blank'}
      rel="noreferrer"
      className="group relative rounded-2xl border border-white/10 bg-[#0F172A]/60 p-4 shadow-lg shadow-black/20 overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      aria-label={`${item.type} item: ${item.title}`}
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${palette}`} />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <Badge>{item.type}</Badge>
          <span className="text-[10px] text-white/50">Fresh</span>
        </div>
        <h3 className="mt-3 line-clamp-2 text-white font-semibold">
          {item.title}
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags?.slice(0,3).map((t) => (
            <span key={t} className="text-xs text-white/60">#{t}</span>
          ))}
        </div>
        <div className="mt-4 aspect-video w-full rounded-lg border border-white/10 bg-black/40 grid place-items-center">
          <div className="text-white/70 text-sm">Preview</div>
        </div>
      </div>
    </motion.a>
  );
}

export default function LiveFeedPreview() {
  return (
    <section className="relative py-16" aria-label="Fresh Picks">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Fresh Picks</h2>
            <p className="mt-2 text-white/70">Latest Instagram reels, YouTube picks and LinkedIn highlights</p>
          </div>
          <a href="/content" className="hidden sm:inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">View all</a>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 }
            }
          }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {seedItems.map((item) => (
            <motion.div
              key={item.id}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <Card item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
