import { alegreya } from "../UI/font";
import styles from "@/styles/hero.module.css";
import Section from "../UI/section";
import Image from "next/image";
import { member_avatar_tooltip } from "./member_avatars";
import news_data from "@/app/Data/news.json";

interface NewsDataType {
  date: string;
  content: string;
  people: string[];
}

function NewsItem({ date, content, people }: NewsDataType) {
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
      : {content}{" "}
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
        At the ACE Lab, we are working to transform computing experiences by
        adapting {"users'"} experiences to their cognitive processes.{" "}
        <span className={styles.highlight}>Computing</span> has evolved beyond
        programmatic and mathematical operations in {"today's "}
        world. {"People's"} interactions with computers range from developers
        building software to people monitoring their heartbeat during exercises
        on wearable devices. However, these experiences are often unintuitive,
        stale, and require humans to adapt to the machine. We aim to build
        experiences that{" "}
        <span className={styles.highlight}>adapt to the users</span>, for
        activities ranging from programming to lifestyle. Several of our
        award-winning research uses empirical, qualitative, and quantitative
        means to drive impactful change to{" "}
        <span className={styles.highlight}>real-world products</span>.
      </Section>
      <Section
        id="news"
        title="ace news"
        className={styles.news_container}
        icon={<Image src="/icon/ace.svg" alt="ace spade logo" fill={true} />}
      >
        {news_data.map((news) => (
          <NewsItem key={news.date} {...news} />
        ))}
      </Section>
    </section>
  );
}
