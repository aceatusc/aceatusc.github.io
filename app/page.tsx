import { Fragment } from "react";
import People from "./Section/people";
import Hero from "./Section/hero";
import Projects from "./Section/projects";
import Publications from "./Section/publications";
import people_data from "@/app/Data/people.json";
import Opportunities from "./Section/opportunities";

const current_member = people_data.filter((person) => !person.alumni);
const alumni = people_data.filter((person) => person.alumni);

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <People id="team" title="our team" data={current_member} />
      <Projects />
      <Opportunities />
      <Publications />
      <People id="alumni" title="ace alumni" data={alumni} small />
    </Fragment>
  );
}
