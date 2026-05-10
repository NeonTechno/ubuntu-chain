import Hero from "@/components/home/Hero";
import AfricaMap from "@/components/home/AfricaMap";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AfricaMap />
      
      <section className="bg-[#050505] py-24 border-t border-white/5">
        <div className="section-container text-center">
          <h2 className="text-4xl font-display font-bold mb-4 text-white">Unlocking the Informal Economy</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Traditional banks look at papers. We look at people. By digitizing community trust through **uScore**, we bridge the $330B credit gap for African entrepreneurs.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 border-white/5 bg-white/[0.02]">
              <div className="text-ubuntu-orange text-3xl font-bold mb-2">1.4B</div>
              <div className="text-gray-500 text-sm uppercase tracking-widest">Target Users</div>
            </div>
            <div className="glass-card p-8 border-white/5 bg-white/[0.02]">
              <div className="text-ubuntu-orange text-3xl font-bold mb-2">$2.7T</div>
              <div className="text-gray-500 text-sm uppercase tracking-widest">Informal GDP</div>
            </div>
            <div className="glass-card p-8 border-white/5 bg-white/[0.02]">
              <div className="text-ubuntu-orange text-3xl font-bold mb-2">57%</div>
              <div className="text-gray-500 text-sm uppercase tracking-widest">Identity Gap</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
