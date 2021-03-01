import React from "react";
import style from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={style.friendList}>
        {friends.map((el) => {
          const { avatar, name, isOnline, id } = el;
          return (
            <FriendListItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              key={id}
            />
          );
        })}
      </ul>
    </>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
