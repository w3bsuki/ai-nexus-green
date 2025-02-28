"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion, useInView } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, CircleDot, Phone, Mail, MapPin, FileText, FileBarChart, FileCode } from "lucide-react";
import { useRef } from "react";

export function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section className="relative py-20 bg-black text-white overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-grid-white opacity-[0.03] z-0"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <CircleDot className="h-4 w-4 text-green-500 animate-pulse" />
            <span className="text-sm uppercase tracking-wider font-medium">Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-green-500">Invest</span> in the Future?
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Contact our investment relations team to discuss how you can be part of Bulgaria's most sustainable AI data center
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Card className="border-zinc-800 bg-zinc-900 rounded-none overflow-hidden">
              <CardContent className="p-6">
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Smith" 
                      className="bg-zinc-800 border-zinc-700 rounded-none focus:border-green-500 focus:ring-green-500 placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@company.com" 
                      className="bg-zinc-800 border-zinc-700 rounded-none focus:border-green-500 focus:ring-green-500 placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-300">Company</Label>
                    <Input 
                      id="company" 
                      placeholder="Your Company" 
                      className="bg-zinc-800 border-zinc-700 rounded-none focus:border-green-500 focus:ring-green-500 placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest" className="text-gray-300">I'm interested in</Label>
                    <Select>
                      <SelectTrigger 
                        id="interest" 
                        className="bg-zinc-800 border-zinc-700 rounded-none focus:border-green-500 focus:ring-green-500 text-white"
                      >
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-800 border-zinc-700 rounded-none text-white">
                        <SelectItem value="seed">Seed Investment Round</SelectItem>
                        <SelectItem value="phase1">Phase 1 Equity Investment</SelectItem>
                        <SelectItem value="greenbond">Green Bond Program</SelectItem>
                        <SelectItem value="partnership">Strategic Partnership</SelectItem>
                        <SelectItem value="technology">Technology Partnership</SelectItem>
                        <SelectItem value="corporate">Corporate Client</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="investment" className="text-gray-300">Potential Investment Range</Label>
                    <Select>
                      <SelectTrigger 
                        id="investment" 
                        className="bg-zinc-800 border-zinc-700 rounded-none focus:border-green-500 focus:ring-green-500 text-white"
                      >
                        <SelectValue placeholder="Select investment range" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-800 border-zinc-700 rounded-none text-white">
                        <SelectItem value="100k">€100,000 - €500,000</SelectItem>
                        <SelectItem value="500k">€500,000 - €2,000,000</SelectItem>
                        <SelectItem value="2m">€2,000,000 - €10,000,000</SelectItem>
                        <SelectItem value="10m">€10,000,000+</SelectItem>
                        <SelectItem value="partnership">Partnership Only (No Direct Investment)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your investment goals or partnership interests"
                      rows={4}
                      className="bg-zinc-800 border-zinc-700 rounded-none focus:border-green-500 focus:ring-green-500 placeholder:text-gray-500"
                    />
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-black rounded-none hover:translate-y-[-2px] transition-transform">
                    Submit Inquiry <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-none p-8">
              <h3 className="text-2xl font-bold mb-4">Investment Relations</h3>
              <p className="text-gray-400 mb-6">
                Our dedicated investment relations team is available to discuss customized investment opportunities, 
                provide detailed financial projections, and arrange site visits to our facility in Bulgaria.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-gray-400">+359 2 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-gray-400">investors@ainexus.bg</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-gray-400">Sofia, Bulgaria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-none p-8">
              <h3 className="text-xl font-bold mb-4">Investor Resources</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <FileText className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-white group-hover:text-green-500 transition-colors">Investment Prospectus</p>
                    <p className="text-sm text-gray-400">Detailed overview of investment opportunities and financial projections</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <FileBarChart className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-white group-hover:text-green-500 transition-colors">Sustainability Report</p>
                    <p className="text-sm text-gray-400">Environmental impact assessment and sustainability metrics</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <FileCode className="h-5 w-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-white group-hover:text-green-500 transition-colors">Technical Specifications</p>
                    <p className="text-sm text-gray-400">Detailed technical overview of our data center infrastructure</p>
                  </div>
                </li>
              </ul>
              <Button 
                variant="outline" 
                className="mt-6 w-full rounded-none border-zinc-700 text-white hover:bg-green-500 hover:text-black hover:border-green-500 hover:translate-y-[-2px] transition-all"
              >
                Request Investor Package <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        <div ref={sectionRef} className="mt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Join Us in Building a <span className="text-green-500">Sustainable AI Future</span></h3>
            <p className="text-gray-400 max-w-3xl mx-auto mb-8">
              Our AI data center represents not just an investment opportunity, but a chance to be part of the solution 
              to one of the most pressing challenges in technology today: making AI infrastructure sustainable.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
