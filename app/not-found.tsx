import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InfoHeader } from "./info-page-chrome";
import styles from "./info-pages.module.css";

export const metadata: Metadata = {
  title: "Page Not Found | Kilpis Reindeer",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className={styles.page}>
      <InfoHeader />
      <section className={styles.notFound}>
        <div className={styles.notFoundImage}>
          <Image
            src="/farm/winter-field.webp"
            alt=""
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className={styles.notFoundScrim} />
        <div className={styles.notFoundCopy}>
          <p className={styles.eyebrow}>404 · The trail ends here</p>
          <h1>This page has wandered off.</h1>
          <p>
            The address may have changed, but the reindeer are still here. Head
            back to the farm, explore our experiences or find a quick answer
            before your visit.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href="/">
              Return home →
            </Link>
            <Link className={styles.secondaryAction} href="/#experience">
              View experiences
            </Link>
            <Link className={styles.secondaryAction} href="/faq">
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

