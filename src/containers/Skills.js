import Skill from "../components/Skill";
import Title from "../components/Title";

const skills = [
  {
    id: 1,
    name: "HTML",
    icon: "fa-html5",
    description: "Writing well structured, optimized html code.",
  },
  {
    id: 2,
    name: "CSS",
    icon: "fa-css3-alt",
    description:
      "Creating responsive layouts using flexbox & grid; familiar with Bootstrap.",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "fa-js",
    description:
      "Building dynamic & interactive websites; familiar with objects & array methods, conditionals & DOM manipulation.",
  },
  {
    id: 1,
    name: "React",
    icon: "fa-react",
    description:
      "Creating component-centered single page applications; familiar with React Hooks: useState, useEffect, useContext.",
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container fluid">
        <Title>What I know</Title>

        <div className="skills d-flex flex-wrap align-items-center justify-content-around gap-3">
          {skills.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
