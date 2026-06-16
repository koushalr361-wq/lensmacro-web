"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Camera, Sparkles, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <main className="min-h-[100dvh] bg-black text-neutral-100 flex flex-col justify-between p-6 overflow-hidden relative select-none antialiased">
      
      {/* God-Tier Ambient Glows */}
      <div className="absolute top-[-10%] left-[-20%] w-[120vw] h-[50vh] bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[100vw] h-[40vh] bg-cyan-500/10 blur-[120px] pointer-events-none" />

      {/* Top Meta Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="w-full flex justify-between items-center z-20 pt-2"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[1px]">
            <div className="w-full h-full bg-neutral-950 rounded-[11px] flex items-center justify-center">
              <Camera className="w-4 h-4 text-indigo-400" />
            </div>
          </div>
          <span className="font-bold tracking-tight text-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">LensMacro</span>
        </div>
        <span className="text-[10px] uppercase font-bold tracking-widest bg-neutral-900 border border-neutral-800 text-indigo-400 px-3 py-1 rounded-full backdrop-blur-md">
          v1.0 Internal Beta
        </span>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full z-10 space-y-8 my-auto">
        
        {/* Animated Feature Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 25, delay: 0.1 }}
          className="inline-flex items-center gap-1.5 self-start bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-indigo-300 text-xs px-3.5 py-1.5 rounded-full backdrop-blur-xl font-medium"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-indigo-400" />
          <span>Volumetric Spatial AI Engine</span>
        </motion.div>

        {/* Hero Copy */}
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] text-white"
          >
            Smarter tracking. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              Zero manual entry.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
            className="text-neutral-400 text-base leading-relaxed font-medium pr-4"
          >
            Point your lens at any complex dish. Real-time depth intelligence calculates accurate portion volume instantly.
          </motion.p>
        </div>

        {/* Input Interactive Element */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.4 }}
          className="space-y-4 w-full"
        >
          <div className={`p-[1px] rounded-2xl bg-gradient-to-r transition-all duration-500 ${isFocused ? 'from-indigo-500 via-purple-500 to-cyan-400 shadow-[0_0_30px_rgba(99,102,241,0.2)]' : 'from-neutral-800 to-neutral-900'}`}>
            <div className="bg-neutral-950/90 backdrop-blur-xl rounded-[15px] flex items-center p-1.5">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Secure access token or email" 
                className="w-full bg-transparent border-0 outline-none text-white placeholder-neutral-600 px-4 py-3 text-sm font-medium transition-all"
              />
              <motion.button 
                whileTap={{ scale: 0.94 }}
                onClick={() => window.location.href = '/dashboard'}
                className="bg-white text-black font-bold text-xs uppercase tracking-wider h-11 px-5 rounded-xl flex items-center justify-center gap-1.5 shrink-0 transition-all hover:bg-neutral-200"
              >
                Enter App
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex items-center justify-between px-2 text-xs text-neutral-500 font-semibold">
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-neutral-600" />
              <span>LiDAR & Camera APIs Core</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Encrypted Diagnostics</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Footer Branding Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full text-center text-[11px] text-neutral-600 font-bold uppercase tracking-widest pt-6 z-20 border-t border-neutral-900/40"
      >
        Designed for High-Performance Operators
      </motion.div>
    </main>
  );
}
