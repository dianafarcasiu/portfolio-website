import NavbarPages from "./NavbarPages";

export default function Footer() {
  return (
    <footer className="footer text-center">
      <p className="footer-logo mb-1">{"<Diana Farcasiu />"}</p>
      <div className="footer-underline mb-2"></div>
      <div className="d-flex justify-content-center">
        <NavbarPages />
      </div>
    </footer>
  );
}
