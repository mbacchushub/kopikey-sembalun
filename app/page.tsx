"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { getContent, type Locale } from "./content";

/* ——— Add your Google Maps profile below ——— */
/* Embed URL: Google Maps → your place → Share → Embed a map → copy iframe src */
const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.401936279193!2d116.51316967624712!3d-8.362062284280615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc2f36929b8153%3A0x6c48507d6606a235!2sKopikey%20Sembalun!5e0!3m2!1sen!2sid!4v1770783315351!5m2!1sen!2sid";

/* Place ID for "Leave a review" link (from Google Business Profile or Place ID finder) */
const GOOGLE_PLACE_ID = "B7SJN1QTvPIOxLPFW";

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = getContent(locale);

  const setEn = useCallback(() => setLocale("en"), []);
  const setId = useCallback(() => setLocale("id"), []);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* ——— Language toggle ——— */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 flex justify-end p-4 md:p-6"
          aria-label="Language"
        >
          <div className="flex gap-1 rounded-full bg-white/90 backdrop-blur-sm shadow-soft px-1 py-1">
            <button
              type="button"
              onClick={setEn}
              aria-pressed={locale === "en"}
              aria-label="English"
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                locale === "en"
                  ? "bg-espresso text-beige"
                  : "text-espresso hover:bg-beige/50"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={setId}
              aria-pressed={locale === "id"}
              aria-label="Bahasa Indonesia"
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                locale === "id"
                  ? "bg-espresso text-beige"
                  : "text-espresso hover:bg-beige/50"
              }`}
            >
              ID
            </button>
          </div>
        </nav>

        {/* ——— 1) HERO ——— */}
        <header className="relative min-h-[100dvh] flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src="/hero.jpg"
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>

          <div
            className="absolute inset-x-0 bottom-0 h-1/2 max-h-[60vh] bg-gradient-to-t from-espresso/85 via-espresso/30 to-transparent pointer-events-none z-[1]"
            aria-hidden
          />

          <div className="relative z-10 max-w-3xl animate-fade-in-up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-cream tracking-tight [text-shadow:0_0_1px_rgba(0,0,0,0.8),0_1px_4px_rgba(0,0,0,0.6),0_2px_12px_rgba(0,0,0,0.5)]">
              {t.hero.title}
            </h1>
            <p className="font-serif text-xl md:text-2xl text-beige mt-2 md:mt-3 [text-shadow:0_0_1px_rgba(0,0,0,0.75),0_1px_3px_rgba(0,0,0,0.55),0_2px_8px_rgba(0,0,0,0.45)]">
              {t.hero.tagline}
            </p>
            <p className="text-cream/90 mt-4 max-w-xl text-lg [text-shadow:0_0_1px_rgba(0,0,0,0.7),0_1px_3px_rgba(0,0,0,0.5)]">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#visit"
                className="inline-flex items-center justify-center rounded-full bg-cream text-espresso px-6 py-3 font-medium shadow-soft hover:bg-beige transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-espresso"
              >
                {t.hero.ctaVisit}
              </a>
              <a
                href="#blends"
                className="inline-flex items-center justify-center rounded-full border-2 border-cream/80 text-cream px-6 py-3 font-medium hover:bg-cream/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-espresso"
              >
                {t.hero.ctaExplore}
              </a>
            </div>
          </div>
        </header>

        <main>
          {/* ——— 2) ABOUT ——— */}
          <section
            id="about"
            className="py-20 md:py-28 px-6 md:px-12 bg-cream"
            aria-labelledby="about-heading"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="about-heading" className="font-serif text-3xl md:text-4xl text-espresso">
                {t.about.title}
              </h2>
              <p className="font-serif text-xl text-forest mt-2">{t.about.subtitle}</p>
              <p className="mt-6 text-espresso/90 leading-relaxed">
                {t.about.founded}
              </p>
              <p className="mt-4 text-espresso/90 leading-relaxed">
                {t.about.story}
              </p>
            </div>
          </section>

          {/* ——— 3) SIGNATURE BLENDS ——— */}
          <section
            id="blends"
            className="py-20 md:py-28 px-6 md:px-12 bg-beige/40"
            aria-labelledby="blends-heading"
          >
            <div className="max-w-5xl mx-auto">
              <h2 id="blends-heading" className="font-serif text-3xl md:text-4xl text-espresso text-center">
                {t.blends.title}
              </h2>
              <p className="font-serif text-xl text-forest text-center mt-2">
                {t.blends.subtitle}
              </p>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12">
                {(["jomblo", "strawberry", "honeyCoconut"] as const).map((key) => (
                  <article
                    key={key}
                    className="group bg-white rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="font-serif text-2xl text-espresso">
                      {t.blends[key].name}
                    </h3>
                    <p className="mt-3 text-espresso/80 text-sm md:text-base leading-relaxed">
                      {t.blends[key].descShort}
                    </p>
                    <p className="mt-2 text-espresso/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                      {t.blends[key].desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ——— 4) EXPERIENCE ——— */}
          <section
            id="experience"
            className="py-20 md:py-28 px-6 md:px-12 bg-cream relative overflow-hidden"
            aria-labelledby="experience-heading"
          >
            <div className="absolute inset-0 bg-forest/5" aria-hidden />
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 id="experience-heading" className="font-serif text-3xl md:text-4xl text-espresso">
                {t.experience.title}
              </h2>
              <p className="font-serif text-xl text-forest mt-2">{t.experience.subtitle}</p>
              <p className="mt-6 text-espresso/90 leading-relaxed">
                {t.experience.body}
              </p>
            </div>
          </section>

          {/* ——— 5) GOOGLE MAPS ——— */}
          <section
            id="map"
            className="py-16 md:py-20 px-6 md:px-12 bg-beige/30"
            aria-labelledby="map-heading"
          >
            <div className="max-w-4xl mx-auto">
              <h2 id="map-heading" className="font-serif text-3xl text-espresso text-center">
                {t.map.title}
              </h2>
              <p className="text-espresso/80 text-center mt-2">{t.map.address}</p>
              <p className="text-espresso/70 text-sm text-center mt-2 max-w-2xl mx-auto">
                {t.map.seoText}
              </p>
              <div className="mt-8 rounded-2xl overflow-hidden shadow-soft-lg bg-beige-warm/50 min-h-[320px] flex items-center justify-center">
                {MAPS_EMBED_SRC ? (
                  <iframe
                    src={MAPS_EMBED_SRC}
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kopikey Sembalun location map"
                    className="min-h-[320px]"
                  />
                ) : (
                  <p className="text-espresso/60 text-sm p-6 text-center">
                    Placeholder: Add your Google Maps embed iframe here.
                  </p>
                )}
              </div>
              {GOOGLE_PLACE_ID && (
                <div className="mt-6 text-center">
                  <a
                    href={`https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-espresso text-cream px-6 py-3 font-medium hover:bg-espresso-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
                  >
                    {t.google.ctaReview}
                  </a>
                </div>
              )}
            </div>
          </section>

          {/* ——— 6) TESTIMONIAL ——— */}
          <section
            className="py-20 md:py-24 px-6 md:px-12 bg-beige/40"
            aria-label="Testimonial"
          >
            <blockquote className="max-w-2xl mx-auto text-center">
              <p className="font-serif text-xl md:text-2xl text-espresso italic leading-relaxed">
                &ldquo;{t.testimonial.quote}&rdquo;
              </p>
              <cite className="mt-4 block text-espresso/70 not-italic text-sm">
                {t.testimonial.author}
              </cite>
            </blockquote>
          </section>

          {/* ——— 7) VISIT / CTA ——— */}
          <section
            id="visit"
            className="py-20 md:py-28 px-6 md:px-12 bg-forest text-cream"
            aria-labelledby="visit-heading"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h2 id="visit-heading" className="font-serif text-3xl md:text-4xl">
                {t.visit.title}
              </h2>
              <p className="font-serif text-xl text-cream/90 mt-2">{t.visit.subtitle}</p>
              <p className="mt-6 text-cream/90 leading-relaxed">
                {t.visit.body}
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kopikey+Sembalun+Sembalun+Lombok"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 rounded-full bg-cream text-forest px-6 py-3 font-medium hover:bg-beige transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
              >
                {t.visit.cta}
              </a>
            </div>
          </section>

          {/* ——— 8) FOOTER ——— */}
          <footer className="py-12 md:py-16 px-6 md:px-12 bg-espresso text-beige">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="font-serif text-xl font-semibold text-cream">{t.footer.name}</p>
                <p className="mt-1 text-beige/90 text-sm">{t.footer.location}</p>
                <p className="mt-1 text-beige/70 text-sm">{t.footer.since}</p>
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={setEn}
                  aria-current={locale === "en"}
                  className="text-sm text-beige/90 hover:text-cream underline-offset-2 hover:underline"
                >
                  {t.footer.langEn}
                </button>
                <button
                  type="button"
                  onClick={setId}
                  aria-current={locale === "id"}
                  className="text-sm text-beige/90 hover:text-cream underline-offset-2 hover:underline"
                >
                  {t.footer.langId}
                </button>
              </div>
            </div>
            <p className="max-w-2xl mx-auto mt-8 text-beige/60 text-xs text-center md:text-left">
              {t.footer.seo}
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
