import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.85),rgba(0,0,0,0.65))]" />
      <div className="absolute inset-0 opacity-20">
        <img
          src="/newage-banner.png"
          alt="Corporate team collaboration"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-6 lg:py-32">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-accent"
          >
            Empowering progress across sectors
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl"
          >
            A multi-pronged group delivering basic needs across Nigeria.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg text-white/80"
          >
            New Age Group operates across energy, foods, agriculture, transport,
            and commodity exports, combining local expertise with global
            standards since 2009.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary transition hover:brightness-105"
            >
              Start a conversation
              <ArrowRight size={16} />
            </NavLink>
            <NavLink
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore services
            </NavLink>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur"
        >
          <h3 className="text-lg font-semibold text-white">
            Group highlights
          </h3>
          <ul className="mt-4 space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              Trusted partnerships across Nigeria’s public and private sectors.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              Energy, foods, agriculture, transport, and exports under one group.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              Strategic offices and outlets across major Nigerian cities.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              Quality-first operations with strong local expertise.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
              Sustainability-focused growth across energy and agriculture.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
