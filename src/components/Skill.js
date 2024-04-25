export default function Skill({ skill }) {
  return (
    <div>
      <i className={`fa-brands ${skill.icon}`}></i>
      <h5 className="pb-1">{skill.name}</h5>
      <p>{skill.description}</p>
    </div>
  );
}
