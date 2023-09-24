import { useEffect, useState } from 'react';
import './infoCard.css';

export const InfoCard = (props) => {
  const [changeColor, setChangeColor] = useState("rgb(223,249,235)")
  const [changeFont, setChangeFont] = useState('#3CC952');
  const price = Number(props.price);
  const imgURL = props.URL
  const change = Number(props.change)
  useEffect(()=>{
    if(change<0){
      setChangeColor("red")
      setChangeFont("white")
    }
  },[change])
  return (
    <div className="InfoCard">
      <div className="vector" >
        <img src={imgURL} className="w-5" alt="" />
      </div>
      <p className="text">Current Price</p>
      <div className="flex gap-2">
        <div className="textPart">
          <h2 className="price">${price.toFixed(2)}</h2>
        </div>
        <div className="growth" style={{ background: changeColor }}>
          <p className="stats" style={{ color: changeFont }}>
            {change}%
          </p>
        </div>
      </div>
    </div>
  );
};
