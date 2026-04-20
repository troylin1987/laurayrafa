import { useEffect, useMemo, useRef, useState } from 'react';
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
    cinematic,
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

  const navItems = useMemo(
    () => [
      { id: 'inicio', label: ui.nav.labels.home },
      { id: cinematic.id, label: ui.nav.labels.experience },
      { id: story.id, label: ui.nav.labels.story },
      { id: dateSection.id, label: ui.nav.labels.date },
      { id: agenda.id, label: ui.nav.labels.agenda },
      { id: locations.id, label: ui.nav.labels.location },
      { id: accommodation.id, label: ui.nav.labels.stay },
      { id: guestInfo.id, label: ui.nav.labels.guests },
      { id: multimedia.id, label: ui.nav.labels.media },
      { id: rsvp.id, label: ui.nav.labels.rsvp },
      { id: faq.id, label: ui.nav.labels.faq },
    ],
    [
      ui.nav.labels.home,
      ui.nav.labels.experience,
      ui.nav.labels.story,
      ui.nav.labels.date,
      ui.nav.labels.agenda,
      ui.nav.labels.location,
      ui.nav.labels.stay,
      ui.nav.labels.guests,
      ui.nav.labels.media,
      ui.nav.labels.rsvp,
      ui.nav.labels.faq,
      cinematic.id,
      story.id,
      dateSection.id,
      agenda.id,
      locations.id,
      accommodation.id,
      guestInfo.id,
      multimedia.id,
      rsvp.id,
      faq.id,
    ]
  );

  const [countdown, setCountdown] = useState(() => getCountdownParts(event.dateISO));
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cinematicProgress, setCinematicProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('inicio');
  const cinematicRef = useRef(null);

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

      if (cinematicRef.current) {
        const rect = cinematicRef.current.getBoundingClientRect();
        const total = Math.max(rect.height - window.innerHeight, 1);
        const passed = Math.min(Math.max(-rect.top, 0), total);
        const progress = passed / total;
        setCinematicProgress(progress);
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

  const weddingDateText = useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        dateStyle: 'full',
        timeStyle: 'short',
      }).format(new Date(event.dateISO)),
    [event.dateISO, locale]
  );

  const heroStampText = useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }).format(new Date(event.dateISO)),
    [event.dateISO, locale]
  );

  const countdownItems = [
    { value: countdown.days, label: dateSection.countdownUnits.days },
    { value: countdown.hours, label: dateSection.countdownUnits.hours },
    { value: countdown.minutes, label: dateSection.countdownUnits.minutes },
    { value: countdown.seconds, label: dateSection.countdownUnits.seconds },
  ];

  const heroParallax = Math.min(scrollY * 0.14, 110);
  const glowParallax = Math.min(scrollY * 0.08, 65);
  const cinematicCardStyles = useMemo(() => {
    const p = cinematicProgress;

    return [
      {
        transform: `translate(-50%, -50%)
          translate3d(${(-34 + p * 12).toFixed(2)}%, ${(8 - p * 12).toFixed(2)}%, 0)
          rotate(${(-14 + p * 9).toFixed(2)}deg)
          scale(${(0.95 + p * 0.02).toFixed(3)})`,
        opacity: (0.78 + p * 0.18).toFixed(3),
      },
      {
        transform: `translate(-50%, -50%)
          translate3d(${(0 + p * 2).toFixed(2)}%, ${(18 - p * 22).toFixed(2)}%, 0)
          rotate(${(0 - p * 2).toFixed(2)}deg)
          scale(${(0.9 + p * 0.18).toFixed(3)})`,
        opacity: (0.64 + p * 0.36).toFixed(3),
      },
      {
        transform: `translate(-50%, -50%)
          translate3d(${(32 - p * 16).toFixed(2)}%, ${(10 - p * 18).toFixed(2)}%, 0)
          rotate(${(12 - p * 16).toFixed(2)}deg)
          scale(${(0.86 + p * 0.24).toFixed(3)})`,
        opacity: (0.45 + p * 0.55).toFixed(3),
      },
    ];
  }, [cinematicProgress]);
  const milestoneProgress = cinematicProgress * (cinematic.milestones.length + 0.2);

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

          <a href={`#${rsvp.id}`} className="nav-rsvp">
            {ui.nav.ctaLabel}
          </a>
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

          <div className="hero-media-frame">
            <div className="hero-media-grid">
              {hero.images.map((image) => (
                <img key={image.src} src={image.src} alt={image.alt} loading={image.loading} />
              ))}
            </div>
            <p className="hero-stamp">
              {ui.heroStampPrefix} · {heroStampText}
            </p>
          </div>
        </div>
      </header>

      <main className="page-main">
        <section className="cinematic-scroll track-section" id={cinematic.id} ref={cinematicRef}>
          <div className="cinematic-sticky">
            <div className="cinematic-stage">
              <div className="cinematic-copy">
                <p className="section-overline">
                  {ui.sectionPrefix} 00
                </p>
                <h2>{cinematic.title}</h2>
                <p>{cinematic.subtitle}</p>
                <p className="cinematic-intro">{cinematic.intro}</p>
              </div>

              <div className="cinematic-card-stack" aria-hidden="true">
                {cinematic.cards.map((card, index) => (
                  <article
                    key={card.title}
                    className={`cinematic-card cinematic-card--${index + 1}`}
                    style={cinematicCardStyles[index]}
                  >
                    <img src={card.src} alt={card.alt} loading="lazy" />
                    <div className="cinematic-card-copy">
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              <ol className="cinematic-milestones">
                {cinematic.milestones.map((milestone, index) => (
                  <li key={milestone} className={milestoneProgress >= index + 0.35 ? 'is-active' : ''}>
                    {milestone}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section reveal track-section" id={story.id}>
          <SectionHeader index="01" title={story.title} subtitle={story.subtitle} prefix={ui.sectionPrefix} />

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
              </article>
            ))}
          </div>

          <div className="gallery-row">
            {story.gallery.map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} loading={image.loading} />
            ))}
          </div>
        </section>

        <section className="section reveal track-section" id={dateSection.id}>
          <SectionHeader index="02" title={dateSection.title} subtitle={weddingDateText} prefix={ui.sectionPrefix} />

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
          <SectionHeader index="03" title={agenda.title} subtitle={agenda.subtitle} prefix={ui.sectionPrefix} />

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
            index="04"
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
            index="05"
            title={accommodation.title}
            subtitle={accommodation.subtitle}
            prefix={ui.sectionPrefix}
          />

          <div className="cards-grid">
            {accommodation.cards.map((card) => (
              <article key={card.title} className="info-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <a href={card.url} target="_blank" rel="noreferrer" className="btn btn-small">
                  {card.actionLabel}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal track-section" id={guestInfo.id}>
          <SectionHeader index="06" title={guestInfo.title} subtitle={guestInfo.subtitle} prefix={ui.sectionPrefix} />

          <div className="tips-grid">
            {guestInfo.items.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal track-section" id={multimedia.id}>
          <SectionHeader
            index="07"
            title={multimedia.title}
            subtitle={multimedia.subtitle}
            prefix={ui.sectionPrefix}
          />

          <video controls preload="metadata" className="teaser-video" poster={multimedia.video.poster}>
            <source src={multimedia.video.src} type={multimedia.video.type} />
            {multimedia.video.fallbackText}
          </video>
        </section>

        <section className="section reveal track-section" id={rsvp.id}>
          <SectionHeader index="08" title={rsvp.title} subtitle={rsvp.subtitle} prefix={ui.sectionPrefix} />

          <div className="contact-grid">
            {rsvp.contacts.map((contact) => (
              <article key={contact.name} className="info-card">
                <h3>{contact.name}</h3>
                <p>
                  {rsvp.phoneLabel}: {contact.phone}
                </p>
                <p>
                  {rsvp.emailLabel}: {contact.email}
                </p>
                <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-small">
                  {rsvp.whatsappActionLabel}
                </a>
              </article>
            ))}
          </div>

          <p className="rsvp-template">{rsvp.templateMessage}</p>
        </section>

        <section className="section reveal track-section" id={faq.id}>
          <SectionHeader index="09" title={faq.title} subtitle={faq.subtitle} prefix={ui.sectionPrefix} />

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
      </footer>
    </div>
  );
}
