import React from "react";
import {
  Eye,
  MessageCircle,
  Heart,
  Image,
  Paperclip,
  Video
} from "react-feather";
import "./Content.css";

function Content() {
  return (
    <main>
      <section className="cards">
        <div className="card">
          <div className="card_image-container">
            <img
              src="https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
              alt="cabin ontop of mountain"
            />
            <div className="overlay">
              <span className="text">Mountain retreats</span>
              <button>View</button>
            </div>
          </div>
          <div className="card_content">
            <div className="icon-wrapper">
              <span className="image-icon">
                <a href="#">
                  <Image />
                </a>
              </span>
            </div>
            <div className="card_info">
              <img
                src="/afterglow-logo.png"
                alt="designer logo"
                className="designer-logo"
              ></img>
              <span className="text--medium">
                Outsourced<sup className="company-info">PRO</sup>
              </span>
              <a href="#" className="card_engagement text--medium">
                <Eye />
                <span>4910</span>
              </a>
              <a href="#" className="card_engagement text--medium">
                <MessageCircle />
                <span>27</span>
              </a>
              <a href="#" className="card_engagement text--medium">
                <Heart />
                <span>543</span>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card_image-container">
            <img
              src="https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
              alt="cabin ontop of mountain"
            />
            <div className="overlay">
              <span className="text">Mountain retreat</span>
              <button>View</button>
            </div>
          </div>
          <div className="card_content">
            <div className="icon-wrapper">
              <span className="gif-icon">GIF</span>
            </div>
            <div className="card_info">
              <img
                src="/afterglow-logo.png"
                alt="designer logo"
                className="designer-logo"
              ></img>
              <span className="text--medium">
                Outsourced<sup className="company-info">PRO</sup>
              </span>
              <a href="#" className="card_engagement text--medium">
                <Eye />
                <span>4910</span>
              </a>
              <a href="#" className="card_engagement text--medium">
                <MessageCircle />
                <span>27</span>
              </a>
              <a href="#" className="card_engagement text--medium">
                <Heart />
                <span>543</span>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card_image-container">
            <img
              src="https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
              alt="cabin ontop of mountain"
            />
            <div className="overlay">
              <span className="text">Mountain retreat</span>
              <button>View</button>
            </div>
          </div>
          <div className="card_content">
            <div className="icon-wrapper">
              <span className="paperclip-icon">
                <a href="#">
                  <Paperclip />
                </a>
              </span>
            </div>
            <div className="card_info">
              <img
                src="/afterglow-logo.png"
                alt="designer logo"
                className="designer-logo"
              ></img>
              <span className="text--medium">
                Outsourced<sup className="company-info">PRO</sup>
              </span>
              <a href="#" className="card_engagement text--medium">
                <Eye />
                <span>4910</span>
              </a>
              <a href="#" className="card_engagement text--medium">
                <MessageCircle />
                <span>27</span>
              </a>
              <a href="#" className="card_engagement text--medium">
                <Heart />
                <span>543</span>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card_image-container">
            <img
              src="https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
              alt="cabin ontop of mountain"
            />
            <div className="overlay">
              <span className="text">Mountain retreat</span>
              <button>View</button>
            </div>
          </div>
          <div className="card_content">
            <div className="icon-wrapper">
              <span className="video-icon">
                <a href="#">
                  <Video />
                </a>
              </span>
            </div>
            <div className="card_info">
              <img
                src="/afterglow-logo.png"
                alt="designer logo"
                className="designer-logo"
              ></img>
              <span className="text--medium">
                Outsourced<sup className="company-info">PRO</sup>
              </span>
              <a href="#" className="card_engagement text--medium">
                <Eye />
                <span>4910</span>
              </a>
              <a href="#" className="card_engagement text--medium">
                <MessageCircle />
                <span>27</span>
              </a>
              <a href="#" className="card_engagement text--medium">
                <Heart />
                <span>543</span>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card_image-container">
            <img
              src="https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
              alt="cabin ontop of mountain"
            />
            <div className="overlay">
              <span className="text">Mountain retreat</span>
              <button>View</button>
            </div>
          </div>
          <div className="card_content">
            <div className="icon-wrapper">
              <span className="image-icon">
                <a href="#">
                  <Image />
                </a>
              </span>
            </div>
            <div className="card_info">
              <img
                src="/afterglow-logo.png"
                alt="designer logo"
                className="designer-logo"
              ></img>
              <span className="text--medium">
                Outsourced<sup className="company-info">PRO</sup>
              </span>
              <a href="#" className="card_engagement text--medium">
                <Eye />
                <span>4910</span>
              </a>
              <a href="#" className="card_engagement text--medium">
                <MessageCircle />
                <span>27</span>
              </a>
              <a href="#" className="card_engagement text--medium">
                <Heart />
                <span>543</span>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card_image-container">
            <img
              src="https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
              alt="cabin ontop of mountain"
            />
            <div className="overlay">
              <span className="text">Mountain retreat</span>
              <button>View</button>
            </div>
          </div>
          <div className="card_content">
            <div className="icon-wrapper">
              <span className="paperclip-icon">
                <a href="#">
                  <Paperclip />
                </a>
              </span>
            </div>
            <div className="card_info">
              <img
                src="/afterglow-logo.png"
                alt="designer logo"
                className="designer-logo"
              ></img>
              <span className="text--medium">
                Outsourced<sup className="company-info">PRO</sup>
              </span>
              <a href="#" className="card_engagement text--medium">
                <Eye />
                <span>4910</span>
              </a>
              <a href="#" className="card_engagement text--medium">
                <MessageCircle />
                <span>27</span>
              </a>
              <a href="#" className="card_engagement text--medium">
                <Heart />
                <span>543</span>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card_image-container">
            <img
              src="https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
              alt="cabin ontop of mountain"
            />
            <div className="overlay">
              <span className="text">Mountain retreat</span>
              <button>View</button>
            </div>
          </div>
          <div className="card_content">
            <div className="icon-wrapper">
              <span className="image-icon">
                <a href="#">
                  <Image />
                </a>
              </span>
            </div>
            <div className="card_info">
              <img
                src="/afterglow-logo.png"
                alt="designer logo"
                className="designer-logo"
              ></img>
              <span className="text--medium">
                Outsourced<sup className="company-info">PRO</sup>
              </span>
              <a href="#" className="card_engagement text--medium">
                <Eye />
                <span>4910</span>
              </a>
              <a href="#" className="card_engagement text--medium">
                <MessageCircle />
                <span>27</span>
              </a>
              <a href="#" className="card_engagement text--medium">
                <Heart />
                <span>543</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Content;
