"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CircleDot } from "lucide-react";
import { useRef } from "react";

const teamMembers = [
  {
    name: "Alexander Petrov",
    role: "Founder & CEO",
    bio: "Former data center operations executive with 15+ years of experience in sustainable infrastructure development across Europe.",
    avatar: "/team/alexander.jpg",
  },
  {
    name: "Dr. Maria Ivanova",
    role: "CTO",
    bio: "PhD in Computer Engineering with expertise in energy-efficient computing systems and thermal management technologies.",
    avatar: "/team/maria.jpg",
  },
  {
    name: "Viktor Dimitrov",
    role: "CFO",
    bio: "Experienced financial executive with a background in renewable energy investments and infrastructure project financing.",
    avatar: "/team/viktor.jpg",
  },
  {
    name: "Elena Todorova",
    role: "Head of Sustainability",
    bio: "Environmental scientist specializing in data center sustainability metrics and carbon footprint reduction strategies.",
    avatar: "/team/elena.jpg",
  },
];

export function AboutSection() {
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
    <section className="py-24 bg-black relative overflow-hidden" id="about">
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
            <span className="text-xs font-medium text-green-500">About Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-green-500">AI Nexus</span>
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg">
            Building Bulgaria's most sustainable AI data center to power the future of artificial intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-white/70">
              At AI Nexus, we're on a mission to build the most sustainable AI computing infrastructure in Europe. 
              We believe that as AI becomes increasingly central to our society, the environmental impact of AI 
              data centers must be addressed head-on.
            </p>
            <p className="text-white/70">
              Our data center in Bulgaria leverages natural lake cooling, solar power, and innovative energy-efficient 
              technologies to dramatically reduce the carbon footprint of AI computing while providing world-class 
              performance for AI workloads.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-black/30 p-6 rounded-none border border-white/10 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 group">
                <div className="text-green-500 font-bold text-3xl group-hover:translate-y-[-2px] transition-transform">40%</div>
                <div className="text-white/70">Lower energy consumption than traditional data centers</div>
              </div>
              <div className="bg-black/30 p-6 rounded-none border border-white/10 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 group">
                <div className="text-green-500 font-bold text-3xl group-hover:translate-y-[-2px] transition-transform">100%</div>
                <div className="text-white/70">Powered by renewable energy sources</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-video bg-black/50 rounded-none overflow-hidden shadow-lg border border-white/10">
              <img 
                src="/data-center.jpg" 
                alt="AI Nexus Sustainable Data Center" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80";
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-black/80 p-4 rounded-none shadow-lg border border-white/10">
              <div className="text-sm font-medium text-white/70">Location</div>
              <div className="font-bold text-white">Sofia, Bulgaria</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-black/30 p-6 rounded-none border border-white/10 h-40 flex items-center justify-center hover:border-green-500/50 transition-all duration-300 group">
                  <div className="text-center group-hover:translate-y-[-2px] transition-transform">
                    <div className="text-4xl font-bold text-green-500">2026</div>
                    <div className="text-sm text-white/70">Phase 1 Launch</div>
                  </div>
                </div>
                <div className="bg-black/30 p-6 rounded-none border border-white/10 h-40 flex items-center justify-center hover:border-green-500/50 transition-all duration-300 group">
                  <div className="text-center group-hover:translate-y-[-2px] transition-transform">
                    <div className="text-4xl font-bold text-green-500">€300M</div>
                    <div className="text-sm text-white/70">Total Investment</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-black/30 p-6 rounded-none border border-white/10 h-40 flex items-center justify-center hover:border-green-500/50 transition-all duration-300 group">
                  <div className="text-center group-hover:translate-y-[-2px] transition-transform">
                    <div className="text-4xl font-bold text-green-500">500+</div>
                    <div className="text-sm text-white/70">AI-Optimized Servers</div>
                  </div>
                </div>
                <div className="bg-black/30 p-6 rounded-none border border-white/10 h-40 flex items-center justify-center hover:border-green-500/50 transition-all duration-300 group">
                  <div className="text-center group-hover:translate-y-[-2px] transition-transform">
                    <div className="text-4xl font-bold text-green-500">1.03</div>
                    <div className="text-sm text-white/70">Target PUE</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Why AI Infrastructure Matters</h3>
            <p className="text-white/70">
              The rapid advancement of AI is driving unprecedented demand for specialized computing infrastructure. 
              Training and running large AI models requires massive computational resources, and traditional data 
              centers are struggling to meet these demands efficiently.
            </p>
            <p className="text-white/70">
              AI Nexus addresses this challenge by building infrastructure specifically optimized for AI workloads, 
              with a focus on sustainability. Our innovative lake cooling system harnesses the natural cooling properties 
              of Bulgaria's lakes to dramatically reduce energy consumption, while our solar infrastructure ensures 
              renewable power generation.
            </p>
            <div className="pt-4">
              <Button asChild className="bg-green-500 hover:bg-green-600 text-black font-medium h-12 px-6 rounded-none flex items-center gap-2 transition-all duration-300 hover:translate-y-[-2px]">
                <Link href="#roadmap">
                  View Our Roadmap
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Our Leadership Team</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Led by experts in data center operations, sustainable technology, and finance
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="bg-black/30 p-6 rounded-none border border-white/10 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4 border-2 border-black shadow-md group-hover:border-green-500/50 transition-all duration-300">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-green-500 text-black text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h4 className="text-lg font-bold text-white group-hover:text-green-500 transition-colors duration-300">{member.name}</h4>
                <p className="text-green-500 text-sm mb-3">{member.role}</p>
                <p className="text-white/70 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-24 bg-black/30 p-8 md:p-12 rounded-none border border-white/10 text-center backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Join Our Vision for Sustainable AI</h3>
          <p className="text-white/70 max-w-3xl mx-auto mb-8">
            We're looking for investors, partners, and team members who share our commitment to building 
            sustainable AI infrastructure that will power the next generation of technological innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-green-500 hover:bg-green-600 text-black font-medium h-12 px-6 rounded-none flex items-center gap-2 transition-all duration-300 hover:translate-y-[-2px]">
              <Link href="#investment">
                Investment Opportunities
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/5 h-12 px-6 rounded-none hover:border-green-500/50 transition-all duration-300">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
