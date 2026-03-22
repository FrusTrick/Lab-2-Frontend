
import { Link } from "react-router-dom"

export default function NavBar() {

    return (
      <header>
        <nav>
          <div className="nav-items">
            <ul className="nav-links">
              <li className="nav-link">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-link">
                <Link to="/About">About me</Link>
              </li>
              <li className="nav-link">
                <Link to="/Resume">Resume</Link>
              </li>
              <li className="nav-link">
                <Link to="/Portfolio">Portfolio</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );

}