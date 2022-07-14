/* eslint-disable quotes */
import React, { useState } from 'react';
import { Form, Upload, Modal, message, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { firestore, storage } from '../../firebase';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

const imageCollection = collection(firestore, 'images');

const DraggerComponent = ({ docId }) => {
  const [fileList, setFileList] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState(false);
  const [previewTitle, setPreviewTitle] = useState(false);

  const { Dragger } = Upload;

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const beforeUpload = (file) => {
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      message.error(`${file.name} is not a valid image type`, 2);
      return null;
    }
    return false;
  };

  const handleChange = ({ fileList }) =>
    setFileList(fileList.filter((file) => file.status !== 'error'));

  const onRemove = async (file) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);

    setFileList(newFileList);
  };

  const handleFinish = async () => {
    if (fileList.length > 0) {
      var docs = [];
      let downloadUrl;
      try {
        setSubmitting(true);
        await Promise.all(
          fileList.map(async (file, index) => {
            try {
              const imgRef = ref(storage, `test/${Date.now()}-${file.name}`);
              let imgSapnshot = await uploadBytes(imgRef, file);
              downloadUrl = await getDownloadURL(imgSapnshot.ref).then((url) => url);
              docs.push(downloadUrl);
              if (fileList.length - 1 == index) {
                let docRef = doc(firestore, 'providers', '3BYhJTRSWCmnPTX1p87R');
                updateDoc(docRef, {
                  services: docs,
                }).catch(() => {
                  alert('failed');
                });
              }
            } catch (e) {
              console.log(e);
            }
          }),
        );
        console.log('docs-2', docs);
        setFileList([]);
        message.success(`Images added successfully.`, 2);
      } catch (err) {
        console.log(err);
        message.error(`Error adding images.`, 2);
      } finally {
        setSubmitting(false);
      }
    } else {
      message.error('No files selected');
    }
  };

  return (
    <Form onFinish={handleFinish}>
      <Dragger
        listType="picture-card"
        fileList={fileList}
        beforeUpload={beforeUpload}
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={onRemove}
        multiple={true}
        maxCount={4}
        // accept=".doc,.docx,.pdf,.csv,.xlsx, .xls,"
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
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
        <Form.Item>
          <Button shape="round" htmlType="submit">
            {submitting ? 'Uploading' : 'Upload'}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default DraggerComponent;
