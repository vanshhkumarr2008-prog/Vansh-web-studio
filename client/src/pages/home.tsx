import { ArrowRight, Monitor, LineChart, MousePointerClick, BrainCircuit, MapPin, BarChart3, Star, Mail, Phone, MapPin as MapPinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useSubmitContact } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

export default function Home() {
  const { mutate: submitContact, isPending } = useSubmitContact();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      businessType: "",
      websiteUrl: "",
    }
  });

  const onSubmit = (data: InsertContactMessage) => {
    submitContact(data, {
      onSuccess: () => form.reset()
    });
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* 1. Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial="hidden" animate="show" variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeUp} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Award-Winning Web Design Agency
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-6">
                We Build Websites That <span className="text-primary">Grow Local Businesses</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Drive more leads and boost your revenue with our custom, high-converting digital solutions focused on ROI.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4">
                <Button size="lg" asChild className="w-full sm:w-auto text-base rounded-xl px-8 h-14 shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <a href="#contact">Get a Free Audit</a>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-base rounded-xl px-8 h-14 border-2 hover:-translate-y-0.5 transition-all">
                  <a href="#portfolio">View Our Work <ArrowRight className="w-4 h-4 ml-2" /></a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative lg:ml-auto w-full max-w-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] blur-2xl transform translate-x-4 translate-y-4"></div>
              {/* hero team meeting at office Unsplash */}
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team" 
                className="relative z-10 w-full h-auto aspect-square md:aspect-[4/3] object-cover rounded-[2rem] shadow-2xl border border-border/50"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section id="services" className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">Our Expertise for Your Business</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: "Web Design",
                desc: "Crafting high-converting, mobile-responsive websites tailored for local businesses. Enhance your online presence."
              },
              {
                icon: LineChart,
                title: "SEO Optimization",
                desc: "Boost your local search visibility and attract targeted customers through data-backed strategies."
              },
              {
                icon: MousePointerClick,
                title: "Conversion Rate Optimization",
                desc: "Transform visitors into paying customers with strategic design and persuasive content."
              }
            ].map((service, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Partner Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] transform -rotate-3 z-0"></div>
              {/* people presenting dashboard Unsplash */}
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Business Presentation" 
                className="relative z-10 rounded-[2rem] shadow-xl w-full object-cover aspect-[4/3]"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Why Partner With Us</h2>
              
              <div className="space-y-8">
                {[
                  {
                    icon: BrainCircuit,
                    title: "Data-Driven Design",
                    desc: "Our solutions are grounded in analytics and user behavior research to ensure maximum ROI."
                  },
                  {
                    icon: MapPin,
                    title: "Local Market Expertise",
                    desc: "We understand the unique challenges of local businesses and craft strategies that resonate with your community."
                  },
                  {
                    icon: BarChart3,
                    title: "Transparent Reporting",
                    desc: "Stay informed with clear, regular reports on campaign performance and project progress."
                  }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <feature.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Portfolio Section */}
      <section id="portfolio" className="py-24 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Our Recent Work</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">High-converting websites for local businesses</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Apex Dental Clinic",
                desc: "Modern website for a leading local dental practice.",
                img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" // dental office interior
              },
              {
                title: "Summit Law Partners",
                desc: "Professional web presence for a boutique law firm.",
                img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" // law scales/office
              },
              {
                title: "Horizon Real Estate",
                desc: "Property listings portal for local agents.",
                img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" // modern building exterior
              }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md border border-border/50 aspect-[4/3]">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Premium testimonials slider</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-16">What Our Clients Say</h3>
          
          <div className="bg-card p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-border/50">
            <div className="flex justify-center gap-1 mb-8">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-3xl font-medium leading-relaxed mb-10 text-foreground">
              "Vansh Web Studio completely transformed our online presence. Our new website is not only beautiful but also generates consistent leads. Highly recommend their expertise!"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                {/* avatar Unsplash */}
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Sarah Johnson</div>
                <div className="text-muted-foreground text-sm">Marketing Director, Apex Dental Clinic</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className="py-24 bg-muted/30 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form Side */}
            <div className="bg-card p-8 md:p-10 rounded-3xl shadow-xl border border-border/50">
              <h3 className="text-2xl md:text-3xl font-bold mb-8">Let's Discuss Your Project</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="h-12 text-base rounded-xl bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Business Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 text-base rounded-xl bg-background">
                              <SelectValue placeholder="Select business type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Local Service">Local Service (Plumbing, Dental, etc.)</SelectItem>
                            <SelectItem value="Retail / E-commerce">Retail / E-commerce</SelectItem>
                            <SelectItem value="B2B / Agency">B2B / Agency</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="websiteUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Website URL (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://yourwebsite.com" className="h-12 text-base rounded-xl bg-background" {...field} value={field.value || ''} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full h-14 text-lg rounded-xl font-bold" disabled={isPending}>
                    {isPending ? "Submitting..." : "Schedule a Free Consultation"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col justify-center">
              <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Contact & About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Partner With The Experts</h3>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                We specialize in crafting high-converting websites that empower local businesses to achieve sustainable growth and scale online. Let's build something great together.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email Us</div>
                    <a href="mailto:hello@vanshwebstudio.com" className="text-xl font-bold hover:text-primary transition-colors">
                      hello@vanshwebstudio.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Call Us</div>
                    <a href="tel:+15551234567" className="text-xl font-bold hover:text-primary transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Visit Us</div>
                    <div className="text-xl font-bold">
                      123 Digital Ave, Tech City, USA
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
