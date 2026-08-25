import type { Metadata } from "next";
import { InfoFooter, InfoHeader } from "../info-page-chrome";
import styles from "../info-pages.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Kilpis Reindeer",
  description:
    "How Yläperän Safarit Oy, operating under the Kilpis Reindeer marketing name, collects, uses, stores and protects customer information.",
};

export default function PrivacyPolicy() {
  return (
    <main className={styles.page}>
      <InfoHeader />
      <section className={styles.hero}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>Your information</p>
          <h1>Privacy policy.</h1>
          <p className={styles.lead}>
            This notice explains how Yläperän Safarit Oy, operating under the
            marketing name Kilpis Reindeer, handles personal information when
            you contact us, make a booking or use our services.
          </p>
          <p className={styles.lead}>
            Effective <time dateTime="2026-08-01">1 August 2026</time>
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={`${styles.shell} ${styles.policyLayout}`}>
          <aside className={styles.controller}>
            <h2>Data controller</h2>
            <address>
              <strong>Yläperän Safarit Oy</strong><br />
              Marketing name: Kilpis Reindeer<br />
              Business ID: 2954454-6<br />
              Harjuntie 15<br />
              99490 Kilpisjärvi, Finland<br /><br />
              <a href="mailto:lars@kilpisjarvireindeer.com">lars@kilpisjarvireindeer.com</a><br />
              <a href="tel:+358405968478">+358 40 596 8478</a>
            </address>
          </aside>

          <article className={styles.policy}>
            <section>
              <h2>1. When we collect information</h2>
              <p>We may receive personal information:</p>
              <ul>
                <li>directly from you when you enquire, book or visit;</li>
                <li>from someone arranging a booking for you, such as a family member or travelling companion;</li>
                <li>from a travel agency, tour operator, company or association booking on behalf of a customer or group; and</li>
                <li>through email, telephone, WhatsApp, social media or an external booking or payment service.</li>
              </ul>
              <p>
                The enquiry form on this website prepares an email in your own
                email application. Your details are sent to us only if you
                choose to send that email.
              </p>
            </section>

            <section>
              <h2>2. Information we may process</h2>
              <ul>
                <li>name, email address, telephone number and postal address;</li>
                <li>booking details, date, group size, selected experience, language and nationality where relevant;</li>
                <li>invoice details, payment method, payment status and booking references;</li>
                <li>messages, requests, feedback and customer-service history;</li>
                <li>consent or objection relating to direct marketing; and</li>
                <li>dietary, accessibility or health information that you voluntarily provide when it is needed to arrange the service safely.</li>
              </ul>
              <p>
                Payment-card information is normally handled by the relevant
                payment provider and is not stored by us in full.
              </p>
            </section>

            <section>
              <h2>3. Why we use personal information</h2>
              <p>We process information to:</p>
              <ul>
                <li>respond to enquiries and arrange requested experiences;</li>
                <li>manage reservations, customer communication and service delivery;</li>
                <li>handle invoicing, payments, refunds and bookkeeping;</li>
                <li>meet safety, insurance, accounting and other legal obligations;</li>
                <li>develop our customer service and resolve complaints; and</li>
                <li>send direct marketing only where we have a lawful basis, including consent when consent is required.</li>
              </ul>
              <h3>Legal bases</h3>
              <p>
                Depending on the situation, processing is based on steps
                requested before entering into a contract, performance of a
                contract, compliance with a legal obligation, our legitimate
                interest in operating and protecting the business, or your
                consent. You may withdraw consent at any time without affecting
                processing that took place before withdrawal.
              </p>
            </section>

            <section>
              <h2>4. Who may receive the information</h2>
              <p>
                Access is limited to the owners and employees of Yläperän
                Safarit Oy who need the information for their work. We may also
                share only the information necessary with:
              </p>
              <ul>
                <li>partners involved in delivering the experience requested by you;</li>
                <li>booking, payment, accounting, hosting and other service providers acting on our behalf;</li>
                <li>travel agencies or tour operators involved in your reservation; and</li>
                <li>Finnish authorities or other parties where disclosure is required by law.</li>
              </ul>
              <p>
                We do not rent or sell customer information. External platforms
                and services process information under their own privacy
                policies when you use them.
              </p>
            </section>

            <section>
              <h2>5. International transfers</h2>
              <p>
                Some external service providers, including social-media and
                communications platforms, may process information outside
                Finland or the European Economic Area. Where we are responsible
                for such a transfer, we use an applicable legal transfer
                mechanism and appropriate safeguards.
              </p>
            </section>

            <section>
              <h2>6. How long information is retained</h2>
              <p>
                Customer and booking information is generally retained for no
                longer than three years after the service has been provided,
                unless a longer period is necessary for a legal claim or
                required by law. Information contained in bookkeeping and
                accounting records is retained for the periods required by
                Finnish legislation. Information is deleted or anonymised when
                it is no longer needed.
              </p>
            </section>

            <section>
              <h2>7. Your data-protection rights</h2>
              <p>Subject to the conditions of the GDPR, you may have the right to:</p>
              <ul>
                <li>request access to the personal information we hold about you;</li>
                <li>ask us to correct inaccurate or incomplete information;</li>
                <li>request deletion or restriction of processing;</li>
                <li>object to processing based on legitimate interests or to direct marketing;</li>
                <li>receive information you provided in a portable format where applicable; and</li>
                <li>withdraw consent at any time where processing is based on consent.</li>
              </ul>
              <p>
                To exercise a right, contact us using the details shown on this
                page. We may need to verify your identity. You may also lodge a
                complaint with the{" "}
                <a href="https://tietosuoja.fi/en/home" target="_blank" rel="noreferrer">
                  Office of the Data Protection Ombudsman in Finland
                </a>.
              </p>
            </section>

            <section>
              <h2>8. Cookies and external links</h2>
              <p>
                This website may use cookies or similar technical storage that
                is necessary for security and basic website operation. We do
                not use website cookies to create individual advertising
                profiles. If optional analytics or marketing cookies are
                introduced, they will be described and used with consent where
                required.
              </p>
              <p>
                The website links to external services such as WhatsApp,
                Instagram, Google Maps, transport services and booking or
                payment providers. Those services have their own privacy and
                cookie practices, and this policy does not govern their
                websites.
              </p>
            </section>

            <section>
              <h2>9. Security and policy updates</h2>
              <p>
                We use reasonable organisational and technical measures to
                protect personal information against unauthorised access,
                alteration, disclosure or loss. Access is limited to people who
                need the information for the purposes described above.
              </p>
              <p>
                We may update this policy when our services, systems or legal
                obligations change. The effective date shown at the top
                identifies the current version.
              </p>
            </section>
          </article>
        </div>
      </section>
      <InfoFooter />
    </main>
  );
}

