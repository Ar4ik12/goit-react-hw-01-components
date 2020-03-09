import React from "react";
import style from "./FriendsList.module.css";

const FriendsList = ({ data }) => {
  return (
    <li className={style.item}>
      <span
        className={style.status}
        style={{ backgroundColor: `${data.isOnline ? "green" : "red"}` }}
      ></span>
      <img className={style.avatar} src={data.avatar} alt="img" width="100" />
      <p className={style.name}>{data.name}</p>
    </li>
  );
};

export default FriendsList;