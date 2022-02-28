import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Tooltip from "@material-ui/core/Tooltip";
import Add from "@material-ui/core/Tooltip";

import Decr from "./Decr.css";

const Incr = () => {
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("Sorry, Zore Limit Reached");
      setNum(num - 1);
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {num} </h1>
          <div className="btn_div">
            <Tooltip title="Add">
              <button onClick={incNum} className="btn_green">
                <AddIcon />
              </button>
            </Tooltip>

            <Tooltip title="Delete">
              <button onClick={decNum} className="btn_red">
                <RemoveIcon />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default Incr;
