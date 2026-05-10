"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import { Info, Landmark, Percent, Calendar, ArrowUpRight } from "lucide-react";

const LendPage = () => {
  const [loanAmount, setLoanAmount] = useState(250);
  const [duration, setDuration] = useState(6);

  // Mock calculation: uScore 740 gives ~8% interest
  const interestRate = 0.08;
  const monthlyPayment = (loanAmount * (1 + interestRate)) / duration;
  const totalRepayment = loanAmount * (1 + interestRate);

  const data = Array.from({ length: duration + 1 }, (_, i) => ({
    month: `Month ${i}`,
    balance: Math.max(0, totalRepayment - (monthlyPayment * i)),
  }));

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="section-container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-display font-black text-white mb-4">
            uLend <span className="text-gradient">Finance</span>
          </h1>
          <p className="text-gray-400 text-lg">Micro-loans powered by community trust. No collateral, just Ubuntu.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Simulator Controls */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card p-8 border-white/5 bg-white/[0.02]">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                <Landmark size={20} className="text-ubuntu-orange" />
                Loan Simulator
              </h3>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-sm font-medium text-gray-400">Loan Amount (USDC)</label>
                    <span className="text-ubuntu-orange font-bold">${loanAmount}</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="1000" 
                    step="10"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-ubuntu-orange"
                  />
                  <div className="flex justify-between text-[10px] text-gray-600 mt-2 uppercase tracking-widest">
                    <span>$10</span>
                    <span>$1,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-sm font-medium text-gray-400">Duration (Months)</label>
                    <span className="text-ubuntu-orange font-bold">{duration} Months</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="12" 
                    step="1"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-ubuntu-orange"
                  />
                  <div className="flex justify-between text-[10px] text-gray-600 mt-2 uppercase tracking-widest">
                    <span>1 Mo</span>
                    <span>12 Mo</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Interest Rate (uScore: 742)</span>
                    <span className="text-green-500 font-bold">8.0% APR</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Monthly Payment</span>
                    <span className="text-white font-bold">${monthlyPayment.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-white">Total Repayment</span>
                    <span className="text-ubuntu-orange">${totalRepayment.toFixed(2)}</span>
                  </div>
                </div>

                <button className="btn-primary w-full py-4 flex items-center justify-center gap-2 mt-4">
                  Request Loan
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </div>

            <div className="glass-card p-6 border-white/5 bg-white/[0.02] flex items-start gap-4">
               <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                  <Info size={20} />
               </div>
               <div>
                  <h4 className="text-white font-bold text-sm mb-1">Low uScore?</h4>
                  <p className="text-xs text-gray-500">Ask your community members for more attestations to lower your interest rate.</p>
               </div>
            </div>
          </div>

          {/* Visualization */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 border-white/5 bg-white/[0.02] h-full flex flex-col">
              <h3 className="text-xl font-bold text-white mb-8">Repayment Schedule</h3>
              
              <div className="flex-1 min-h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF6B00" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#FF6B00" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                    <XAxis 
                      dataKey="month" 
                      stroke="#666" 
                      fontSize={12} 
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="#666" 
                      fontSize={12} 
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #ffffff10', borderRadius: '8px' }}
                      itemStyle={{ color: '#FF6B00' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="balance" 
                      stroke="#FF6B00" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorBalance)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Status</div>
                  <div className="text-sm font-bold text-green-500">Eligible</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Max Loan</div>
                  <div className="text-sm font-bold text-white">$1,200</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Protocol</div>
                  <div className="text-sm font-bold text-white">v1.0 (Devnet)</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Wait Time</div>
                  <div className="text-sm font-bold text-white">Instant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LendPage;
