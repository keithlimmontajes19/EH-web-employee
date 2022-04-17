import {ReactElement} from 'react';

import type {PropsType} from './types';
import {theme} from 'utils/colors';
import {CAvatar} from '@coreui/react';
import {User} from 'react-feather';

const Avatar = (props: PropsType): ReactElement => {
  return (
    <CAvatar color="secondary" textColor="white">
      <User size={20} color={theme.WHITE} />
    </CAvatar>
  );
};

export default Avatar;
