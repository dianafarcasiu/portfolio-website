import homeIcon from "../imgs/home-icon.png";
import CV from "../docs/CV_Diana_Farcasiu.pdf";

export default function Home() {
  return (
    <section id="home">
      <div className="home d-flex flex-wrap align-items-center justify-content-evenly gap-2">
        <div className="home-info">
          <h1>Hi, I'm Diana</h1>
          <span className="wave">👋🏼</span>

          <h3>Aspiring Front-End Developer</h3>
          {/* <h5>Some placeholder phrase here.</h5> */}

          <div className="media-btns d-flex align-items-center gap-3 fs-3">
            <a href="https://www.linkedin.com/in/dianafarcasiu/" target="blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/dianafarcasiu" target="blank">
              <i className="fa-brands fa-square-github"></i>
            </a>
            <a href={CV} download="CV_Diana_Farcasiu.pdf">
              <i className="fa-solid fa-download"></i>
            </a>
          </div>
        </div>

        <img src={homeIcon} alt="icon" />
      </div>
    </section>
  );
}
