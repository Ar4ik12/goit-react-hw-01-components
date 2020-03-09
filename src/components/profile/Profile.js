import React from "react";
import style from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = props => (
  <>
    <div className={style.profile}>
      <div className={style.description}>
        <img src={props.avatar} alt="user avatar" className={style.avatar} />
        <p className={style.name}>{props.name}</p>
        <p className={style.tag}>@{props.tag}</p>
        <p className={style.location}>{props.location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.item}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{props.stats.followers}</span>
        </li>
        <li className={style.item}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{props.stats.views}</span>
        </li>
        <li className={style.item}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  </>
);
export default Profile;

Profile.propTypes = {
  props: PropTypes.object,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  })
};
