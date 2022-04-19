import {ReactElement} from 'react';
import type {PropsType} from './types';

import {Image} from 'antd';
import {NO_IMAGE} from 'utils/constants';

const ImageComponent = (props: PropsType): ReactElement => {
  const {data} = props;

  return (
    <Image
      width="100.4%"
      height={316}
      preview={false}
      // TO DO uncomment code
      // src={data?.ref ? data?.ref : NO_IMAGE}
      src={
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }
    />
  );
};

export default ImageComponent;
