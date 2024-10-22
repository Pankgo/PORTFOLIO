import BottomRouter from './BottomRouter';
import '../Styles/ShortRequest.css';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useState,useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import ko from 'date-fns/locale/ko'; 

function ShortRequest(){
    const [startDate, setStartDate] = useState(null); //날짜
    const [selectedTime, setSelectedTime] = useState(null); //시간

    const [newplace, setplace] = useState("");
    const [newmodel, setmodel] = useState("");
    const [newrequest, setrequest] = useState("");




    const [requestInfo,setrequestInfo] = useState({
        id: "25",
        washer: "",
        place : "",
        model : "",
        division: "단기",
        date: "",
        time: "",
        requestText: "내부청소 포함 깨끗하게 해주세요",
        comment: "내부 청소 완료및 광택 세차 했습니다."
    });

    const setRequest = async() => {
        try {
        setrequestInfo({...requestInfo,
        place : newplace,
        model : newmodel,
        requestText : newrequest,
        date : startDate,
        time : selectedTime});
        console.log(requestInfo);
        //await axios.post('http://localhost:3002/reservation',requestInfo);
        
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log(requestInfo);
    }, [requestInfo]);



    const handleplace = (e) =>{
        setplace(e.target.value);
    }
    const handlemodel = (e) =>{
        setmodel(e.target.value);
    }
    const handlerequest = (e) =>{
        setrequest(e.target.value);
    }

return(
    <div className='All'>      
        <h1>단기세차 예약</h1>
        <div className='flexbox'>
            <h3>날짜및시간</h3>
            <div className='dateDiv'>
                <DatePicker
                className='datebox'
                selected={startDate}
                locale = {ko}
                onChange={(date) => setStartDate(date)}
                minDate={moment().add(1, 'days').toDate()}
                maxDate={moment().add(7, 'days').toDate()} // 현재 날짜로부터 7일 후까지
                dateFormat="yyyy-MM-dd"
                placeholderText="날짜 입력" // 현재날짜 + 1일 부터 7일까지만 선택가능
            />
            <DatePicker
                    className='datebox'
                    selected={selectedTime}
                    locale = {ko}
                    onChange={date => setSelectedTime(date)}
                    showTimeSelect
                    showTimeSelectOnly // 시간만 선택 가능하도록 설정
                    timeIntervals={60} // 시간 간격을 설정 (옵션)
                    dateFormat="h:mm aa" // 시간 형식 설정 aa => am pm
                    placeholderText="시간 입력" // 선택되지 않았을 때의 플레이스홀더 텍스트 설정
                />
            </div>
            </div>
        <div className='flexbox'>
            <h3>장소</h3>
            <input className = "inputBox"type = "text" onChange={handleplace}></input>
        </div>
        <div className='flexbox'>
            <h3>모델 </h3>
            <input className = "inputBox" type = "text" onChange={handlemodel}></input>
        </div>
        <div>
            <h3>요청사항</h3>
            <textarea className = "requestbox" type = "text" onChange={handlerequest} ></textarea>
        </div>
        <button className = "buttrequest" onClick={setRequest}> 요청</button>
        <div className = "Navi">
            <BottomRouter/>
        </div>
        </div>
)

}
export default ShortRequest;