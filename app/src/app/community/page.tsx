"use client";

import { motion } from "framer-motion";
import { Users, Heart, Shield, TrendingUp, Award, MessageSquare } from "lucide-react";

const CommunityHub = () => {
  const stats = [
    { label: "Total Members", value: "124,592", icon: Users, color: "text-blue-500" },
    { label: "Community Wealth", value: "$4.2M", icon: TrendingUp, color: "text-green-500" },
    { label: "Active Attestations", value: "892,104", icon: Shield, color: "text-ubuntu-orange" },
    { label: "uScore Average", value: "742", icon: Award, color: "text-yellow-500" },
  ];

  const activities = [
    { id: 1, user: "Amara L.", action: "received 3 attestations", time: "2m ago", type: "trust" },
    { id: 2, user: "Kofi B.", action: "joined 'Lagos Textile' Collective", time: "15m ago", type: "join" },
    { id: 3, user: "Nairobi Hub", action: "voted on Loan Proposal #42", time: "1h ago", type: "gov" },
    { id: 4, user: "Fatoumata D.", action: "completed 'uScore' level 2", time: "3h ago", type: "achieve" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="section-container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-display font-black text-white mb-4">
            The Ubuntu <span className="text-gradient">Hub</span>
          </h1>
          <p className="text-gray-400 text-lg">"I am because we are." Monitor the pulse of the Ubuntu network.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 border-white/5 bg-white/[0.02]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Live</span>
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed / Collective View */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-8 border-white/5 bg-white/[0.02]">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare size={20} className="text-ubuntu-orange" />
                Network Activity
              </h3>
              <div className="space-y-6">
                {activities.map((item) => (
                  <div key={item.id} className="flex items-start gap-4 border-b border-white/5 pb-6 last:border-0 last:pb-0">
                    <div className="w-10 h-10 rounded-full bg-ubuntu-orange/10 flex items-center justify-center text-ubuntu-orange font-bold">
                      {item.user[0]}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">
                        <span className="font-bold">{item.user}</span> {item.action}
                      </div>
                      <div className="text-sm text-gray-500">{item.time}</div>
                    </div>
                    <div className="text-[10px] font-bold text-ubuntu-orange bg-ubuntu-orange/5 px-2 py-1 rounded uppercase tracking-tighter">
                      {item.type}
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-3 text-sm font-bold text-gray-400 hover:text-white transition-colors border-t border-white/5 pt-6">
                View All Activity
              </button>
            </div>
          </div>

          {/* Side Info / Global Impact */}
          <div className="space-y-6">
            <div className="glass-card p-8 border-ubuntu-orange/20 bg-ubuntu-orange/5">
              <h3 className="text-xl font-bold text-white mb-4">Global Impact</h3>
              <p className="text-sm text-gray-400 mb-6">Ubuntu Chain is contributing to UN Sustainable Development Goals.</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">No Poverty</span>
                  <span className="text-ubuntu-orange font-bold">82% Match</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-ubuntu-orange w-[82%]" />
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Decent Work</span>
                  <span className="text-ubuntu-orange font-bold">65% Match</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-ubuntu-orange w-[65%]" />
                </div>
              </div>
            </div>

            <div className="glass-card p-8 border-white/5 bg-white/[0.02] text-center">
              <div className="w-16 h-16 bg-ubuntu-orange/10 rounded-full flex items-center justify-center text-ubuntu-orange mx-auto mb-4">
                <Heart size={32} />
              </div>
              <h4 className="text-white font-bold mb-2">Be an Attestor</h4>
              <p className="text-sm text-gray-500 mb-6">Verify your community members and earn uScore reputation points.</p>
              <button className="btn-primary w-full py-3 text-sm">Get Certified</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHub;
