import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { Landmark, ArrowUpRight } from 'lucide-react';

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [0, 20, 230, 250], [0, 1, 1, 0]);
  
  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#050505' }}>
      <div style={{ opacity, textAlign: 'center' }}>
        <div style={{ color: '#2ECC71', marginBottom: 40, display: 'flex', justifyContent: 'center' }}>
          <Landmark size={150} />
        </div>
        <h1 style={{ color: 'white', fontSize: 100, fontWeight: 900, marginBottom: 20 }}>uLEND</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
          <div style={{ fontSize: 60, fontWeight: 700, color: '#FF6B00' }}>$25.00</div>
          <ArrowUpRight size={50} color="#FF6B00" />
        </div>
        <p style={{ color: '#888', fontSize: 36, marginTop: 20 }}>Micro-loans for the next billion.</p>
      </div>
    </AbsoluteFill>
  );
};
