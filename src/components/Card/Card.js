import React from "react";
import {
  Eye,
  MessageCircle,
  Heart,
  Image,
  Paperclip,
  Video
} from "react-feather";
import "./Card.css";

export const Card = ({ data }) => {
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
        <div className="icon_wrapper">
          <span className="image_icon">
            <a href="#">
              <Image />
            </a>
          </span>
        </div>
        <div className="card_info">
          <img
            src="/afterglow_logo.png"
            alt="designer logo"
            className="designer_logo"
          />
          <span className="text_medium">
            {data.author}
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
