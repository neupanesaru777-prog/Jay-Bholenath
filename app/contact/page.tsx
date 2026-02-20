import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Connect and share your devotion, questions, or feedback.'
};

export default function ContactPage() {
  return (
    <section className="section-shell py-20">
      <ScrollReveal>
        <h1 className="font-heading text-center text-5xl font-semibold text-white sm:text-6xl">Connect in Devotion</h1>
      </ScrollReveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <ScrollReveal>
          <form className="glass-panel rounded-2xl p-6 sm:p-8">
            <h2 className="font-heading text-3xl text-white">Contact Form</h2>
            <div className="mt-6 space-y-4">
              <label className="block text-sm text-slate-300">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-blue-300/25 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none ring-blue-400 transition focus:ring-2"
                />
              </label>
              <label className="block text-sm text-slate-300">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-xl border border-blue-300/25 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none ring-blue-400 transition focus:ring-2"
                />
              </label>
              <label className="block text-sm text-slate-300">
                Message
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-xl border border-blue-300/25 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none ring-blue-400 transition focus:ring-2"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 rounded-full bg-gradient-to-r from-blue-600 to-amber-500 px-7 py-3 text-sm font-semibold text-white shadow-saffron transition hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </ScrollReveal>

        <ScrollReveal>
          <aside className="glass-panel rounded-2xl p-6 sm:p-8">
            <h2 className="font-heading text-3xl text-white">Social Presence</h2>
            <p className="mt-4 text-slate-300">
              Join the spiritual journey and stay connected through devotional content and community updates.
            </p>
            <div className="mt-6 space-y-3 text-slate-100">
              <a href="https://instagram.com" className="block rounded-xl border border-blue-300/20 px-4 py-3 hover:border-saffron/50">
                Instagram
              </a>
              <a href="https://youtube.com" className="block rounded-xl border border-blue-300/20 px-4 py-3 hover:border-saffron/50">
                YouTube
              </a>
              <a href="https://x.com" className="block rounded-xl border border-blue-300/20 px-4 py-3 hover:border-saffron/50">
                X (Twitter)
              </a>
            </div>
          </aside>
        </ScrollReveal>
      </div>
    </section>
  );
}
