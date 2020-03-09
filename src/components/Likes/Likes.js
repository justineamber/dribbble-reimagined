import React, { useState } from "react";
import { Heart } from "react-feather";
import "./Likes.css";

export const Likes = props => {
  //const LikeCounter() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  return (
    <a href="#" className="card_engagement text_medium">
      Count: {count}
      <Heart />
      <span onClick={() => setCount(count => count + 1)}>{}</span>
    </a>
  );
};
// when clicked going to send a firebase update https://firebase.google.com/docs/firestore/manage-data/add-data?authuser=0#update-data.
