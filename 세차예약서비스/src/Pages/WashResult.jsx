import BottomRouter from './BottomRouter';
import '../Styles/WashResult.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';

function WashResult(){

const [washresult, setWashresult] = useState({})
const { washresultjson } = useParams();


   /*세차 결과 가져오기 */ 
const getWashresult = async() => {
    try {
        const result = await axios.get(`http://localhost:3002/reservation/${washresultjson}`)
        setWashresult(result.data);
        console.log(washresult);
    } catch (error) {
        console.log(error);
    }
}

useEffect(()=>{
getWashresult()
},[]);

return(
    <div>
        <div className = "allwashresult">
            <h1>세차 결과 </h1>
            <div>
            <img className="result_img" /> 
            </div>
            <div className = "flexdisplay">
                <p>세차 날짜 </p>
                <p className='resultInfotext'>{washresult.date}</p></div>
           <div className = "flexdisplay">
                <p>세차 시간 </p>
                <p className='resultInfotext'>{washresult.time}</p></div>
            <div >
                <p>요구 사항</p>
                <div className = "questbox">{washresult.requestText}</div>
            </div>
            <div>
                <p>세차업자 코멘트</p>
                <div className = "questbox">{washresult.comment}</div>
            </div>
            <div>
                <button className = "butt rewash">세차 재진행</button>
                <button className = "butt pay"> 결제</button>    
            </div>
        </div>
        <div className="Navi">
            <BottomRouter/>
        </div>
    </div>
)

}
export default WashResult;

