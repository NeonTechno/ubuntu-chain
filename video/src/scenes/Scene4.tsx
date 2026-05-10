import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { Award } from 'lucide-react';

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [0, 20, 230, 250], [0, 1, 1, 0]);
  
  const score = Math.round(interpolate(frame, [40, 100], [0, 742], { extrapolateRight: 'clamp' }));

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <div style={{ opacity, textAlign: 'center' }}>
        <div style={{ color: '#FF6B00', marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
          <Award size={120} />
        </div>
        <h2 style={{ color: '#666', fontSize: 40, marginBottom: 10 }}>uSCORE</h2>
        <div style={{ fontSize: 180, fontWeight: 900, color: 'white' }}>{score}</div>
        <p style={{ color: '#FF6B00', fontSize: 32, fontWeight: 700, letterSpacing: 4 }}>TRUST GRAPH REPUTATION</p>
      </div>
    </AbsoluteFill>
  );
};
