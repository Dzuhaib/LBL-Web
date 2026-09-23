'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap, Sparkles, Droplets, Scissors, Radio, Minus, ArrowUp, Syringe, ChevronDown } from 'lucide-react';

const laserClinicSubPages = [
  { title: 'Laser Tattoo Removal', href: '/services/laser-clinics/laser-tattoo-removal', icon: Zap },
  { title: 'Skin Rejuvenation', href: '/services/laser-clinics/skin-rejuvenation', icon: Sparkles },
  { title: 'Carbon Facial', href: '/services/laser-clinics/carbon-facial', icon: Droplets },
  { title: 'Laser Hair Removal', href: '/services/laser-clinics/laser-hair-removal', icon: Scissors },
  { title: 'HIFU Treatment Essex', href: '/services/laser-clinics/hifu-treatment-essex', icon: Radio },
  { title: 'Line Reducer', href: '/services/laser-clinics/line-reducer', icon: Minus },
  { title: 'Endo Fibre Lift', href: '/services/laser-clinics/endo-fibre-lift', icon: ArrowUp },
  { title: 'Dermal Fillers', href: '/services/laser-clinics/dermal-fillers', icon: Syringe },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinksBeforeServices = [
    { label: 'Home', href: '/' },
    { label: 'Academy', href: '/copy-of-academy-1' },
  ];

  const navLinksAfterServices = [
    { label: 'Prices', href: '/prices' },
    { label: 'Client Reviews', href: '/reviews' },
    { label: 'T&Cs', href: '/terms' },
    { label: 'My Bookings', href: '/my-bookings' },
    { label: 'My Subscriptions', href: '/subscriptions' },
  ];

  return (
    <header
      className={`site-header fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="LBL Aesthetics home">
          <img
            src="/logo.avif"
            alt="LBL Aesthetics & Laser"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-5" aria-label="Main navigation">
          {navLinksBeforeServices.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#3D3D3D] hover:text-[#01A0E2] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#01A0E2] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <div
            className={`mega-menu-wrapper ${megaMenuOpen ? 'is-open' : ''}`}
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <Link
              href="/services"
              className="text-sm font-medium text-[#3D3D3D] hover:text-[#01A0E2] transition-colors duration-200 relative focus-visible:outline-none inline-flex items-center gap-1"
              aria-expanded={megaMenuOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown className="w-3 h-3" />
            </Link>
            {megaMenuOpen && (
              <div
                className="mega-menu-dropdown"
                onMouseEnter={() => setMegaMenuOpen(true)}
              >
              <div className="mb-4 pb-3 border-b border-[#F0EDE8]">
                <span className="text-xs font-semibold text-[#01A0E2] uppercase tracking-wider">Treatments</span>
                <p className="text-xs text-[#6B6B6B] mt-1">Advanced aesthetic treatments in Essex</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {laserClinicSubPages.map((page) => (
                  <Link
                    key={page.title}
                    href={page.href}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#01A0E2]/5 transition-all duration-200 group/item"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#01A0E2]/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#01A0E2] transition-colors duration-200">
                      <page.icon className="w-4 h-4 text-[#01A0E2] group-hover/item:text-white transition-colors duration-200" />
                    </div>
                    <span className="text-sm font-medium text-[#3D3D3D] group-hover/item:text-[#01A0E2] transition-colors duration-200">
                      {page.title}
                    </span>
                  </Link>
                ))}
              </div>
              </div>
            )}
          </div>

          {navLinksAfterServices.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#3D3D3D] hover:text-[#01A0E2] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#01A0E2] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="https://lblaestheticsuk.book.app/"
            className="inline-flex items-center px-6 py-2.5 bg-[#01A0E2] text-white text-sm font-semibold rounded-full hover:bg-[#008bc7] transition-colors duration-200 shadow-sm"
          >
            Book your consultation
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] focus-visible:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-[2px] bg-[#1A1A1A] rounded transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#1A1A1A] rounded transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#1A1A1A] rounded transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      <div
        className={`mobile-menu fixed inset-y-0 right-0 w-80 bg-white shadow-2xl z-50 pt-24 px-8 ${
          mobileOpen ? 'open' : ''
        }`}
      >
        <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
          {navLinksBeforeServices.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-[#3D3D3D] hover:text-[#01A0E2] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-[#E8E4DE] pt-4 mt-2">
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-[#3D3D3D] hover:text-[#01A0E2] transition-colors block mb-3"
            >
              Services
            </Link>
            {laserClinicSubPages.map((page) => (
              <Link
                key={page.title}
                href={page.href}
                onClick={() => setMobileOpen(false)}
                className="block py-1.5 text-sm text-[#3D3D3D] hover:text-[#01A0E2] transition-colors pl-2"
              >
                {page.title}
              </Link>
            ))}
          </div>
          {navLinksAfterServices.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-[#3D3D3D] hover:text-[#01A0E2] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://lblaestheticsuk.book.app/"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-[#01A0E2] text-white font-semibold rounded-full hover:bg-[#008bc7] transition-colors"
          >
            Book your consultation
          </Link>
        </nav>
      </div>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
