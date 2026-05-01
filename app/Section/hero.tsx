import { alegreya } from "../UI/font";
import styles from "@/styles/hero.module.css";
import Section from "../UI/section";
import Image from "next/image";
import { member_avatar_tooltip } from "./member_avatars";
import news_data from "@/app/Data/news.json";
import Link from "next/link";
import HideScroll from "../UI/hidescroll";

interface NewsDataType {
  date: string;
  content: string;
  people: string[];
  href?: string;
}

function NewsItem({ date, content, people, href }: NewsDataType) {
  return (
    <div className={styles.news_item}>
      <span className={styles.news_date}>{date}</span>{" "}
      {people.map((person) => (
        <span
          key={person}
          style={{
            margin: "0 0.2rem",
            top: "0.72rem",
            position: "relative",
          }}
        >
          {member_avatar_tooltip[person]}
        </span>
      ))}
      :{" "}
      {href ? (
        <Link href={href} target="_blank">
          {content} [<span style={{ color: "#990000" }}>+</span>]
        </Link>
      ) : (
        content
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className={`${alegreya.className} ${styles.hero_container}`}
    >
      <Section id="intro" className={styles.intro_container}>
        {/* <Link
          href="#opportunities"
          style={{
            backgroundColor: "#990000",
            color: "#FFCC00",
            padding: "0 0.3rem",
            borderRadius: "0.3rem",
            fontWeight: 500,
          }}
        >
          We are NOT hiring.
        </Link>{" "} */}
        <p style={{
            fontSize: "1.4rem",
            fontStyle: "italic",
            fontWeight: 500,
            marginBottom: "1rem",
            lineHeight: 1.3,
          }}>
          We believe AI should think with you, not for you.
        </p>
        At the ACE Lab at USC, we investigate the frontier of Human-AI
        Interaction, with a focus on how AI can be made to align with rather
        than disrupt the way people think and work. Whether {"you're"} a writer,
        a researcher, a programmer, or a doctor, the AI tools you use today
        {"weren't"} built around how you actually think. We{"'re"} changing
        that. We study how AI tools can be designed to support rather than
        shortcut human thinking. Through empirical studies and tool design, we
        develop AI systems that{" "}
        <span className={styles.highlight}>amplify cognition</span>,
        <span className={styles.highlight}>cognitive friction</span>, and
        keep humans in control of what matters most:{" "}
        <span className={styles.highlight}>the ideas</span>.
      </Section>
      <Section
        id="news"
        title="ace news"
        className={styles.news_container}
        icon={<Image src="/icon/ace.svg" alt="ace spade logo" fill={true} />}
      >
        <div className={styles.news_item__container}>
          <HideScroll>
            {news_data.map((news) => (
              <NewsItem key={news.date} {...news} />
            ))}
          </HideScroll>
        </div>
      </Section>
    </section>
  );
}
