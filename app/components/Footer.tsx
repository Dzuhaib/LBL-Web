'use client';

import Link from 'next/link';

const footerBrandLinks = [
  { label: 'Treatments', href: '/services/laser-clinics' },
  { label: 'About', href: '/about-us' },
  { label: 'Academy', href: '/copy-of-academy-1' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Our Work', href: '/our-work' },
];

export default function Footer() {
  return (
    <footer className="bg-[#01A0E2] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.avif"
                alt="LBL Aesthetics & Laser"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Advanced medical aesthetic treatments in Essex. Your trusted partner in natural beauty.
            </p>
            <div className="mt-6 flex items-center gap-3 proqual-logo">
              <img
                src="/Pro Qual logo to be added in the footer as well..avif"
                alt="ProQual Approved"
                width={200}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {footerBrandLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Contact
            </h4>
            <address className="not-italic flex flex-col gap-2 text-sm text-white/70">
              <p>LBL Aesthetics & Laser</p>
              <p>Chelmsford, Essex</p>
              <p>Tel: 01245 000 000</p>
              <p>Email: info@lblaesthetics.com</p>
            </address>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Follow Us
            </h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 footer-brand">
              {[
                '/Brands for footer/Brand 1 img.avif',
                '/Brands for footer/Brand 2 img.avif',
                '/Brands for footer/Brand 3 img.avif',
                '/Brands for footer/Brand 4 img.avif',
                '/Brands for footer/Brand 5 img.avif',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Brand ${i + 1}`}
                  width={120}
                  height={44}
                  className="h-11 w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} LBL Aesthetics & Laser. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
