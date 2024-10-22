import React, { useState, useCallback } from "react";
import "../Styles/Modal.css";
import axios from "axios";
import DB from "../Middleware/Middleware";
import Modal from "react-modal";

function Popup({
  setislogin,
  UID,
  setUID,
  modalvalue,
  setmodalvalue,
  openModal,
  closeModal,
  modalopen,
}) {

  const [changevalue, setchangevalue] = useState("");
  const DBdataedit = `http://localhost:3002/users/${UID.id}`

  const valuetype = (event) => {
    setchangevalue(event.target.value);
  };
  let newdata = {}
  if (modalvalue === "uname") {
    newdata = {
      "name" : changevalue,
    };
  } else if (modalvalue === "carnumber") {
    newdata = {
      "carnumber" : changevalue,
    };
  } else if (modalvalue === "phone") {
    newdata = {
      "phone" : changevalue,
    };
  }
  const onSubmit = useCallback((event) => {
    event.preventDefault()

    console.log('UID', UID);
}, [UID.id,changevalue])

  const udatachange = async () => {
    try {
      const response = await axios.get(DB);
      let tempdata = UID.id
        if (changevalue === UID.name){
        alert("기존 이름과 동일합니다!")
        }
        else if (changevalue === UID.carnumber){
        alert("기존 차량번호와 동일합니다!")
        }
        else if (changevalue === UID.phone){
        alert("기존 전화번호와 동일합니다!")
        }
        else{
            axios.patch(DBdataedit, newdata) 
            // setUID(response.data.find((item) => item.id === tempdata));
            // console.log(UID)
        }
    } catch (error) {
      console.error("데이터 통신 오류", error);
    }
  };
  // const datarefresh = async () => {
  //   try {
  //   const response = await axios.get(DB);
  //   let tempdata = UID.id
  //   setUID(response.data.find((item) => item.id === tempdata));
  //   console.log(UID)
  //   }catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  
  //   };

  if (modalvalue === "phone") {
    return (
      <>
        <div className="namechange">
          <h3>휴대폰번호 변경</h3>
          <input className="input" onChange={valuetype}></input>
          <button
            onClick={() => {
              udatachange();
              // datarefresh()
            }}
          >
            변경
          </button>
        </div>
        <br />
      </>
    );
  } else if (modalvalue === "uname") {
    return (
      <>
        <div className="namechange">
          <h3>이름 변경</h3>
          <input className="input" onChange={valuetype}></input>
          <button
            onClick={() => {
              udatachange();
              // datarefresh()
            }}
          >
            변경
          </button>
        </div>
        <br />
      </>
    );
  } else if (modalvalue === "carnumber") {
    return (
      <>
        <div className="namechange">
          <h3>차량번호 변경</h3>
          <input className="input" onChange={valuetype}></input>
          <button
            onClick={() => {
              udatachange();
              // datarefresh()
            }}
          >
            변경
          </button>
        </div>
        <br />
      </>
    );
  } 
  else if (modalvalue === "loginfail") {
    return (
      <>
        <h3>
          아이디 또는 <br />
          비밀번호를 확인하세요!
        </h3>
      </>
    );
  } 
  
  else if (modalvalue === "memo"){
    return (
      <>
      <h3>메모임 ㅇㅇ</h3>
      </>
    )
  }
}
export default Popup;
