'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap, Sparkles, Droplets, Scissors, Radio, Minus, ArrowUp, Syringe, ChevronDown, X, Award, GraduationCap, BookOpen, ClipboardCheck, FlaskConical, Microscope, Layers, HeartPulse, BriefcaseMedical, Route, Trophy } from 'lucide-react';

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

const academyLinks = [
  { title: 'L2 Award in Makeup Services', icon: Sparkles },
  { title: 'L3 Aesthetics Pathway Award - Package', icon: Award },
  { title: 'L3 Certificate in Vocational Assessment', icon: ClipboardCheck },
  { title: 'L4 Diploma in Aesthetic Treatment & Skin', icon: GraduationCap },
  { title: 'L4 Award in Laser — Package Deal', icon: Zap },
  { title: 'L4 Certificate in Education & Training', icon: BookOpen },
  { title: 'L5 Certificate in Chemical Peel', icon: FlaskConical },
  { title: 'L5 Certificate in Skin Booster Treatment', icon: Syringe },
  { title: 'L5 Certificate in Microneedling Treatmen', icon: Microscope },
  { title: 'L6 Certificate in Chemical Peel', icon: FlaskConical },
  { title: 'L6 Certificate in Microneedling', icon: Microscope },
  { title: 'L6 Certificate in Skin Booster', icon: HeartPulse },
  { title: 'L6 Diploma in Aesthetic Practice', icon: BriefcaseMedical },
  { title: 'L7 Combined L6–L7 Diploma in Aesthetic P', icon: Layers },
  { title: 'L7 Full Career Pathway — L3 to L7 Diplom', icon: Route },
  { title: 'L7 Diploma in Aesthetic Practice', icon: Trophy },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [academyMenuOpen, setAcademyMenuOpen] = useState(false);
  const [academyMobileOpen, setAcademyMobileOpen] = useState(false);
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false);
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
  ];

  const navLinksAfterServices = [
    { label: 'Prices', href: '/prices' },
    { label: 'Client Reviews', href: '/reviews' },
    { label: 'T&Cs', href: '/terms' },
    { label: 'Book Now', href: '/book' },
    { label: 'My Subscriptions', href: '/subscriptions' },
  ];

  return (
    <header className="contents">
      <div className="hidden border-b border-white/20 bg-[#01A0E2] text-white md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-xs">
          <div className="flex items-center gap-5">
            <a href="tel:07904284115" className="transition-colors hover:text-[#66D1F2]">
              Call Us: 07904284115
            </a>
            <a href="mailto:lblaesthetics-uk@outlook.com" className="transition-colors hover:text-[#66D1F2]">
              Email Us: lblaesthetics-uk@outlook.com
            </a>
          </div>
          <div className="flex items-center gap-1">
            <span className="mr-2 text-white/60">Follow us</span>
            <a href="#" aria-label="TikTok" className="flex h-7 w-7 items-center justify-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69A4.83 4.83 0 0 0 15.14 2h-3.1v12.4a2.55 2.55 0 1 1-1.84-2.47V8.8a5.9 5.9 0 1 0 5.1 5.86V8.7a7.9 7.9 0 0 0 4.29 1.28V6.88a4.84 4.84 0 0 1-3.1-.19Z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="flex h-7 w-7 items-center justify-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="flex h-7 w-7 items-center justify-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a24 24 0 0 0-2.4-.1c-2.4 0-4 1.5-4 4.1V10H7.7v3h2.7v8h3.1Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={`site-header sticky top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-2xl backdrop-saturate-150 ${scrolled ? 'scrolled' : ''}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="LBL Aesthetics home">
          <img
            src="/logo.avif"
            alt="LBL Aesthetics & Laser"
            width={120}
            height={40}
            className="h-12 w-auto object-contain"
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
            className={`mega-menu-wrapper ${academyMenuOpen ? 'is-open' : ''}`}
            onMouseEnter={() => setAcademyMenuOpen(true)}
            onMouseLeave={() => setAcademyMenuOpen(false)}
          >
            <Link
              href="/copy-of-academy-1"
              className="text-sm font-medium text-[#3D3D3D] hover:text-[#01A0E2] transition-colors duration-200 inline-flex items-center gap-1"
              aria-expanded={academyMenuOpen}
              aria-haspopup="true"
            >
              Academy
              <ChevronDown className="w-3 h-3" />
            </Link>
            {academyMenuOpen && (
              <div className="mega-menu-dropdown w-[900px]">
                <div className="mb-4 pb-3 border-b border-[#F0EDE8]">
                  <span className="text-xs font-semibold text-[#01A0E2] uppercase tracking-wider">Academy Courses</span>
                  <p className="text-xs text-[#6B6B6B] mt-1">Professional qualifications and career pathways</p>
                </div>
                <div className="grid grid-cols-4 gap-1">
                  {academyLinks.map((item) => (
                    <Link
                      key={item.title}
                      href="#"
                      onClick={(event) => event.preventDefault()}
                      className="flex items-center gap-2 rounded-lg px-2 py-2 text-xs leading-relaxed text-[#3D3D3D] transition-colors hover:bg-[#01A0E2]/10 hover:text-[#01A0E2]"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#01A0E2]/10 text-[#01A0E2]">
                        <item.icon className="h-3.5 w-3.5" />
                      </span>
                      <span>{item.title}</span>
                    </Link>
                  ))}
              </div>
              <Link href="/services/laser-clinics" className="mt-4 inline-flex items-center gap-2 border-t border-[#F0EDE8] pt-4 text-xs font-semibold text-[#01A0E2] transition-colors hover:text-[#008bc7]">
                View all laser clinic services
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </Link>
              </div>
            )}
          </div>

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
className="mega-menu-dropdown w-[720px]"
                onMouseEnter={() => setMegaMenuOpen(true)}
              >
              <div className="mb-4 pb-3 border-b border-[#F0EDE8]">
                <span className="text-xs font-semibold text-[#01A0E2] uppercase tracking-wider">Treatments</span>
                <p className="text-xs text-[#6B6B6B] mt-1">Advanced aesthetic treatments in Essex</p>
              </div>
              <Link href="/services/laser-clinics" className="mb-4 flex items-center justify-between rounded-xl border border-[#01A0E2]/20 bg-[#01A0E2]/5 p-3 transition-colors hover:bg-[#01A0E2]/10">
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#01A0E2] text-white">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-[#1A1A1A]">Laser Clinics</span>
                    <span className="text-xs text-[#6B6B6B]">Explore our laser clinic in Essex</span>
                  </span>
                </span>
                <svg className="h-4 w-4 text-[#01A0E2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </Link>
              <div className="grid grid-cols-3 gap-3">
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
            href="/book"
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
      </div>

      <div
        className={`mobile-menu fixed inset-0 w-full max-w-none overflow-y-auto overscroll-contain bg-white shadow-2xl z-50 pt-20 px-6 pb-8 md:hidden ${
          mobileOpen ? 'open' : ''
        }`}
      >
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#F0EDE8] text-[#1A1A1A] transition-colors hover:bg-[#01A0E2] hover:text-white focus-visible:outline-none"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
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
          <div className="border-t border-[#E8E4DE] pt-4">
            <button
              type="button"
              onClick={() => setAcademyMobileOpen((open) => !open)}
              className="flex w-full items-center justify-between text-left text-base font-medium text-[#3D3D3D] transition-colors hover:text-[#01A0E2]"
              aria-expanded={academyMobileOpen}
            >
              <span>Academy</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${academyMobileOpen ? 'rotate-180 text-[#01A0E2]' : ''}`} />
            </button>
            {academyMobileOpen && (
              <div className="mt-2 space-y-1">
                {academyLinks.map((item) => (
                  <Link
                    key={item.title}
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      setMobileOpen(false);
                    }}
                    className="flex items-center gap-2 rounded-lg py-2 pl-2 text-xs leading-relaxed text-[#6B6B6B] transition-colors hover:bg-[#01A0E2]/10 hover:text-[#01A0E2]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#01A0E2]/10 text-[#01A0E2]">
                      <item.icon className="h-3.5 w-3.5" />
                    </span>
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="border-t border-[#E8E4DE] pt-4 mt-2">
            <button
              type="button"
              onClick={() => setServicesMobileOpen((open) => !open)}
              className="flex w-full items-center justify-between text-left text-base font-medium text-[#3D3D3D] transition-colors hover:text-[#01A0E2]"
              aria-expanded={servicesMobileOpen}
            >
              <span>Services</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesMobileOpen ? 'rotate-180 text-[#01A0E2]' : ''}`} />
            </button>
            {servicesMobileOpen && (
              <div className="mt-2 space-y-1">
                {laserClinicSubPages.map((page) => (
                  <Link
                    key={page.title}
                    href={page.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 rounded-lg py-2 pl-2 text-xs leading-relaxed text-[#6B6B6B] transition-colors hover:bg-[#01A0E2]/10 hover:text-[#01A0E2]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#01A0E2]/10 text-[#01A0E2]">
                      <page.icon className="h-3.5 w-3.5" />
                    </span>
                    <span>{page.title}</span>
                  </Link>
                ))}
              </div>
            )}
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
            href="/book"
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
