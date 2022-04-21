import {ReactElement} from 'react';

import type {PropsType} from './types';
import {Container, CardStyled, LabelStyled} from './styled';

import IconImage from 'components/IconImage';
import ANNOUNCEMENT from 'assets/icons/announcement.png';

const Announcement = (props: PropsType): ReactElement => {
  return (
    <CardStyled>
      <Container>
        <IconImage source={ANNOUNCEMENT} height={124} width={124} />
      </Container>
      <LabelStyled>No Announcement</LabelStyled>
    </CardStyled>
  );
};

export default Announcement;
