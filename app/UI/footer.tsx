import styles from "@/styles/footer.module.css";
import { alegreya } from "./font";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={`${alegreya.className} ${styles.footer_container}`}>
      <div style={{ marginRight: "2.4rem" }}>Last updated: Aug 2025</div>
      <div>
        © Copyright 2024 ACE Lab. Website developed by{" "}
        <Link
          href="https://iamhuang.run"
          style={{
            textDecoration: "underline",
            color: "#990000",
          }}
        >
          ACE Lab members
        </Link>
        , inspired by the original design of the{" "}
        <Link
          href="https://from.so"
          style={{
            textDecoration: "underline",
            color: "#990000",
            fontSize: "1.2rem",
          }}
        >
          spot lab
        </Link>{" "}
        at UMich .
      </div>
    </footer>
  );
}
