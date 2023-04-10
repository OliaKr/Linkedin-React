import React, { useState, useEffect } from "react";
import "../assets/css/Feed.css";

import InputOption from "../cmps/InputOption.jsx";
import { ReactComponent as Photo } from "../assets/icons/photo.svg";
import { ReactComponent as Video } from "../assets/icons/video.svg";
import { ReactComponent as AudioEvent } from "../assets/icons/audioEvent.svg";
import { ReactComponent as WriteArticle } from "../assets/icons/writeArticle.svg";

import PostIndex from "../cmps/PostIndex.jsx";
import { db } from "../firebase.js";
import { useSelector } from "react-redux";

import "firebase/auth";
import "firebase/firestore";
import Avatar from "@mui/material/Avatar";

import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { setPostImg } from "../store/user.action";
import CustomModal from "./CustomModal";

function Feed() {
  const user = useSelector((storeState) => storeState.userModule.user);
  const postImg = useSelector((storeState) => storeState.userModule.postImg);
  const postImgType = useSelector(
    (storeState) => storeState.userModule.postImgType
  );

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();
    console.log("there is a photo", postImg);
    const res = await addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: `${user.displayName} wrote a post`,
      message: input,
      photoURL: user?.photoURL,
      postImg: postImg,
      postImgType: postImgType,
      timestamp: serverTimestamp(),
    });
    setInput("");
    console.log(res.id);
    setPostImg("");
  };

  return (
    <div className="feed">
      <div className="feed-inputContainer">
        <div className="avatar-input">
          <Avatar
            src={user?.photoURL}
            sx={{ width: "48px", height: "48px" }}
            className="feed-avatar"
          />
          <div className="feed-input">
            <form>
              <input
                placeholder="Start a post"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
              />
              <button onClick={sendPost} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="feed-inputOptions">
          <InputOption Icon={Photo} title="Photo" color="#378fe9" upload />
          <InputOption Icon={Video} title="Video" color="#5f9b41" upload />
          <InputOption Icon={AudioEvent} title="Event" color="#c37d16" />
          <InputOption
            Icon={WriteArticle}
            title="Write article"
            color="#e16745"
          />
        </div>
      </div>
      <div>
        {posts.map(
          ({
            id,
            data: {
              name,
              description,
              message,
              photoURL,
              postImg,
              postImgType,
              timestamp,
            },
          }) => (
            <PostIndex
              key={id}
              id={id}
              name={name}
              description={description}
              message={message}
              photoURL={photoURL}
              postImg={postImg}
              postImgType={postImgType}
              timestamp={timestamp}
            />
          )
        )}
      </div>
      <CustomModal />
    </div>
  );
}

export default Feed;
