import React from "react";
import "../../Style/navibar.css"
import "../../Style/common.css"
import { Link } from "react-router-dom";
function NaviBar() {
    return (
                <div className="N_bar">
                        <div className="contents">
                            <div className="dropdown">
                                <span className="selectTxt" >스토어</span>
                                <div className="dropdown-content">
                                    <Link to = {`/showCareer`} >신제품</Link>
                                    <Link to = {`/showCareer`} >경력</Link>
                                    <Link to = {`/showCareer`} >경력</Link>
                                    <Link to = {`/showCareer`} >경력</Link>
                                    <Link to = {`/showCareer`} >경력</Link>
                                    <Link to = {`/showCareer`} >경력</Link>
                                    <Link to = {`/showCareer`} >경력</Link>
                                    <Link to = {`/showCareer`} >경력</Link>
                                </div>
                            </div>
                            <div className="dropdown">
                                <span className="selectTxt">캠페인</span>
                                <div className="dropdown-content">
                                    <Link to = {`/showCareer`} >경력</Link>
                                    <Link to = {`/showCareer`} >경력</Link>
                                    <Link to = {`/showCareer`} >경력</Link>
                                    <Link to = {`/showCareer`} >경력</Link>
                                </div>
                            </div>
                            <Link to = {`/Cuser`} className="selectTxt selectHead" >소개</Link>
                            <div className="dropdown">
                                <span className="selectTxt">게시판</span>
                                <div className="dropdown-content">
                                    <a href="#">공지사항</a>
                                    <Link to = {`/showCareer`} >문의</Link>
                                    <a href="#">후기</a>
                                </div>
                            </div>
                            <Link to = {`/Cuser`} className="selectTxt selectHead" >매장안내</Link>
                        </div>
                        <Link to = {`/`} className="selectHead HomeTxt"  >First Floor</Link>
                        <div className="contents contenst_right">
                            <Link to = {`/Cuser`} className="selectTxt selectHead" >로그인</Link>
                            <Link to = {`/Cuser`} className="selectTxt selectHead" >주문내역</Link>
                            <Link to = {`/Cuser`} className="selectTxt selectHead" >장바구니</Link>
                        </div>
                </div>


    );
}

export default NaviBar;