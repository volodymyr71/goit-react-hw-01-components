import React from "react";
import PropTypes from "prop-types";
import style from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <>
      <div className={style.profile}>
        <div className={style.description}>
          <img src={avatar} alt={name} width="200" className={style.avatar} />
          <p className={style.name}>{name}</p>
          <p className={style.tag}>{tag}</p>
          <p className={style.location}>{location}</p>
        </div>

        <ul className={style.stats}>
          <li>
            <span className={style.label}>Followers </span>
            <span className={style.quantity}>{followers}</span>
          </li>
          <li>
            <span className={style.label}>Views </span>
            <span className={style.quantity}>{views}</span>
          </li>
          <li>
            <span className={style.label}>Likes </span>
            <span className={style.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
