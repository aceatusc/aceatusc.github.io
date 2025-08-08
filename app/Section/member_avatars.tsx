import Image from "next/image";
import Tooltip from "../UI/tooltip";
import React from "react";

export function PeopleAvatar({
  src,
  name,
  id,
  small = false,
}: {
  src: string;
  name: string;
  id: string;
  small?: boolean;
}) {
  return (
    <a
      href={`/#${id}`}
      style={{
        height: small ? "2rem" : "2.4rem",
        width: small ? "2rem" : "2.4rem",
        display: "block",
        position: "relative",
      }}
    >
      <Image
        src={src}
        alt={`${name}'s avatar`}
        fill={true}
        style={{
          borderRadius: "50%",
          display: "inline-block",
          border: small ? "none" : "0.16rem solid #990000",
        }}
        loading="lazy"
      />
    </a>
  );
}

export const member_avatar: {
  [key: string]: { src: string; name: string; id: string };
} = {
  rini: {
    src: "/profile/rini.jpg",
    name: "Souti Chattopadhyay",
    id: "rini",
  },
  athena: {
    src: "/profile/athena.jpeg",
    name: "Athena Saghi",
    id: "athena",
  },
  philipp: {
    src: "/profile/philipp.jpeg",
    name: "Philipp Eibl",
    id: "philipp",
  },
  run: {
    src: "/profile/run.jpeg",
    name: "Run Huang",
    id: "run",
  },
  sadra: {
    src: "/profile/sadra.png",
    name: "Sadra Sabouri",
    id: "sadra",
  },
  david: {
    src: "/profile/david.png",
    name: "David Aoyama",
    id: "david",
  },
  katie: {
    src: "/profile/katie.jpeg",
    name: "Katie Foss",
    id: "katie",
  },
  anna: {
    src: "/profile/Anna.jpeg",
    name: "Anna Katherine Zhao",
    id: "anna",
  },
  xinyi: {
    src: "/profile/xinyi.jpg",
    name: "Xinyi Zhou",
    id: "xinyi",
  },
};

export const member_avatar_tooltip = Object.entries(member_avatar).reduce(
  (acc: { [key: string]: React.ReactNode }, [name, avatar]) => {
    acc[name] = (
      <Tooltip key={name} title={avatar.name}>
        {<PeopleAvatar src={avatar.src} name={avatar.name} id={avatar.id} />}
      </Tooltip>
    );
    return acc;
  },
  {}
);

export const member_avatar_tooltip_small = Object.entries(member_avatar).reduce(
  (acc: { [key: string]: React.ReactNode }, [name, avatar]) => {
    acc[name] = (
      <Tooltip key={name} title={avatar.name}>
        {
          <PeopleAvatar
            src={avatar.src}
            name={avatar.name}
            id={avatar.id}
            small
          />
        }
      </Tooltip>
    );
    return acc;
  },
  {}
);
