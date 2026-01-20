import { motion } from "framer-motion";
import { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 20px 45px rgba(15, 23, 42, 0.12)" }}
      transition={{ duration: 0.3 }}
      className="h-full rounded-2xl border border-slate-200 bg-white p-6"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
