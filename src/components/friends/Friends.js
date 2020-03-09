import React from "react";
import FriendsList from "./friendsList/FriendList";
import style from "./Friends.module.css"
import PropTypes from "prop-types";

const Friends = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(elem => (
        <FriendsList data={elem} key={elem.id} />
      ))}
    </ul>
  );
};
export default Friends;

Friends.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number
};