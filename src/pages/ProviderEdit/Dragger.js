/* eslint-disable quotes */
import React, { useState } from 'react';
import { Form, Upload, message, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';

const DraggerComponent = ({ setFile, name, accept, multiple }) => {
  const [fileList, setFileList] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [newFile, setNewFile] = useState(false);

  const { Dragger } = Upload;

  const handleChange = async ({ fileList }) => {
    if (fileList.length > 0) {
      setNewFile(true);
    }
    setFileList(fileList.filter((file) => file.status !== 'error'));

    if (fileList.length > 0) {
      var docs = [];
      let downloadUrl;
      try {
        setSubmitting(true);
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
        // setFileList([]);
        message.success(`Images added successfully.`, 2);
      } catch (err) {
        console.log(err);
        message.error(`Error adding images.`, 2);
      } finally {
        setSubmitting(false);
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
        // listType="picture-card"
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
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or
          other band files
        </p>
      </Dragger>
      {/* <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
        {console.log('newFile', newFile)}
        {newFile && (
          <Form.Item>
            <Button shape="round" htmlType="submit">
              {submitting ? 'Uploading' : 'Upload'}
            </Button>
          </Form.Item>
        )}
      </div> */}
    </Form>
  );
};

export default DraggerComponent;
