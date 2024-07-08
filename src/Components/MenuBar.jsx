import React, { useState } from "react";
import MenuButton from "./MenuButton";
import Ches from './Products/Cheese'
import Pom from './Products/Tomato'
import "./Menu-Bar.css";
export function MenuBar(props) {
  let [count, setCount] = useState(0);
  let [cheese, setCheese] = useState(0);
  let [pomidor, setPomidor] = useState(0);
  let prod = [
    {
      id: 1,
      name: "Cheese",
      price: 3,
      setCountFn: setCheese,
      productCount: cheese,
    },
    {
      id: 2,
      name: "Pomidor",
      price: 1.5,
      setCountFn: setPomidor,
      productCount: pomidor,
    },
  ];
  function calcTotalPrice() {
    let total = 0;
    prod.forEach((i) => {
      total += i.price * i.productCount;
    });
    return total;
  }
  let arrPomidor = new Array(pomidor).fill(null)
  let arrCheese = new Array(cheese).fill(null)
  return (
    <div className="bigger">
      <div className="bol">
        <h1>
          total Price: <span style={{ color: "red" }}>{calcTotalPrice()}$</span>
        </h1>
        <h2>Cheese: {cheese}</h2>
        <h2>Pomidor: {pomidor}</h2>
        <div className="Menu">
          {prod.map((e) => {
            return (
              <MenuButton
                key={e.id}
                name={e.name}
                price={e.price}
                setCount={setCount}
                count={count}
                setCountFn={e.setCountFn}
              />
            );
          })}
          <div className="cover">
            <h1>Open Menu</h1>
          </div>
        </div>
        <div class="container" onClick={()=>location.reload()}>
          <div class="left-side">
            <div class="card">
              <div class="card-line"></div>
              <div class="buttons"></div>
            </div>
            <div class="post">
              <div class="post-line"></div>
              <div class="screen">
                <div class="dollar">$</div>
              </div>
              <div class="numbers"></div>
              <div class="numbers-line2"></div>
            </div>
          </div>
          <div class="right-side">
            <div class="new">Tolov qilish</div>
            <svg
              viewBox="0 0 451.846 451.847"
              height="512"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
              class="arrow"
            >
              <path
                fill="#cfcfcf"
                data-old_color="#000000"
                class="active-path"
                data-original="#000000"
                d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="burger">
        <div className="top"></div>
          {arrPomidor.map((e)=>{
            return <Pom key={e}/>
          })}
          {arrCheese.map((e)=>{
            return <Ches key={e}/>
          })}
        <div className="bottom"></div>
      </div>
      </div>
  );
}
export default MenuBar;
