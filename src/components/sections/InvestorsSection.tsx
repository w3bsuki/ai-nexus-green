"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CircleDot, Check } from "lucide-react";
import { useRef } from "react";

const investmentOpportunities = [
  {
    title: "Seed Round",
    description: "Join our early investors in building Bulgaria's most sustainable AI data center.",
    minInvestment: "€500,000",
    benefits: [
      "Priority access to future funding rounds",
      "Quarterly investor updates and site visits",
      "Advisory board consideration for major investors",
      "Early access to AI computing resources",
    ],
    roi: "Projected 18-22% annual ROI",
    status: "Open",
  },
  {
    title: "Phase 1 Equity",
    description: "Strategic investment opportunity as we build our initial infrastructure with lake cooling and solar power.",
    minInvestment: "€2,000,000",
    benefits: [
      "Board seat consideration for major investors",
      "Monthly investor calls and quarterly site visits",
      "Influence on strategic decisions",
      "Preferential rates on AI computing resources",
    ],
    roi: "Projected 15-20% annual ROI",
    status: "Open",
  },
  {
    title: "Green Bond",
    description: "Support sustainable AI infrastructure through our green bond program with fixed returns.",
    minInvestment: "€100,000",
    benefits: [
      "Fixed 8% annual return over 5 years",
      "ESG investment portfolio enhancement",
      "Quarterly sustainability impact reports",
      "Option to convert to equity in future rounds",
    ],
    roi: "8% fixed annual return",
    status: "Open",
  },
];

const partnerships = [
  {
    title: "Technology Partners",
    description: "We're seeking partnerships with hardware providers, cooling technology specialists, and renewable energy companies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <path d="M16.5 9.4 7.5 4.21" />
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.27 6.96 12 12.01l8.73-5.05" />
        <path d="M12 22.08V12" />
      </svg>
    ),
  },
  {
    title: "AI Research Institutions",
    description: "Partner with us to access sustainable computing resources for AI research and development projects.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <path d="M11 18H8a2 2 0 0 1-2-2V9" />
      </svg>
    ),
  },
  {
    title: "Corporate Clients",
    description: "Secure priority access to our sustainable AI computing resources for your organization's needs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 7h10" />
        <path d="M7 12h10" />
        <path d="M7 17h10" />
      </svg>
    ),
  },
];

export function InvestorsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section className="relative py-20 bg-black text-white overflow-hidden" id="investment">
      <div className="absolute inset-0 bg-grid-white opacity-[0.03] z-0"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <CircleDot className="h-4 w-4 text-green-500 animate-pulse" />
            <span className="text-sm uppercase tracking-wider font-medium">Investment</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investment <span className="text-green-500">Opportunities</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Join us in building Europe's most sustainable AI data center with attractive investment options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {investmentOpportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="bg-zinc-900 border-zinc-800 rounded-none h-full flex flex-col hover:border-green-500/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <CardTitle className="text-xl font-semibold text-white">{opportunity.title}</CardTitle>
                    <span className={`px-3 py-1 rounded-none text-xs font-medium ${
                      opportunity.status === "Open" 
                        ? "bg-green-500/20 text-green-500" 
                        : opportunity.status === "Coming Soon" 
                          ? "bg-zinc-500/20 text-zinc-300" 
                          : "bg-zinc-500/20 text-zinc-300"
                    }`}>
                      {opportunity.status}
                    </span>
                  </div>
                  <CardDescription className="text-gray-400">{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <p className="text-sm text-gray-400">Minimum Investment</p>
                    <p className="text-2xl font-bold text-white">{opportunity.minInvestment}</p>
                  </div>
                  <div className="mb-6">
                    <p className="text-sm text-gray-400">Expected Return</p>
                    <p className="text-lg font-medium text-green-500">{opportunity.roi}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Benefits</p>
                    <ul className="space-y-2">
                      {opportunity.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-green-500 hover:bg-green-600 text-black rounded-none hover:translate-y-[-2px] transition-transform"
                  >
                    <Link href="#contact" className="flex items-center justify-center">
                      Invest Now <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <CircleDot className="h-4 w-4 text-green-500 animate-pulse" />
              <span className="text-sm uppercase tracking-wider font-medium">Partnerships</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Partnership <span className="text-green-500">Opportunities</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're looking for strategic partners to join us in our mission to build the most sustainable AI data center in Europe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={partnership.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="bg-zinc-900 border border-zinc-800 rounded-none p-8 hover:border-green-500/50 transition-colors"
              >
                <div className="text-green-500 mb-6 mix-blend-luminosity">{partnership.icon}</div>
                <h4 className="text-xl font-bold mb-3">{partnership.title}</h4>
                <p className="text-gray-400 mb-6">{partnership.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-none border-zinc-700 text-white hover:bg-green-500 hover:text-black hover:border-green-500 hover:translate-y-[-2px] transition-all"
                >
                  <Link href="#contact" className="flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        <div ref={sectionRef} className="mt-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-zinc-900 border border-zinc-800 rounded-none p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Vision?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              For institutional investors, venture capital firms, and strategic partners, we offer customized investment packages. 
              Contact our investment relations team to discuss opportunities.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-green-500 text-black hover:bg-green-600 rounded-none hover:translate-y-[-2px] transition-transform"
            >
              <Link href="#contact" className="flex items-center">
                Contact Investment Relations <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
