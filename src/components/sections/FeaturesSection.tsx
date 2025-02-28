"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Check, 
  ChevronRight, 
  Droplets, 
  Sun, 
  LayoutGrid, 
  MapPin, 
  Cpu, 
  Leaf,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    title: "Lake Cooling Technology",
    description: "Our innovative lake cooling system reduces energy consumption by up to 40% compared to traditional air cooling methods, utilizing the natural cooling properties of nearby lake water.",
    icon: <Droplets className="h-8 w-8" />,
    benefits: ["40% energy reduction", "Minimal environmental impact", "Sustainable cooling solution"],
  },
  {
    title: "Solar Power Integration",
    description: "Our facility is powered by extensive solar panel arrays, generating clean renewable energy to support our operations and minimize our carbon footprint.",
    icon: <Sun className="h-8 w-8" />,
    benefits: ["100% renewable energy", "Zero carbon emissions", "Energy independence"],
  },
  {
    title: "Modular Expansion Design",
    description: "Our data center is built with a modular design, allowing for efficient scaling from Phase 1 (10 servers) to Phase 2 (100 servers) and beyond, with minimal disruption.",
    icon: <LayoutGrid className="h-8 w-8" />,
    benefits: ["Rapid scaling capability", "Minimal downtime", "Future-proof infrastructure"],
  },
  {
    title: "Strategic Location",
    description: "Located in Bulgaria, our facility benefits from a cool climate, access to renewable energy sources, and strategic positioning within the European market.",
    icon: <MapPin className="h-8 w-8" />,
    benefits: ["Optimal climate conditions", "EU regulatory compliance", "Strategic market access"],
  },
  {
    title: "AI-Optimized Infrastructure",
    description: "Purpose-built for AI workloads, our server architecture is designed to maximize performance for machine learning, deep learning, and large language model training.",
    icon: <Cpu className="h-8 w-8" />,
    benefits: ["High-performance GPUs", "Optimized for AI workloads", "Low-latency interconnects"],
  },
  {
    title: "Carbon Neutral Commitment",
    description: "We're committed to achieving carbon neutrality through renewable energy, efficient cooling, and carbon offset programs for any remaining emissions.",
    icon: <Leaf className="h-8 w-8" />,
    benefits: ["Carbon offset programs", "Sustainable supply chain", "Environmental certifications"],
  },
];

export function FeaturesSection() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      } 
    },
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="features">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.03]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={headingRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-green-500 text-xs font-medium tracking-wide uppercase">
              Sustainable Technology
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight text-white mb-6">
            Eco-Friendly <span className="text-green-500">Infrastructure</span> for the Future of AI
          </h2>
          
          <p className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl">
            Our data center combines cutting-edge technology with environmental responsibility to create a sustainable AI infrastructure that doesn't compromise on performance.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-black border border-white/10 p-8 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="text-green-500 mb-6 p-4 bg-black/50 border border-green-500/20 inline-block group-hover:border-green-500/50 transition-colors">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-green-500 transition-colors">{feature.title}</h3>
              <p className="text-white/70 mb-6">{feature.description}</p>
              
              <div className="space-y-3 mb-8">
                {feature.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto pt-4 border-t border-white/10">
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-green-500 font-medium hover:text-green-400 transition-colors group"
                  asChild
                >
                  <Link href="#contact" className="flex items-center gap-1">
                    Learn more <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Metrics section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px">
          {[
            { value: "40%", label: "Energy Reduction" },
            { value: "100%", label: "Renewable Energy" },
            { value: "24/7", label: "Operational Support" },
            { value: "€300M", label: "Investment Opportunity" },
          ].map((metric, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-black/80 backdrop-blur-sm border border-white/10 p-8 text-center hover:bg-black/90 transition-all"
            >
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
                {metric.value}
              </div>
              <div className="text-white/70 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Button 
            asChild 
            className="bg-green-500 hover:bg-green-600 text-black font-medium px-8 py-6 h-auto rounded-none"
          >
            <Link href="#contact" className="flex items-center gap-2 text-lg">
              Learn More About Our Technology
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
