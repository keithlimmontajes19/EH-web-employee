import React from 'react';
import {StyledText} from './styled';
import type {UploadProps} from 'antd';
import {Upload, message} from 'antd';

const App = ({setImageUrl, setFileId, placeholder}: any) => {
  /**
   * =============================================================
   * MAIN URL https://engage-hub-platform-dev.herokuapp.com/api/v1
   * =============================================================
   */
  const baseURL = 'http://localhost:8080/api/v1/upload';

  const uploadProps: UploadProps = {
    maxCount: 1,
    name: 'file',
    showUploadList: false,
    action: baseURL,
    onChange(info) {
      if (info.file.status === 'done') {
        const fileUrl = info?.file?.response?.data?.url;
        const fileID = info?.file?.response?.data?.uid;

        setFileId(fileID);
        setImageUrl(fileUrl);
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Upload {...uploadProps}>
      <StyledText>{placeholder}</StyledText>
    </Upload>
  );
};

export default App;
