import BottomRouter from './BottomRouter';
import '../Styles/WasherInfo.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import DatePicker from 'react-datepicker'
import moment from 'moment-timezone';
import ko from 'date-fns/locale/ko'; 


function WasherInfo(){
    const [startDate, setStartDate] = useState(null); //날짜
    const [lastDate, setLastDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null); //시간
    return(
        <div>
            <div className='Navi'><BottomRouter/></div>
            <div className='All'>
                <h1>세차업자</h1>
                <div className = "washerInfo">
                    <img className=" washerImg" placehorder = "사진없음"></img>
                    <div className='washerInfoText'>
                        <div>이름 : {}</div>
                        <div>경력 : {}</div>
                        <div>건수 : {}</div>
                        <div>평점 : {}</div>
                        <div>시간 : {}</div>
                    </div>
                </div>
                <div className='washerInfo'>
                    <div className = " washerInfoButton">리뷰 확인</div>
                    <div> 전화 연결</div>
                </div>
                <div className='washerinputText'>
                    <div className='contentsborder'></div>
                    <div className='washerInfo washerInputDiv'>
                        <h4>자동차번호</h4>
                        <input type = "text" className='inputborder carnumberinputbox'></input>
                    </div>
                    <div className='washerInfo washerInputDiv'>
                        <h4>모델</h4>  
                        <input type = "text" className='inputborder modelinputbox'></input>
                    </div>
                    <div className='washerInfo washerInputDiv'>
                        <h4>세차 시간</h4>
                        <div className='custom-datepicker'>
                        <DatePicker
                        className='timeinputbox'
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
                    <div className='washerInfo washerInputDiv'>
                        <h4 className='terminputtext'>세차 기간</h4>
                        <div className='custom-datepicker'>
                        <DatePicker
                        className='terminputbox '
                        selected={startDate}
                        locale = {ko}
                        onChange={(date) => setStartDate(date)}
                        minDate={moment().toDate()}
                        maxDate={moment()} 
                        dateFormat="yyyy-MM"
                        showMonthYearPicker
                        placeholderText="날짜 입력" // 현재날짜 + 1일 부터 7일까지만 선택가능
                        /></div> <h4 className='termwave'>~</h4> <div className='custom-datepicker'><DatePicker
                        className='terminputbox'
                        selected={lastDate}
                        locale = {ko}
                        onChange={(date) => setLastDate(date)}
                        minDate={startDate}
                        maxDate={moment(startDate).add(1, 'years').toDate()} // // 선택된 날짜로부터 1년까지
                        dateFormat="yyyy-MM"
                        showMonthYearPicker
                        placeholderText="날짜 입력" // 현재날짜 + 1일 부터 7일까지만 선택가능
                        /></div>
                    </div>
                    <div>
                        <h3>요청 사항</h3>
                        <input type = "textarea" className='inputborder requestinputbox'></input>
                    </div>
                </div>
                    <button className='reservationbutton'>예약</button>
            </div>
        </div>
    );
}

export default WasherInfo;