import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';

export const uploadFile = async (
  name,
  file,
  setSubmitting,
  fileList,
  setFileList,
  setFile,
  message,
) => {
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

      message.success('File added successfully.');
    } catch (err) {
      console.log(err);
      message.error('Error adding images.', 2);
    } finally {
      setSubmitting(false);
    }
  }
};
