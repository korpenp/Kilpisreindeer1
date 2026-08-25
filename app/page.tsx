import Image from "next/image";
import { BookingForm } from "./booking-form";
import { ImageCycle } from "./image-cycle";

const experiences = [
  {
    number: "01",
    eyebrow: "Approx. 2 hours",
    title: "Sámi Experience",
    price: "€95",
    text: "Spend time at our family reindeer farm, meet and feed the herd, and hear personal stories about Sámi culture, reindeer herding and life in Kilpisjärvi.",
    details: ["Family-hosted storytelling", "Reindeer feeding and photos", "Warm Kammi hospitality"],
    images: {
      primary: "/farm/family-night-reindeer.webp",
      secondary: "/farm/reindeer-herder-stream.webp",
      tertiary: "/farm/sami-host.webp",
    },
    alt: "The Tornensis family welcoming guests to meet reindeer and learn about Sámi life",
    imageClass: "experience-image-sami",
  },
  {
    number: "02",
    eyebrow: "Approx. 1 hour",
    title: "Arctic Reindeer Experience",
    price: "€70",
    text: "Meet the reindeer at our family farm, enjoy a traditional wooden sleigh ride around the farm, and gather for a short talk by the open fireplace.",
    details: ["Traditional wooden sleigh ride around the farm", "Guided reindeer feeding", "Short fireside talk"],
    images: {
      primary: "/farm/reindeer-sleigh-day.webp",
      secondary: "/farm/reindeer-winter-sunset.webp",
      tertiary: "/farm/sleigh-team.webp",
    },
    alt: "A family reindeer sleigh ride and guided feeding at the farm",
    imageClass: "experience-image-arctic",
  },
];

const visitFacts = [
  {
    label: "Family hosted",
    text: "Your host is a member of the Tornensis family, sharing a living reindeer-herding tradition.",
  },
  {
    label: "Easy to reach",
    text: "Our farm is in the middle of Kilpisjärvi, within walking distance of local hotels and easy for coaches to reach.",
  },
  {
    label: "Made for your group",
    text: "We welcome couples, families and groups of up to 50 guests. Private visits are available by request.",
  },
  {
    label: "Dress for the outdoors",
    text: "Please wear your own proper outdoor clothing: warm layered clothing, suitable winter footwear, a hat and gloves. Outdoor clothing is not provided.",
  },
];

const instagramPhotos = [
  {
    images: {
      primary: "/farm/frosty-reindeer-portrait.webp",
      secondary: "/farm/reindeer-portrait.webp",
    },
    alt: "Reindeer portraits at the family farm",
  },
  {
    images: {
      primary: "/farm/winter-sleigh-trail.webp",
      secondary: "/farm/sleigh-view.webp",
    },
    alt: "Reindeer sleighs travelling across the snow-covered lake in Kilpisjärvi",
  },
  {
    images: {
      primary: "/farm/kammi-gathering.webp",
      secondary: "/farm/open-fire.webp",
    },
    alt: "Warm moments by the fire at the family farm",
  },
  {
    images: {
      primary: "/farm/sunset-reindeer.webp",
      secondary: "/farm/white-reindeer.webp",
    },
    alt: "Reindeer in the changing winter light",
  },
  {
    images: {
      primary: "/farm/mountain-sunset.webp",
      secondary: "/farm/winter-field.webp",
    },
    alt: "Winter light across the Kilpisjärvi landscape",
  },
  {
    images: {
      primary: "/farm/heritage-reindeer-ride.webp",
      secondary: "/farm/feeding-summer.webp",
    },
    alt: "A family history of reindeer life in Kilpisjärvi",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand brand-logo" href="#top" aria-label="Kilpis Reindeer home">
          <Image
            className="brand-logo-image"
            src="/brand/kilpisjarvi-reindeer-logo.png"
            alt=""
            width={1120}
            height={872}
            unoptimized
            priority
          />
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#experience">Experiences</a>
          <a href="#story">Our story</a>
          <a href="#getting-here">Getting here</a>
          <a href="#visit">Your visit</a>
          <a href="/faq">FAQ</a>
        </nav>

        <a className="header-book" href="#book">
          Book now <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <ImageCycle
          images={{
            primary: "/farm/feeding-winter.webp",
            secondary: "/farm/sleigh-team.webp",
          }}
          alt="Guests meeting reindeer during a winter visit at the family farm"
          priority
          sizes="100vw"
        />
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/farm/feeding-winter.webp"
          aria-hidden="true"
        >
          <source src="/farm/three-video-hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="hero-scrim" />

        <div className="hero-content shell">
          <p className="eyebrow eyebrow-light">Family reindeer farm · Kilpisjärvi, Finland</p>
          <h1 id="hero-title">Meet reindeer.<br />Feel at home in Sápmi.</h1>
          <p className="hero-lead">
            Genuine, family-hosted reindeer experiences in Finnish Lapland —
            warm, personal visits far from crowds and commercial tourism.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#book">
              Book your visit <span aria-hidden="true">→</span>
            </a>
            <a className="button button-ghost" href="https://wa.me/358405968478" target="_blank" rel="noreferrer">
              WhatsApp us <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-notes" aria-label="Experience summary">
          <span>Family hosted</span>
          <span>Personal visits</span>
          <span>All year round</span>
        </div>
      </section>

      <section className="introduction" id="story">
        <div className="shell intro-grid">
          <div className="intro-heading">
            <p className="eyebrow">Welcome to our farm</p>
            <h2>Reindeer are part of our everyday life.</h2>
          </div>
          <div className="intro-copy">
            <p className="intro-lead">
              We are the Tornensis family. When you visit us, you are welcomed
              to our family farm — not brought to a staged, mass-tourism
              attraction.
            </p>
            <p>
              Our experiences are a chance to meet the reindeer, ask questions
              and understand how the herd, the seasons and Sámi culture are
              connected. We share this place with care for the animals, the
              landscape and the stories that belong here.
            </p>
            <a className="underlined-link" href="#book">
              Plan your visit <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="shell family-panel">
          <div className="family-photo family-photo-winter">
            <ImageCycle
              images={{
                primary: "/farm/heritage-family-rope.webp",
                secondary: "/farm/heritage-family-camp.webp",
                tertiary: "/farm/heritage-family-dogs.webp",
              }}
              alt="Historic photographs of an earlier generation of the Tornensis Sámi family living with reindeer on the fells"
              sizes="(max-width: 760px) 100vw, 56vw"
              delay={2.2}
            />
          </div>
          <div className="family-panel-copy">
            <p className="eyebrow eyebrow-gold">A living tradition</p>
            <p>
              From the first hello to the final cup by the fire, your visit is
              guided by the family and the rhythm of the herd.
            </p>
            <div className="signature-line">The Tornensis family</div>
          </div>
        </div>
      </section>

      <section className="experiences" id="experience">
        <div className="shell section-head section-head-dark">
          <div>
            <p className="eyebrow eyebrow-light">Choose your experience</p>
            <h2>Come closer to reindeer life.</h2>
          </div>
          <p>
            Every visit is personal, unhurried and arranged around the
            season, the weather and the wellbeing of our reindeer. You are
            welcomed as a guest at our farm, not simply one of many in a
            commercial crowd.
          </p>
        </div>

        <div className="shell experience-list">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.number}>
              <div className={`experience-image ${experience.imageClass}`}>
                <ImageCycle
                  images={experience.images}
                  alt={experience.alt}
                  sizes="(max-width: 760px) 100vw, 46vw"
                  delay={Number(experience.number) * 2.7}
                />
              </div>
              <div className="experience-content">
                <p className="experience-eyebrow">{experience.eyebrow}</p>
                <h3>{experience.title}</h3>
                <p className="experience-price">{experience.price}<span> per person</span></p>
                <p>{experience.text}</p>
                <ul>
                  {experience.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
                <a className="underlined-link underlined-link-light" href="#book">
                  Ask about availability <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="kammi-section">
        <div className="shell kammi-grid">
          <div className="kammi-copy">
            <p className="eyebrow">Time by the fire</p>
            <h2>Stories are better shared warm.</h2>
            <p>
              Step inside our Kammi for warm drinks, sweet pastry and time to
              talk. Depending on your visit, you can also add a traditional
              reindeer meat soup lunch or a longer private programme.
            </p>
            <a className="button button-dark" href="#book">
              Enquire about add-ons <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="kammi-photo">
            <ImageCycle
              images={{
                primary: "/farm/kammi-gathering.webp",
                secondary: "/farm/open-fire.webp",
              }}
              alt="Guests and open-fire moments at the family Kammi"
              sizes="(max-width: 760px) 100vw, 50vw"
              delay={9.4}
            />
          </div>
        </div>
      </section>

      <section className="museum-section" aria-labelledby="museum-title">
        <div className="shell museum-grid">
          <div className="museum-photo">
            <ImageCycle
              images={{
                primary: "/farm/museum-building-arch.webp",
                secondary: "/farm/museum-building-frame.webp",
              }}
              alt="The new open-air Sámi museum taking shape at the family farm"
              sizes="(max-width: 760px) 100vw, 46vw"
              delay={5.8}
            />
          </div>
          <div className="museum-copy">
            <p className="eyebrow">Coming this winter</p>
            <h2 id="museum-title">A new open-air Sámi museum.</h2>
            <p>
              We are proud to announce the opening of our open-air Sámi museum
              this coming winter. Built at our family farm, it will share
              stories of Sámi life, craftsmanship and reindeer herding in this
              landscape.
            </p>
            <p className="museum-note">
              Ask us about including a museum visit with your time at the farm.
            </p>
            <a className="button button-dark" href="#book">
              Enquire about the museum <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="santa-section" aria-labelledby="santa-title">
        <div className="shell santa-grid">
          <div className="santa-copy">
            <p className="eyebrow eyebrow-gold">Winter enquiries</p>
            <h2 id="santa-title">A Santa Claus visit at the farm.</h2>
            <p>
              We offer a private Santa Claus visit as part of our winter
              programme at the family farm.
            </p>
            <p className="santa-note">
              Santa Claus visits are available by enquiry only and cannot be
              booked online.
            </p>
            <a
              className="button button-light"
              href="mailto:lars@kilpisjarvireindeer.com?subject=Santa%20Claus%20visit%20enquiry"
            >
              Enquire about a Santa visit <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="santa-photo">
            <ImageCycle
              images={{
                primary: "/farm/santa-reindeer.webp",
                secondary: "/farm/santa-sleigh.webp",
                tertiary: "/farm/santa-landscape.webp",
              }}
              alt="Santa Claus visiting reindeer at the Kilpisjärvi family farm"
              sizes="(max-width: 760px) 100vw, 52vw"
              delay={8.6}
            />
          </div>
        </div>
      </section>

      <section className="landscape-section" aria-labelledby="landscape-title">
        <div className="shell landscape-grid">
          <div className="landscape-photo">
            <ImageCycle
              images={{
                primary: "/farm/kilpisjarvi-winter-sunset.webp",
                secondary: "/farm/mountain-sunset.webp",
              }}
              alt="Winter sunsets over the fells and lake in Kilpisjärvi"
              sizes="(max-width: 760px) 100vw, 40vw"
              delay={11.6}
            />
          </div>
          <div className="landscape-copy">
            <p className="eyebrow eyebrow-gold">The rhythm of the north</p>
            <h2 id="landscape-title">The landscape is part of the story.</h2>
            <p>
              Around Kilpisjärvi, changing light, open fells and the seasons
              set the pace. A visit to our farm is a chance to slow down and
              experience this place through reindeer life.
            </p>
          </div>
        </div>
      </section>

      <section className="gallery" aria-label="Kilpis Reindeer Instagram photos">
        <div className="shell gallery-heading">
          <div>
            <p className="eyebrow">From our Instagram</p>
            <h2>@kilpisreindeer</h2>
          </div>
          <a className="instagram-link" href="https://www.instagram.com/kilpisreindeer/" target="_blank" rel="noreferrer">
            See more photos on Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="shell instagram-grid">
          {instagramPhotos.map((photo, index) => (
            <a
              className="instagram-tile"
              href="https://www.instagram.com/kilpisreindeer/"
              target="_blank"
              rel="noreferrer"
              key={photo.images.primary}
              aria-label="See more Kilpis Reindeer photos on Instagram"
            >
              <ImageCycle
                images={photo.images}
                alt={photo.alt}
                sizes="(max-width: 760px) 50vw, 33vw"
                delay={index * 1.8}
              />
              <span>@kilpisreindeer <b aria-hidden="true">↗</b></span>
            </a>
          ))}
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="shell section-head">
          <div>
            <p className="eyebrow">Good to know</p>
            <h2>Easy to find.<br />Easy to book.</h2>
          </div>
          <p>
            Our family farm is in the middle of Kilpisjärvi - close to the
            hotels, easy for coaches and simple to reach without a transfer.
          </p>
        </div>

        <div className="shell visit-facts">
          {visitFacts.map((fact, index) => (
            <article key={fact.label}>
              <span>0{index + 1}</span>
              <h3>{fact.label}</h3>
              <p>{fact.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="arrival-section" id="getting-here" aria-labelledby="arrival-title">
        <div className="shell section-head">
          <div>
            <p className="eyebrow">Getting here</p>
            <h2 id="arrival-title">Easy to reach by bus.</h2>
          </div>
          <p>
            Kilpisjärvi is connected by coach to both Tromsø and Rovaniemi.
            Choose the route that suits your trip, then check the latest
            timetable before you travel.
          </p>
        </div>

        <div className="shell arrival-grid">
          <article className="arrival-card">
            <p className="eyebrow eyebrow-gold">From Tromsø</p>
            <h3>Seasonal coach connections.</h3>
            <p>
              Seasonal coaches travel between Tromsø and Kilpisjärvi. In
              winter, use the Arctic Route; in summer, check Eskelinen’s
              Rovaniemi–Tromsø service.
            </p>
            <div className="arrival-links">
              <a
                href="https://booking.bestarctic.com/en/to-do/2063612/arctic-route-troms%C3%B8-rovaniemi-troms%C3%B8-106/showdetails"
                target="_blank"
                rel="noreferrer"
              >
                Winter Arctic Route <span aria-hidden="true">↗</span>
              </a>
              <a href="https://www.eskelisen.fi/en/tromso/" target="_blank" rel="noreferrer">
                Summer bus timetable <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article className="arrival-card">
            <p className="eyebrow eyebrow-gold">From Rovaniemi</p>
            <h3>Direct coach to Kilpisjärvi.</h3>
            <p>
              Rovaniemi is easy to reach by train or flight, with a direct
              coach connection onwards to Kilpisjärvi. Use the journey planner
              to see current times, prices and tickets.
            </p>
            <div className="arrival-links">
              <a href="https://reittiopas.matkahuolto.fi/" target="_blank" rel="noreferrer">
                Check current timetables <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article className="arrival-card arrival-card-location">
            <p className="eyebrow eyebrow-light">Find the farm</p>
            <h3>In the heart of the village.</h3>
            <p>
              Most coaches stop at K-Market Kilpisjärvi in the village centre.
              Our family farm is at Harjuntie 15, 99490 Kilpisjärvi — in the
              middle of the village and within walking distance of local hotels.
            </p>
            <a
              className="button button-light"
              href="https://www.google.com/maps/dir/?api=1&destination=Harjuntie%2015%2C%2099490%20Kilpisj%C3%A4rvi%2C%20Finland"
              target="_blank"
              rel="noreferrer"
            >
              Open directions <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>

        <p className="shell arrival-note">
          Timetables and seasonal services can change. If you would like help
          choosing a connection, send us a message before booking your visit.
        </p>
      </section>

      <section className="booking" id="book">
        <div className="shell booking-grid">
          <div className="booking-copy">
            <p className="eyebrow eyebrow-gold">Book your experience</p>
            <h2>Tell us when you are coming.</h2>
            <p>
              Send your preferred date and group size. Lars-Aslak will reply
              personally with availability and the best option for your visit.
            </p>

            <div className="contact-list">
              <a href="https://wa.me/358405968478" target="_blank" rel="noreferrer">
                <span>WhatsApp</span>
                <strong>+358 40 596 8478</strong>
              </a>
              <a href="mailto:lars@kilpisjarvireindeer.com">
                <span>Email</span>
                <strong>lars@kilpisjarvireindeer.com</strong>
              </a>
              <p>
                <span>Farm address</span>
                Harjuntie 15, 99490 Kilpisjärvi, Finland
              </p>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <a className="brand brand-logo footer-brand" href="#top" aria-label="Kilpis Reindeer home">
            <Image
              className="brand-logo-image"
              src="/brand/kilpisjarvi-reindeer-logo.png"
              alt=""
              width={1120}
              height={872}
              unoptimized
            />
          </a>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="/faq">Frequently asked questions</a>
            <a href="/privacy">Privacy policy</a>
            <a className="footer-book" href="#book">Book your visit <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
        <div className="shell footer-bottom">
          <p>Yläperän Safarit Oy · Business ID 2954454-6 · Kilpis Reindeer</p>
          <p>© {new Date().getFullYear()} Kilpis Reindeer</p>
        </div>
      </footer>
    </main>
  );
}
