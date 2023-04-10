import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { toggleModal } from "../store/modalData.action";
import "../assets/css/CustomModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
          <div className="custom-modal-title">{title}</div>
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
