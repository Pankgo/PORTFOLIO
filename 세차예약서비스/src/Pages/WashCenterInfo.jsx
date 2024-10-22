import BottomRouter from './BottomRouter';
import '../Styles/WashCenterInfo.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';

const WashCenterInfo = () => {

    const [centerInfo, setcenterInfo] = useState({});
    const {centerInfojson} = useParams();

    const GetcenterInfo = async() => {
        try {
            const result = await axios.get(`http://localhost:3002/washcenter/${centerInfojson}`)
            console.log(result);
            setcenterInfo(result.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        GetcenterInfo()
        },[]);

return(
<div>
<img className='washCenterImg'></img>
<div className='All'>
        <div>
            <h1>{centerInfo.name} 세차장</h1>
            <div className='flexbox ratingText'>
                <p className='centerrating'>★</p>
                <p>{centerInfo.rating}</p>
            </div>
        </div>
    <div className='flexbox'>
        <h3>영업시간</h3>
        <div className='All'>
             {centerInfo.weekdayTime ? <h3>평일 {centerInfo.weekdayTime[0]}시~{centerInfo.weekdayTime[1]}시</h3> 
             : <h3>평일 없음</h3>}
             {centerInfo.holiydayTime ? <h3>주말 {centerInfo.holiydayTime[0]}시~{centerInfo.holiydayTime[1]}시</h3> 
             : <h3>주말 없음</h3>}
        </div>
    </div>
    <div className='flexbox'>
        <h3>휴무일</h3>
        <h3 className='restDateText'>{centerInfo.dayoff}</h3>
    </div>
    <div className='flexbox'>
        <h3>전화번호</h3>
        <h3 className='All'>{centerInfo.phonenumber}</h3>
    </div>
    <div className='flexbox'>
        <h3>위치</h3>
        <h3 className='locateText'>{centerInfo.place}</h3>
    </div>
    <div className='currentSpotText'>
        <h3>현재 남은 자리 : {centerInfo.currentsite}</h3>
    </div>
    <div className='setCenter'>
        <button className='reservateSpotbut'>자리 예약</button>
    </div>
</div>
    <div className='Navi'>
        <BottomRouter/>
    </div>
</div>

);




}

export default WashCenterInfo;