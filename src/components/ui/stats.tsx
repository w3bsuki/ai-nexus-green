"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export function StatItem({
  value,
  label,
  prefix = "",
  suffix = "",
  duration = 2,
}: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalDuration = duration * 1000;
      const incrementTime = totalDuration / end;
      
      // Don't set up the interval if the value is 0
      if (end === 0) {
        setCount(0);
        return;
      }
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);
      
      return () => {
        clearInterval(timer);
      };
    }
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm"
    >
      <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-500 mb-2">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-slate-600 dark:text-slate-400">{label}</div>
    </motion.div>
  );
}

interface StatsGridProps {
  stats: StatItemProps[];
  columns?: 2 | 3 | 4;
}

export function StatsGrid({ stats, columns = 4 }: StatsGridProps) {
  const columnClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${columnClass[columns]} gap-6`}>
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          value={stat.value}
          label={stat.label}
          prefix={stat.prefix}
          suffix={stat.suffix}
          duration={stat.duration}
        />
      ))}
    </div>
  );
}
