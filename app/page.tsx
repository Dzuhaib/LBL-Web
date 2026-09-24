'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [accordionOpen, setAccordionOpen] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setAccordionOpen((prev) => (prev === id ? null : id));
  };

  const scrollToFAQ = () => {
    const el = document.getElementById('faq-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const footerBrandLinks = [
    { label: 'Treatments', href: '#treatments' },
    { label: 'About', href: '/about-us' },
    { label: 'Academy', href: '/copy-of-academy-1' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Our Work', href: '/our-work' },
  ];

  const treatments = [
    { title: 'HIFU Treatment', href: '/services/laser-clinics/hifu-treatment-essex', src: '/Treatments/HIFU Skin Tightning treatment.avif' },
    { title: 'Laser Treatment', href: '/services/laser-clinics', src: '/Treatments/Laser Treatment.avif' },
    { title: 'Endo Fibre Lift', href: '/services/laser-clinics/endo-fibre-lift', src: '/Treatments/Endo Fibre Lift treatment.avif' },
    { title: 'Dermal Fillers', href: '/services/laser-clinics/dermal-fillers', src: '/Treatments/Dermal Fillers treatments.avif' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <main>
        {/* ========== SECTION 1: HERO ========== */}
        <section id="hero" className="min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="reveal order-2 lg:order-1" data-reveal-id="hero-text">
                <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#01A0E2]/20 bg-white/75 px-3.5 py-2 shadow-[0_4px_14px_rgba(26,26,26,0.06)] backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#01A0E2] ring-4 ring-[#01A0E2]/10 badge-pulse" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3D3D3D]">
                    September Deals Live
                  </span>
                </div>
                <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6">
                  Reveal Your Natural Beauty with Advanced Medical Aesthetic Treatments in Essex
                </h1>
                <p className="text-lg md:text-xl text-[#6B6B6B] leading-relaxed mb-8 max-w-lg">
                  Welcome to LBL Aesthetics, a trusted aesthetic clinic in Essex offering advanced aesthetic treatments designed to help you look and feel more confident in your skin.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#01A0E2]/10 rounded-lg mb-8">
                  <span className="text-sm font-medium text-[#01A0E2]">
                    SEPTEMBER DEALS LIVE | Your favourite treatments at exclusive prices. Secure your appointment today.
                  </span>
                </div>
                <Link
                  href="/book"
                  className="inline-flex items-center px-8 py-4 bg-[#01A0E2] text-white font-semibold rounded-full hover:bg-[#008bc7] transition-colors duration-200 shadow-[0_8px_18px_rgba(1,160,226,0.18)] text-base"
                >
                  Book your consultation
                </Link>
              </div>
              <div className="reveal-delay-2 order-1 lg:order-2" data-reveal-id="hero-image">
                <div className="hero-image-wrapper relative">
                  <img
                    src="/images/hero.avif"
                    alt="LBL Aesthetics clinic — advanced medical aesthetic treatments in Essex"
                    width={700}
                    height={900}
                    className="w-full h-auto rounded-3xl shadow-[0_12px_30px_rgba(26,26,26,0.10)] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECTION 2: MEET THE TEAM ========== */}
        <section id="team" className="py-20 md:py-28 bg-[#F0EDE8]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="reveal" data-reveal-id="team-label">
                <span className="text-xs font-semibold text-[#01A0E2] uppercase tracking-[0.2em]">
                  Meet The Team
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mt-4 mb-8 reveal-delay-1" data-reveal-id="team-heading">
                Our Expert Practitioners
              </h2>
              <p className="text-base md:text-lg text-[#3D3D3D] leading-relaxed mb-10 reveal-delay-2" data-reveal-id="team-intro">
                Our experienced and highly trained team is dedicated to delivering safe, effective, and natural-looking results. At LBL Aesthetics & Laser, we combine clinical expertise with a personalised approach to ensure every client feels confident, comfortable, and fully cared for throughout their journey.{' '}
                <Link href="/about-us" className="text-[#01A0E2] font-medium underline underline-offset-4 hover:text-[#008bc7] transition-colors">
                  Our experienced
                </Link>{' '}
                practitioners bring years of dedicated service to every appointment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
              {[
                'We take the time to understand your individual goals and create tailored treatment plans designed specifically for you.',
                'Using advanced techniques and high-quality products, we focus on enhancing your natural beauty with subtle, refined results.',
                'Your safety, satisfaction, and overall experience remain our top priorities at every step.',
              ].map((line, i) => (
                <div key={i} className="p-5 bg-white rounded-2xl shadow-[0_4px_14px_rgba(26,26,26,0.06)] reveal-delay-3" data-reveal-id={`team-line-${i}`}>
                  <p className="text-[#3D3D3D] leading-relaxed text-sm md:text-base">{line}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {[
                { name: 'Laura Riley', role: 'CEO | Lead Aesthetic Practitioner', src: '/images/team-3.avif' },
                { name: 'Kate Hadley', role: 'Makeup Artist & Skin Specialist', src: '/images/team-2.avif' },
                { name: 'Star Rose', role: 'Advanced Laser Technician', src: '/images/team-4.avif' },
                { name: 'Jodie Betty', role: 'Endo Fibre Lift & Advanced Injectables Specialist', src: '/images/team-1.avif' },
              ].map((member, i) => (
                <div key={member.name} className="team-card reveal-delay-4 h-full aspect-[4/5]" data-reveal-id={`team-card-${i}`}>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_14px_rgba(26,26,26,0.06)]">
                    <img
                      src={member.src}
                      alt={`${member.name} — ${member.role}`}
                      width={400}
                      height={500}
                      className="min-h-0 w-full flex-1 object-cover"
                    />
                    <div className="flex min-h-[112px] flex-col justify-center p-4 sm:min-h-[128px] sm:p-5">
                      <h3 className="font-heading font-semibold text-lg text-[#1A1A1A]">{member.name}</h3>
                      <p className="mt-1 text-xs leading-snug text-[#6B6B6B] sm:text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SECTION 3: ALL AESTHETIC TREATMENTS ========== */}
        <section id="treatments" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="reveal" data-reveal-id="treatment-label">
                <span className="text-xs font-semibold text-[#01A0E2] uppercase tracking-[0.2em]">
                  All Aesthetic Treatments
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mt-4 reveal-delay-1" data-reveal-id="treatment-heading">
                ALL AESTHETIC TREATMENTS
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {treatments.map((treatment, i) => (
                <Link
                  key={treatment.title}
                  href={treatment.href}
                  className="treatment-card group card-lift reveal-delay-2 block flex h-48 overflow-hidden"
                  data-reveal-id={`treatment-card-${i}`}
                >
                  <div className="w-[90%] relative rounded-l-2xl overflow-hidden">
                    <img
                      src={treatment.src}
                      alt={treatment.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#01A0E2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="inline-flex items-center gap-2 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-[#1A1A1A] shadow-[0_8px_18px_rgba(1,160,226,0.18)]">
                        Learn More
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="w-[10%] bg-[#01A0E2] rounded-r-2xl flex items-center justify-center p-2">
                    <h3 className="font-heading font-semibold text-white tracking-tight rotate-90 origin-center text-sm whitespace-nowrap">{treatment.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SECTION 4: TRAINING ACADEMY ========== */}
        <section id="academy" className="py-20 md:py-28 bg-[#F0EDE8]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="reveal" data-reveal-id="academy-image">
                <div className="rounded-3xl overflow-hidden shadow-[0_12px_30px_rgba(26,26,26,0.10)]">
                  <img
                    src="/images/academy.avif"
                    alt="LBL Aesthetics training academy — CPD-accredited aesthetic courses"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-3xl"
                  />
                </div>
              </div>
              <div className="reveal-delay-2" data-reveal-id="academy-text">
                <span className="text-xs font-semibold text-[#01A0E2] uppercase tracking-[0.2em]">
                  Training Academy
                </span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mt-4 mb-8">
                  Training Academy & Professional Education
                </h2>
                <p className="text-base md:text-lg text-[#3D3D3D] leading-relaxed mb-8">
                  Our training academy provides CPD-accredited aesthetic training courses for professionals who want to develop advanced aesthetic skills.<br /><br />
                  We teach modern cosmetic treatment techniques, clinical safety standards, and practical treatment protocols. Students also receive ongoing support, including our 24-hour support guidance system.<br /><br />
                  This demonstrates our position not only as a treatment provider but also as an education leader in the aesthetic medicine industry.{' '}
                  <Link href="/copy-of-academy-1" className="text-[#01A0E2] font-medium underline underline-offset-4 hover:text-[#008bc7] transition-colors">
                    Our training academy
                  </Link>{' '}
                  continues to set the standard for excellence.
                </p>
                <Link
                  href="/book"
                  className="inline-flex items-center px-8 py-4 bg-[#01A0E2] text-white font-semibold rounded-full hover:bg-[#008bc7] transition-colors duration-200 shadow-[0_8px_18px_rgba(1,160,226,0.18)]"
                >
                  Book your consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECTION 5: AFTERCARE & CLIENT SUPPORT ========== */}
        <section id="aftercare" className="relative py-20 md:py-28 overflow-hidden dot-pattern">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F0EDE8] via-[#FAF9F7] to-[#E8E4DE]" />
          <div className="aftercare-deco" />
          <div className="aftercare-deco-2" />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <div className="reveal" data-reveal-id="aftercare-content">
              <p className="text-xs font-semibold text-[#01A0E2] uppercase tracking-[0.2em] mb-4">
                Your safety, comfort, and results are our priority.
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-8">
                Aftercare & Client Support
              </h2>
              <p className="text-base md:text-lg text-[#3D3D3D] leading-relaxed mb-10">
                We believe great results come with great care. That&apos;s why we provide dedicated aftercare support to help you heal comfortably and achieve the best outcome from your treatment.<br /><br />
                From personalised advice to ongoing guidance, our team is here whenever you need us.
              </p>
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 text-[#01A0E2] font-semibold hover:text-[#008bc7] transition-colors group"
              >
                <span className="accent-underline">See Patient Reviews</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ========== SECTION 6: WHY CHOOSE LBL AESTHETICS ========== */}
        <section id="why-choose" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="reveal-delay-2" data-reveal-id="why-text">
                <span className="text-xs font-semibold text-[#01A0E2] uppercase tracking-[0.2em]">
                  Why Choose LBL
                </span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mt-4 mb-8">
                  Why Choose LBL Aesthetics — A Proud ProQual Approved
                </h2>
                <p className="text-base md:text-lg text-[#3D3D3D] leading-relaxed mb-8">
                  Patients choose LBL Aesthetics because we are a professional aesthetic medical clinic focused on enhancing natural beauty.<br /><br />
                  With over 17+ years of experience, we combine medical knowledge with aesthetic artistry to deliver safe, natural-looking results.<br /><br />
                  We are also proud to be a ProQual-approved centre, accredited by the ProQual Awarding Body, reflecting our commitment to professional standards, safety, and high-quality training.<br /><br />
                  We believe aesthetic treatments should help you look refreshed, confident, and naturally enhanced, not over-treated.
                </p>
                <Link
                  href="/book"
                  className="inline-flex items-center px-8 py-4 bg-[#01A0E2] text-white font-semibold rounded-full hover:bg-[#008bc7] transition-colors duration-200 shadow-[0_8px_18px_rgba(1,160,226,0.18)]"
                >
                  Book your consultation
                </Link>
              </div>
              <div className="reveal" data-reveal-id="why-image">
                <div className="rounded-3xl overflow-hidden shadow-[0_12px_30px_rgba(26,26,26,0.10)]">
                  <img
                    src="/images/why-choose.avif"
                    alt="LBL Aesthetics clinic — advanced medical aesthetic treatments"
                    width={600}
                    height={500}
                    className="w-full h-auto rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECTION 7: WHAT NEXT? ========== */}
        <section id="what-next" className="py-20 md:py-28 bg-[#F0EDE8]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="reveal" data-reveal-id="whatnext-label">
                <span className="text-xs font-semibold text-[#01A0E2] uppercase tracking-[0.2em]">
                  What Next?
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mt-4 reveal-delay-1" data-reveal-id="whatnext-heading">
                WHAT NEXT?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="reveal-delay-2" data-reveal-id="whatnext-faq">
                <button
                  onClick={scrollToFAQ}
                  className="tile-hover w-full group cursor-pointer focus-visible:outline-none"
                  aria-label="Scroll to FAQs section"
                >
                  <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#01A0E2] to-[#008bc7] p-4 md:p-6 min-h-[200px] flex flex-col items-center justify-center">
                    <div className="text-center">
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                        FAQs
                      </h3>
                      <p className="text-white/80 mt-1 text-sm">Scroll to the FAQ section</p>
                      <svg className="w-6 h-6 text-white/60 mx-auto mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 005.197 5.197a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <div className="reveal-delay-4" data-reveal-id="whatnext-work">
                <a
                  href="/our-work"
                  className="tile-hover block w-full group"
                >
                  <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#3D3D3D] p-4 md:p-6 min-h-[200px] flex flex-col items-center justify-center">
                    <div className="text-center">
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                        Our Work
                      </h3>
                      <p className="text-white/80 mt-1 text-sm">View our portfolio</p>
                      <svg className="w-6 h-6 text-white/60 mx-auto mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECTION 8: FAQs ========== */}
        <section id="faq-section" className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="reveal" data-reveal-id="faq-label">
                <span className="text-xs font-semibold text-[#01A0E2] uppercase tracking-[0.2em]">
                  Got questions?
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mt-4 reveal-delay-1" data-reveal-id="faq-heading">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: 'What is an aesthetic clinic, and what does it do?',
                  a: 'An aesthetic clinic is a medical facility that offers non-surgical and minimally invasive treatments aimed at enhancing your appearance. These treatments can include skin rejuvenation, body contouring, anti-ageing therapies, and more — all performed by qualified practitioners to help you look and feel your best.',
                },
                {
                  q: 'How do I choose the best aesthetic clinic near me?',
                  a: 'When searching for an aesthetic clinic near me, always check the practitioner\'s qualifications, accreditations, and real client reviews. LBL Aesthetics & Laser in Chelmsford is a ProQual-approved clinic led by practitioners with over 15 years of experience — giving you the confidence that you are in safe, qualified hands. A trustworthy clinic will always consult before treating, never pressure you, and be fully transparent about every step.',
                },
                {
                  q: 'What should I expect on my first visit to a beauty clinic?',
                  a: 'On your first visit, you\'ll be greeted by a warm, professional team who will take a thorough consultation. They\'ll discuss your goals, medical history, and expectations. Based on this assessment, they\'ll recommend personalised treatment options, explain the procedures, outline expected results, and answer any questions you may have. There\'s no pressure — just expert guidance.',
                },
                {
                  q: 'Are aesthetic treatments safe?',
                  a: 'When performed by qualified, experienced practitioners at a reputable clinic, aesthetic treatments are generally very safe. At LBL Aesthetics, we adhere to the highest clinical safety standards, use premium-quality products, and ensure every treatment is tailored to your individual needs. We always conduct a full consultation and medical review before any procedure.',
                },
                {
                  q: 'How much do aesthetic treatments cost at a beauty clinic?',
                  a: 'Treatment costs vary depending on the procedure, the area being treated, and the number of sessions required. During your consultation, we\'ll provide a clear and transparent breakdown of all costs. We also offer flexible payment options and regularly run seasonal promotions — so be sure to ask about current deals.',
                },
                {
                  q: 'Is there a difference between a beauty clinic and an aesthetics clinic?',
                  a: 'While the terms are sometimes used interchangeably, an aesthetics clinic typically focuses on medically advanced, minimally invasive procedures performed by qualified medical professionals. A traditional beauty clinic may offer more superficial treatments like facials and waxing. At LBL Aesthetics & Laser, we bridge both worlds — combining medical expertise with beauty-focused outcomes.',
                },
                {
                  q: 'How do I find a reliable aesthetics clinic near me in Essex?',
                  a: 'Look for clinics with verifiable practitioner credentials, positive independent reviews, and transparent before-and-after portfolios. LBL Aesthetics in Essex is proud to serve the local community with CPD-accredited practitioners and ProQual accreditation. We encourage prospective clients to book a consultation to meet the team and see our facility firsthand before committing to any treatment.',
                },
                {
                  q: 'Do beauty clinics near me offer personalised treatment plans?',
                  a: 'Yes, the best clinics take a personalised approach to every client. At LBL Aesthetics, we understand that no two faces or bodies are alike. Our practitioners take the time to understand your unique goals, skin type, and lifestyle before designing a tailored treatment plan. This ensures natural-looking, harmonious results that enhance your features rather than creating a one-size-fits-all outcome.',
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-[0_4px_14px_rgba(26,26,26,0.06)] overflow-hidden reveal-delay-2"
                  data-reveal-id={`faq-item-${i}`}
                >
                  <button
                    className="w-full text-left px-6 py-5 flex items-center justify-between focus-visible:outline-none"
                    onClick={() => toggleAccordion(`faq-${i}`)}
                    aria-expanded={accordionOpen === `faq-${i}`}
                    aria-controls={`faq-content-${i}`}
                  >
                    <h3 className="font-heading font-semibold text-base md:text-lg text-[#1A1A1A] pr-4">{faq.q}</h3>
                    <svg
                      className={`w-5 h-5 flex-shrink-0 text-[#01A0E2] transition-transform duration-300 ${
                        accordionOpen === `faq-${i}` ? 'rotate-45' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <div
                    id={`faq-content-${i}`}
                    className={`accordion-content ${accordionOpen === `faq-${i}` ? 'open' : ''}`}
                  >
                    <p className="px-6 pb-5 text-[#3D3D3D] leading-relaxed text-sm md:text-base">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
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
    </div>
  );
}
