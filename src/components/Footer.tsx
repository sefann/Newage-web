import { Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[2fr_1fr_1fr] lg:px-6">
        <div>
          <img
            src="/newage-logoblue.svg"
            alt="New Age Group"
            className="h-32 w-auto"
            loading="lazy"
          />
          <p className="mt-4 text-sm text-white/70">
            A diversified Nigerian group delivering energy, foods, agriculture,
            transport, and commodity export solutions for well over a decade.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-accent">
            Quick Links
          </h4>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <NavLink to="/about" className="text-white/70 hover:text-white">
              About Us
            </NavLink>
            <NavLink to="/services" className="text-white/70 hover:text-white">
              Services
            </NavLink>
            <NavLink to="/gallery" className="text-white/70 hover:text-white">
              Gallery
            </NavLink>
            <NavLink to="/careers" className="text-white/70 hover:text-white">
              Careers
            </NavLink>
            <NavLink to="/contact" className="text-white/70 hover:text-white">
              Contact
            </NavLink>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-accent">
            Contact
          </h4>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-accent" />
              Main Head Office - Magboro, Ogun State
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-accent" />
              +234 905 013 8569
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-accent" />
              info@newagegroupng.com
            </p>
          </div>
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Social
            </p>
            <div className="mt-3 flex items-center gap-4 text-white/70">
              <a
                href="https://www.linkedin.com"
                className="transition hover:text-white"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/Newagegroup_ng"
                className="transition hover:text-white"
                aria-label="X (formerly Twitter)"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/newagefoods?igsh=bHMyYTdqZmlvaG1v"
                className="transition hover:text-white"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-[18px] w-[18px] fill-current"
                >
                  <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5zm5-4.1a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 17 6.4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-4 text-xs text-white/60 lg:flex-row lg:justify-between lg:px-6">
          <span>© {new Date().getFullYear()} Newage Group. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <NavLink to="/privacy" className="transition hover:text-white">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="transition hover:text-white">
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
