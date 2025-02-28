"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  ChevronRight,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

// Navigation data
const navigationItems = [
  {
    name: "Products",
    href: "#products",
    items: [
      {
        name: "AI Infrastructure",
        href: "#ai-infrastructure",
      },
      {
        name: "Cooling Technology",
        href: "#cooling-technology",
      },
      {
        name: "Renewable Energy",
        href: "#renewable-energy",
      },
    ],
  },
  {
    name: "Technology",
    href: "#technology",
    items: [
      {
        name: "Lake Cooling",
        href: "#lake-cooling",
      },
      {
        name: "Energy Efficiency",
        href: "#energy-efficiency",
      },
      {
        name: "AI Optimization",
        href: "#ai-optimization",
      },
    ],
  },
  {
    name: "About",
    href: "#about",
    items: [
      {
        name: "Our Mission",
        href: "#mission",
      },
      {
        name: "Team",
        href: "#team",
      },
      {
        name: "Investors",
        href: "#investors",
      },
    ],
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Handle scroll event to add shadow to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 bg-green-500 flex items-center justify-center">
              <span className="text-black font-bold">NX</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex space-x-2">
              {navigationItems.map((item) => (
                <li 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.items && setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link 
                    href={item.href}
                    className={cn(
                      "inline-flex items-center px-3 py-2 text-sm font-medium transition-colors hover:text-green-500",
                      activeItem === item.href ? "text-green-500" : "text-white"
                    )}
                    onClick={() => setActiveItem(item.href)}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Dropdown */}
                  {item.items && hoveredItem === item.name && (
                    <div className="absolute top-full left-0 mt-1 bg-black min-w-[200px] py-1 z-50">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-white/5 hover:text-green-500"
                          onClick={() => {
                            setActiveItem(subItem.href);
                            setHoveredItem(null);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            
            <div className="ml-6 flex items-center space-x-4">
              <Link
                href="#whitepaper"
                className="text-sm font-medium text-white hover:text-green-500 transition-colors"
              >
                Whitepaper
              </Link>
              <Button asChild className="bg-green-500 hover:bg-green-600 text-black font-medium rounded-none px-4 h-9">
                <Link href="#contact">Invest Now</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu" className="text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[280px] p-0 bg-black border-l-0 rounded-none">
              <div className="flex items-center justify-between p-4 border-b-0">
                <div className="w-8 h-8 bg-green-500 flex items-center justify-center">
                  <span className="text-black font-bold">NX</span>
                </div>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close Menu" className="text-white">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>
              
              <div className="py-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link 
                      href={item.href}
                      className={cn(
                        "flex items-center px-4 py-2 text-sm font-medium",
                        activeItem === item.href ? "text-green-500" : "text-white"
                      )}
                      onClick={() => {
                        setActiveItem(item.href);
                        if (!item.items) setIsOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                    
                    {item.items && (
                      <div className="pl-4 border-l-0 ml-4 my-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={cn(
                              "flex items-center px-4 py-2 text-xs",
                              activeItem === subItem.href ? "text-green-500" : "text-white/80"
                            )}
                            onClick={() => {
                              setActiveItem(subItem.href);
                              setIsOpen(false);
                            }}
                          >
                            <ChevronRight className="h-3 w-3 mr-2 text-green-500" />
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t-0 mt-auto">
                <div className="flex flex-col space-y-3">
                  <Link 
                    href="#whitepaper"
                    className="text-sm text-white hover:text-green-500 flex items-center"
                  >
                    Whitepaper <ExternalLink className="h-3.5 w-3.5 ml-1" />
                  </Link>
                  <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-black rounded-none">
                    <Link href="#contact">Invest Now</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
