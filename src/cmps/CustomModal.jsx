import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Avatar, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { toggleModal } from "../store/modalData.action";
import { ReactComponent as LikeCount } from "../assets/icons/likeCount.svg";
import "../assets/css/CustomModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: "8px 0px",
};

export default function CustomModal() {
  const isOpen = useSelector((storeState) => storeState.modalModule.isOpen);
  const modalData = useSelector(
    (storeState) => storeState.modalModule.modalData
  );
  const title = useSelector((storeState) => storeState.modalModule.title);

  console.log(modalData);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => toggleModal(!isOpen)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          {title === "Users Likes" ? (
            <div className="custom-modal-head">
              <LikeCount />
              <div>{title}</div>
            </div>
          ) : (
            <div className="custom-modal-title">{title}</div>
          )}
          <Divider width="full" />
          {modalData?.map((u) => (
            <div key={u.id} className="modal-data-container">
              <Avatar
                src={u?.data.photoURL}
                sx={{ width: "48px", height: "48px" }}
                className="feed-avatar"
              />
              <div>
                <h4>{u.data.displayName}</h4>
                {title === "Users Comments" && <p>{u?.data.message}</p>}
              </div>
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
