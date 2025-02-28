"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { motion, useInView } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Github, Mail, ChevronRight, MapPin, Phone, CircleDot } from "lucide-react";
import { useRef } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });

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

  const socialLinks = [
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com" },
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com" },
    { name: "GitHub", icon: <Github className="h-5 w-5" />, href: "https://github.com" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Press", href: "/press" },
    { name: "Investors", href: "/investors" },
  ];

  const resourceLinks = [
    { name: "Documentation", href: "/documentation" },
    { name: "API", href: "/api" },
    { name: "Support", href: "/support" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const contactInfo = [
    { icon: <MapPin className="h-5 w-5" />, text: "Sofia Tech Park, Bulgaria" },
    { icon: <Phone className="h-5 w-5" />, text: "+359 2 123 4567" },
    { icon: <Mail className="h-5 w-5" />, text: "contact@ainexus.tech" },
  ];

  return (
    <footer ref={footerRef} className="w-full bg-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.03] z-0"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Company info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2">
                <CircleDot className="h-5 w-5 text-green-500" />
                <h3 className="text-2xl font-bold">AI <span className="text-green-500">Nexus</span></h3>
              </div>
            </Link>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Revolutionizing AI infrastructure with sustainable data centers powered by renewable energy and innovative lake cooling technology.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${link.name}`}
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 rounded-none bg-zinc-900 text-gray-400 hover:bg-green-500 hover:text-black transition-colors"
                  >
                    {link.icon}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
          
          {/* Company links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="font-semibold text-lg relative inline-block">
              Company
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-500"></span>
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                  >
                    <ChevronRight className="h-4 w-0 mr-0 group-hover:w-4 group-hover:mr-1 transition-all duration-300 text-green-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Resources links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="font-semibold text-lg relative inline-block">
              Resources
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-500"></span>
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                  >
                    <ChevronRight className="h-4 w-0 mr-0 group-hover:w-4 group-hover:mr-1 transition-all duration-300 text-green-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="font-semibold text-lg relative inline-block">
              Stay Connected
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-500"></span>
            </h4>
            <p className="text-gray-400">Get the latest updates and news about our technology</p>
            
            <div className="space-y-4">
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-zinc-900 border-zinc-800 rounded-none pr-12 focus:border-green-500 focus:ring-green-500 text-white placeholder:text-gray-500" 
                />
                <Button 
                  size="sm" 
                  className="absolute right-0 top-0 bottom-0 bg-green-500 hover:bg-green-600 text-black h-full w-10 p-0 rounded-none"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-xs text-gray-500">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
            </div>
            
            <div className="space-y-3 mt-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-400 group hover:text-white transition-colors">
                  <div className="text-green-500 mt-0.5 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <Separator className="my-8 bg-zinc-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm"> {currentYear} AI Nexus. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/terms" className="text-gray-500 hover:text-green-500 text-sm transition-colors">Terms</Link>
            <Link href="/privacy" className="text-gray-500 hover:text-green-500 text-sm transition-colors">Privacy</Link>
            <Link href="/cookies" className="text-gray-500 hover:text-green-500 text-sm transition-colors">Cookies</Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-green-500 text-sm transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
