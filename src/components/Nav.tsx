import { PropsWithChildren } from "react";
import { NavLink } from "react-router";
import "./Nav.css";

const NavLinkActive: React.FC<
  PropsWithChildren<{ to: string; className?: string }>
> = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `active ${className}` : className
      }
    >
      {children}
    </NavLink>
  );
};

export const Nav = () => {
  return (
    <nav className="nav nes-container">
      <NavLinkActive to="/" className="nes-btn is-success">
        Home
      </NavLinkActive>
      <NavLinkActive to="/work" className="nes-btn">
        Work
      </NavLinkActive>
      <NavLinkActive to="/side-projects" className="nes-btn">
        Side Projects
      </NavLinkActive>
      <NavLinkActive to="/hobbies" className="nes-btn is-warning">
        Hobbies
      </NavLinkActive>
    </nav>
  );
};
