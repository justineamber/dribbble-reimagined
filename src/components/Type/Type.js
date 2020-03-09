import React from "react";
import { Image, Video, Film, HelpCircle } from "react-feather";
import "./Type.css";

const Type = props => {
  const shotType = props.shotType;

  const handleShotTypeIcon = () => {
    if (shotType === "image") {
      return <Image />;
    } else if (shotType === "video") {
      return <Video />;
    } else if (shotType === "gif") {
      return <Film />;
    } else {
      return <HelpCircle />;
    }
  };

  return (
    <div className="icon_wrapper">
      <span className="image_icon">
        <a href="#">{handleShotTypeIcon()}</a>
      </span>
    </div>
  );
};

export default Type;
