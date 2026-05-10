"use client";

import { motion } from "framer-motion";

const AfricaMap = () => {
  const nodes = [
    { city: "Lagos", x: "42%", y: "48%" },
    { city: "Nairobi", x: "65%", y: "55%" },
    { city: "Johannesburg", x: "55%", y: "85%" },
    { city: "Accra", x: "38%", y: "50%" },
    { city: "Addis Ababa", x: "62%", y: "45%" },
    { city: "Cairo", x: "58%", y: "15%" },
    { city: "Dakar", x: "20%", y: "35%" },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">A Continental Trust Graph</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From the streets of Lagos to the farms of Kenya, we are mapping community trust onto the blockchain.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto aspect-[4/5] md:aspect-square">
          {/* Simplified Africa Map SVG */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full fill-white/5 stroke-white/10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35,5 C45,2 65,5 75,15 C85,25 80,45 85,55 C90,65 75,95 55,95 C45,95 35,85 30,75 C25,65 15,60 10,45 C5,30 15,10 35,5 Z"
              strokeWidth="0.5"
            />
          </svg>

          {/* Pulsating Nodes */}
          {nodes.map((node, index) => (
            <div
              key={node.city}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: node.x, top: node.y }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-center"
              >
                <div className="w-3 h-3 bg-ubuntu-orange rounded-full relative z-10" />
                <motion.div
                  animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="absolute w-6 h-6 bg-ubuntu-orange rounded-full"
                />
                
                <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {node.city}
                </div>
              </motion.div>
            </div>
          ))}
          
          {/* Connecting Lines (Decorative) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <motion.path
              d="M42,48 Q55,50 65,55"
              fill="none"
              stroke="#FF6B00"
              strokeWidth="0.5"
              strokeDasharray="2,2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
            <motion.path
              d="M65,55 Q60,70 55,85"
              fill="none"
              stroke="#FF6B00"
              strokeWidth="0.5"
              strokeDasharray="2,2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AfricaMap;
