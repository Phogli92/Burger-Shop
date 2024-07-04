import { color } from "d3";
import React, { useState } from "react";
export function MenuBar(props) {
  let [count, setcount] = useState(0);
  let prod = [
    {
      id: 1,
      name: "Kokatlar",
      price: 1,
    },
    {
      id: 2,
      name: "Makaron",
      price: 2,
    },

    {
      id: 3,
      name: "Sushi",
      price: 5,
    },
    {
      id: 4,
      name: "Pomidor",
      price: 3,
    },
  ];

  return (
    <>
      <h1>{count}</h1>
      <div className="Menu">
        {prod.map((e) => {
          return <MenuBtn key={e.id} name={e.name} price={e.price} />;
        })}
      </div>
    </>
  );
  function MenuBtn(props) {
    return (
      <div className="menu">
        <h2>
          {props.name} <span style={{ color: "red" }}>{props.price}$</span>
        </h2>
        <button onClick={()=>setcount((count)=>count + props.price)}>Buy</button>
        <hr />
      </div>
    );
  }
  function handleClick() {
    setcount(count + 1);
  }
}
export default MenuBar;
