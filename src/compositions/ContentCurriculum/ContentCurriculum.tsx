import {ReactElement} from 'react';

import {} from './styled';

const ContentCurriculum = ({curriculum}: any): ReactElement => {
  console.log('curriculum', curriculum);
  const convertSource = {
    html: curriculum?.body.replace(/&lt;/g, '<').replace(/&gt;/g, '>'),
  };

  return (
    <>
      <div>{convertSource.html}</div>
    </>
  );
};

export default ContentCurriculum;
