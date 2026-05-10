import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { ShieldCheck } from 'lucide-react';

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [0, 20, 230, 250], [0, 1, 1, 0]);
  
  const iconScale = spring({ frame, fps, delay: 20 });
  const textOpacity = interpolate(frame, [40, 60], [0, 1]);

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#0A0A0A' }}>
      <div style={{ opacity, textAlign: 'center' }}>
        <div style={{ transform: `scale(${iconScale})`, color: '#FF6B00', marginBottom: 40, display: 'flex', justifyContent: 'center' }}>
          <ShieldCheck size={200} />
        </div>
        <div style={{ opacity: textOpacity }}>
          <h1 style={{ color: 'white', fontSize: 80, fontWeight: 900, marginBottom: 10 }}>UBUNTU ID</h1>
          <p style={{ color: '#888', fontSize: 36 }}>Sovereign. Community-Verified. Compressed NFTs.</p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
