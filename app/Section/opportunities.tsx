import Image from "next/image";
import Section from "../UI/section";
import { alegreya } from "../UI/font";
import styles from "@/styles/opportunity.module.css";
import Link from "next/link";

export default function Opportunities() {
  return (
    <Section
      id="opportunities"
      title="Join us"
      icon={<Image src="/icon/ace.svg" alt="Ace opportunities" fill={true} />}
      className={alegreya.className}
    >
      <div className={styles.opp_container}>
        We are currently <span className={styles.highlight}>NOT hiring</span>{" "}
        (sorry!). We encourage you to check back in a few months for updates. If
        you have a genuine interest in the{" "}
        <a href="#project" className={styles.highlight}>
          projects
        </a>{" "}
        listed above and have unique insights to share, we invite you to contact
        the project leads directly.
        <p
          style={{ fontSize: "1.2rem", marginTop: "0.6rem", color: "#5a5a5a" }}
        >
          <i>Please do not</i> email Prof. Chattopadhyay directly. She would be
          unable to respond promptly owing to the high volume of emails she
          receives.
        </p>
        {/* <div className={styles.opp_button__container}>
          <Link
            href="https://forms.gle/4dUU8nxKzYyzWBWk6"
            className={styles.opp_disabled_button}
          >
            For Current Students at USC
          </Link>
          <Link
            href="https://forms.gle/uhygFA411NaY4Rvj7"
            className={styles.opp_disabled_button}
          >
            For Prospective Graduate Students
          </Link>
        </div> */}
      </div>
    </Section>
  );
}
