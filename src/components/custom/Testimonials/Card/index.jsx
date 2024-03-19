import React from "react";
import PropTypes from "prop-types";
import style from "./index.module.scss";
import StarRating from "@/components/custom/StarRating";

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
          <div className={style.raiting}>
            <StarRating rating={raiting} />
          </div>
          <div className={style.userName}>{userName}</div>
        </div>
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
};

TestimonialsCard.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  raiting: PropTypes.number.isRequired,
};

export default TestimonialsCard;
