import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import DB from "./Middleware/Middleware";
import Home from "./Pages/Home";
import Reserve from "./Pages/Reserve";
import UserInfo from "./Functions/UserInfo";
import Login from "./Functions/Login";
import Signup from "./Functions/Signup";
import Userinfoedit from "./Pages/Userinfoedit";

function App() {
  
  const [islogin, setislogin] = useState(false);
  const [UID, setUID] = useState("");
  const [modalvalue, setmodalvalue] = useState("");
  const [modalopen, setmodalOpen] = useState(false);

  const datarefresh = async () => {
    try {
    const response = await axios.get(DB);
    let tempdata = UID.id
    setUID(response.data.find((item) => item.id === tempdata));
    console.log(UID)
    }catch (error) {
      console.error("Error fetching data:", error);
    }
  
    };

  const openModal = (e) => {
    setmodalOpen(true);
    setmodalvalue(e.target.value);
    console.log(modalvalue)
  };

  const closeModal = () => {
    setmodalOpen(false);
    setmodalvalue(null);
    datarefresh()
  };



  const modalstyle = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      width: "60%",
      height: "20%",
      margin: "auto",
      borderRadius: "7px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    },
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/Account"
          element={
            islogin ? (
              <UserInfo   // Userinfo.jsx로 연결
                setislogin={setislogin}
                UID={UID}
                setUID={setUID}
                modalvalue={modalvalue}
                setmodalvalue={setmodalvalue}
                openModal={openModal}
                closeModal={closeModal}
                modalstyle={modalstyle}
                modalopen={modalopen}
              />
            ) : (
              <Login    // Login.jsx로 연결
                setislogin={setislogin}
                setUID={setUID}
                modalvalue={modalvalue}
                setmodalvalue={setmodalvalue}
                openModal={openModal}
                closeModal={closeModal}
                modalstyle={modalstyle}
                modalopen={modalopen}
              
              />
            )
          }
        ></Route>

        <Route
          path="/Userinfo"
          element={
            islogin ? (
              <Userinfoedit   // Userinfoedit.jsx 로 연결
                setislogin={setislogin}
                UID={UID}
                setUID={setUID}
                modalvalue={modalvalue}
                setmodalvalue={setmodalvalue}
                openModal={openModal}
                closeModal={closeModal}
                modalstyle={modalstyle}
              
                modalopen={modalopen}
              />
            ) : (
              <Login    //Login.jsx로 연결
                setislogin={setislogin}
                setUID={setUID}
                modalvalue={modalvalue}
                setmodalvalue={setmodalvalue}
                openModal={openModal}
                closeModal={closeModal}
                modalstyle={modalstyle}
                modalopen={modalopen}
              
              />
            )
          }
        ></Route>
        <Route
          path="/Reserve"
          element={
            islogin ? (
              <Reserve
                setislogin={setislogin}
                UID={UID}
                modalvalue={modalvalue}
                setmodalvalue={setmodalvalue}
                openModal={openModal}
                closeModal={closeModal}
                modalstyle={modalstyle}
                modalopen={modalopen}
              
              />
            ) : (
              <Login
                setislogin={setislogin}
                setUID={setUID}
                modalvalue={modalvalue}
                setmodalvalue={setmodalvalue}
                openModal={openModal}
                closeModal={closeModal}
                modalstyle={modalstyle}
                modalopen={modalopen}
              
              />
            )
          }
        ></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
