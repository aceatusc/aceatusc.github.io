import Image from "next/image";
import Tooltip from "../UI/tooltip";
import React from "react";

export function PeopleAvatar({
  src,
  name,
  id,
}: {
  src: string;
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
    src: "/rini.jpg",
    name: "Souti Chattopadhyay",
    id: "rini",
  }),
  athena: PeopleAvatar({
    src: "/athena.jpeg",
    name: "Athena Saghi",
    id: "athena",
  }),
  philipp: PeopleAvatar({
    src: "/philipp.jpeg",
    name: "Philipp Eibl",
    id: "philipp",
  }),
  run: PeopleAvatar({ src: "/run.jpeg", name: "Run Huang", id: "run" }),
  sadra: PeopleAvatar({
    src: "/sadra.png",
    name: "Sadra Sabouri",
    id: "sadra",
  }),
  david: PeopleAvatar({ src: "/david.png", name: "David Aoyama", id: "david" }),
  katie: PeopleAvatar({ src: "/katie.jpeg", name: "Katie Foss", id: "katie" }),
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
