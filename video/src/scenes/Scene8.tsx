import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

export const Scene8: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [0, 20, 230, 250], [0, 1, 1, 0]);
  
  const buttonScale = spring({ frame, fps, delay: 60 });

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <div style={{ opacity, textAlign: 'center' }}>
        <h1 style={{ color: 'white', fontSize: 100, fontWeight: 900, marginBottom: 20 }}>
          JOIN THE <span style={{ color: '#FF6B00' }}>MOVEMENT.</span>
        </h1>
        <p style={{ color: '#888', fontSize: 40, marginBottom: 60 }}>Build the future of African finance.</p>
        
        <div style={{ 
          transform: `scale(${buttonScale})`,
          backgroundColor: '#FF6B00',
          padding: '30px 60px',
          borderRadius: 100,
          display: 'inline-block'
        }}>
           <span style={{ color: 'white', fontSize: 40, fontWeight: 900 }}>UBUNTUCHAIN.COM</span>
        </div>
        
        <div style={{ marginTop: 100, color: '#444', fontSize: 24, letterSpacing: 8 }}>
          I AM BECAUSE WE ARE
        </div>
      </div>
    </AbsoluteFill>
  );
};
