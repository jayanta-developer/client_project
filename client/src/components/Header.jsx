import logo from "./assets/logo.png";
import headerStyle from "../style/header.css"


export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} width="8%" alt="logo" className="mr-2" />
            <div className="header_text">Client Project</div>

          </div>
        </a>
      </div>
    </nav>
  )
}
