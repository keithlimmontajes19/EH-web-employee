import {ReactElement, useState} from 'react';
import type {PropsType} from './types';

import {StyledInput, StyledButton, Container} from './styled';
import {Upload, message} from 'antd';

const InputUpload = (props: PropsType): ReactElement => {
  const {setFileId} = props;

  const accessToken = localStorage.getItem('accessToken');
  const API_URL = 'http://localhost:8080/api/file/post';
  // const API_URL = 'https://noblemen.herokuapp.com/api/file/post';

  const [fileName, setFileName] = useState('');

  const uploadInnerProps = {
    name: 'file',
    showUploadList: false,
    multiple: false,
    action: API_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    onChange(info) {
      const {status} = info.file;
      if (status === 'done') {
        setFileItemDetails(info);
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const setFileItemDetails = (info: any) => {
    setFileName(info?.file?.name);
    setFileId(info?.file?.response?.data?._id);
  };

  return (
    <Upload {...uploadInnerProps}>
      <Container>
        <StyledInput
          disabled
          placeholder="Choose image file"
          value={fileName}
        />
        <StyledButton>Browse</StyledButton>
      </Container>
    </Upload>
  );
};

export default InputUpload;
