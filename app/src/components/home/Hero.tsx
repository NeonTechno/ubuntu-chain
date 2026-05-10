"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-ubuntu-orange/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] animate-pulse-slow" />
      
      {/* Adinkra Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('/adinkra-pattern.svg')", backgroundSize: "100px" }} />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-ubuntu-orange/10 border border-ubuntu-orange/20 px-4 py-1.5 rounded-full text-ubuntu-orange text-sm font-bold mb-6"
          >
            <Zap size={14} fill="currentColor" />
            <span>POWERED BY SOLANA STATE COMPRESSION</span>
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-display font-black text-white leading-tight mb-6">
            Banking the <span className="text-gradient">Unbanked</span> through Community.
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
            Ubuntu Chain turns community trust into a global credit score. Join 1.4 billion people unlocking sovereign identity and micro-loans without a formal bank.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary flex items-center justify-center gap-2 group">
              Get Your uID
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors">
              Read the Manifesto
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-2xl">10M+</span>
              <span className="text-gray-500 text-xs uppercase tracking-wider">Identities Ready</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-2xl"><$0.01</span>
              <span className="text-gray-500 text-xs uppercase tracking-wider">Tx Fee</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-2xl">47s</span>
              <span className="text-gray-500 text-xs uppercase tracking-wider">Loan Approval</span>
            </div>
          </div>
        </motion.div>

        {/* Visual / Africa Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative aspect-square flex items-center justify-center"
        >
          {/* Main Visual */}
          <div className="w-full h-full relative animate-float">
             <div className="absolute inset-0 bg-gradient-to-tr from-ubuntu-orange/20 to-transparent rounded-full border border-ubuntu-orange/10" />
             <div className="absolute inset-4 bg-black/40 backdrop-blur-3xl rounded-full border border-white/5 flex items-center justify-center">
                {/* Africa Map SVG or 3D placeholder */}
                <div className="text-center">
                   <div className="text-ubuntu-orange mb-4 flex justify-center">
                      <ShieldCheck size={120} strokeWidth={1} className="animate-pulse" />
                   </div>
                   <div className="font-display font-bold text-2xl text-white">SOVEREIGN uID</div>
                   <div className="text-gray-500 text-sm">SECURED BY COMMUNITY</div>
                </div>
             </div>
             
             {/* Floating UI Cards */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute top-10 right-0 glass-card p-4 flex items-center gap-3"
             >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <Users size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Amara L.</div>
                  <div className="text-sm font-bold text-white">+3 Rep Points</div>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
