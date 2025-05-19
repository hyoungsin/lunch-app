import React, { useState } from "react";
import "./App.css";

const menus = [
  { name: "우동", img: "/images/udon.jpg" },
  { name: "김밥", img: "/images/gimbap.jpg" },
  { name: "비빔밥", img: "/images/bibimbap.jpg" },
  { name: "돈까스", img: "/images/donkatsu.jpg" },
  { name: "국밥", img: "/images/gukbap.jpg" },
  { name: "짜장면", img: "/images/jjajang.jpg" },
  { name: "파스타", img: "/images/pasta.jpg" },
  { name: "쌀국수", img: "/images/pho.jpg" },
];

function App() {
  const [selected, setSelected] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const spinRoulette = () => {
    setSpinning(true);
    setTimeout(() => {
      const idx = Math.floor(Math.random() * menus.length);
      setSelected(idx);
      setSpinning(false);
    }, 2000); // 2초간 회전 효과
  };

  return (
    <div className="App">
      <h1>Jamrbo Roulette</h1>
      <div className={`roulette ${spinning ? "spinning" : ""}`}>
        {menus.map((menu, idx) => (
          <div
            key={menu.name}
            className={`menu-item ${selected === idx ? "selected" : ""}`}
          >
            {menu.name}
          </div>
        ))}
      </div>
      <div style={{ margin: "30px" }}>
        {selected !== null && (
          <>
            <img
              src={menus[selected].img}
              alt={menus[selected].name}
              style={{ width: 100, borderRadius: 10 }}
            />
            <p>오늘의 점심은 "{menus[selected].name}"!</p>
          </>
        )}
      </div>
      <button onClick={spinRoulette} disabled={spinning}>
        {spinning ? "돌리는 중..." : "돌려!"}
      </button>
    </div>
  );
}

export default App;