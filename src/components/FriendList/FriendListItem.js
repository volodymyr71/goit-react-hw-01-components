import React from "react";
import style from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span className={isOnline ? style.userOnline : style.userOffline}></span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
