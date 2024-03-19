import React from "react";
import style from "./index.module.scss";

const TestimonialsCard = ({
  id,
  description,
  userImage,
  userName,
  raiting,
}) => {
  return (
    <div className={style.card}>
      <div className={style.user}>
        <div className={style.userIcon}>
          <img src={userImage} alt={userName} />
        </div>
        <div className={style.userInfo}>
          <div className="raiting">{raiting}</div>
          <div className="userName">{userName}</div>
        </div>
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
};

export default TestimonialsCard;
