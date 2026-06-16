"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Flame, Apple, Zap, History, LayoutDashboard, Settings, User, Sparkles, Sliders } from "lucide-react";

export default function Dashboard() {
  const [isScanning, setIsScanning] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    async function toggleCamera() {
      if (isScanning) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" },
            audio: false,
          });
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (err) {
          console.error("Camera access blocked: ", err);
          alert("Enable system camera allowances inside your browser settings.");
          setIsScanning(false);
        }
      } else {
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop());
        }
        if (videoRef.current) {
          videoRef.current.srcObject = null;
        }
      }
    }
    toggleCamera();
    return () => {
      if (streamRef.current) streamRef.current.getTracks().forEach((track) => track.stop());
    };
  }, [isScanning]);

  const macroStats = [
    { label: "Energy", icon: Flame, val: "840", max: "2400", color: "from-orange-500 to-amber-500", unit: "kcal" },
    { label: "Protein", icon: Apple, val: "72g", max: "160g", color: "from-red-500 to-pink-500", unit: "" },
    { label: "Carbs", icon: Zap, val: "48g", max: "220g", color: "from-amber-400 to-yellow-500", unit: "" },
  ];

  const logs = [
    { title: "Wagyu Beef Bowl", cal: 680, time: "1:14 PM" },
    { title: "Double Espresso", cal: 5, time: "8:02 AM" }
  ];

  return (
    <div className="min-h-[100dvh] bg-black text-white pb-32 overflow-x-hidden relative font-sans select-none antialiased">
      
      {/* Structural Floating Background Glow */}
      <div className="absolute top-0 right-0 w-[80vw] h-[30vh] bg-indigo-500/5 blur-[120px] pointer-events-none" />

      {/* Top Identity Header */}
      <header className="p-5 flex justify-between items-center bg-neutral-950/80 backdrop-blur-md sticky top-0 z-40 border-b border-neutral-900/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center relative overflow-hidden">
            <User className="w-5 h-5 text-neutral-400" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-neutral-200">Koushal Reddy</h2>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <p className="text-[10px] text-indigo-400 font-black uppercase tracking-wider">Neural Pro</p>
            </div>
          </div>
        </div>
        <motion.button whileTap={{ scale: 0.95 }} className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
          <Sliders className="w-4 h-4 text-neutral-400" />
        </motion.button>
      </header>

      {/* Content Space Container */}
      <main className="p-4 space-y-6 max-w-md mx-auto">
        
        {/* Metric Roll Layout */}
        <div className="grid grid-cols-3 gap-3">
          {macroStats.map((item, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, type: "spring", stiffness: 300, damping: 20 }}
              key={item.label} 
              className="bg-neutral-900/40 border border-neutral-900 p-3.5 rounded-2xl relative overflow-hidden"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">{item.label}</span>
                <item.icon className="w-3.5 h-3.5 text-neutral-400" />
              </div>
              <p className="text-lg font-black tracking-tight">{item.val}</p>
              <p className="text-[9px] text-neutral-600 font-bold mt-0.5">Target {item.max}{item.unit}</p>
              <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 w-1/3" />
            </motion.div>
          ))}
        </div>

        {/* The Viewport Camera Scanner Box Container */}
        <motion.div 
          layout
          className="bg-neutral-900/20 border border-neutral-900 rounded-[32px] overflow-hidden aspect-square w-full relative flex flex-col justify-between p-5 group shadow-2xl"
        >
          {/* Active Camera Element */}
          <div className="absolute inset-0 bg-neutral-950 z-0">
            {isScanning && (
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                className="w-full h-full object-cover scale-x-[-1]"
              />
            )}
          </div>

          {/* Biometric UI Scanning System HUD Elements */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none z-10" />
          <div className="absolute inset-4 border border-neutral-800/40 rounded-[22px] pointer-events-none z-20" />
          
          {/* God-Level Scanning Laser Wave Line */}
          <AnimatePresence>
            {isScanning && (
              <motion.div 
                initial={{ top: "10%" }}
                animate={{ top: "90%" }}
                exit={{ opacity: 0 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2.2,
                  ease: "easeInOut"
                }}
                className="absolute left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20 pointer-events-none"
              />
            )}
          </AnimatePresence>

          {/* Scanner Header HUD */}
          <div className="z-20 flex justify-between items-start w-full">
            <div>
              <span className="bg-indigo-500 text-[9px] text-white font-black px-2 py-0.5 rounded-md tracking-widest uppercase">
                Spatial Engine
              </span>
              <h3 className="text-base font-bold text-white mt-1.5 drop-shadow-md">Lens Matrix Scanner</h3>
            </div>
            {isScanning && (
              <div className="flex items-center gap-1.5 bg-red-500/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-red-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[9px] uppercase font-black text-red-400 tracking-wider">Analyzing</span>
              </div>
            )}
          </div>

          {/* Core Trigger Center Interface */}
          <div className="z-20 flex flex-col items-center justify-center space-y-3">
            <motion.button 
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsScanning(!isScanning)}
              className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all shadow-2xl relative ${isScanning ? 'border-red-500 bg-red-500/10' : 'border-white bg-white/10'}`}
            >
              <Camera className={`w-6 h-6 ${isScanning ? 'text-red-400' : 'text-white'}`} />
            </motion.button>
            <p className="text-xs text-neutral-300 font-semibold drop-shadow-sm bg-black/40 backdrop-blur-md px-4 py-1 rounded-full border border-neutral-900/50">
              {isScanning ? "Align target within lens frame" : "Initialize spatial optical tracking"}
            </p>
          </div>

          {/* Diagnostics Analytics Footer HUD */}
          <div className="z-20 flex justify-between items-center text-[10px] text-neutral-400 font-semibold drop-shadow">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" /> Volumetric 3D Solver Active
            </span>
            <span>98.4% Acc</span>
          </div>
        </motion.div>

        {/* Activity Logs Panel */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase font-bold text-neutral-500 tracking-widest flex items-center gap-1.5 px-1">
            <History className="w-3.5 h-3.5" /> Macro Capture Logs
          </h4>
          
          <div className="space-y-2.5">
            {logs.map((log, lIdx) => (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: lIdx * 0.1 }}
                key={log.title} 
                className="p-4 bg-neutral-900/30 border border-neutral-900/80 rounded-2xl flex justify-between items-center backdrop-blur-xl"
              >
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-neutral-100">{log.title}</p>
                  <p className="text-[10px] text-neutral-500 font-medium">{log.time} • Automatic Volumetric Scan</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-indigo-400">+{log.cal}</p>
                  <p className="text-[9px] uppercase font-bold text-neutral-600 tracking-wider">kcal</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </main>

      {/* Floating Glassmorphic Bottom Navigation Dock */}
      <nav className="fixed bottom-6 left-4 right-4 max-w-sm mx-auto h-16 rounded-2xl bg-neutral-900/60 backdrop-blur-xl border border-neutral-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 flex items-center justify-around px-4">
        <button 
          onClick={() => setActiveTab("dashboard")}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === "dashboard" ? "text-indigo-400 scale-105" : "text-neutral-500 hover:text-neutral-300"}`}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span className="text-[9px] font-bold uppercase tracking-wider">Metrics</span>
        </button>
        <button 
          onClick={() => setActiveTab("history")}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === "history" ? "text-indigo-400 scale-105" : "text-neutral-500 hover:text-neutral-300"}`}
        >
          <History className="w-5 h-5" />
          <span className="text-[9px] font-bold uppercase tracking-wider">Logsheet</span>
        </button>
        <button 
          onClick={() => setActiveTab("settings")}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === "settings" ? "text-indigo-400 scale-105" : "text-neutral-500 hover:text-neutral-300"}`}
        >
          <Settings className="w-5 h-5" />
          <span className="text-[9px] font-bold uppercase tracking-wider">Engine</span>
        </button>
      </nav>

    </div>
  );
}
