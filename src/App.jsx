import { useEffect, useMemo, useState } from 'react';
import { siteContent } from './content/siteContent';

function getCountdownParts(targetISO) {
  const target = new Date(targetISO).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { done: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { done: false, days, hours, minutes, seconds };
}

function capitalizeFirst(text) {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function SectionHeader({ index, title, subtitle, prefix }) {
  return (
    <div className="section-head">
      <p className="section-overline">
        {prefix} {index}
      </p>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export default function App() {
  const {
    locale,
    ui,
    event,
    hero,
    story,
    dateSection,
    agenda,
    locations,
    accommodation,
    guestInfo,
    multimedia,
    rsvp,
    faq,
    footer,
  } = siteContent;

  const showIntroVideo = Boolean(multimedia?.enabled);
  const heroImage = hero.images[0] || null;

  const navItems = useMemo(() => {
    const items = [{ id: 'inicio', label: ui.nav.labels.home }];

    if (showIntroVideo) {
      items.push({ id: multimedia.id, label: ui.nav.labels.media });
    }

    items.push(
      { id: story.id, label: ui.nav.labels.story },
      { id: dateSection.id, label: ui.nav.labels.date },
      { id: agenda.id, label: ui.nav.labels.agenda },
      { id: locations.id, label: ui.nav.labels.location },
      { id: accommodation.id, label: ui.nav.labels.stay },
      { id: guestInfo.id, label: ui.nav.labels.guests },
      { id: rsvp.id, label: ui.nav.labels.rsvp },
      { id: faq.id, label: ui.nav.labels.faq }
    );

    return items;
  }, [
    showIntroVideo,
    ui.nav.labels.home,
    ui.nav.labels.media,
    ui.nav.labels.story,
    ui.nav.labels.date,
    ui.nav.labels.agenda,
    ui.nav.labels.location,
    ui.nav.labels.stay,
    ui.nav.labels.guests,
    ui.nav.labels.rsvp,
    ui.nav.labels.faq,
    multimedia.id,
    story.id,
    dateSection.id,
    agenda.id,
    locations.id,
    accommodation.id,
    guestInfo.id,
    rsvp.id,
    faq.id,
  ]);

  const chapterIndexes = useMemo(() => {
    let chapter = 1;
    const next = () => String(chapter++).padStart(2, '0');

    return {
      video: showIntroVideo ? next() : null,
      story: next(),
      date: next(),
      agenda: next(),
      locations: next(),
      accommodation: next(),
      guestInfo: next(),
      rsvp: next(),
      faq: next(),
    };
  }, [showIntroVideo]);

  const [countdown, setCountdown] = useState(() => getCountdownParts(event.dateISO));
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('inicio');
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdownParts(event.dateISO));
    }, 1000);

    return () => clearInterval(timer);
  }, [event.dateISO]);

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section) => section !== null);

    const handleScroll = () => {
      const y = window.scrollY || 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const probe = y + window.innerHeight * 0.38;

      setScrollY(y);
      setScrollProgress(maxScroll > 0 ? Math.min(y / maxScroll, 1) : 0);

      let currentSection = 'inicio';
      for (const section of sectionElements) {
        if (probe >= section.offsetTop) {
          currentSection = section.id;
        }
      }

      setActiveSection((prev) => (prev === currentSection ? prev : currentSection));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  useEffect(() => {
    const sections = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.16 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (eventKey) => {
      if (eventKey.key === 'Escape') {
        setLightboxImage(null);
      }
    };

    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxImage]);

  const weddingDateText = useMemo(() => {
    const raw = new Intl.DateTimeFormat(locale, {
      dateStyle: 'full',
      timeStyle: 'short',
    }).format(new Date(event.dateISO));

    return capitalizeFirst(raw);
  }, [event.dateISO, locale]);

  const countdownItems = [
    { value: countdown.days, label: dateSection.countdownUnits.days },
    { value: countdown.hours, label: dateSection.countdownUnits.hours },
    { value: countdown.minutes, label: dateSection.countdownUnits.minutes },
    { value: countdown.seconds, label: dateSection.countdownUnits.seconds },
  ];

  const heroParallax = Math.min(scrollY * 0.14, 110);
  const glowParallax = Math.min(scrollY * 0.08, 65);

  const openLightbox = (image) => {
    if (!image?.src) return;
    setLightboxImage({
      src: image.src,
      alt: image.alt || 'Imagen ampliada',
    });
  };

  const closeLightbox = () => setLightboxImage(null);

  return (
    <div className="site-shell">
      <div className="bg-stars" style={{ transform: `translateY(${heroParallax}px)` }} aria-hidden="true" />
      <div className="bg-glow" style={{ transform: `translateY(${glowParallax}px)` }} aria-hidden="true" />

      <div className="top-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>

      <nav className={`top-nav ${scrollY > 42 ? 'is-scrolled' : ''}`} aria-label={ui.nav.ariaLabel}>
        <div className="top-nav-inner">
          <a href="#inicio" className="brand-lockup">
            <span className="brand-mark">LR</span>
            <span className="brand-copy">
              <strong>{event.coupleNames}</strong>
              <small>{ui.nav.brandTagline}</small>
            </span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <header className="hero reveal track-section" id="inicio">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">{hero.kicker}</p>
            <h1 className="hero-title">{hero.title}</h1>
            <p className="hero-date">{weddingDateText}</p>
            <p className="hero-lead">{hero.lead}</p>

            <div className="hero-actions">
              {hero.actions.map((action) => (
                <a
                  key={action.href + action.label}
                  href={action.href}
                  className={`btn ${action.style === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>

          {heroImage ? (
            <div className="hero-media-frame">
              <button
                type="button"
                className="hero-image-trigger"
                onClick={() => openLightbox(heroImage)}
                aria-label="Ver foto en grande"
              >
                <img src={heroImage.src} alt={heroImage.alt} loading={heroImage.loading} />
              </button>
              <p className="hero-stamp">{ui.heroStampPrefix}</p>
            </div>
          ) : null}
        </div>
      </header>

      <main className="page-main">
        {showIntroVideo ? (
          <section className="section reveal track-section" id={multimedia.id}>
            <SectionHeader
              index={chapterIndexes.video}
              title={multimedia.title}
              subtitle={multimedia.subtitle}
              prefix={ui.sectionPrefix}
            />

            <video controls preload="metadata" className="teaser-video" poster={multimedia.video.poster}>
              <source src={multimedia.video.src} type={multimedia.video.type} />
              {multimedia.video.fallbackText}
            </video>
          </section>
        ) : null}

        <section className="section reveal track-section" id={story.id}>
          <SectionHeader
            index={chapterIndexes.story}
            title={story.title}
            subtitle={story.subtitle}
            prefix={ui.sectionPrefix}
          />

          <div className="couple-intro-grid">
            {story.couple.map((person) => (
              <article key={person.name} className="info-card couple-card">
                <img src={person.image.src} alt={person.image.alt} loading={person.image.loading} />
                <div>
                  <h3>{person.name}</h3>
                  <p>{person.bio}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="love-timeline">
            {story.timeline.map((item) => (
              <article key={item.year + item.title}>
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.image ? (
                  <button
                    type="button"
                    className="timeline-image-trigger"
                    onClick={() => openLightbox(item.image)}
                    aria-label={`Ampliar imagen de ${item.year}`}
                  >
                    <img src={item.image.src} alt={item.image.alt} loading={item.image.loading || 'lazy'} />
                  </button>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal track-section" id={dateSection.id}>
          <SectionHeader
            index={chapterIndexes.date}
            title={dateSection.title}
            subtitle={weddingDateText}
            prefix={ui.sectionPrefix}
          />

          {countdown.done ? (
            <div className="status-card">{dateSection.doneMessage}</div>
          ) : (
            <div className="countdown-grid" aria-label={dateSection.countdownAriaLabel}>
              {countdownItems.map((item) => (
                <article key={item.label}>
                  <strong>{String(item.value).padStart(2, '0')}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="section reveal track-section" id={agenda.id}>
          <SectionHeader
            index={chapterIndexes.agenda}
            title={agenda.title}
            subtitle={agenda.subtitle}
            prefix={ui.sectionPrefix}
          />

          <div className="timeline">
            {agenda.items.map((item) => (
              <article key={item.time + item.title}>
                <span>{item.time}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal track-section" id={locations.id}>
          <SectionHeader
            index={chapterIndexes.locations}
            title={locations.title}
            subtitle={locations.subtitle}
            prefix={ui.sectionPrefix}
          />

          <div className="cards-grid">
            {locations.cards.map((card) => (
              <article key={card.title} className="info-card">
                <h3>{card.title}</h3>
                <p className="title">{card.place}</p>
                <p>{card.address}</p>
                <a href={card.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-small">
                  {card.actionLabel}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal track-section" id={accommodation.id}>
          <SectionHeader
            index={chapterIndexes.accommodation}
            title={accommodation.title}
            subtitle={accommodation.subtitle}
            prefix={ui.sectionPrefix}
          />

          <div className="cards-grid">
            {accommodation.cards.map((card) => (
              <article key={card.title} className="info-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                {card.url?.startsWith('#') ? (
                  <a href={card.url} className="btn btn-small">
                    {card.actionLabel}
                  </a>
                ) : (
                  <a href={card.url} target="_blank" rel="noreferrer" className="btn btn-small">
                    {card.actionLabel}
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal track-section" id={guestInfo.id}>
          <SectionHeader
            index={chapterIndexes.guestInfo}
            title={guestInfo.title}
            subtitle={guestInfo.subtitle}
            prefix={ui.sectionPrefix}
          />

          <div className="tips-grid">
            {guestInfo.items.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal track-section" id={rsvp.id}>
          <SectionHeader
            index={chapterIndexes.rsvp}
            title={rsvp.title}
            subtitle={rsvp.subtitle}
            prefix={ui.sectionPrefix}
          />

          <div className="contact-grid">
            {rsvp.contacts.map((contact) => (
              <article key={contact.name} className="info-card">
                <h3>{contact.name}</h3>
                <p>
                  {rsvp.phoneLabel}: {contact.phone}
                </p>
                <p>
                  {rsvp.emailLabel}:{' '}
                  <a href={`mailto:${contact.email}`} className="inline-link">
                    {contact.email}
                  </a>
                </p>
                {contact.whatsappLinks?.map((item) => (
                  <a key={item.url} href={item.url} target="_blank" rel="noreferrer" className="btn btn-small">
                    {item.label}
                  </a>
                ))}
              </article>
            ))}
          </div>

          <p className="rsvp-template">{rsvp.templateMessage}</p>
        </section>

        <section className="section reveal track-section" id={faq.id}>
          <SectionHeader
            index={chapterIndexes.faq}
            title={faq.title}
            subtitle={faq.subtitle}
            prefix={ui.sectionPrefix}
          />

          <div className="faq-list">
            {faq.items.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer reveal">
        <p>{footer.text}</p>
        <p className="cookie-notice">{footer.cookieNotice}</p>
      </footer>

      {lightboxImage ? (
        <button type="button" className="lightbox-overlay" onClick={closeLightbox} aria-label="Cerrar imagen ampliada">
          <img src={lightboxImage.src} alt={lightboxImage.alt} />
          <span>Toca para cerrar</span>
        </button>
      ) : null}
    </div>
  );
}
