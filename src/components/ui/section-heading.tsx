"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  highlightWords?: string[];
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  highlightWords = [],
  centered = true,
  className,
}: SectionHeadingProps) {
  // Function to highlight specific words in the title
  const renderTitle = () => {
    if (highlightWords.length === 0) {
      return <span>{title}</span>;
    }

    const words = title.split(" ");
    return words.map((word, index) => {
      const shouldHighlight = highlightWords.some(
        (highlight) => word.toLowerCase().includes(highlight.toLowerCase())
      );

      return (
        <span
          key={index}
          className={
            shouldHighlight
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              : ""
          }
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      );
    });
  };

  return (
    <div
      className={cn(
        "space-y-4 mb-12",
        centered && "text-center",
        className
      )}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold"
      >
        {renderTitle()}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
