import { Series } from 'remotion';
import { Scene1 } from './scenes/Scene1';
import { Scene2 } from './scenes/Scene2';
import { Scene3 } from './scenes/Scene3';
import { Scene4 } from './scenes/Scene4';
import { Scene5 } from './scenes/Scene5';
import { Scene6 } from './scenes/Scene6';
import { Scene7 } from './scenes/Scene7';
import { Scene8 } from './scenes/Scene8';

export const Main: React.FC = () => {
  return (
    <div style={{ flex: 1, backgroundColor: 'black' }}>
      <Series>
        <Series.Sequence durationInFrames={150}>
          <Scene1 />
        </Series.Sequence>
        <Series.Sequence durationInFrames={150}>
          <Scene2 />
        </Series.Sequence>
        <Series.Sequence durationInFrames={250}>
          <Scene3 />
        </Series.Sequence>
        <Series.Sequence durationInFrames={250}>
          <Scene4 />
        </Series.Sequence>
        <Series.Sequence durationInFrames={250}>
          <Scene5 />
        </Series.Sequence>
        <Series.Sequence durationInFrames={250}>
          <Scene6 />
        </Series.Sequence>
        <Series.Sequence durationInFrames={250}>
          <Scene7 />
        </Series.Sequence>
        <Series.Sequence durationInFrames={250}>
          <Scene8 />
        </Series.Sequence>
      </Series>
    </div>
  );
};
