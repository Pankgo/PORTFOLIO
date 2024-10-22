import React, { useCallback, useState} from "react";
import BottomRouter from "./BottomRouter";
import '../Styles/Login.css'

function Login({setislogin}){
    const [Id, setId] = useState("")
    const [Password, setPassword] = useState("")
    
        const Idtype = (event) => {
            setId(event.target.value)
        }
        const Passwordtype = (event) => {
            setPassword(event.target.value)
        }
        const onSubmit = useCallback((event) => {
            event.preventDefault()
            setislogin(true)

            console.log('Id', Id);
            console.log('Password', Password)
        }, [Id,Password])


    return(
        <div className="login">
        <form className="loginform" onSubmit={onSubmit}>
            <label>사용자 아이디</label>
            <input type="id" value={Id} onChange={Idtype}/>
            <br/>
            <label>비밀번호</label>
            <input type="password" value={Password} onChange={Passwordtype}/>
            <br/>
            <button formAction="">로그인</button>
        </form>
        <div className="Navi">
      <BottomRouter/>
    </div>
        </div>
        
    )
}

export default Login