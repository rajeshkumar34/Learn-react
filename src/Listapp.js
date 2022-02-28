import React, { useState } from "react";
import Todo from "./Todo.css";
import Demo from "./Demo";
const Listapp = () => {
  const [inputList, setlnputList] = useState("");
  const [ltems, setltem] = useState([]);

  const itemEvent = (event) => {
    setlnputList(event.target.value);
  };
  const listofltems = () => {
    setltem((oldltems) => {
      return [...oldltems, inputList];
    });
    setlnputList("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo LiSt </h1>
          <br />
          <input
            type="text"
            placeholder="Add a items"
            onChange={itemEvent}
            value={inputList}
          />

          <button onClick={listofltems}> + </button>
          <ol>
            {/* <li> {inputList} </li> */}

            {ltems.map((itemValue) => {
              return <Demo text={itemValue} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Listapp;
