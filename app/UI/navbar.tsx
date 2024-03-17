import styles from "@/styles/navbar.module.css";
import { inknut_antiqua, alegreya } from "./font";
import Link from "next/link";
import Image from "next/image";
import Stack from "./stack";

export default function Navbar() {
  const social_links = [
    {
      href: "/",
      icon: "/icon/link.svg",
      alt: "link icon",
    },
    {
      href: "https://twitter.com/uscacelab",
      icon: "/icon/twitter.svg",
      alt: "twitter icon",
      target: "_blank",
    },
    {
      href: "https://github.com/aceatusc",
      icon: "/icon/github.svg",
      alt: "github icon",
      target: "_blank",
    },
    {
      href: "mailto:uscacelab@gmail.com",
      icon: "/icon/gmail.svg",
      alt: "email icon",
      target: "_blank",
    },
  ];
  return (
    <nav className={styles.nav_container}>
      <h1 className={`${styles.nav_title} ${inknut_antiqua.className}`}>
        <Link href="#">
          the <span className={styles.highlight}>ACE</span> Lab @Univ. Southern
          California
        </Link>
      </h1>
      <h3 className={`${styles.nav_subtitle} ${inknut_antiqua.className}`}>
        adaptive computing experiences
      </h3>
      <p className={`${styles.nav_text} ${alegreya.className}`}>
        <span className={styles.highlight}>Visit us:</span> Room 101, Powell
        Hall, 3737 Watt Way, Los Angeles, CA{" "}
        <Link
          href="https://www.google.com/maps/dir//Powell+Hall,+3737+Watt+Way,+Los+Angeles,+CA+90089"
          className={styles.helper_text}
          target="_blank"
          rel="noreferrer noopener"
        >
          (how to get there?)
        </Link>
        <br />
        <Link
          href="https://www.cs.usc.edu/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Thomas Lord Department of Computer Science, University of Southern
          California
        </Link>
      </p>
      <Stack className={styles.nav_social} orient="horizontal" gap="2rem">
        {social_links.map((link, index) => (
          <Link href={link.href} target={link.target} key={index}>
            <Image
              src={link.icon}
              width={16}
              height={16}
              alt={link.alt}
              className={styles.nav_social_icon}
            />
          </Link>
        ))}
      </Stack>
    </nav>
  );
}
