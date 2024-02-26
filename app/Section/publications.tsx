"use client";

import Image from "next/image";
import Section from "../UI/section";
import { alegreya } from "../UI/font";
import pub_data from "@/app/Data/pubs.json";
import Link from "next/link";
import styles from "@/styles/publication.module.css";
import { useState } from "react";
import Select from "../UI/select";
import Stack from "../UI/stack";

interface PublicationDataType {
  title: string;
  author: { given: string; family: string }[];
  venue: string;
  year: number;
  URL: string;
  abstract?: string;
  award?: string;
}
[];

const pub_venues = ["ICSE", "CHI", "ESEC/FSE", "CSCW", "VL/HCC", "IJCAI"];

const pub_years = Array.from(new Set(pub_data.map((pub) => pub.year))).sort(
  (a, b) => b - a
);

const PublicationItem = ({
  title,
  author,
  venue,
  year,
  URL,
  abstract,
  award,
}: PublicationDataType) => {
  return (
    <li className={styles.pub_item__container}>
      <div className={styles.pub_item__info1}>
        <Link href={URL} className={styles.pub_item__link}>
          {title}
        </Link>
        <p className={styles.pub_item__authors}>
          {author.map((a, i) => (
            <span key={i}>
              {a.given} {a.family}
              {i === author.length - 1 ? "" : ", "}
            </span>
          ))}
        </p>
        <div className={styles.pub_item__abstract} tabIndex={0}>
          <span
            className={styles.highlight}
            style={{
              fontWeight: 500,
            }}
          >
            Abstract:
          </span>{" "}
          {abstract}
        </div>
      </div>
      <Stack className={styles.pub_item__info2} gap="0.5rem">
        <p style={{ fontSize: "1.5rem" }}>{venue}</p>
        <p
          style={{
            color: "#3a3a3a",
            fontSize: "1.2rem",
          }}
        >
          {year}
        </p>
        <Link
          href={URL}
          target="_blank"
          rel="noreferrer noopener"
          style={{
            height: "2rem",
          }}
        >
          <Image
            src="/icon/pdf.svg"
            width={20}
            height={20}
            alt="download paper pdf"
          />{" "}
        </Link>
        {award && (
          <div
            style={{
              fontSize: "1rem",
              position: "relative",
              height: "2rem",
            }}
          >
            <Image
              src="/icon/award.svg"
              width={20}
              height={20}
              alt="award svg"
            />
            <span
              style={{
                position: "relative",
                top: "-0.6rem",
                left: "0.3rem",
                color: "#3a3a3a",
              }}
            >
              {award}
            </span>
          </div>
        )}
      </Stack>
    </li>
  );
};

export default function Publications() {
  const [filterVenue, setFilterVenue] = useState("All");
  const [filterYear, setFilterYear] = useState("All");

  const pub_data_filtered = pub_data.filter((pub) => {
    if (filterVenue !== "All") {
      if (pub.venue !== filterVenue) return false;
    }
    if (filterYear !== "All") {
      if (pub.year !== parseInt(filterYear)) return false;
    }
    return true;
  });

  return (
    <Section
      title="Recent Publications"
      id="publication"
      icon={
        <Image
          src="/icon/paper.svg"
          width={30}
          height={30}
          alt="publications svg"
        />
      }
      className={alegreya.className}
      style={{ fontSize: "1.5rem" }}
    >
      <div className={styles.select_container}>
        <Select
          value={filterVenue}
          onChange={(e) =>
            setFilterVenue((e.target as HTMLSelectElement).value)
          }
          className={styles.select_box}
          label="Select menu for filtering publications by venue"
        >
          <option value="All">All Venue</option>
          {pub_venues.map((venue) => (
            <option key={venue} value={venue}>
              {venue}
            </option>
          ))}
        </Select>
        <Select
          value={filterYear}
          onChange={(e) => setFilterYear((e.target as HTMLSelectElement).value)}
          className={styles.select_box}
          label="Select menu for filtering publications by year"
        >
          <option value="All">All Year</option>
          {pub_years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
      </div>
      <ul className={styles.pub_container}>
        {pub_data_filtered.map((pub) => (
          <PublicationItem {...pub} key={pub.title} />
        ))}
      </ul>
    </Section>
  );
}
