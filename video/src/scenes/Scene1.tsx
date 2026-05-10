import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 30, 120, 150], [0, 1, 1, 0]);
  const scale = spring({
    frame,
    fps,
    config: {
      damping: 12,
    },
  });

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <div style={{ opacity, transform: `scale(${scale})`, textAlign: 'center' }}>
        <h1 style={{ color: 'white', fontSize: 100, fontWeight: 900, marginBottom: 20 }}>
          I AM <span style={{ color: '#FF6B00' }}>BECAUSE</span>
        </h1>
        <h1 style={{ color: 'white', fontSize: 120, fontWeight: 900 }}>
          WE ARE.
        </h1>
        <div style={{ marginTop: 40, height: 4, width: 200, backgroundColor: '#FF6B00', margin: '0 auto' }} />
      </div>
    </AbsoluteFill>
  );
};
