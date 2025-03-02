"use client";

import { Button } from "@/components/ui/button";
import { Card as StandardCard, CardContent as StandardCardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Card } from "@/components/ui/enhanced-card";
import Link from "next/link";
import { ArrowRight, CircleDot, Check, Handshake } from "lucide-react";
import { cn } from "@/lib/utils";

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

export function InvestorsSection() {
  return (
    <section className="py-20 bg-black relative" id="investment">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Dark background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-green-500/50 mb-4">
            <div className="w-2 h-2 bg-green-500"></div>
            <span className="text-sm font-medium text-green-500">INVESTMENT OPPORTUNITIES</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Invest in the <span className="text-green-500">Future</span> of AI
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed">
            Join us in building Bulgaria's first solar-powered AI data center with exceptional returns and sustainable impact
          </p>
        </div>

        {/* Investment opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {investmentOpportunities.map((opportunity, index) => (
            <StandardCard key={index} className="bg-black border border-white/10 hover:border-green-500/30 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold text-white mb-1">{opportunity.title}</CardTitle>
                    <CardDescription className="text-white/80">{opportunity.description}</CardDescription>
                  </div>
                  <div className="px-2 py-1 bg-green-500/10 border border-green-500/30">
                    <span className="text-xs font-medium text-green-500">{opportunity.status}</span>
                  </div>
                </div>
              </CardHeader>
              <StandardCardContent className="pb-4">
                <div className="mb-4">
                  <div className="text-sm text-white/60 mb-1">Minimum Investment</div>
                  <div className="text-xl font-bold text-green-500">{opportunity.minInvestment}</div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-white/60 mb-2">Key Benefits</div>
                  <ul className="space-y-2">
                    {opportunity.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="text-sm text-white/60 mb-1">Return on Investment</div>
                  <div className="text-lg font-bold text-white">{opportunity.roi}</div>
                </div>
              </StandardCardContent>
              <CardFooter className="pt-2">
                <Button 
                  asChild 
                  variant="custom"
                  className={cn(
                    "bg-green-500 text-black hover:bg-white hover:text-green-500 w-full",
                    "px-5 py-2 font-medium",
                    "transition-colors duration-300"
                  )}
                >
                  <Link href="#contact">
                    Request Details
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
            </StandardCard>
          ))}
        </div>
        
        {/* Partnership opportunities section */}
        <Card 
          variant="grid" 
          className="mt-12 bg-black border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-green-500/50 mb-4">
                <div className="w-2 h-2 bg-green-500"></div>
                <span className="text-sm font-medium text-green-500">PARTNERSHIP OPPORTUNITIES</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Become a Strategic Partner</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                We're seeking strategic partnerships with technology providers, energy companies, and AI solution developers to build the most sustainable AI infrastructure in Europe.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">Technology integration partnerships</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">Renewable energy collaborations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">AI solution development opportunities</span>
                </li>
              </ul>
              <Button 
                asChild 
                variant="custom"
                className={cn(
                  "bg-green-500 text-black hover:bg-white hover:text-green-500",
                  "px-6 py-2 font-medium",
                  "transition-colors duration-300"
                )}
              >
                <Link href="#contact" className="flex items-center gap-2">
                  <Handshake className="h-5 w-5" />
                  Become a Partner
                </Link>
              </Button>
            </div>
            <div className="bg-black/50 border border-white/10 p-6">
              <h4 className="text-xl font-bold text-white mb-4">Partner Benefits</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-500 font-bold">1</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-1">Co-Development Opportunities</h5>
                    <p className="text-sm text-white/80">Work with us to develop and test new technologies in a real-world AI data center environment.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-500 font-bold">2</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-1">Preferred Access</h5>
                    <p className="text-sm text-white/80">Get priority access to AI computing resources and infrastructure.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-500 font-bold">3</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-1">Brand Association</h5>
                    <p className="text-sm text-white/80">Associate your brand with Europe's most sustainable AI data center.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
