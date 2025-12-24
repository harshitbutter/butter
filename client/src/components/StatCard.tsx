import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-border/50 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-3 font-display">{value}</div>
      <div className="text-lg text-muted-foreground font-medium">{label}</div>
    </motion.div>
  );
}
