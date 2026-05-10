import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20, 130, 150], [0, 1, 1, 0]);
  const translateY = interpolate(frame, [0, 150], [20, -20]);

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', color: 'white' }}>
      <div style={{ opacity, transform: `translateY(${translateY}px)`, textAlign: 'center', maxWidth: 1200 }}>
        <h2 style={{ fontSize: 60, color: '#888', marginBottom: 20 }}>THE CRISIS</h2>
        <h1 style={{ fontSize: 100, fontWeight: 900, lineHeight: 1.1 }}>
          <span style={{ color: '#FF6B00' }}>1.4 BILLION</span> PEOPLE<br />
          WITHOUT AN IDENTITY.
        </h1>
        <p style={{ fontSize: 40, marginTop: 40, color: '#666' }}>
          Excluded from the global financial system.
        </p>
      </div>
    </AbsoluteFill>
  );
};
