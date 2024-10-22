import React, { useState, useEffect } from "react";
import "../../Style/imgSlide.css";
import img1 from '../../IMG/MODEL1.jpg';
import img2 from '../../IMG/MODEL2.jpg';
import img3 from '../../IMG/MODEL3.jpg';
import img4 from '../../IMG/MODEL4.jpg';
import img5 from '../../IMG/MODEL5.jpg';

function ImgSlide() {
    const Img = [img1, img2, img3, img4, img5];
    const [imgcount, setimgcount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setimgcount((prevImgCount) => (prevImgCount === 4 ? 0 : prevImgCount + 1)); // 이전 state 값에 1을 더하는 콜백함수를 넣는다.
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="imgcover">
            {Img.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={index === imgcount ? 'active' : ''} // 현재 이미지에 active 클래스 추가
                />
            ))}
        </div>
    );
}

export default ImgSlide;
