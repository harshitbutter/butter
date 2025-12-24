import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

interface FounderCardProps {
  name: string;
  role: string;
  description: string;
  delay?: number;
}

export function FounderCard({ name, role, description, delay = 0 }: FounderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="h-2 bg-primary w-full" />
      <div className="p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">{name}</h3>
            <p className="text-sm text-primary font-bold uppercase tracking-wider mt-1">{role}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-full text-gray-400 group-hover:text-[#0077b5] group-hover:bg-blue-50 transition-colors cursor-pointer">
             <Linkedin className="w-5 h-5" />
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
