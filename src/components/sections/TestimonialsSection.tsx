"use client";

import { motion, useInView } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { CircleDot, Quote } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "The AI Nexus data center represents the future of sustainable AI infrastructure. Their innovative lake cooling system and solar integration make this a standout investment in the green tech space.",
    author: "Elena Petrova",
    title: "Chief Investment Officer, European Green Tech Fund",
    avatar: "/avatars/elena.jpg",
  },
  {
    quote:
      "As a tech partner, we've been impressed by AI Nexus's commitment to sustainability without compromising on performance. Their phased approach demonstrates both vision and pragmatism.",
    author: "Marcus Andersson",
    title: "Head of Innovation, Nordic Computing Solutions",
    avatar: "/avatars/marcus.jpg",
  },
  {
    quote:
      "Bulgaria's strategic location combined with AI Nexus's sustainable approach creates a compelling investment case. Their data center addresses the growing demand for eco-friendly AI computing resources in Europe.",
    author: "Sophia Rodriguez",
    title: "Managing Partner, Horizon Ventures",
    avatar: "/avatars/sophia.jpg",
  },
  {
    quote:
      "The integration of lake cooling technology is a game-changer for data center efficiency. AI Nexus is pioneering approaches that could reduce the environmental impact of AI infrastructure by orders of magnitude.",
    author: "Dr. Nikolai Ivanov",
    title: "Director, European Institute for Sustainable Technology",
    avatar: "/avatars/nikolai.jpg",
  },
  {
    quote:
      "Our research partnership with AI Nexus has enabled us to conduct large-scale AI experiments while maintaining our commitment to environmental responsibility. Their infrastructure is both powerful and sustainable.",
    author: "Dr. Amelia Chen",
    title: "AI Research Lead, Global Science Initiative",
    avatar: "/avatars/amelia.jpg",
  },
  {
    quote:
      "The modular expansion design of AI Nexus's data center allows for scalable investment opportunities. We've been impressed by their ability to balance immediate operational needs with long-term growth potential.",
    author: "Thomas Weber",
    title: "Investment Director, European Growth Capital",
    avatar: "/avatars/thomas.jpg",
  },
];

const stats = [
  {
    value: "40%",
    label: "Lower Energy Consumption",
    description: "Compared to traditional data centers through lake cooling technology",
  },
  {
    value: "100%",
    label: "Renewable Energy",
    description: "Powered entirely by solar and other renewable energy sources",
  },
  {
    value: "€300M",
    label: "Total Investment Opportunity",
    description: "Across all three phases of development",
  },
  {
    value: "15-22%",
    label: "Projected Annual ROI",
    description: "For early-stage investors in our sustainable AI infrastructure",
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden" id="testimonials">
      <div className="absolute inset-0 bg-grid-white opacity-[0.03] z-0"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <CircleDot className="h-4 w-4 text-green-500 animate-pulse" />
            <span className="text-sm uppercase tracking-wider font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-green-500">Partners & Investors</span> Say
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Hear from the experts and investors who recognize the importance of sustainable AI infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full bg-zinc-900 border-zinc-800 rounded-none hover:border-green-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-10 w-10 text-green-500" />
                  </div>
                  
                  <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
                  
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 rounded-none border-2 border-zinc-800">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback className="bg-zinc-800 text-green-500 rounded-none">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div ref={sectionRef} className="mt-24">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <CircleDot className="h-4 w-4 text-green-500 animate-pulse" />
              <span className="text-sm uppercase tracking-wider font-medium">Impact</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              The <span className="text-green-500">Impact</span> of Our Approach
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our sustainable AI data center delivers significant environmental and financial benefits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="bg-zinc-900 border border-zinc-800 rounded-none p-8 hover:border-green-500/50 transition-colors"
              >
                <div className="text-4xl font-bold text-green-500 mb-2">{stat.value}</div>
                <div className="font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-24 bg-zinc-900 border border-zinc-800 rounded-none p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Sustainable AI Infrastructure Matters</h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  As AI adoption accelerates globally, the environmental impact of traditional data centers becomes increasingly concerning. 
                  AI workloads are particularly energy-intensive, with training a single large language model potentially consuming as much 
                  energy as hundreds of households use in a year.
                </p>
                <p className="text-gray-300">
                  Our sustainable approach addresses this challenge head-on, using innovative cooling technologies and renewable energy 
                  to dramatically reduce both the carbon footprint and operational costs of AI computing infrastructure.
                </p>
                <p className="text-gray-300">
                  By investing in AI Nexus, you're not only supporting a financially sound venture but also contributing to the 
                  development of technologies that will help make AI sustainable for our planet's future.
                </p>
              </div>
            </div>
            <div className="bg-black border border-zinc-800 rounded-none p-6">
              <h4 className="font-semibold text-lg mb-4">Environmental Impact Comparison</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Traditional Data Center</span>
                    <span className="text-sm font-medium text-red-500">High Impact</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-none h-2.5">
                    <div className="bg-red-500 h-2.5 rounded-none" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Standard "Green" Data Center</span>
                    <span className="text-sm font-medium text-yellow-500">Medium Impact</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-none h-2.5">
                    <div className="bg-yellow-500 h-2.5 rounded-none" style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">AI Nexus Data Center</span>
                    <span className="text-sm font-medium text-green-500">Low Impact</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-none h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-none" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
