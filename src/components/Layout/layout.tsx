import type { ReactNode } from "react";
import "./layout.style.css";
import { Link } from "react-router-dom";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/">Heim</Link>
          <Link to="/Categories">Flokkar</Link>
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
