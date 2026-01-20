import { Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[2fr_1fr_1fr] lg:px-6">
        <div>
          <h3 className="text-xl font-semibold text-white">New Age Group</h3>
          <p className="mt-3 text-sm text-white/70">
            A diversified Nigerian group delivering energy, foods, agriculture,
            transport, and commodity export solutions since 2009.
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
              +234 90 5013 8556, +234 90 5013 8555
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-accent" />
              info@newagegroupng.com
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Newage Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
