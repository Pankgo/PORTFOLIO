import React from "react";
import BottomRouter from "./BottomRouter";
import '../Styles/PastReservation.css'
import { useEffect, useState} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const PastReservation = () => {

    const [option, selectOption] = useState("latest");
    const [reservations, setReservation] = useState([]);

    const [startIndex, setstartIndex] = useState(0); // 시작인덱스 무조건 0으로 초기화
    const [endIndex, setendIndex] = useState(startIndex+7); // 끝 인덱스 무조건 starIndex + 7

    const [page,setPage] = useState(1);



    /*과거 예약 가져오기 */
    const getReservations = async () =>{
        try {
           const result = await axios.get("http://localhost:3002/reservation");
           setReservation(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    /*선택별 출력값을 달리하는 함수*/
    const filteredReservations = reservations.filter((reservation) => {
        if (option === 'latest') {
          return true; // 모든 리뷰를 표시
        } else if (option === 'long') {
          return reservation.division === '장기'; // 장기만 표시
        } else if (option === 'short') {
          return reservation.division === '단기'; // 단기만 표시
        }
        return false; 
      });

        //필터링된 리뷰들 출력 
        const Printreservations = filteredReservations.slice(startIndex,endIndex).map((reservation, index) => {
            return (
            <Link to = {`/WashResult/${reservation.id}`} key={index} className = "custom-link">
            <div className="reservationBox flexbox" key={index}>
                <p className="reservationFont">{reservation.washer}</p>
                <p className="reservationFont">{reservation.division}</p>
                <p className="reservationFont">{reservation.date}</p>
            </div></Link>
            );
        });
        /*페이지 번호생성 */
        const createButton = () => {
            const buttons = [];
            for (var i = 0; i < reservations.length / 7; i++) {
                const leftvalue = 40 + 5*i + '%';
                const leftstyle = {left : leftvalue};
                buttons.push(
                    <button className="pagebutton" onClick={handlePtrpage}
                    value={i + 1} key={i} >{i + 1} </button>
                );
            }
            return buttons;
        }
    useEffect(() => {
        getReservations();
      }, []);

    /*페이지 번호 바뀔떄마다 랜더링 */
    useEffect(()=>{
        setstartIndex((page-1)*7);
        setendIndex((page-1)*7+7);
    },[page]);

    /*정렬 선택 */
    const handleSortreview = (e) => {
        const selectedValue = e.target.value;
        selectOption(selectedValue);
      };
    
    /*페이지에 따른 리뷰 출력*/
    const handlePtrpage = (e) =>{
        const selectedValue = e.target.value;
        setPage(selectedValue);
    };

    return(
<div>
    <div className="All">
        <div>
            <h1>과거 예약 내역</h1>
        </div>
        <div className="flexbox">
           <input type = "date" className="dateBox left"></input> 
           <p className="term">~</p>
           <input type = "date" className="dateBox right"></input>
        </div>
            <select id="selectsort" className = 'selectsortbut' onChange={handleSortreview}
            value={option}>
                    <option value="latest" className = "selectoption">최신순</option>
                    <option value="long" className = "selectoption">장기세차</option>
                    <option value="short" className = "selectoption">단기세차</option>
                    <option value="washercenter" className = "selectoption">세차장만</option>
            </select>
        <div className="contents">
            <div>
                {Printreservations}
            </div>
            <div className="flexbox center">
                {createButton()}
            </div>
        </div>
    </div>
    <div className="Navi">
      <BottomRouter/>
    </div>
</div>
    );
}
export default PastReservation;