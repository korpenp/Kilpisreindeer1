import Image from "next/image";
import Link from "next/link";
import styles from "./info-pages.module.css";

export function InfoHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/" aria-label="Kilpis Reindeer home">
        <Image
          className={styles.logo}
          src="/brand/kilpisjarvi-reindeer-logo.png"
          alt=""
          width={1120}
          height={872}
          unoptimized
          priority
        />
      </Link>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/#experience">Experiences</Link>
        <Link href="/#story">Our story</Link>
        <Link href="/#getting-here">Getting here</Link>
        <Link href="/faq">FAQ</Link>
      </nav>
      <Link className={styles.book} href="/#book">
        Book now <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}

export function InfoFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.shell} ${styles.footerMain}`}>
        <Link className={styles.brand} href="/" aria-label="Kilpis Reindeer home">
          <Image
            className={styles.logo}
            src="/brand/kilpisjarvi-reindeer-logo.png"
            alt=""
            width={1120}
            height={872}
            unoptimized
          />
        </Link>
        <nav className={styles.footerLinks} aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/faq">Frequently asked questions</Link>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/#book">Contact and booking</Link>
        </nav>
      </div>
      <div className={`${styles.shell} ${styles.footerBottom}`}>
        <p>Yläperän Safarit Oy · Business ID 2954454-6 · Kilpis Reindeer</p>
        <p>© {new Date().getFullYear()} Kilpis Reindeer</p>
      </div>
    </footer>
  );
}
