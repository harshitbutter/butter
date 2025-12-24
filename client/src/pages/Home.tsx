import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { insertContactSchema, type InsertContactSubmission } from "@shared/schema";
import { useCreateContact } from "@/hooks/use-contact";
import { 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  Users, 
  FileSearch, 
  UserCheck, 
  Building2, 
  Award,
  Menu,
  X,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SectionHeader } from "@/components/SectionHeader";
import { StatCard } from "@/components/StatCard";
import { MandatesCarousel } from "@/components/MandatesCarousel";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mutate, isPending } = useCreateContact();
  
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <img src="/butter-logo.png" alt="Butter Search" className="h-8" />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection("why")} 
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                Why Choose Butter
              </button>
              <Button 
                onClick={() => scrollToSection("contact")} 
                className="font-semibold shadow-lg shadow-primary/20"
              >
                Partner with Us
              </Button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 p-4 absolute w-full">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("why")} 
                className="text-lg font-medium text-left"
              >
                Why Choose Butter
              </button>
              <Button onClick={() => scrollToSection("contact")} className="w-full">
                Partner with Us
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-20 right-0 -z-10 opacity-20 transform translate-x-1/3">
           <div className="w-96 h-96 rounded-full bg-primary blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-10 transform -translate-x-1/3">
           <div className="w-[500px] h-[500px] rounded-full bg-yellow-600 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-50 text-yellow-800 font-semibold text-sm mb-6 border border-yellow-100">
                Trusted by Elite Brands
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-8 font-display">
                Matchmakers of <span className="relative inline-block">
                  <span className="relative z-10">top talent</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/40 -z-0"></span>
                </span> <br className="hidden md:block" />
                and elite brands.
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Finding the right talent for high-impact roles is not easy. 
                We leverage our extensive network and deep industry expertise to make your experience a lot better.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all" 
                  onClick={() => scrollToSection("contact")}
                >
                  Partner with Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-8 text-lg w-full sm:w-auto border-2 hover:bg-gray-50" 
                  onClick={() => scrollToSection("process")}
                >
                  Explore our Process
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="/hero-main.png" 
                    alt="Corporate Buildings" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10 transform rotate-12"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary/20 rounded-full -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="The Talent Gap is Real" 
            subtitle="Companies struggle to find the right fit, leading to costly delays and mis-hires."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard 
              value="41%" 
              label="of companies reported lack of qualified applicants"
              delay={0.1}
            />
            <StatCard 
              value=">90 Days" 
              label="Average time to fill senior leadership roles"
              delay={0.2}
            />
            <StatCard 
              value=">15x" 
              label="Base salary is the true cost of a mis-hire"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why" className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Why Butter Search?" />
          
          <div className="space-y-8">
            {[
              {
                title: "Proven Expertise",
                description: "Our team comprises IIM Calcutta graduates (2021 batch) with deep experience at top-tier firms including Alvarez & Marsal, PwC, and Deloitte. We combine consulting rigor with operational excellence, bringing a data-driven approach to executive search. Our founders have led transformational hiring initiatives at leading companies, understanding the nuances of high-impact talent acquisition.",
                image: "/why-expertise.jpg"
              },
              {
                title: "Deep Understanding of Business Needs",
                description: "We are former operators who have been in your shoes. Having managed teams and driven business outcomes, we understand the context behind every hire. We act as extensions of your team, not just recruiters. We bring insight into organizational fit, cultural alignment, and long-term success factors that transcend a CV. Every search is backed by strategic thinking about your company's trajectory.",
                image: "/why-understanding.jpg"
              },
              {
                title: "Extensive Network & Data Advantage",
                description: "Access to a proprietary database of 50,000+ Tier-1 B-school graduates, alumni from top consulting firms (BCG, McKinsey, Bain), and a diverse network spanning tech, finance, and operations. Our network isn't just broad—it's deep. We maintain strong relationships with high-potential candidates and can unlock passive talent that never appears on job boards.",
                image: "/why-network.jpg"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all h-72"
              >
                <div className="md:w-2/5 h-72 overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-5">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="process" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-800 to-transparent opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="Our Approach" subtitle="A rigorous, data-backed methodology to find the perfect match." light />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="relative p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="absolute -top-6 left-8 bg-primary text-black font-bold text-xl w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transform rotate-3">1</div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FileSearch className="w-5 h-5 text-primary" /> Requirement Understanding
                </h3>
                <p className="text-gray-400">
                  Our team of ex-consultants deeply analyzes your business context, culture, and specific role needs to create a comprehensive scorecard.
                </p>
              </div>
            </div>

            <div className="relative p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="absolute -top-6 left-8 bg-primary text-black font-bold text-xl w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transform -rotate-2">2</div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" /> Candidate Search
                </h3>
                <p className="text-gray-400">
                  We don't just rely on job portals. We tap into our proprietary database of 50k+ premium talent and high-trust referrals.
                </p>
              </div>
            </div>

            <div className="relative p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="absolute -top-6 left-8 bg-primary text-black font-bold text-xl w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transform rotate-1">3</div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-primary" /> Extensive Screening
                </h3>
                <p className="text-gray-400">
                  Our rigorous screening framework includes detailed case studies and transcript analysis to ensure only the top 1% make it to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Mandates */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Recent Mandates" />
          <MandatesCarousel />
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Meet The Founders" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Harshit Chandak",
                role: "Co-Founder",
                description: "IIM Calcutta '21 graduate with strategic expertise from Alvarez & Marsal and PwC. Harshit brings deep consulting rigor to talent acquisition.",
                linkedIn: "https://www.linkedin.com/in/harshit-chandak-4751b3a1/",
                image: "/founder-harshit.jpg"
              },
              {
                name: "Ayush Singh",
                role: "Co-Founder",
                description: "IIM Calcutta '21 graduate with 4+ years of product experience at Naukri. Ayush understands the tech talent landscape inside out.",
                linkedIn: "https://www.linkedin.com/in/ayush-singh-8b8922b0/",
                image: "/founder-ayush.jpg"
              }
            ].map((founder, i) => (
              <motion.a
                key={i}
                href={founder.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{founder.name}</h3>
                    <p className="text-primary font-semibold text-sm">{founder.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">{founder.description}</p>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  View on LinkedIn <ExternalLink className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-900 relative">
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
           <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="Partner with Us" subtitle="Tell us about your hiring needs, and we'll get to work." light />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="h-12 bg-gray-50 border-gray-200" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@company.com" {...field} className="h-12 bg-gray-50 border-gray-200" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 123-4567" {...field} className="h-12 bg-gray-50 border-gray-200" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Inc." {...field} className="h-12 bg-gray-50 border-gray-200" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="We are looking for a VP of Sales..." 
                          className="min-h-[120px] bg-gray-50 border-gray-200" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30"
                  disabled={isPending}
                >
                  {isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/butter-logo.png" alt="Butter Search" className="h-8" />
          </div>
          
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Butter Search. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">LinkedIn</a>
            <a href="mailto:contact@buttersearch.com" className="text-gray-400 hover:text-primary transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
