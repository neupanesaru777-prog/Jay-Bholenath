import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[86vh]">
      <Image
        src="/images/shiva-hero.svg"
        alt="Lord Shiva in meditation"
        fill
        sizes="100vw"
        priority
        className="object-cover object-center opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-900/40 via-black/45 to-black" />

      <div className="section-shell relative z-10 flex min-h-[86vh] flex-col items-start justify-center py-24">
        <p className="mb-4 rounded-full border border-blue-300/30 bg-blue-900/25 px-4 py-1 text-xs uppercase tracking-[0.25em] text-blue-100">
          Divine Presence of Shiva
        </p>
        <h1 className="font-heading text-5xl font-semibold leading-none text-white drop-shadow-[0_0_16px_rgba(59,130,246,0.55)] sm:text-7xl">
          Har Har Mahadev
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-200 sm:text-xl">
          Experience the Divine Power of Bholenath
        </p>
        <Link
          href="#about"
          className="mt-9 rounded-full bg-gradient-to-r from-blue-600 to-amber-500 px-7 py-3 text-sm font-semibold text-white shadow-saffron transition hover:scale-[1.03]"
        >
          Explore More
        </Link>
      </div>
    </section>
  );
}
