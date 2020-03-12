import React, { useState } from "react";
import { Heart } from "react-feather";
import { db } from "../../index";
import "./LikesButton.css";

export const LikesButton = props => {
  const shotLike = props.shotLike;

  const handleShotLike = () => {
    const newLikes = db.collection("shots").doc(props.shotId);
    return newLikes
      .update({
        likes: shotLike + 1
      })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <button
      className="card_engagement text_medium"
      onClick={() => handleShotLike()}
    >
      <Heart />
      {shotLike}
    </button>
  );
};

export default LikesButton;
