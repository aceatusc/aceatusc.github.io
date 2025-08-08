import Image from "next/image";
import styles from "@/styles/people.module.css";
import { inknut_antiqua, alegreya } from "../UI/font";
import Link from "next/link";
import Section from "../UI/section";

interface PeopleDataType {
  name: string;
  image: string;
  link: string;
  id: string;
  role: string;
  alumni?: boolean;
  bio?: string;
  links?: { type: string; href: string }[];
  small?: boolean;
}

const PeopleCard = ({
  name,
  image,
  link,
  alumni,
  id,
  role,
  bio,
  links,
  small,
}: PeopleDataType) => {
  return (
    <div
      id={id}
      className={`${styles.people_card} ${alegreya.className} ${
        small && styles.small_card
      }`}
    >
      <Link
        className={styles.people_card__image__container}
        href={link}
        target="_blank"
      >
        <Image
          src={image}
          alt={`${name} profile photo`}
          className={styles.people_card__image}
          width={160}
          height={160}
          loading="lazy"
        />
      </Link>
      <p className={styles.people_card__title}>
        <Link href={link} target="_blank">
          {name}
        </Link>
        {alumni && (
          <Image
            src="/icon/alumni.svg"
            alt="alumni logo"
            width={20}
            height={20}
            style={{
              display: "inline-block",
              marginLeft: "0.4rem",
              top: "2px",
              position: "absolute",
            }}
          />
        )}
      </p>
      <div className={styles.people_card__description}>
        is <span className={styles.highlight}>{role}</span> {bio}
        <span style={{ whiteSpace: "nowrap", marginLeft: "0.2rem" }}>
          {links?.map(({ type, href }) => (
            <Link
              href={href}
              key={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "1.2rem",
                height: "1.2rem",
                position: "relative",
                display: "inline-block",
                margin: "0 0.3rem",
                top: "0.1rem",
              }}
            >
              <Image
                src={`/icon/${type}.svg`}
                alt={`${type} logo`}
                fill={true}
              />
            </Link>
          ))}
        </span>
      </div>
    </div>
  );
};

interface PeopleProps {
  data: PeopleDataType[];
  id: string;
  title: string;
  small?: boolean;
}

export default function People({
  data,
  id,
  title,
  small = false,
}: PeopleProps) {
  return (
    <Section
      id={id}
      title={title}
      icon={<Image src="/icon/trojan.svg" alt="usc trojan logo" fill={true} />}
      className={inknut_antiqua.className}
    >
      <div className={styles.people_container} id="people">
        {data.map((person) => (
          <PeopleCard key={person.name} {...person} small={small} />
        ))}
      </div>
    </Section>
  );
}
