import type { ReactNode } from "react";
import "./layout.style.css";
import { Link } from "react-router-dom";
import Logo from "/src/assets/Logo.png";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link className="link" to="/">
            <img className="Logo" src={Logo} />
          </Link>
          <Link className="link" to="/Categories">
            Ég er Svangur
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>Contact info:</p>
        <p>+354 2255552</p>
      </footer>
    </div>
  );
}
