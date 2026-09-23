import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Laser Clinic in Essex | LBL Aesthetics & Laser',
  description:
    'Discover LBL Aesthetics & Laser, a trusted skin and laser clinic in Chelmsford, Essex, offering advanced laser treatments with personal care and medical-grade technology.',
};

const services = [
  {
    title: 'Laser Tattoo Removal',
    description: 'Professional laser treatment designed to reduce unwanted tattoos with careful, targeted sessions.',
    href: '/services/laser-clinics/laser-tattoo-removal',
    src: '/Treatments/Laser Treatment.avif',
  },
  {
    title: 'Laser Hair Removal',
    description: 'Long-lasting hair reduction tailored to your skin type, hair type, and personal comfort.',
    href: '/services/laser-clinics/laser-hair-removal',
    src: '/services/general.avif',
  },
  {
    title: 'Carbon Facial',
    description: 'A deeply cleansing, resurfacing treatment that helps reveal brighter, smoother-looking skin.',
    href: '/services/laser-clinics/carbon-facial',
    src: '/services/general.avif',
  },
  {
    title: 'Skin Rejuvenation',
    description: 'Advanced light-based treatments designed to support tone, texture, and natural-looking radiance.',
    href: '/services/laser-clinics/skin-rejuvenation',
    src: '/Treatments/HIFU Skin Tightning treatment.avif',
  },
];

const reasons = [
  {
    title: '15+ Years of Specialist Experience',
    description: 'Our team brings over a decade and a half of combined expertise in laser and aesthetic treatments. That experience means every treatment is delivered with a level of skill, precision, and clinical understanding that only comes from years of real-world practice across thousands of different skin types and concerns.',
  },
  {
    title: 'Advanced, Medical-Grade Technology',
    description: 'At our skin and laser clinic, we use only the most up-to-date, clinically approved laser equipment available. Every device has been selected for its proven safety record and ability to deliver measurable, consistent results because your skin deserves nothing less.',
  },
  {
    title: 'Genuinely Personalised Treatment Plans',
    description: 'We never use a one-size-fits-all approach. Every client who visits our laser light clinic in Chelmsford receives a thorough skin consultation before any treatment begins, allowing us to build a plan tailored specifically to their skin type, concerns, and goals.',
  },
  {
    title: 'A Clinic That Truly Cares',
    description: 'As a family-run business, the personal connection we build with each client matters to us enormously. We are here to support you throughout your journey, answer every question you have, and make sure you always leave feeling looked after.',
  },
];

const consultationHref = 'https://lblaestheticsuk.book.app/';

export default function LaserClinicsPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <main>
        <section className="overflow-hidden bg-[#F0EDE8] pt-28 md:pt-36 lg:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-2 lg:gap-20 lg:pb-28">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#01A0E2]">Laser Clinics</span>
              <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-5xl md:text-6xl">
                Laser Clinic in Essex
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B6B6B]">
                Welcome to LBL Aesthetics, one of Essex&apos;s most trusted skin and laser clinics, proudly based in the heart of Chelmsford. With over 15 years of hands-on experience in advanced laser treatments, our expert team delivers safe, effective, and genuinely life-changing results for every client who walks through our doors.
              </p>
              <Link
                href={consultationHref}
                className="mt-8 inline-flex items-center rounded-full bg-[#01A0E2] px-8 py-4 font-semibold text-white shadow-[0_8px_18px_rgba(1,160,226,0.18)] transition-colors hover:bg-[#008bc7]"
              >
                Book your consultation
              </Link>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-[0_12px_30px_rgba(26,26,26,0.10)]">
              <img src="/services/laser.avif" alt="Laser clinic treatment at LBL Aesthetics in Essex" width={800} height={600} className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 overflow-hidden rounded-3xl shadow-[0_12px_30px_rgba(26,26,26,0.10)] lg:order-1">
              <img src="/services/general.avif" alt="Advanced laser and skin treatments in Chelmsford" width={800} height={600} className="h-full w-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#01A0E2]">LBL Aesthetic Laser Clinic Essex</span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl">Carefully considered laser treatments</h2>
              <p className="mt-6 leading-relaxed text-[#3D3D3D]">
                From laser hair removal and tattoo removal to carbon facials and skin rejuvenation, our laser clinic brings together the very latest in clinically proven light and energy-based technology to treat a wide range of skin concerns with precision, care, and zero compromise on safety. Whatever your goal, we have the expertise and the equipment to help you achieve it.
              </p>
              <p className="mt-5 leading-relaxed text-[#3D3D3D]">
                At LBL, we have built our laser clinic around one simple belief: every client deserves outstanding care, visible results, and complete confidence in the people treating them. From the moment you reach out to us, your safety, comfort, and satisfaction are the guiding principles behind every decision we make and every treatment we deliver.
              </p>
              <Link href={consultationHref} className="mt-8 inline-flex items-center rounded-full bg-[#01A0E2] px-8 py-4 font-semibold text-white shadow-[0_8px_18px_rgba(1,160,226,0.18)] transition-colors hover:bg-[#008bc7]">
                Book a treatment
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#F0EDE8] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#01A0E2]">Trusted Laser Clinic in Essex</span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl">A personal approach to skin and laser care</h2>
                <p className="mt-6 leading-relaxed text-[#3D3D3D]">
                  As a family-run skin and laser clinic, we bring something that larger corporate clinics simply cannot: a genuinely personal approach. We take the time to understand you as an individual, including your skin, concerns, goals, and history. That understanding allows us to tailor every treatment plan with the precision and care that consistently gets our clients the results they are looking for.
                </p>
                <p className="mt-5 leading-relaxed text-[#3D3D3D]">
                  We also know that trust is earned, not given. That is why everything we do at our laser clinic is underpinned by rigorous professional standards, medically approved equipment, and a team that continuously invests in its education and expertise. When you choose LBL as your laser light clinic in Chelmsford, you are choosing a team that is as serious about your results as you are.
                </p>
                <p className="mt-5 leading-relaxed text-[#3D3D3D]">
                  Every treatment at LBL is carried out using medical-grade laser and light-based equipment, chosen for its proven safety record and clinical results. Our team stays up to date with the latest advances in laser technology and technique, so your treatment plan is built around your skin, not a generic protocol.
                </p>
                <Link href={consultationHref} className="mt-8 inline-flex items-center rounded-full bg-[#01A0E2] px-8 py-4 font-semibold text-white shadow-[0_8px_18px_rgba(1,160,226,0.18)] transition-colors hover:bg-[#008bc7]">
                  Book a treatment
                </Link>
              </div>
              <div className="overflow-hidden rounded-3xl shadow-[0_12px_30px_rgba(26,26,26,0.10)]">
                <img src="/services/hero.avif" alt="LBL Aesthetics laser clinic treatment" width={800} height={600} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28" id="services">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#01A0E2]">All Laser Clinic Services</span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl lg:text-5xl">What we offer at LBL Aesthetics</h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#6B6B6B] md:text-lg">Advanced treatments delivered with care, precision, and a focus on natural-looking results.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Link key={service.title} href={service.href} className="group overflow-hidden rounded-2xl bg-white shadow-[0_4px_14px_rgba(26,26,26,0.06)] transition-transform duration-200 hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={service.src} alt={service.title} width={600} height={450} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-semibold text-[#1A1A1A] group-hover:text-[#01A0E2]">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F0EDE8] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#01A0E2]">Why Choose LBL?</span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl">Why choose LBL as your laser clinic in Essex?</h2>
              <p className="mt-6 text-lg leading-relaxed text-[#3D3D3D]">With so many laser clinics to choose from, it is a fair question and one we take seriously. We do not just want to be another option. We want to be the clinic you recommend to everyone you know, because the results and the experience genuinely speak for themselves.</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason.title} className="rounded-2xl bg-white p-7 shadow-[0_4px_14px_rgba(26,26,26,0.06)]">
                  <h3 className="font-heading text-xl font-semibold text-[#1A1A1A]">{reason.title}</h3>
                  <p className="mt-3 leading-relaxed text-[#3D3D3D]">{reason.description}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-[#3D3D3D]">Whether you are searching for a trusted laser clinic, a specialist skin laser clinic, or simply the best laser clinic Chelmsford has to offer, LBL Aesthetics is ready to welcome you.</p>
            <div className="mt-8 text-center">
              <Link href={consultationHref} className="inline-flex items-center rounded-full bg-[#01A0E2] px-8 py-4 font-semibold text-white shadow-[0_8px_18px_rgba(1,160,226,0.18)] transition-colors hover:bg-[#008bc7]">Book a treatment</Link>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#01A0E2]">What We Offer</span>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl">What we offer at our laser clinic</h2>
              <p className="mt-6 leading-relaxed text-[#3D3D3D]">At LBL Laser Clinic in Chelmsford, we provide a comprehensive and carefully curated range of advanced laser and skin treatments, all designed to deliver real, lasting results in a safe and professional environment. Whether you are visiting us for the first time or returning as a long-standing client, you will always receive the same exceptional standard of care and clinical expertise.</p>
              <p className="mt-5 leading-relaxed text-[#3D3D3D]">Our skin and laser clinic specialises in treatments that harness the power of advanced laser and light-based technology to address concerns that go far deeper than the surface. Every piece of equipment has been chosen for its proven clinical effectiveness, safety profile, and ability to deliver consistently high-quality results. We do not follow trends; we invest in what genuinely works.</p>
              <Link href={consultationHref} className="mt-8 inline-flex items-center rounded-full bg-[#01A0E2] px-8 py-4 font-semibold text-white shadow-[0_8px_18px_rgba(1,160,226,0.18)] transition-colors hover:bg-[#008bc7]">Book a treatment</Link>
            </div>
            <div className="order-1 overflow-hidden rounded-3xl shadow-[0_12px_30px_rgba(26,26,26,0.10)] lg:order-2">
              <img src="/services/laser.avif" alt="Advanced laser clinic equipment at LBL Aesthetics" width={800} height={600} className="h-full w-full object-cover" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
