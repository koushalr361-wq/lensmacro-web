"use client";

import { motion } from "framer-motion";
import { Camera, ArrowRight, Activity } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-6 overflow-hidden relative">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl w-full z-10 text-center flex flex-col items-center">
        
        {/* Premium Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 bg-neutral-900/80 border border-neutral-800 text-neutral-300 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
        >
          <Activity className="w-4 h-4 text-indigo-400" />
          <span>Next-Gen Volumetric Calorie Tracking</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
        >
          Don't guess your macros. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Scan them.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl"
        >
          The first AI nutrition tracker built for complex cuisines and precise volumetric sizing. Point your camera, get lab-grade macro breakdowns instantly.
        </motion.p>

        {/* Waitlist Capture */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-md"
        >
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Camera className="h-5 w-5 text-neutral-500" />
              </div>
              <input
                type="email"
                required
                className="block w-full pl-10 pr-3 py-3 border border-neutral-800 rounded-xl bg-neutral-900/50 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 transition-colors"
            >
              Join Waitlist
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          <p className="text-sm text-neutral-500 mt-4">
            Limited early access. Securing spots for our beta launch.
          </p>
        </motion.div>

      </div>
    </main>
  );
}