import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { Zap } from 'lucide-react';

export const Scene7: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20, 230, 250], [0, 1, 1, 0]);
  
  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#050505' }}>
      <div style={{ opacity, textAlign: 'center' }}>
        <h2 style={{ color: '#888', fontSize: 40, marginBottom: 20 }}>BUILT ON</h2>
        <div style={{ color: '#FF6B00', marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
          <Zap size={100} fill="currentColor" />
        </div>
        <h1 style={{ color: 'white', fontSize: 120, fontWeight: 900 }}>SOLANA</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginTop: 60 }}>
          <div style={{ textAlign: 'right', borderRight: '1px solid #333', paddingRight: 40 }}>
            <div style={{ fontSize: 50, color: 'white', fontWeight: 700 }}>$0.001</div>
            <div style={{ fontSize: 24, color: '#666' }}>FEES</div>
          </div>
          <div style={{ textAlign: 'left', paddingLeft: 40 }}>
            <div style={{ fontSize: 50, color: 'white', fontWeight: 700 }}>65,000</div>
            <div style={{ fontSize: 24, color: '#666' }}>TPS</div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
