import styles from "@/styles/footer.module.css";
import { alegreya } from "./font";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={`${alegreya.className} ${styles.footer_container}`}>
      <div>Last updated: Feb 2024</div>
      <div>
        © Copyright 2024 ACE Lab. Website developed by{" "}
        <Link
          href="https://iamhuang.run"
          style={{ textDecoration: "underline" }}
        >
          ACE Lab members
        </Link>
        , with reference to the original design by the{" "}
        <Link href="from.so" style={{ textDecoration: "underline" }}>
          spot lab
        </Link>{" "}
        at UMich .
      </div>
    </footer>
  );
}
