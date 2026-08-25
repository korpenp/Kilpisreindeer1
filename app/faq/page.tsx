import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InfoFooter, InfoHeader } from "../info-page-chrome";
import styles from "../info-pages.module.css";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Kilpis Reindeer",
  description:
    "Answers about visiting the Kilpis Reindeer family farm, clothing, children, accessibility, pets, meals, languages and private visits.",
};

const questions = [
  {
    question: "Can I visit the reindeer without booking an experience?",
    answer:
      "Visits are available only as part of a pre-booked Kilpis Reindeer experience. Advance booking allows a member of our family to be ready to welcome you and helps us protect the wellbeing and daily rhythm of the reindeer.",
  },
  {
    question: "Is there a toilet at the farm?",
    answer:
      "A basic outdoor toilet is available at the farm. It is not currently an accessible toilet. If you have mobility or accessibility requirements, please contact us before booking so we can explain the conditions and help you plan your visit.",
  },
  {
    question: "May I bring my own pet?",
    answer:
      "Please leave pets at your accommodation. Dogs and other animals can make the reindeer anxious, so pets are not permitted in the visitor or reindeer areas.",
  },
  {
    question: "Are assistance dogs allowed?",
    answer:
      "Assistance dogs are welcome at the farm, but they cannot enter the fenced reindeer enclosure and must remain under control. Please contact us in advance so we can arrange the safest and most comfortable visit for you, the dog and the reindeer.",
  },
  {
    question: "Can you accommodate vegetarian, vegan or other dietary requirements?",
    answer:
      "When a meal is included in a pre-arranged programme, dietary alternatives may be available with advance notice. Tell us about vegetarian or vegan requirements, allergies and other dietary needs when you enquire so we can confirm what can be provided for your visit.",
  },
  {
    question: "Can I visit during spring or summer?",
    answer:
      "Kilpis Reindeer visits can be arranged throughout the year by advance booking. The reindeer, programme and surroundings change with the season, weather and the needs of the herd, so availability and the exact content of a visit may vary.",
  },
  {
    question: "What clothing should I bring?",
    answer:
      "Dress for outdoor Arctic conditions. We recommend at least two warm layers, insulated winter footwear, gloves and a warm hat. Outdoor clothing and footwear are not provided, so please check the forecast and arrive properly dressed for the day.",
  },
  {
    question: "Do you arrange private visits?",
    answer:
      "Yes. Private family, group and tailor-made visits are available by request. Send us your preferred date, group size and the kind of experience you have in mind, and we will suggest the most suitable option.",
  },
  {
    question: "Which languages are used during the experience?",
    answer:
      "Visits are normally hosted in English. Finnish and Northern Sámi may also be available depending on the host and date. If your group needs another language or translation support, contact us before booking and we will explain the available options.",
  },
  {
    question: "Can I take photographs during my visit?",
    answer:
      "Yes, you are welcome to take personal photographs and videos with your own phone or camera. A professional photography service or a set of tour photographs is not included.",
  },
  {
    question: "Can babies and small children join?",
    answer:
      "Babies and children are welcome. Please include the children's ages in your enquiry so we can recommend a suitable experience, explain the current child pricing and help you prepare for the outdoor conditions. Children must remain with their accompanying adult throughout the visit.",
  },
  {
    question: "Are blankets provided for the sleigh ride?",
    answer:
      "Blankets are available for guests during the sleigh ride. They provide extra comfort but are not a substitute for warm layers, winter footwear, gloves and a hat.",
  },
];

export default function FrequentlyAskedQuestions() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <InfoHeader />
      <section className={styles.hero}>
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div>
            <p className={styles.eyebrow}>Plan your visit</p>
            <h1>Questions before meeting the reindeer?</h1>
            <p className={styles.lead}>
              Here are practical answers for visits to our family farm in
              Kilpisjärvi. If your question is not covered, Lars-Aslak will be
              happy to help.
            </p>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/farm/frosty-reindeer-portrait.webp"
              alt="A reindeer at the Kilpis Reindeer family farm"
              fill
              sizes="(max-width: 800px) 100vw, 36vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={`${styles.shell} ${styles.contentGrid}`}>
          <div className={styles.faqList}>
            {questions.map((item, index) => (
              <details className={styles.faqItem} key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <div className={styles.faqAnswer}>
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
          <aside className={styles.aside}>
            <h2>Still wondering?</h2>
            <p>
              Tell us your date, group size and question. We will reply
              personally with the information you need.
            </p>
            <Link href="/#book">Contact Kilpis Reindeer →</Link>
          </aside>
        </div>
      </section>
      <InfoFooter />
    </main>
  );
}
