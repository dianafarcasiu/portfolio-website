export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <a href={project.demoLink} target="blank">
        <img src={project.imageSrc} alt="project preview"></img>
      </a>
      <div className="p-4">
        <h5 className="mb-3">{project.name}</h5>
        <p>{project.description}</p>
        <div className="gh-btns d-flex gap-3">
          <a href={project.githubLink} target="blank">
            <i className="fa-brands fa-github fs-5"></i>
          </a>
          <a href={project.demoLink} target="blank">
            <i className="fa-solid fa-globe fs-5"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
