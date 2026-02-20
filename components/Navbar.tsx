'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/teachings', label: 'Teachings' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-300/15 bg-slate-950/75 backdrop-blur-lg">
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="font-heading text-2xl font-semibold tracking-wide text-saffron">
          Har Har Mahadev
        </Link>

        <button
          className="rounded-md border border-blue-200/30 px-3 py-1 text-sm text-slate-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-200 transition hover:text-saffron"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {open ? (
        <div className="section-shell flex flex-col gap-3 border-t border-blue-300/15 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-200 transition hover:text-saffron"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
