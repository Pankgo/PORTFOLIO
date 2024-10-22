import React, {useState} from "react";
import UserInfo from "./UserInfo";
import Login from "./Login";

function Account(){
    const [islogin, setislogin] = useState(false)
    return(
        <div>
            {islogin ? <UserInfo setislogin={[setislogin]}/> : <Login setislogin={setislogin}/>}
        </div>
    )
}

export default Account;