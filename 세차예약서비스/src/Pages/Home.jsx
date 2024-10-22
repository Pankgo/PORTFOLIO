import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import '../Styles/Home.css'
import Search from "../Functions/Search";
import BottomRouter from "../Routers/BottomRouter";

function Home(){
  return(
    <div>
    <Search/>
    <br/>
        <button className="left"><img className="nearimg" src="img/nearwash.png"/> 주변 매장 보기</button>
        <button className="right"><img className="mapimg" src="img/map.png"/> 지도에서 보기</button>
        <br/>
        <br/>
        <h4 className="text">내 주변 세차장</h4>
        <div><img className="washimg" src="img/SAMPLE.png"/><h5> @@@세차장</h5><h6> 어쩌구저쩌구어쩌라구</h6></div>
        <div><img className="washimg" src="img/SAMPLE.png"/><h5> @@@세차장</h5><h6> 어쩌구저쩌구어쩌라구</h6></div>
        <div><img className="washimg" src="img/SAMPLE.png"/><h5> @@@세차장</h5><h6> 어쩌구저쩌구어쩌라구</h6></div>
        <br/>
        <h4 className="text">내 주변 세차업자</h4>
        <div><img className="washimg" src="img/SAMPLE.png"/><h5> @@@</h5><h6> 어쩌구저쩌구어쩌라구</h6></div>
        <div><img className="washimg" src="img/SAMPLE.png"/><h5> @@@</h5><h6> 어쩌구저쩌구어쩌라구</h6></div>
        <div><img className="washimg" src="img/SAMPLE.png"/><h5> @@@</h5><h6> 어쩌구저쩌구어쩌라구</h6></div>
    <div className="Navi">
      <BottomRouter/>
    </div>
    </div>
  )
}

export default Home