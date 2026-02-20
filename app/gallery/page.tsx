import type { Metadata } from 'next';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A devotional gallery inspired by the divine meditative presence of Lord Shiva.'
};

const images = [
  { src: '/images/gallery-1.svg', title: 'Shiva in Stillness' },
  { src: '/images/gallery-2.svg', title: 'Cosmic Trishul' },
  { src: '/images/gallery-3.svg', title: 'Blue Flame Aura' },
  { src: '/images/gallery-4.svg', title: 'Meditation Glow' },
  { src: '/images/gallery-5.svg', title: 'Third Eye Light' },
  { src: '/images/gallery-6.svg', title: 'Himalayan Silence' }
];

export default function GalleryPage() {
  return (
    <section className="section-shell py-20">
      <ScrollReveal>
        <h1 className="font-heading text-center text-5xl font-semibold text-white sm:text-6xl">Shiva Gallery</h1>
      </ScrollReveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((item) => (
          <ScrollReveal key={item.src}>
            <figure className="group glass-panel overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-slate-200">{item.title}</figcaption>
            </figure>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
