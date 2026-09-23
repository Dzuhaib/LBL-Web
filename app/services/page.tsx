import type { Metadata } from 'next';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services — Laser & Aesthetic Treatments in Essex | LBL Aesthetics & Laser',
  description:
    'Explore the full range of treatments at LBL Aesthetics & Laser in Essex: laser tattoo removal, skin rejuvenation, carbon facial, laser hair removal, HIFU, line reducer, Endo Fibre Lift and dermal fillers.',
};

const treatmentCards = [
  { title: 'Laser Tattoo Removal', href: '/services/laser-clinics/laser-tattoo-removal', src: '/Treatments/Laser Treatment.avif' },
  { title: 'Skin Rejuvenation', href: '/services/laser-clinics/skin-rejuvenation', src: '/Treatments/Laser Treatment.avif' },
  { title: 'Carbon Facial', href: '/services/laser-clinics/carbon-facial', src: '/Treatments/Laser Treatment.avif' },
  { title: 'Laser Hair Removal', href: '/services/laser-clinics/laser-hair-removal', src: '/Treatments/Laser Treatment.avif' },
  { title: 'HIFU Treatment Essex', href: '/services/laser-clinics/hifu-treatment-essex', src: '/Treatments/HIFU Skin Tightning treatment.avif' },
  { title: 'Line Reducer', href: '/services/laser-clinics/line-reducer', src: '/Treatments/Laser Treatment.avif' },
  { title: 'Endo Fibre Lift', href: '/services/laser-clinics/endo-fibre-lift', src: '/Treatments/Endo Fibre Lift treatment.avif' },
  { title: 'Dermal Fillers', href: '/services/laser-clinics/dermal-fillers', src: '/Treatments/Dermal Fillers treatments.avif' },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <main>
        <section className="py-20 md:py-28" id="treatments">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="reveal" data-reveal-id="treatment-label">
                <span className="text-xs font-semibold text-[#01A0E2] uppercase tracking-[0.2em]">
                  All Aesthetic Treatments
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mt-4 reveal-delay-1">
                ALL AESTHETIC TREATMENTS
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {treatmentCards.map((treatment, i) => (
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
                      <span className="inline-flex items-center gap-2 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-[#1A1A1A] shadow-lg">
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

        <section className="py-20 md:py-28 bg-[#F0EDE8]" id="cta">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6">
              Not sure which treatment is right for you?
            </h2>
            <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed mb-8">
              Book a consultation and our experienced practitioners will assess your skin and build a
              treatment plan around your goals.
            </p>
            <Link
              href="https://lblaestheticsuk.book.app/"
              className="inline-flex items-center px-8 py-4 bg-[#01A0E2] text-white font-semibold rounded-full hover:bg-[#008bc7] transition-colors duration-200 shadow-lg"
            >
              Book Your Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
