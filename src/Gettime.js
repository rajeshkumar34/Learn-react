import React, { useState } from "react";

const Gettime = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const UpdataTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdataTime, 1000);
  return (
    <>
      <h1>{ctime}</h1>
      {/* <button onClick={UpdataTime}> Get Time </button> */}
    </>
  );
};

export default Gettime;
