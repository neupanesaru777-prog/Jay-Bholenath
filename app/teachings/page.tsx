import type { Metadata } from 'next';
import { InfoCard } from '@/components/InfoCard';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Teachings',
  description: 'Timeless teachings and life lessons inspired by Lord Shiva.'
};

const teachings = [
  {
    title: 'Silence Is Strength',
    content: 'Shiva teaches that silence is not emptiness; it is the source of clear action and fearless living.'
  },
  {
    title: 'Destroy the Ego, Not the Self',
    content: 'True power emerges when pride dissolves. Humility allows consciousness to expand without conflict.'
  },
  {
    title: 'Accept Both Stillness and Storm',
    content: 'Meditation and Tandava coexist. Life asks for peace within and courage in motion.'
  },
  {
    title: 'Detach to Love Deeply',
    content: 'Detachment is not indifference; it is pure love without possession, fear, or control.'
  },
  {
    title: 'Face Poison with Awareness',
    content: 'Like Neelkanth, hold pain with awareness and prevent it from spreading into your actions.'
  },
  {
    title: 'Seek the Inner Third Eye',
    content: 'Look beyond appearances. Wisdom begins when perception moves from surface to essence.'
  }
];

export default function TeachingsPage() {
  return (
    <section className="section-shell py-20">
      <ScrollReveal>
        <h1 className="font-heading text-center text-5xl font-semibold text-white sm:text-6xl">Shiva Teachings</h1>
      </ScrollReveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teachings.map((teaching) => (
          <ScrollReveal key={teaching.title}>
            <InfoCard title={teaching.title} content={teaching.content} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
