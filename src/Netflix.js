import React from "react";
import Nextflix from "./Nextflix.css";
const Aaree = [
  {
    id: 1,
    imgsrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIN8OZAtO8aXscX2_VbuKpqm62MJr8KSjKiCnuLjIqImMbSEBKdGqLOzxBsrRegG3nJo&usqp=CAU",
    titel: " A Nextflix Orignal Series",
    sname: "TAMASHA",
    link: "https://www.netflix.com/in/title/80087743",
  },

  {
    id: 2,
    imgsrc:
      "https://occ-0-2101-185.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbLPUOGZxWQlv9KLUAYYfrHSWPW8qf6dvY4a8uAk36aydgRBncDI7o-4nUANmIVoWbvu-vsNm8dN4wI4k6_PC-myvq88.jpg?r=266",
    titel: "A Nextflix Orignal Series",
    sname: "Dangal",
    link: "https://www.netflix.com/in/title/80166185",
  },

  {
    id: 3,
    imgsrc:
      "https://occ-0-2794-2218.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRdCX1LnR2_7boriN1S5d2Ih3BPWoBBnkALo0_rRVuKSoU_DS3eTbiOXHh_ZYuC-ZPFLDIKySgbBb39M-sdQp16NV-8G.jpg",
    titel: "A Nextflix Orignal Series",
    sname: "The Conjuring",
    link: "https://www.netflix.com/in/title/80987064",
  },

  {
    id: 4,
    imgsrc:
      "https://m.media-amazon.com/images/M/MV5BODA4NTk3MTQwN15BMl5BanBnXkFtZTcwNjUwMTMxNA@@._V1_QL75_UY281_CR0,0,190,281_.jpg",
    titel: "A Nextflix Orignal Series",
    sname: "UNKNOEN",
    link: "https://www.netflix.com/in/title/70139387",
  },
];

console.log("aaree", Aaree);

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="mypic" className="cardimg" />
          <div className="card_info">
            <span className="card_category">{props.titel}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} target="blank"></a>
            <button>Watch Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

function ShowCard() {
  return Aaree.map((item, index) => (
    <Card
      key={item.id}
      imgsrc={item.imgsrc}
      titel={item.titel}
      sname={item.sname}
      link={item.link}
    />
  ));
}

const Netflix = () => {
  return (
    <>
      <h1 className="heading_style">List of top 5 Nextflix Series in 2021</h1>
      <ShowCard />
    </>
  );
};
export default Netflix;
