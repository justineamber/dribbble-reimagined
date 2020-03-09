import React from "react";
import { Eye, MessageCircle, Heart } from "react-feather";
import "./Card.css";
import Type from "../Type/Type";

export const Card = props => {
  const { data, author } = props;

  return (
    <div className="card">
      <div className="card_image_container">
        <img src={data.imageUrl} alt={data.name} />
        <div className="overlay">
          <span className="text">{data.name}</span>
          <button>View</button>
        </div>
      </div>
      <div className="card_content">
        <Type shotType={data.type} />
        <div className="card_info">
          <img
            src={author.logo}
            alt="designer logo"
            className="designer_logo"
          />
          <span className="text_medium">
            {author.name}
            <sup className="company_info">PRO</sup>
          </span>
          <a href="#" className="card_engagement text_medium">
            <Eye />
            <span>{data.viewCount}</span>
          </a>
          <a href="#" className="card_engagement text_medium">
            <MessageCircle />
            <span>{data.comments.length}</span>
          </a>
          <a href="#" className="card_engagement text_medium">
            <Heart />
            <span>{data.likes}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
