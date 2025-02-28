"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ExternalLink, 
  BarChart3, 
  Globe, 
  ChevronDown,
  Server,
  Cpu,
  Play
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Autoplay video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.3,
        ease: "easeOut" 
      } 
    },
  };

  return (
    <section 
      id="hero" 
      className="relative pt-16 bg-black min-h-screen flex items-center overflow-hidden"
    >
      {/* Background video with fallback */}
      <div className="absolute inset-0 bg-black z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
          poster="/datacenter-concept.jpg"
        >
          <source src="/datacenter-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
        </video>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70 z-10"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white opacity-[0.03] z-20"></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto relative z-30 px-4 py-16 md:py-20">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Left column - Main content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div variants={itemVariants} className="mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <span className="text-green-500 text-xs font-medium tracking-wide uppercase">
                  Next-Generation Infrastructure
                </span>
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white"
            >
              Europe's Most Advanced{" "}
              <span className="text-green-500 block mt-1">
                Sustainable AI Data Center
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-white/90 mb-8 leading-relaxed max-w-xl"
            >
              Pioneering the future of AI infrastructure in Bulgaria with proprietary 
              lake cooling technology, 100% renewable energy, and cutting-edge 
              facilities designed for enterprise-scale AI computing.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-6 h-auto rounded-none"
              >
                <Link href="#investment" className="flex items-center gap-2">
                  Investment Deck
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-white hover:bg-white/10 text-white font-medium px-6 py-6 h-auto rounded-none"
              >
                <Link href="#whitepaper" className="flex items-center gap-2">
                  Technical Whitepaper
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            
            {/* Metrics section */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="border-l-2 border-green-500 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-5 w-5 text-green-500" />
                  <h3 className="font-medium text-white">ROI Projection</h3>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">32%</span>
                  <span className="text-sm font-normal text-white/70 ml-2">Annual</span>
                </div>
                <p className="text-sm text-white/60 mt-1">Based on current market demand</p>
              </div>
              
              <div className="border-l-2 border-green-500 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="h-5 w-5 text-green-500" />
                  <h3 className="font-medium text-white">Carbon Reduction</h3>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">40%</span>
                  <span className="text-sm font-normal text-white/70 ml-2">Lower</span>
                </div>
                <p className="text-sm text-white/60 mt-1">Compared to traditional data centers</p>
              </div>
            </motion.div>
          </div>
          
          {/* Right column - Visual content */}
          <div className="lg:col-span-5">
            <motion.div variants={itemVariants} className="relative">
              {/* Main image with frame */}
              <div className="relative overflow-hidden border border-white/20 bg-black/50 backdrop-blur-sm">
                <div className="aspect-[4/3] relative">
                  {/* Image with fallback */}
                  <img 
                    src="/datacenter-concept.jpg" 
                    alt="AI Data Center Concept" 
                    className="w-full h-full object-cover opacity-90"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80";
                    }}
                  />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      className="rounded-full w-16 h-16 bg-green-500/90 hover:bg-green-500 text-black border-2 border-black"
                      onClick={() => {
                        // Video modal logic would go here
                        alert("Video modal would open here");
                      }}
                    >
                      <Play className="h-6 w-6 ml-1" />
                    </Button>
                  </div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  {/* Tech badges */}
                  <div className="absolute top-0 left-0 flex">
                    <div className="bg-black/80 backdrop-blur-sm border-r border-white/10 py-1.5 px-3">
                      <span className="text-xs font-medium text-green-500">Lake Cooling</span>
                    </div>
                    <div className="bg-black/80 backdrop-blur-sm border-r border-white/10 py-1.5 px-3">
                      <span className="text-xs font-medium text-green-500">100% Renewable</span>
                    </div>
                  </div>
                </div>
                
                {/* Investment opportunity badge */}
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bg-black/90 backdrop-blur-sm border-t border-white/10 p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-white font-bold text-lg">€300M Investment Opportunity</h3>
                        <p className="text-white/70 text-sm mt-1">Phase 1 funding round open to qualified investors</p>
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-green-500 hover:bg-green-600 text-black font-medium rounded-none"
                        asChild
                      >
                        <Link href="#contact">Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Data metrics */}
              <div className="grid grid-cols-2 gap-px mt-px">
                <div className="bg-black/80 backdrop-blur-sm border border-white/10 p-4 flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <Cpu className="h-4 w-4 text-green-500" />
                    <span className="text-xs text-white/70 uppercase">Processing Power</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-white">16K</span>
                    <span className="text-xs font-normal text-white/70 ml-1">TFLOPS</span>
                  </div>
                </div>
                <div className="bg-black/80 backdrop-blur-sm border border-white/10 p-4 flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <Server className="h-4 w-4 text-green-500" />
                    <span className="text-xs text-white/70 uppercase">Capacity</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-white">50K</span>
                    <span className="text-xs font-normal text-white/70 ml-1">Servers</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Fixed scroll indicator at the bottom center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <Link 
          href="#technology" 
          className="flex flex-col items-center group"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-sm text-white/60 group-hover:text-green-500 transition-colors mb-2">
            Scroll to explore
          </span>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-green-500 transition-colors">
            <ChevronDown className="h-5 w-5 text-green-500 animate-bounce" />
          </div>
        </Link>
      </div>
    </section>
  );
}
