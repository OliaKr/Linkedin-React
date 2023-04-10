import React from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
import { setPostImg } from "../store/user.action";

function ImgUploader({ children }) {
  const onHandleImg = async (e) => {
    e.preventDefault();
    const type = e.target.files[0].type;
    await uploadImage(e, type);
  };

  const uploadImage = async (e, type) => {
    let imageRef;
    if (type.startsWith("image/")) {
      imageRef = ref(storage, `images/img${e.target.files[0].name + v4()}`);
    } else {
      imageRef = ref(storage, `videos/video${e.target.files[0].name + v4()}`);
    }
    await uploadBytes(imageRef, e.target.files[0]).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setPostImg(url, type);
      });
    });
  };

  return (
    <div>
      <label htmlFor="imgUpload">{children}</label>
      <input
        type="file"
        id="imgUpload"
        hidden
        onChange={(e) => onHandleImg(e)}
      />
    </div>
  );
}

export default ImgUploader;
