import React, { useCallback, useState } from "react";
import BottomRouter from "../Routers/BottomRouter";
import axios from "axios";
import '../Styles/Account.css'
import DB from "../Middleware/Middleware";
import { Link } from "react-router-dom";

function Signup(){
    const [Newid, setNewid] = useState("")
    const [Newpassword, setNewpassword] = useState("")
    const [Fname, setFname] = useState("")
    const [Lname, setLname] = useState("")
    const [Cnumber, setCnumber] = useState("")
    const [Lphone, setLphone] = useState("")
    const [Mphone, setMphone] = useState("")
    const [Fphone, setFphone] = useState("010")

    const Idtype = (event) => {
        setNewid(event.target.value)
    }
    const Passwordtype = (event) => {
        setNewpassword(event.target.value)
    }
    const Lnametype = (event) => {
        setLname(event.target.value)
    }
    const Fnametype = (event) => {
        setFname(event.target.value)
    }
    const Cnumbertype = (event) => {
        setCnumber(event.target.value)
    }
    const Mphonetype = (event) => {
        setMphone(event.target.value)
    }
    const Lphonetype = (event) => {
        setLphone(event.target.value)
    }
    const Fphonetype = (event) => {
        setFphone(event.target.value)
    }
    

    const onSubmit = useCallback((event) => {
        event.preventDefault()

        console.log('Newid', Newid);
        console.log('Newpassword', Newpassword)
    }, [Newid,Newpassword])

    function Newuser(){
        const Newuserdata ={
            "id" : Newid,
            "password" : Newpassword,
            "name" : Lname+Fname,
            "carnumber" : Cnumber,
            "phone" : Fphone + Mphone + Lphone
        }
        axios.post(DB, Newuserdata);
        alert("정상적으로 등록되었습니다!")
    }
    return(
        <div className="login">
        <form className="loginform" >
            <label>아이디</label>
            <input type="Newid" value={Newid} onChange={Idtype} placeholder="사용할 아이디"/>
            <br/>
            <label>비밀번호</label>
            <input type="Newpassword" value={Newpassword} onChange={Passwordtype}placeholder="사용할 비밀번호"/>
            <br/>
            <label className="name"><h5>성</h5><h5>이름</h5></label>
            <div className="name"> 
            <input type="Lname" value={Lname} onChange={Lnametype} placeholder="성씨를 입력"/>
            <input type="Fname" value={Fname} onChange={Fnametype} placeholder="이름을 입력"/>
            </div>
            <br/>
            <label>차량 번호</label>
            <input type="Cnumber" value={Cnumber} onChange={Cnumbertype} placeholder="차량번호를 입력"/>   
            <br/>
            <label>전화번호</label>
            <div>
            <select name="Fphone" value={Fphone} className="fphone" onSelect={Fphonetype}>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="019">019</option>
            </select>
            -
            <input className="fphone" type="mphone" value={Mphone} onChange={Mphonetype}/> 
            -
            <input className="fphone" type="lphone" value={Lphone} onChange={Lphonetype}/> 
            </div>  
            <br/>      
            <div className="signup">
            <button onClick={Newuser}><Link to = '/Account'><li>신청하기</li></Link></button>
            </div>
        </form>
        <div className="Navi">
      <BottomRouter/>
    </div>  
        </div>
        
    )
}


export default Signup