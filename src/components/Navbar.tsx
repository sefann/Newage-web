import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors ${
      isActive ? "text-accent" : "text-white/90 hover:text-accent"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
        <NavLink to="/" aria-label="New Age Group" className="block h-8">
          <img
            src="/newage-logowhite.svg"
            alt="New Age Group"
            className="h-8 w-auto -ml-2 scale-[4] origin-left"
            loading="lazy"
          />
        </NavLink>
        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <NavLink
          to="/contact"
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-primary transition hover:brightness-105 lg:inline-flex"
        >
          Get in Touch
        </NavLink>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/30 p-2 text-white lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-primary/95 lg:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="w-fit rounded-full bg-accent px-5 py-2 text-sm font-semibold text-primary"
              onClick={() => setOpen(false)}
            >
              Get in Touch
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
