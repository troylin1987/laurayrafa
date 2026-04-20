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

export default function App() {
  const {
    locale,
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

  const [countdown, setCountdown] = useState(() => getCountdownParts(event.dateISO));
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdownParts(event.dateISO));
    }, 1000);

    return () => clearInterval(timer);
  }, [event.dateISO]);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      { threshold: 0.18 }
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

  const countdownItems = [
    { value: countdown.days, label: dateSection.countdownUnits.days },
    { value: countdown.hours, label: dateSection.countdownUnits.hours },
    { value: countdown.minutes, label: dateSection.countdownUnits.minutes },
    { value: countdown.seconds, label: dateSection.countdownUnits.seconds },
  ];

  const heroParallax = Math.min(scrollY * 0.18, 120);
  const glowParallax = Math.min(scrollY * 0.1, 70);

  return (
    <div className="site-shell">
      <div className="bg-stars" style={{ transform: `translateY(${heroParallax}px)` }} aria-hidden="true" />
      <div className="bg-glow" style={{ transform: `translateY(${glowParallax}px)` }} aria-hidden="true" />

      <header className="hero reveal" id="inicio">
        <p className="hero-kicker">{hero.kicker}</p>
        <h1>{hero.title}</h1>
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
        <div className="hero-media-grid">
          {hero.images.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} loading={image.loading} />
          ))}
        </div>
      </header>

      <main>
        <section className="section reveal" id={story.id}>
          <div className="section-head">
            <h2>{story.title}</h2>
            <p>{story.subtitle}</p>
          </div>

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

        <section className="section reveal" id={dateSection.id}>
          <div className="section-head">
            <h2>{dateSection.title}</h2>
            <p>{weddingDateText}</p>
          </div>

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

        <section className="section reveal" id={agenda.id}>
          <div className="section-head">
            <h2>{agenda.title}</h2>
            <p>{agenda.subtitle}</p>
          </div>

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

        <section className="section reveal" id={locations.id}>
          <div className="section-head">
            <h2>{locations.title}</h2>
            <p>{locations.subtitle}</p>
          </div>

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

        <section className="section reveal" id={accommodation.id}>
          <div className="section-head">
            <h2>{accommodation.title}</h2>
            <p>{accommodation.subtitle}</p>
          </div>

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

        <section className="section reveal" id={guestInfo.id}>
          <div className="section-head">
            <h2>{guestInfo.title}</h2>
            <p>{guestInfo.subtitle}</p>
          </div>

          <div className="tips-grid">
            {guestInfo.items.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id={multimedia.id}>
          <div className="section-head">
            <h2>{multimedia.title}</h2>
            <p>{multimedia.subtitle}</p>
          </div>

          <video controls preload="metadata" className="teaser-video" poster={multimedia.video.poster}>
            <source src={multimedia.video.src} type={multimedia.video.type} />
            {multimedia.video.fallbackText}
          </video>
        </section>

        <section className="section reveal" id={rsvp.id}>
          <div className="section-head">
            <h2>{rsvp.title}</h2>
            <p>{rsvp.subtitle}</p>
          </div>

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

        <section className="section reveal" id={faq.id}>
          <div className="section-head">
            <h2>{faq.title}</h2>
            <p>{faq.subtitle}</p>
          </div>

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
