import React from "react";
import style from "./StatisticalItem.module.css";

const StatisticalItem = ({ data }) => {
  return (
    <li
      className={style.item}
      style={{
        backgroundColor: `#${(((1 << 24) * Math.random()) | 0).toString(16)}`
      }}
    >
      <span className={style.label}>{data.label}</span>
      <span className={style.percentage}>{data.percentage}%</span>
    </li>
  );
};
export default StatisticalItem;
