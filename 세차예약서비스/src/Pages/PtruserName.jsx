import React from "react";

const UserName = (props) => {
    if (props && props.name) {
      return (
        <p>안녕하세요 {props.name} 님</p>
      );
    } else {
      return (
        <p>안녕하세요 000 님</p>
      );
    }
  };
  
  export default UserName;