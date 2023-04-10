import React, { useEffect, useState } from "react";
import "../assets/css/PostIndex.css";
import Avatar from "@mui/material/Avatar";
import InputOption from "../cmps/InputOption.jsx";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ReactComponent as LikeIcon } from "../assets/icons/like.svg";
import { ReactComponent as Comment } from "../assets/icons/comment.svg";
import { ReactComponent as Report } from "../assets/icons/report.svg";
import { ReactComponent as Send } from "../assets/icons/send.svg";
import { ReactComponent as LikeCount } from "../assets/icons/likeCount.svg";
import { formatDateToMin } from "../utils/formatDateToMin";
import { useSelector } from "react-redux";
import { toggleModal } from "../store/modalData.action";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import CommentDrawer from "./CommentDrawer";

function PostIndex({
  id,
  name,
  description,
  message,
  photoURL,
  postImg,
  postImgType,
  timestamp,
}) {
  const user = useSelector((storeState) => storeState.userModule.user);
  const isOpen = useSelector((storeState) => storeState.modalModule.isOpen);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const likesRef = collection(db, "posts", id, "likes");

  useEffect(() => {
    const getLikes = query(
      collection(db, "posts", id, "likes"),
      orderBy("timestamp", "desc")
    );
    onSnapshot(getLikes, (snapshot) => {
      setLikes(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    const getComments = query(
      collection(db, "posts", id, "comments"),
      orderBy("timestamp", "desc")
    );
    onSnapshot(getComments, (snapshot) => {
      setComments(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [id]);

  const addRemoveLike = async () => {
    setIsLiked(likes.filter((like) => like?.data?.email === user.email));
    console.log(isLiked);
    if (isLiked) {
      likes.forEach((like) => {
        if (like?.data?.email === user.email) {
          deleteDoc(doc(db, "posts", id, "likes", like.id));
          setIsLiked(false);
        }
      });
    } else {
      addDoc(likesRef, {
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        timestamp: serverTimestamp(),
      });
      setIsLiked(true);
    }
  };

  const deletePost = async () => {
    await deleteDoc(doc(db, "posts", id));
  };

  const toggleCommentDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="post">
      <div className="post-header">
        <Avatar src={photoURL} />
        <div className="post-header-content">
          <div className="post-info">
            <h2>{name}</h2>
            <p>{formatDateToMin(timestamp?.seconds)}</p>
          </div>
          <div onClick={deletePost}>
            <MoreHorizIcon />
          </div>
        </div>
      </div>
      <div className="post-body">
        <p>{message}</p>
        <div className="post-img-container">
          {postImg &&
            (postImgType?.startsWith("image") ? (
              <img src={postImg} alt="post-img" className="post-img" />
            ) : (
              <video controls src={postImg} className="post-img" />
            ))}
        </div>
        <div className="counts-line">
          <div
            className="likes-count"
            onClick={() => toggleModal(!isOpen, likes, "Users Likes")}>
            <LikeCount /> <h6> {likes.length} </h6>
          </div>
          <div onClick={() => toggleModal(!isOpen, comments, "Users Comments")}>
            <h6>{comments?.length} comments</h6>
          </div>
        </div>
      </div>
      {comments &&
        comments?.map((comment) => (
          <div className="comment-div" key={comment?.data?.timestamp?.seconds}>
            <Avatar
              src={comment?.data.photoURL}
              sx={{ width: "48px", height: "48px" }}
            />
            <div className="comment-div-details">
              <div className="comment-div-layout">
                <h5>{comment?.data.displayName}</h5>
                <h6>{formatDateToMin(comment?.data?.timestamp?.seconds)}</h6>
              </div>
              <p className="comment-div-message">{comment?.data.message}</p>
            </div>
          </div>
        ))}
      <div className="post-buttons">
        <InputOption
          count={likes?.length}
          tooltipTxt="likes"
          Icon={LikeIcon}
          title="Like"
          color={isLiked ? "blue" : "gray"}
          onClick={addRemoveLike}
        />
        <InputOption
          count={comments?.length}
          tooltipTxt="comments"
          Icon={Comment}
          title="Comment"
          color="gray"
          onClick={toggleCommentDrawer}
        />
        <InputOption Icon={Report} title="Report" color="gray" />
        <InputOption Icon={Send} title="Send" color="gray" />
      </div>
      <div className={isDrawerOpen ? "drawerOpen" : "drawerClose"}>
        <CommentDrawer id={id} />
      </div>
    </div>
  );
}

export default PostIndex;
