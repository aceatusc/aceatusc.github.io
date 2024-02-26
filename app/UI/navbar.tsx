import styles from "@/styles/navbar.module.css";
import { inknut_antiqua, alegreya } from "./font";
import Link from "next/link";

export default function Navbar() {
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
    </nav>
  );
}
