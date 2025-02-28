"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { 
  CheckCircle2, 
  Calendar, 
  Server, 
  Cpu, 
  Zap, 
  DollarSign,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";

const phases = [
  {
    id: "phase1",
    title: "Phase 1",
    description:
      "Our initial deployment focuses on establishing core infrastructure with lake cooling technology and renewable energy sources.",
    features: [
      "10 high-performance AI-optimized servers",
      "Lake cooling system implementation",
      "Solar panel installation (1.5 MW capacity)",
      "Basic security and monitoring systems",
      "Initial client onboarding and operations",
    ],
    metrics: {
      investment: "€25M",
      capacity: "10 servers",
      completion: "Q4 2026",
      powerEfficiency: "PUE 1.15",
    },
    image: "/phase1.jpg", // Placeholder for now
  },
  {
    id: "phase2",
    title: "Phase 2",
    description:
      "Expansion phase with significant scaling of computing capacity and enhanced cooling infrastructure.",
    features: [
      "Scaling to 100 AI-optimized servers",
      "Enhanced lake cooling system",
      "Expanded solar capacity (5 MW)",
      "Advanced security and redundancy systems",
      "Expanded client base and service offerings",
    ],
    metrics: {
      investment: "€75M",
      capacity: "100 servers",
      completion: "Q2 2028",
      powerEfficiency: "PUE 1.08",
    },
    image: "/phase2.jpg", // Placeholder for now
  },
  {
    id: "phase3",
    title: "Phase 3",
    description:
      "Full-scale deployment with cutting-edge technology integration and maximum efficiency.",
    features: [
      "Scaling to 500+ AI-optimized servers",
      "Advanced lake cooling with heat recapture",
      "Comprehensive renewable energy mix (12 MW)",
      "AI-driven facility management systems",
      "Full range of AI infrastructure services",
    ],
    metrics: {
      investment: "€200M",
      capacity: "500+ servers",
      completion: "Q4 2030",
      powerEfficiency: "PUE 1.03",
    },
    image: "/phase3.jpg", // Placeholder for now
  },
];

export function TechnologySection() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px 0px" });

  // Animation variants
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
    <section className="py-24 bg-black relative overflow-hidden" id="technology">
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-none mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-green-500">Development Roadmap</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Building the <span className="text-green-500">Future</span> in Phases
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            A strategic phased approach to building Bulgaria's most sustainable AI data center
          </p>
        </motion.div>

        <Tabs defaultValue="phase1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-black border border-white/10 rounded-none">
            {phases.map((phase) => (
              <TabsTrigger 
                key={phase.id} 
                value={phase.id} 
                className="text-sm md:text-base data-[state=active]:bg-green-500 data-[state=active]:text-black rounded-none border-r border-white/10 last:border-r-0 py-3"
              >
                {phase.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {phases.map((phase) => (
            <TabsContent key={phase.id} value={phase.id} className="mt-6 outline-none focus:outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left column - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8 lg:col-span-5"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
                    <p className="text-white/70">{phase.description}</p>
                  </div>
                  
                  <div className="space-y-5">
                    <h4 className="font-semibold text-lg text-white">Key Components:</h4>
                    <ul className="space-y-4">
                      {phase.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      asChild 
                      className="bg-green-500 hover:bg-green-600 text-black font-medium h-12 px-6 rounded-none flex items-center gap-2 transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      <Link href="#contact" className="flex items-center gap-2">
                        Request Investment Details
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
                
                {/* Right column - Visual content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="lg:col-span-7"
                >
                  <div className="border border-white/10 bg-black/50 backdrop-blur-sm rounded-none">
                    {/* Image container */}
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={phase.image} 
                        alt={`${phase.title} visualization`} 
                        className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
                        onError={(e) => {
                          // Fallback if image doesn't exist
                          e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80";
                        }}
                      />
                    </div>
                    
                    {/* Metrics grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px">
                      <div className="bg-black/80 backdrop-blur-sm border-t border-white/10 p-4 group hover:bg-black/90 transition-colors duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="h-4 w-4 text-green-500" />
                          <span className="text-xs text-white/70 uppercase">Investment</span>
                        </div>
                        <div className="text-xl font-bold text-white group-hover:text-green-500 transition-colors duration-300">{phase.metrics.investment}</div>
                      </div>
                      
                      <div className="bg-black/80 backdrop-blur-sm border-t border-white/10 p-4 group hover:bg-black/90 transition-colors duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <Server className="h-4 w-4 text-green-500" />
                          <span className="text-xs text-white/70 uppercase">Capacity</span>
                        </div>
                        <div className="text-xl font-bold text-white group-hover:text-green-500 transition-colors duration-300">{phase.metrics.capacity}</div>
                      </div>
                      
                      <div className="bg-black/80 backdrop-blur-sm border-t border-white/10 p-4 group hover:bg-black/90 transition-colors duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-green-500" />
                          <span className="text-xs text-white/70 uppercase">Completion</span>
                        </div>
                        <div className="text-xl font-bold text-white group-hover:text-green-500 transition-colors duration-300">{phase.metrics.completion}</div>
                      </div>
                      
                      <div className="bg-black/80 backdrop-blur-sm border-t border-white/10 p-4 group hover:bg-black/90 transition-colors duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="h-4 w-4 text-green-500" />
                          <span className="text-xs text-white/70 uppercase">Efficiency</span>
                        </div>
                        <div className="text-xl font-bold text-white group-hover:text-green-500 transition-colors duration-300">{phase.metrics.powerEfficiency}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Timeline visualization */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 relative"
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-green-500/20"></div>
          
          {phases.map((phase, index) => (
            <motion.div 
              key={phase.id}
              variants={itemVariants}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-black bg-green-500`}></div>
              <div className={`w-5/12 bg-black/30 backdrop-blur-sm border border-white/10 p-6 hover:border-green-500/50 transition-all duration-300 ${
                index % 2 === 0 ? "mr-auto" : "ml-auto"
              }`}>
                <div className="font-bold text-lg text-green-500 mb-2">{phase.title}</div>
                <div className="text-white mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-500" />
                  <span>Expected completion: {phase.metrics.completion}</span>
                </div>
                <div className="text-sm text-white/70">{phase.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
