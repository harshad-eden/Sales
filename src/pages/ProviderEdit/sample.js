const handleFinishh = async () => {
  let uuid = uuidv4();
  setLoading(true);
  let firebaseImgUrl;
  let firebaseDocUrl;
  let firebaseContractUrl;

  console.log(state);

  if (imgFile) {
    const imgRef = ref(storage, `images/${uuid}-${imgFile.name}`);
    let imgSapnshot = await uploadBytes(imgRef, imgFile);
    firebaseImgUrl = await getDownloadURL(imgSapnshot.ref).then((url) => url);
  }

  if (contractFile) {
    const contractRef = ref(storage, `contracts/${uuid}-${contractFile.name}`);
    let contractSnapshot = await uploadBytes(contractRef, contractFile);
    firebaseContractUrl = await getDownloadURL(contractSnapshot.ref).then((url) => url);
  }

  if (documentFile) {
    const docRef = ref(storage, `documents/${uuid}-${documentFile.name}`);
    let docSnapshot = await uploadBytes(docRef, documentFile);
    firebaseDocUrl = await getDownloadURL(docSnapshot.ref).then((url) => url);

    if ((!imgFile && firebaseDocUrl) || (firebaseImgUrl && firebaseDocUrl)) {
      let updatedValue = {
        ...state,
        document: firebaseDocUrl,
        logo: firebaseImgUrl ? firebaseImgUrl : false,
        contractFile: firebaseContractUrl ? firebaseContractUrl : false,
        uuid,
        createdAt: new Date(),
      };

      try {
        addDoc(providersCollectionref, updatedValue);
        openNotification('Form successfully Submitted');
        navigate('/');
      } catch (error) {
        openNotification('Form submition failed');
        setLoading(false);
        alert(error);
        console.log(error);
      }
    }
  } else {
    return alert('Please upload doc');
  }
};
