import React from "react";

const name = "Rajesh";
const CurrentDate = new Date().toLocaleDateString();
const CurrentTime = new Date().toLocaleTimeString();
const Love = () => {
  return (
    <>
      <h1>Hello, my name is {name}</h1>
      <p>Current Date is {CurrentDate} </p>
      <p>Current Time is = {CurrentTime} </p>
    </>
  );
};
export default Love;
