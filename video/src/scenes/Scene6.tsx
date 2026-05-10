import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { Smartphone } from 'lucide-react';

export const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20, 230, 250], [0, 1, 1, 0]);
  
  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <div style={{ opacity, textAlign: 'center' }}>
        <div style={{ color: '#888', marginBottom: 40, display: 'flex', justifyContent: 'center' }}>
          <Smartphone size={150} />
        </div>
        <h1 style={{ color: 'white', fontSize: 80, fontWeight: 900, marginBottom: 20 }}>USSD NATIVE</h1>
        <div style={{ fontSize: 40, fontWeight: 700, color: '#FF6B00', letterSpacing: 10 }}>*384*402#</div>
        <p style={{ color: '#666', fontSize: 32, marginTop: 40 }}>No Internet. No Smartphone. No Problem.</p>
      </div>
    </AbsoluteFill>
  );
};
