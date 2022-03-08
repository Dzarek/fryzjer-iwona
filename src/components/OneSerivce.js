import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

const OneSerivce = ({ icon, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article onMouseLeave={() => setShowInfo(false)}>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{info.substring(0, 120)}...</p>
      <button onClick={() => setShowInfo(true)}>czytaj więcej</button>
      <section className={showInfo ? "service-over showInfo" : "service-over"}>
        <h3>{title}</h3>
        <p>{info}</p>
        <button onClick={() => setShowInfo(false)}>
          <FaWindowClose />
        </button>
      </section>
    </article>
  );
};

export default OneSerivce;
