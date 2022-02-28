import React from "react";

const name = "Rajesh";
const lmga1 = "https://picsum.photos/300/300";
const lmga2 = " https://picsum.photos/400/300";
const lmga3 = "https://picsum.photos/290/300";
const lmga4 = "https://picsum.photos/401/300";
const links = "https://www.youtube.com/channel/UC6aj4n94Ac6Mg_IB-GVPrdw";

const heading = {
  color: "#fd4254",
  textAlign: "center",
  textTransform: "capitalize",
  fontSize: "bold",
  margin: "50px",
  fontFamily: '"Audiowide", sans-serif',
};

const Attributes = () => {
  return (
    <>
      <h1 style={heading}>My name is {name} my image gallery</h1>
      <img src={lmga1} alt="rendomlmages" />
      <img src={lmga2} alt="rendomlmages" />
      <img src={lmga3} alt="rendomlmages" />
      <a href="https://www.youtube.com/channel/UC6aj4n94Ac6Mg_IB-GVPrdw">
        <img src={lmga4} alt="rendomlmages" />
      </a>
    </>
  );
};

export default Attributes;
