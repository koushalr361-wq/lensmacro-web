"use client";

import { useState } from "react";
import { Camera, Plus, Flame, Apple, Zap, History, LayoutDashboard, Settings, User } from "lucide-react";

export default function Dashboard() {
  const [isScanning, setIsScanning] = useState(false);

  // Mock data for recent scans
  const recentScans = [
    { id: 1, name: "Grilled Chicken Salad", calories: 420, protein: "45g", carbs: "12g", fat: "14g", time: "Today, 1:15 PM" },
    { id: 2, name: "Avocado Toast with Egg", calories: 380, protein: "18g", carbs: "24g", fat: "22g", time: "Today, 8:30 AM" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-neutral-900 bg-neutral-900/20 p-6 flex flex-col justify-between hidden md:flex">
        <div className="space-y-8">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">LensMacro</span>
            <span className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-full">Pro</span>
          </div>
          
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-neutral-900 text-white rounded-xl font-medium transition-colors">
              <LayoutDashboard className="w-5 h-5 text-indigo-400" /> Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-neutral-400 hover:text-white rounded-xl font-medium transition-colors">
              <History className="w-5 h-5" /> Analytics
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-neutral-400 hover:text-white rounded-xl font-medium transition-colors">
              <Settings className="w-5 h-5" /> Settings
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3 border-t border-neutral-900 pt-4">
          <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
            <User className="w-5 h-5 text-neutral-400" />
          </div>
          <div>
            <p className="text-sm font-medium">Koushal Reddy</p>
            <p className="text-xs text-neutral-500">Premium Member</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto space-y-8 overflow-y-auto">
        
        {/* Top Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Welcome back</h1>
            <p className="text-neutral-400 text-sm">Here is your nutritional fingerprint for today.</p>
          </div>
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-neutral-200 transition-colors">
            <Plus className="w-4 h-4" /> Log Manual Meal
          </button>
        </div>

        {/* Daily Calorie Summary Rings */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-neutral-900/40 border border-neutral-900 p-5 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400"><Flame className="w-6 h-6" /></div>
            <div>
              <p className="text-xs text-neutral-400 font-medium">Calories</p>
              <p className="text-xl font-bold">800 / <span className="text-sm text-neutral-500">2,400 kcal</span></p>
            </div>
          </div>
          <div className="bg-neutral-900/40 border border-neutral-900 p-5 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-red-500/10 rounded-xl text-red-400"><Apple className="w-6 h-6" /></div>
            <div>
              <p className="text-xs text-neutral-400 font-medium">Protein</p>
              <p className="text-xl font-bold">63g / <span className="text-sm text-neutral-500">160g</span></p>
            </div>
          </div>
          <div className="bg-neutral-900/40 border border-neutral-900 p-5 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400"><Zap className="w-6 h-6" /></div>
            <div>
              <p className="text-xs text-neutral-400 font-medium">Carbs</p>
              <p className="text-xl font-bold">36g / <span className="text-sm text-neutral-500">220g</span></p>
            </div>
          </div>
          <div className="bg-neutral-900/40 border border-neutral-900 p-5 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400"><Apple className="w-6 h-6" /></div>
            <div>
              <p className="text-xs text-neutral-400 font-medium">Fats</p>
              <p className="text-xl font-bold">36g / <span className="text-sm text-neutral-500">70g</span></p>
            </div>
          </div>
        </div>

        {/* Dashboard Grid split into Scanner and Logs */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Left/Middle: Live AI Scanner Module */}
          <div className="md:col-span-2 bg-neutral-900/40 border border-neutral-900 rounded-3xl p-6 flex flex-col justify-between aspect-video md:aspect-auto min-h-[400px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            
            {/* Mock Camera Viewfinder Overlay */}
            <div className="absolute inset-6 border border-dashed border-neutral-800 rounded-xl pointer-events-none z-10 group-hover:border-indigo-500/50 transition-colors" />

            <div className="z-20">
              <span className="bg-indigo-500 text-white text-xs font-semibold px-2.5 py-1 rounded-md tracking-wider uppercase">AI Lens Engine</span>
              <h2 className="text-xl font-bold mt-2">Visual Macro Recognition</h2>
            </div>

            <div className="flex flex-col items-center justify-center z-20 py-12">
              <button 
                onClick={() => setIsScanning(!isScanning)}
                className={`w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all ${isScanning ? 'border-red-500 bg-red-500/20 animate-pulse' : 'border-white bg-white/10 hover:scale-105'}`}
              >
                <Camera className={`w-8 h-8 ${isScanning ? 'text-red-400' : 'text-white'}`} />
              </button>
              <p className="text-sm text-neutral-400 mt-4 font-medium">
                {isScanning ? "Accessing system camera structures..." : "Click to initialize camera scanner"}
              </p>
            </div>

            <div className="z-20 text-xs text-neutral-500">
              Supports volumetric estimation up to 98.4% accuracy.
            </div>
          </div>

          {/* Right: History Logs panel */}
          <div className="bg-neutral-900/40 border border-neutral-900 rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <History className="w-4 h-4 text-neutral-400" /> Today's Scans
              </h3>
              <div className="space-y-3">
                {recentScans.map((scan) => (
                  <div key={scan.id} className="p-3.5 bg-neutral-900/60 border border-neutral-900 rounded-xl space-y-1.5">
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-sm">{scan.name}</h4>
                      <span className="text-sm font-bold text-indigo-400">{scan.calories} kcal</span>
                    </div>
                    <div className="flex gap-3 text-xs text-neutral-400 font-medium">
                      <span>P: {scan.protein}</span>
                      <span>C: {scan.carbs}</span>
                      <span>F: {scan.fat}</span>
                    </div>
                    <p className="text-[10px] text-neutral-600 font-medium">{scan.time}</p>
                  </div>
                ))}
              </div>
            </div>

            <a href="#" className="text-center text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors pt-4 block border-t border-neutral-900 mt-4">
              View complete log sheet →
            </a>
          </div>

        </div>

      </main>
    </div>
  );
}
