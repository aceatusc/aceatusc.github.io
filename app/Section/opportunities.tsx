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
        ACE lab currently has{" "}
        <i style={{ color: "#990000", fontWeight: "bold" }}>openings</i> for{" "}
        <i style={{ color: "#990000", fontWeight: "bold" }}>two PhD</i>{" "}
        positions! If you are interested, please apply through the USC graduate
        admission portal and mention Prof. Chattopadhyay in your application.
        {/* <i style={{ color: "#990000", fontWeight: "bold" }}>HIRING</i> ! We have
        openings for PhD students in Fall 2025. If you are interested, please
        fill in{" "}
        <Link
          href="https://forms.gle/k4pE5Ze5bVo5HSPSA"
          target="_blank"
          style={{ color: "#990000", textDecoration: "underline" }}
        >
          this form
        </Link>
        ! */}
        <p
          style={{ fontSize: "1.4rem", marginTop: "0.6rem", color: "#5a5a5a" }}
        >
          <i>Please do NOT</i> email Prof. Chattopadhyay directly. She would be
          unable to respond promptly owing to the high volume of emails she
          receives :(
        </p>
        {/* <div className={styles.opp_image}>
          <Image
            src="/profile/fa24lunch.jpeg"
            alt="ace lab group photo Aug 2024"
            fill
          />
        </div> */}
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
