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
import { member_avatar_tooltip_small } from "./member_avatars";

interface PublicationDataType {
  title: string;
  author: { given: string; family: string; id?: string }[];
  venue: { name: string; track?: string; full?: string };
  year: number;
  URL: string;
  abstract?: string;
  award?: string;
}
[];

const pub_venues = [
  "CHI",
  "UIST",
  "ICSE",
  "ESEC/FSE",
  "CSCW",
  "VL/HCC",
  "The Web Conference",
  "IJCAI",
];

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
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                verticalAlign: "middle",
                marginRight: i === author.length - 1 ? "0" : "0.4rem",
              }}
            >
              {a.id && a.id in member_avatar_tooltip_small && (
                <span
                  style={{
                    marginRight: "0.16rem",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.2rem",
                  }}
                >
                  {member_avatar_tooltip_small[a.id]}
                </span>
              )}
              {a.given} {a.family}
              {i === author.length - 1 ? "" : ","}
            </span>
          ))}
        </p>
        <p style={{ fontSize: "1.4rem", color: "#5a5a5a" }}>📄 {venue.full}</p>
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
        <p style={{ fontSize: "1.7rem" }}>{venue.name}</p>
        <p
          style={{
            color: "#3a3a3a",
            fontSize: "1.5rem",
          }}
        >
          {year}
          {venue.track && <span>, {venue.track}</span>}
        </p>
        <Link
          href={URL}
          target="_blank"
          style={{
            height: "3rem",
            width: "3rem",
            position: "relative",
          }}
        >
          <Image src="/icon/pdf.svg" fill={true} alt="download paper pdf" />{" "}
        </Link>
        {award && (
          <div
            style={{
              fontSize: "1.4rem",
              position: "relative",
              height: "2rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src="/icon/award.svg"
              width={24}
              height={24}
              alt="award svg"
            />
            <div style={{ color: "#3a3a3a", marginLeft: "0.3rem" }}>
              {award}
            </div>
          </div>
        )}
      </Stack>
    </li>
  );
};

export default function Publications() {
  const [filterVenue, setFilterVenue] = useState("All");
  const [filterYear, setFilterYear] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // sort publications by year (most recent first) then apply filters
  const pub_data_sorted = [...pub_data].sort((a, b) => b.year - a.year);

  const pub_data_filtered = pub_data_sorted.filter((pub) => {
    if (filterVenue !== "All") {
      if (pub.venue.name !== filterVenue) return false;
    }
    if (filterYear !== "All") {
      if (pub.year !== parseInt(filterYear)) return false;
    }
    return true;
  });

  const VISIBLE_COUNT = 10;
  const hasMore = pub_data_filtered.length > VISIBLE_COUNT;
  const visible_pubs = showAll
    ? pub_data_filtered
    : pub_data_filtered.slice(0, VISIBLE_COUNT);

  return (
    <Section
      title="Recent Publications"
      id="publication"
      icon={<Image src="/icon/paper.svg" fill={true} alt="publications svg" />}
      className={alegreya.className}
      style={{ fontSize: "1.5rem", marginTop: "4.2rem" }}
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
        {visible_pubs.map((pub) => (
          <PublicationItem {...pub} key={pub.title} />
        ))}
      </ul>

      {hasMore && (
        <div style={{ textAlign: "center", marginTop: "1.2rem" }}>
          <button
            onClick={() => setShowAll((s) => !s)}
            className={styles.see_more_button}
            aria-expanded={showAll}
            style={{
              padding: "0.2rem 1.1rem",
              fontSize: "1.4rem",
              cursor: "pointer",
              borderRadius: "10rem",
              border: "1px solid #ccc",
              background: "white",
            }}
          >
            {showAll ? "Show less" : `Show more`}
          </button>
        </div>
      )}
    </Section>
  );
}
