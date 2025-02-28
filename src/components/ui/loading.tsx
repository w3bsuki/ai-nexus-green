"use client";

import { motion } from "framer-motion";

export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} rounded-full border-2 border-t-blue-600 border-r-transparent border-b-indigo-600 border-l-transparent`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function PageLoading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-slate-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="rounded-lg border border-slate-200 p-4 shadow-sm">
      <div className="h-4 w-2/3 bg-slate-200 rounded animate-pulse mb-4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-slate-200 rounded animate-pulse"></div>
        <div className="h-3 bg-slate-200 rounded animate-pulse w-5/6"></div>
        <div className="h-3 bg-slate-200 rounded animate-pulse w-4/6"></div>
      </div>
    </div>
  );
}
