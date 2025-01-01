import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router';
import './Nav.css';

const NavLinkActive: React.FC<PropsWithChildren<{ to: string; className?: string }>> = ({
  to,
  className,
  children,
}) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? `active ${className}` : className)}>
      {children}
    </NavLink>
  );
};

export const Nav = () => {
  return (
    <nav className="nav nes-container">
      <NavLinkActive to="/portfolio/" className="nes-btn is-success">
        Home
      </NavLinkActive>
      <NavLinkActive to="/portfolio/work" className="nes-btn">
        Work
      </NavLinkActive>
      <NavLinkActive to="/portfolio/side-projects" className="nes-btn">
        Side Projects
      </NavLinkActive>
      <NavLinkActive to="/portfolio/hobbies" className="nes-btn">
        Hobbies
      </NavLinkActive>
      <NavLinkActive to="/portfolio/blog" className="nes-btn is-warning">
        Blog
      </NavLinkActive>
    </nav>
  );
};
