import React, { useState } from "react";
import "../Style/home.css"
import "../Style/common.css"
import NaviBar from"./NavigationBar/naviBar"
import Exportbtt from "./ExportButton/exportbtt"
import ImgSlide from "./Slideimg/imgSlide"

function Home() {
    const Img = ["MODEL1.jpg","MODEL2.jpg","MODEL3.jpg","MODEL4.jpg","MODEL5.jpg"];
    const [imgcount,useimgcount] = useState(3);

    const autoslide = () => {

    }

    return (
        <div className="home_background">
            <NaviBar/>
            <Exportbtt/>
            <ImgSlide/>
        </div>
    );
}

export default Home;