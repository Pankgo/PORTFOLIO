import React, { useState } from "react";
import Modal from "react-modal";
import "../Styles/UserInfo.css";
import "../Styles/Modal.css";
import "../Styles/Home.css";
import BottomRouter from "../Routers/BottomRouter";
import Popup from "../Functions/Modal";
import { Link } from "react-router-dom";

function Userinfoedit({
  setislogin,
  UID,
  setUID,
  modalvalue,
  setmodalvalue,
  openModal,
  closeModal,
  modalopen,
  modalstyle,
}) {
  return (
    <>
      <Modal isOpen={modalopen} onRequestClose={closeModal} style={modalstyle}>
        {<Popup modalvalue={modalvalue} UID={UID} setUID={setUID} />}
        <button onClick={closeModal} className="memo">
          닫기
        </button>
      </Modal>
      <div className="main">
      <Link to = "/Account"><img alt="뒤로가기" className="backspace" src="img/leftarrow.png"/></Link> 
        <h1 className="title">계정 정보</h1>
        <div className="center">
          <br />
          <div className="infoedit">
            <h3>이름</h3>
            <h3>{UID.name}</h3>
          </div>
          <button className="change" value={"uname"} onClick={openModal}>
            변경
          </button>
          <br />
          <div className="infoedit">
            <h3>차량번호</h3>
            <h3>{UID.carnumber}</h3>
          </div>
          <button className="change" value={"carnumber"} onClick={openModal}>
            변경
          </button>
          <br />
          <div className="infoedit">
            <h3>전화번호</h3>
            <h3>{UID.phone}</h3>
          </div>
          <button className="change" value={"phone"} onClick={openModal}>
            변경
          </button>
          <div className="Navi">
            <BottomRouter />
          </div>
        </div>
      </div>
    </>
  );
}

export default Userinfoedit;
