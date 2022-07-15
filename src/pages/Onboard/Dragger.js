/* eslint-disable quotes */
import React, { useState } from 'react';
import { Form, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';

const DraggerComponent = ({ setFile, name, accept, multiple, textOne }) => {
  const [fileList, setFileList] = useState([]);

  const { Dragger } = Upload;

  const handleChange = async ({ fileList }) => {
    setFileList(fileList.filter((file) => file.status !== 'error'));

    if (fileList.length > 0) {
      var docs = [];
      let downloadUrl;
      try {
        await Promise.all(
          fileList.map(async (file, index) => {
            try {
              const imgRef = ref(storage, `${name}/${Date.now()}-${file.name}`);
              let imgSapnshot = await uploadBytes(imgRef, file.originFileObj);
              downloadUrl = await getDownloadURL(imgSapnshot.ref).then((url) => url);
              docs.push(downloadUrl);
              if (fileList.length - 1 == index) {
                if (name === 'images') {
                  setFile(docs[0]);
                } else {
                  setFile(docs);
                }
              }
            } catch (e) {
              console.log(e);
            }
          }),
        );

        message.success(`File added successfully.`);
      } catch (err) {
        console.log(err);
        message.error(`Error adding images.`, 2);
      }
    }
  };

  const onRemove = async (file) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);

    setFileList(newFileList);
  };

  return (
    <Form>
      <Dragger
        listType="picture-card"
        fileList={fileList}
        beforeUpload={() => false}
        onChange={handleChange}
        onRemove={onRemove}
        multiple={multiple}
        maxCount={4}
        accept={accept}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">{textOne}</p>
      </Dragger>
    </Form>
  );
};

export default DraggerComponent;
