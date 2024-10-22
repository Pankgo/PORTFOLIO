import React, { useState } from "react";
import Popup from "../Functions/Modal";
import Modal from "react-modal"
import "../Styles/Reserve.css"
import "../Styles/Modal.css"
import '../Styles/Home.css'
import BottomRouter from "../Routers/BottomRouter";

function Reserve({setislogin, UID, setUID, modalvalue, setmodalvalue, openModal, closeModal, modalopen, modalstyle}){

return(
    <>
      <Modal isOpen={modalopen} onRequestClose={closeModal} style={modalstyle}>
        {<Popup modalvalue={modalvalue} UID={UID} setUID={setUID} />}
        <button onClick={closeModal} className="memo">
          닫기
        </button>
      </Modal>
        <header className="base">
        <h1>{(UID.name)} 님의 예약 내역</h1>
        </header>
        <br/>
        <div className="base">
            <h3 className="title">정기 예약 내역</h3>
            <h5 className="subtitle">{(UID.carnumber)}</h5> {/*여기에 차 번호 props로 받아와야댐 서버로부터 따로 컴포넌트 만들어서 넣을 예정*/}
        </div>
        <p>
        <button className="contents"> {/*여기도 서버에서 예약 정보 받아오는 컴포넌트 들어갈예정*/}
            <h3 className="title">세차업자</h3>
            <h3 className="subtitle">매주 토요일</h3>
            <h5 className="time">시간 : ~~~~~~~~~</h5>
            <h5 className="inout">외부</h5>
        </button>
        <button className="date">날짜 변경</button>
        <button className="memo" value={"memo"} onClick={openModal}>메모보기</button>
        </p>
        <br/><br/>
        <div className="base">
            <h3 className="title">현재 이용중</h3>
            <h5 className="subtitle">{(UID.carnumber)}</h5>
        </div>
        <p>
        <button className="contents"> {/*여기도 서버에서 예약 정보 받아오는 컴포넌트 들어갈예정*/}
            <h3 className="title">세차업자</h3>
            <h3 className="subtitle">세차 진행중</h3>
            <h5 className="time">시간 : ~~~~~~~~~</h5>
            <h5 className="inout">내부</h5>
        </button>
        <button className="memo" value={"memo"} onClick={openModal}>메모보기</button>
        </p>
        <br/>
        <div className="base">
            <h3 className="title">예약 신청 현황</h3>
            <h5 className="subtitle">{(UID.carnumber)}</h5>
        </div>
        <p>
        <button className="contents"> {/*여기도 서버에서 예약 정보 받아오는 컴포넌트 들어갈예정*/}
            <h3 className="title">세차업자</h3>
            <h3 className="subtitle">거절됨</h3>
            <h5 className="time">시간 : ~~~~~~~~~</h5>
            <h5 className="inout">내부</h5>
        </button>
        <button className="memo" value={"memo"} onClick={openModal}>메모보기</button>
        </p>
    <div className="Navi">
      <BottomRouter/>
    </div>
    </>
)
}

export default Reserve