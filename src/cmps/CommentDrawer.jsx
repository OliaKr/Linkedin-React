import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { db } from "../firebase.js";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import EmojiPicker from "emoji-picker-react";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import "../assets/css/CommentDrawer.css";
import { IconButton, Input, InputAdornment } from "@mui/material";

const CommentDrawer = ({ id }) => {
  const user = useSelector((storeState) => storeState.userModule.user);
  const [input, setInput] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const openEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setShowEmojiPicker(false);
    setInput((prev) => prev + event.emoji);
  };

  const addComment = async (e) => {
    e.preventDefault();
    const commentRef = collection(db, "posts", id, "comments");
    await addDoc(commentRef, {
      email: user.email,
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      message: input,
      timestamp: serverTimestamp(),
    });
    setInput("");
    setChosenEmoji("");
  };

  return (
    <div>
      <div className="drawer-container">
        <Avatar
          src={user?.photoURL}
          sx={{ width: "48px", height: "48px" }}
          className="feed-avatar"
        />
        <div className="feed-input">
          <form onSubmit={(e) => addComment(e)}>
            <Input
              id="standard-adornment-password"
              type="text"
              placeholder="Add a comment..."
              value={input}
              style={{ width: "100%" }}
              onChange={(e) => handleChange(e)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="open emoji picker"
                    onClick={openEmojiPicker}>
                    {<SentimentSatisfiedIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <button onClick={(e) => addComment(e)} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      {showEmojiPicker && (
        <EmojiPicker
          onEmojiClick={onEmojiClick}
          disableAutoFocus={true}
          native
        />
      )}
    </div>
  );
};

export default CommentDrawer;
