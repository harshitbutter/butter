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
  Search, 
  FileSearch, 
  UserCheck, 
  Building2, 
  TrendingUp, 
  Award,
  Menu,
  X
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
import { FounderCard } from "@/components/FounderCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mutate, isPending } = useCreateContact();
  
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
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

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transform rotate-3">
                <span className="text-black font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold font-display tracking-tight">Butter Search</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#problem" className="text-gray-600 hover:text-primary font-medium transition-colors">Why Us</a>
              <a href="#process" className="text-gray-600 hover:text-primary font-medium transition-colors">Process</a>
              <a href="#models" className="text-gray-600 hover:text-primary font-medium transition-colors">Models</a>
              <Button onClick={scrollToContact} className="font-semibold shadow-lg shadow-primary/20">
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
              <a href="#problem" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
              <a href="#process" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Process</a>
              <a href="#models" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Models</a>
              <Button onClick={() => { scrollToContact(); setMobileMenuOpen(false); }} className="w-full">
                Partner with Us
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-dot-pattern">
        {/* Abstract shapes */}
        <div className="absolute top-20 right-0 -z-10 opacity-20 transform translate-x-1/3">
           <div className="w-96 h-96 rounded-full bg-primary blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-10 transform -translate-x-1/3">
           <div className="w-[500px] h-[500px] rounded-full bg-yellow-600 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-50 text-yellow-800 font-semibold text-sm mb-6 border border-yellow-100">
              Trusted by Elite Brands
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-tight mb-8 font-display">
              Matchmakers of <span className="relative inline-block">
                <span className="relative z-10">top talent</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/40 -z-0"></span>
              </span> <br className="hidden md:block" />
              and elite brands.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Finding the right talent for high-impact roles is not easy. 
              We leverage our extensive network and deep industry expertise to make your experience a lot better.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all" onClick={scrollToContact}>
                Partner with Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto border-2 hover:bg-gray-50" onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth'})}>
                Explore Our Process
              </Button>
            </div>
          </motion.div>
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
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Why Butter Search?" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Award className="w-10 h-10 text-primary" />,
                title: "Proven Expertise",
                description: "Founded by IIM Calcutta grads with experience at Alvarez & Marsal, PwC, and Deloitte."
              },
              {
                icon: <Briefcase className="w-10 h-10 text-primary" />,
                title: "Deep Understanding",
                description: "We are former operators who act as extensions of your team, not just recruiters."
              },
              {
                icon: <Users className="w-10 h-10 text-primary" />,
                title: "Extensive Network",
                description: "Access to a proprietary network of 50k+ Tier 1 B-school grads and top consulting alumni."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-yellow-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="process" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
        {/* Background elements */}
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
                  <Search className="w-5 h-5 text-primary" /> Candidate Search
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

      {/* Commercial Models */}
      <section id="models" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Commercial Models" subtitle="Transparent pricing tailored to your needs." />
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="fulltime" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-12 h-14 bg-white p-1 shadow-sm rounded-xl">
                <TabsTrigger value="fulltime" className="text-lg rounded-lg data-[state=active]:bg-primary data-[state=active]:text-black data-[state=active]:shadow-md transition-all">Permanent / Full-time</TabsTrigger>
                <TabsTrigger value="contractual" className="text-lg rounded-lg data-[state=active]:bg-primary data-[state=active]:text-black data-[state=active]:shadow-md transition-all">Contractual / OTC</TabsTrigger>
              </TabsList>
              
              <TabsContent value="fulltime">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <div className="text-sm font-semibold text-gray-500 uppercase mb-2">Tier 1</div>
                    <div className="text-2xl font-bold mb-4">Upto 50 Lacs</div>
                    <div className="text-4xl font-bold text-primary mb-2">15%</div>
                    <div className="text-sm text-gray-500 mb-6">of annual CTC</div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>1.5L Commencement fee</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>Dedicated consultant</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary transform scale-105 relative z-10">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Most Popular</div>
                    <div className="text-sm font-semibold text-gray-500 uppercase mb-2">Tier 2</div>
                    <div className="text-2xl font-bold mb-4">50-99.99 Lacs</div>
                    <div className="text-4xl font-bold text-primary mb-2">20%</div>
                    <div className="text-sm text-gray-500 mb-6">of annual CTC</div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>2L Commencement fee</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>Senior consultant led</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <div className="text-sm font-semibold text-gray-500 uppercase mb-2">Tier 3</div>
                    <div className="text-2xl font-bold mb-4">1 Cr+</div>
                    <div className="text-4xl font-bold text-primary mb-2">25%</div>
                    <div className="text-sm text-gray-500 mb-6">of annual CTC</div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>3L Commencement fee</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>Partner led search</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="contractual">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold mb-2">End-to-End</h3>
                    <div className="text-3xl font-bold text-primary mb-6">20%</div>
                    <ul className="space-y-3 mb-8">
                      {['Role Understanding', 'Sourcing', 'Case Screening', 'Contracting', 'Payroll'].map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold mb-2">Select</h3>
                    <div className="text-3xl font-bold text-primary mb-6">15%</div>
                    <ul className="space-y-3 mb-8">
                      {['Sourcing', 'Case Screening'].map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold mb-2">Admin</h3>
                    <div className="text-3xl font-bold text-primary mb-6">10%</div>
                    <ul className="space-y-3 mb-8">
                      {['Role Understanding', 'Contracting', 'Payroll'].map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Recent Mandates */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Recent Mandates" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
              }
            ].map((mandate, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  {mandate.icon}
                </div>
                <h4 className="text-lg font-bold mb-1">{mandate.client}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">{mandate.desc}</p>
                <div className="h-px bg-gray-200 w-full mb-3"></div>
                <p className="text-sm font-medium text-gray-800">{mandate.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Meet The Founders" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FounderCard 
              name="Harshit Chandak" 
              role="Co-Founder" 
              description="IIM Calcutta '21 graduate with strategic expertise from Alvarez & Marsal and PwC. Harshit brings deep consulting rigor to talent acquisition."
              delay={0.1}
            />
            <FounderCard 
              name="Ayush Singh" 
              role="Co-Founder" 
              description="IIM Calcutta '21 graduate with 4+ years of product experience at Naukri. Ayush understands the tech talent landscape inside out."
              delay={0.2}
            />
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
          <SectionHeader title="Let's Partner Up" subtitle="Tell us about your hiring needs, and we'll get to work." light />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" {...field} className="h-12 bg-gray-50 border-gray-200" />
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
                      <FormLabel>How can we help?</FormLabel>
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
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold font-display">Butter Search</span>
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
