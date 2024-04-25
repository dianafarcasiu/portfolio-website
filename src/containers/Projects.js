import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";

const projects = [
  {
    id: 1,
    name: "Movie App",
    description:
      "A movie app that lets you explore your favorite movies, series & much more!",
    demoLink: "https://dianafarcasiu.github.io/movie-app/",
    githubLink: "https://github.com/dianafarcasiu/movie-app",
    imageSrc: require("../imgs/movie-app.png"),
  },
  {
    id: 2,
    name: "Cooking App",
    description:
      "A cooking app that helps you explore recipes & create a favorites list.",
    demoLink: "https://dianafarcasiu.github.io/cooking-app/",
    githubLink: "https://github.com/dianafarcasiu/cooking-app",
    imageSrc: require("../imgs/cooking-app.png"),
  },
  {
    id: 3,
    name: "Weather App",
    description:
      "A weather app that displays the current weather & a 5 day forecast.",
    demoLink: "https://dianafarcasiu.github.io/weather-app/",
    githubLink: "https://github.com/dianafarcasiu/weather-app",
    imageSrc: require("../imgs/weather-app.png"),
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container fluid">
        <Title>What I've done</Title>
        <div className="projects d-flex flex-wrap align-items-center justify-content-around">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
