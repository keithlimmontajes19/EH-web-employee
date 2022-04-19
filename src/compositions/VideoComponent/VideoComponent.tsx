import {ReactElement} from 'react';
import type {PropsType} from './types';

import {} from './styled';

import {Player, BigPlayButton} from 'video-react';
import './style.css';

const VideoComponent = (props: PropsType): ReactElement => {
  return (
    <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" height={0}>
      <BigPlayButton position="center" />
    </Player>
  );
};

export default VideoComponent;
