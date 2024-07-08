import React, { useState } from "react";

export function MenuBar(props) {
  let [count, setcount] = useState(0);
  let prod = [
    {
      id: 1,
      name: "Cheese",
      price: 5,
    },
    {
      id: 2,
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
        <button onClick={() => setcount((count) => count + props.price)}>
          Buy
        </button>
        <button
          onClick={() =>
            count <= 0
              ? alert("Please first you do buy product")
              : setcount((count) => count - props.price)
          }
          style={{ margin: "10px" }}
        >
          Remove
        </button>

        <hr />
      </div>
    );
  }
}
