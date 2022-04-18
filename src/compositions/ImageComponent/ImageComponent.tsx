import {ReactElement} from 'react';
import type {PropsType} from './types';

import {Image} from 'antd';
import {NO_IMAGE} from 'utils/constants';
import {SubContainer, TitleStyled} from './styled';

import RenderHtml from 'components/RenderHtml';

const ImageComponent = (props: PropsType): ReactElement => {
  const {data} = props;

  return (
    <>
      <Image
        width="100%"
        height={316}
        preview={false}
        src={data?.ref ? data?.ref : NO_IMAGE}
      />
      <SubContainer>
        <TitleStyled>{data?.title}</TitleStyled>
        {data?.body && <RenderHtml source={data?.body} />}
      </SubContainer>
    </>
  );
};

export default ImageComponent;
