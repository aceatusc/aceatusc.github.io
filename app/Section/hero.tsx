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
  highlight?: string;
  important?: boolean;
}

function renderWithHighlight(
  content: string,
  highlight?: string,
  important?: boolean
) {
  if (!highlight) return content;
  const idx = content.indexOf(highlight);
  if (idx === -1) return content;
  return (
    <>
      {content.slice(0, idx)}
      <span
        className={important ? styles.news_highlight : styles.highlight}
      >
        {content.slice(idx, idx + highlight.length)}
      </span>
      {content.slice(idx + highlight.length)}
    </>
  );
}

function NewsItem({ date, content, people, href, highlight, important }: NewsDataType) {
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
          {renderWithHighlight(content, highlight, important)} [
          <span style={{ color: "#990000" }}>+</span>]
        </Link>
      ) : (
        renderWithHighlight(content, highlight, important)
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
        {/* <p
          style={{
            fontSize: "1.4rem",
            fontStyle: "italic",
            fontWeight: 500,
            marginBottom: "1rem",
            lineHeight: 1.3,
          }}
        >
          We believe AI should think with you, not for you.
        </p> */}
        At the ACE Lab, we investigate the frontier of{" "}
        <span className={styles.highlight}>Human-AI Interaction</span>, with a
        focus on how AI can be made to support rather than shortcut the way
        people think and work. Whether {"you're"} a writer, a researcher, a
        programmer, or a doctor, the AI tools you use today {"weren't"} built
        around how you actually think. We aim to change that. Through empirical
        studies and tool design, we develop AI systems that{" "}
        <span className={styles.highlight}>amplify cognition</span>, reduce{" "}
        <span className={styles.highlight}>cognitive friction</span>, and keep
        humans in control of what matters most:{" "}
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
