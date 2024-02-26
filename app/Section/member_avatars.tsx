import Image from "next/image";
import Tooltip from "../UI/tooltip";
import React from "react";
import riniProfile from "@/public/profile/rini.jpg";
import athenaProfile from "@/public/profile/athena.jpeg";
import philippProfile from "@/public/profile/philipp.jpeg";
import runProfile from "@/public/profile/run.jpeg";
import sadraProfile from "@/public/profile/sadra.png";
import katieProfile from "@/public/profile/katie.jpeg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export function PeopleAvatar({
  src,
  name,
  id,
}: {
  src: StaticImport;
  name: string;
  id: string;
}) {
  return (
    <a
      href={`/#${id}`}
      style={{
        height: "2.4rem",
        width: "2.4rem",
      }}
    >
      <Image
        src={src}
        alt={`${name}'s avatar`}
        width={24}
        height={24}
        style={{
          borderRadius: "50%",
          display: "inline-block",
          border: "0.16rem solid #990000",
        }}
        loading="eager"
      />
    </a>
  );
}

export const member_avatar: { [key: string]: JSX.Element } = {
  rini: PeopleAvatar({
    src: riniProfile,
    name: "Souti Chattopadhyay",
    id: "rini",
  }),
  athena: PeopleAvatar({
    src: athenaProfile,
    name: "Athena Saghi",
    id: "athena",
  }),
  philipp: PeopleAvatar({
    src: philippProfile,
    name: "Philipp Eibl",
    id: "philipp",
  }),
  run: PeopleAvatar({ src: runProfile, name: "Run Huang", id: "run" }),
  sadra: PeopleAvatar({
    src: sadraProfile,
    name: "Sadra Sabouri",
    id: "sadra",
  }),
  katie: PeopleAvatar({
    src: katieProfile,
    name: "Katie Foss",
    id: "katie",
  }),
};

export const member_avatar_tooltip = Object.entries(member_avatar).reduce(
  (acc: { [key: string]: React.ReactNode }, [name, avatar]) => {
    acc[name] = (
      <Tooltip key={name} title={name}>
        {avatar}
      </Tooltip>
    );
    return acc;
  },
  {}
);
