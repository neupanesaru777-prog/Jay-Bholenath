import { Hero } from '@/components/Hero';
import { InfoCard } from '@/components/InfoCard';
import { ScrollReveal } from '@/components/ScrollReveal';

const stories = [
  {
    title: 'Samudra Manthan',
    content:
      'When poison emerged from the cosmic ocean, Shiva consumed it to protect all creation, becoming Neelkanth.'
  },
  {
    title: 'Shiva Tandava',
    content:
      'The Tandava symbolizes the rhythm of creation and dissolution, where destruction is the doorway to renewal.'
  },
  {
    title: 'Marriage of Shiva & Parvati',
    content:
      'Their union reflects balance between ascetic power and nurturing grace, the harmony of cosmic energies.'
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="about" className="section-shell py-20">
        <ScrollReveal>
          <div className="glass-panel rounded-3xl p-8 sm:p-12">
            <h2 className="font-heading text-4xl font-semibold text-white sm:text-5xl">About Bholenath</h2>
            <p className="mt-5 max-w-4xl text-slate-300">
              Lord Shiva, the Destroyer in the Hindu Trinity, dissolves illusion and ego to make space for truth,
              transformation, and liberation.
            </p>
            <div className="mt-8 grid gap-4 text-slate-200 sm:grid-cols-3">
              <p className="rounded-xl border border-blue-300/20 bg-blue-950/40 p-4">Trishul: Will, action, and wisdom.</p>
              <p className="rounded-xl border border-blue-300/20 bg-blue-950/40 p-4">Damru: Cosmic vibration and life rhythm.</p>
              <p className="rounded-xl border border-blue-300/20 bg-blue-950/40 p-4">Third Eye: Inner vision beyond illusion.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="section-shell py-8">
        <ScrollReveal>
          <h2 className="font-heading text-center text-4xl font-semibold text-white sm:text-5xl">Sacred Stories</h2>
        </ScrollReveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <ScrollReveal key={story.title}>
              <InfoCard title={story.title} content={story.content} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-20 text-center">
        <ScrollReveal>
          <p className="font-heading text-5xl font-semibold text-saffron animate-glow sm:text-7xl">Om Namah Shivaya</p>
        </ScrollReveal>
      </section>

      <section className="section-shell pb-24">
        <ScrollReveal>
          <div className="glass-panel rounded-3xl p-8 sm:p-12">
            <h2 className="font-heading text-4xl font-semibold text-white sm:text-5xl">Maha Shivaratri</h2>
            <p className="mt-5 text-slate-300">
              Maha Shivaratri celebrates Shiva&apos;s cosmic stillness and supreme consciousness. Devotees observe fasting,
              chanting, and night-long meditation to invite grace, strength, and inner awakening.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
