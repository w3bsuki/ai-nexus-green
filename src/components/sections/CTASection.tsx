"use client";

import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, CircleDot } from "lucide-react";
import { useRef } from "react";

export function CTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const benefits = [
    "Eco-friendly infrastructure powered by renewable energy",
    "Optimized for AI workloads with high-performance hardware",
    "Scalable solutions that grow with your needs",
    "24/7 expert support and monitoring",
    "Competitive pricing with transparent billing",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden" id="cta" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.03] z-0"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <CircleDot className="h-4 w-4 text-green-500 animate-pulse" />
                  <span className="text-sm uppercase tracking-wider font-medium">Ready to Get Started?</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Transform Your AI Infrastructure with <span className="text-green-500">AI Nexus</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                  Join the growing community of forward-thinking companies leveraging our sustainable AI infrastructure to power their innovations.
                </p>
              </div>

              <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3 group"
                    variants={itemVariants}
                  >
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <Button className="bg-green-500 hover:bg-green-600 text-black px-8 py-6 h-auto text-base rounded-none w-full sm:w-auto hover:translate-y-[-2px] transition-transform">
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 px-8 py-6 h-auto text-base rounded-none w-full sm:w-auto hover:border-green-500 transition-colors">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right content - Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bg-zinc-900 rounded-none shadow-xl overflow-hidden border border-zinc-800">
                <div className="bg-black p-6 border-b border-zinc-800">
                  <h3 className="text-2xl font-bold text-white mb-2">Early Access Program</h3>
                  <p className="text-gray-400">Limited spots available for our Phase 1 deployment</p>
                </div>
                
                <div className="p-8">
                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl font-bold">$499</span>
                    <span className="text-gray-400 ml-2">/month</span>
                    <span className="ml-4 bg-green-500/20 text-green-500 px-3 py-1 rounded-none text-xs font-medium">
                      30% OFF
                    </span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3 group">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">Dedicated AI compute resources</span>
                    </div>
                    <div className="flex items-start gap-3 group">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">Priority access to new features</span>
                    </div>
                    <div className="flex items-start gap-3 group">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">Dedicated support team</span>
                    </div>
                    <div className="flex items-start gap-3 group">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">Flexible scaling options</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-black py-6 h-auto text-base rounded-none hover:translate-y-[-2px] transition-transform">
                    Apply for Early Access
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <p className="text-center text-sm text-gray-500 mt-4">
                    No credit card required to apply
                  </p>
                </div>
                
                <div className="px-8 pb-8 pt-2">
                  <Link 
                    href="/case-studies" 
                    className="flex items-center justify-center text-green-500 hover:text-green-400 text-sm font-medium group"
                  >
                    Read success stories from our early partners
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
