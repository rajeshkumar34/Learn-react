import React from "react";

const Demo = (props) => {
  return (
    <>
      <div className="to_style">
        <i className="fa-time" aria-hidden="true"></i>
        <li> {props.text} </li>
      </div>
    </>
  );
};

export default Demo;
