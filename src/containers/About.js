import Title from "../components/Title";
import aboutIcon from "../imgs/about-icon.png";

export default function About() {
  return (
    <section id="about">
      <div className="container fluid">
        <Title>Who I am</Title>
        <div className="about d-flex flex-wrap align-items-center justify-content-around gap-2">
          <img src={aboutIcon} alt="about icon" />
          <p>
            Enthusiastic frontend developer with a knack for creativity and
            problem-solving. Fresh out of a frontend development course, I'm
            eager to showcase my skills and projects. From crafting visually
            appealing websites to tackling technical challenges head-on, I'm
            always looking to learn and improve.<br></br>
            <br></br>
            {/* <span className="tagline">
              Let's bring ideas to life, one line of code at a time!
            </span> */}
            <span className="tagline">Turning code into user experiences!</span>
          </p>
        </div>
      </div>
    </section>
  );
}
