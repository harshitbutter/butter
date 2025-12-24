import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Building2, TrendingUp, Award, Briefcase, Zap, Target, BarChart3, Lightbulb } from "lucide-react";

const mandatesData = [
  { 
    client: "Swiss Wealth-Tech", 
    desc: "CHF 80Bn+ AUM", 
    role: "Core Leadership Team",
    icon: <Building2 className="w-6 h-6 text-white" />
  },
  { 
    client: "Food-tech Startup", 
    desc: "Ex-BCG Founder", 
    role: "Growth & Performance Marketing Head",
    icon: <TrendingUp className="w-6 h-6 text-white" />
  },
  { 
    client: "Health-Tech Unicorn", 
    desc: "Flipkart-backed", 
    role: "National Sales Head & VP Roles",
    icon: <Award className="w-6 h-6 text-white" />
  },
  { 
    client: "B2B Marketplace", 
    desc: "Fruits & Vegetables", 
    role: "Head of Corporate Affairs",
    icon: <Briefcase className="w-6 h-6 text-white" />
  },
  { 
    client: "Tech Startup Series A", 
    desc: "Accel-backed", 
    role: "VP Engineering & Head of Product",
    icon: <Zap className="w-6 h-6 text-white" />
  },
  { 
    client: "B2B Commerce Platform", 
    desc: "GIC-led Series C", 
    role: "Head of Operations & Regional Lead",
    icon: <Target className="w-6 h-6 text-white" />
  },
  { 
    client: "Cybersecurity Startup", 
    desc: "$20M Valuation", 
    role: "Engineering Head & Talent Lead",
    icon: <BarChart3 className="w-6 h-6 text-white" />
  },
  { 
    client: "Crypto Exchange", 
    desc: "$5M+ ARR, 1.2M+ Users", 
    role: "CTO & Principal Officer",
    icon: <Lightbulb className="w-6 h-6 text-white" />
  }
];

export function MandatesCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % mandatesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-4">
        {mandatesData.map((mandate, i) => {
          const isActive = i === scrollPosition;
          return (
            <motion.div 
              key={i}
              animate={{ opacity: isActive ? 1 : 0.6, scale: isActive ? 1 : 0.95 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 w-72 bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                {mandate.icon}
              </div>
              <h4 className="text-lg font-bold mb-1">{mandate.client}</h4>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">{mandate.desc}</p>
              <div className="h-px bg-gray-200 w-full mb-3"></div>
              <p className="text-sm font-medium text-gray-800">{mandate.role}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
