import React from 'react';
import '../Styles/UserInfo.css'
import '../Styles/Home.css'
import UserName from './PtruserName';
import BottomRouter from './BottomRouter';

function UserInfo({setislogin}){
  const Logout = () =>{
    setislogin(false)
  }
      return (
        <body className='main'>
        <h2>MYInfo</h2>
        <div className = "center">
          <div className = "imgcontent">
              <img className = "headuser" src="img/user1.png" alt="사용자1 아이콘" />
              <UserName></UserName>
          </div>
          <br/>
          <div className = "admin">
              <p className = "contenthead">관리</p>
              <div className = "imgcontent">
                <img className = "imgcss" src="img/carwash1.png" alt="과거 예약 아이콘" />      
                <p className = "imgtext">과거예약</p>
              </div>
              <div className = "imgcontent"> 
                <img className = "imgcss" src="img/review.png" alt="리뷰 아이콘" /> 
                <p className = "imgtext">리뷰</p>
              </div>
          </div>
          <div className = "myBest">
              <p className = "contenthead">마이베스트</p>
              <div className = "imgcontent">
                <img className = "imgcss" src="img/user2.png" alt="사용자2 아이콘" />      
                <p className = "imgtext">세차업자</p>
              </div>
              <div className = "imgcontent"> 
                <img className = "imgcss" src="img/carwash1.png" alt="세차장 아이콘" /> 
                <p className = "imgtext">세차장</p>
              </div>
          </div>
          <div className = "userCenter">
              <p className = "contenthead">고객 센터</p>
              <div className = "imgcontent">
                <img className = "imgcss" src="img/call1.png" alt="고객센터 연결 아이콘" />      
                <p className = "imgtext">고객센터 연결</p>
              </div>
              <div className = "imgcontent"> 
                <img className = "imgcss" src="img/report.png" alt="공지사항 아이콘" /> 
                <p className = "imgtext">공지사항</p>
              </div>
              <div className = "imgcontent"> 
                <img className = "imgcss" src="img/mail.png" alt="1:1문의 아이콘" /> 
                <p className = "imgtext">1:1 문의</p>
              </div>
              <br/>
              <button className='logout' onClick={Logout}>로그아웃</button>
              <div className="Navi">
                <BottomRouter/>
             </div>
          </div> 
        </div>
        </body>
      );
    }

  export default UserInfo;