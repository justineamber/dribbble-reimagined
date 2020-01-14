import React from 'react';
import { Eye, MessageCircle, Heart, Image, Paperclip, Video  } from 'react-feather';
import './Content.css';

function Content() {
  return (
  <main>
    <section className="cards">
      <div className="card">
        <div className="card_image-container">
          <img src="https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80" alt="cabin ontop of mountain"
          />
          <div class="overlay">
            <span className="text">Mountain retreats</span>
          <button type="button"><a href="save-button" class="save-button">Save</a></button>
          </div>
        </div>
        <div className="card_content">
          <div className="icon-wrapper">
            <span className="image-icon"><a href="#"><Image /></a></span>
          </div>
          <div className="card_info">
            <img src="/afterglow-logo.png" alt="designer logo" className="designer-logo"></img>
            <span className="text--medium">Outsourced<sup className="company-info">PRO</sup></span>
                <span className="card_engagement text--medium"><a href="#"><Eye /></a>4910</span>
                <span className="card_engagement text--medium"><a href="#"><MessageCircle /></a>27</span>
                <span className="card_engagement text--medium"><a href="#"><Heart /></a>543</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card_image-container">
          <img src="https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80" alt="cabin ontop of mountain"
          />
           <div class="overlay">
            <span className="text">Mountain retreat</span>
              <button type="button"><a href="save-button" class="save-button">Save</a></button>
          </div>
        </div>
        <div className="card_content">
          <div className="icon-wrapper">
            <span className="gif-icon">GIF</span>
          </div>
          <div className="card_info">
            <img src="/afterglow-logo.png" alt="designer logo" className="designer-logo"></img>
            <span className="text--medium">Outsourced<sup className="company-info">PRO</sup></span>
                <span className="card_engagement text--medium"><a href="#"><Eye /></a>4910</span>
                <span className="card_engagement text--medium"><a href="#"><MessageCircle /></a>27</span>
                <span className="card_engagement text--medium"><a href="#"><Heart /></a>543</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card_image-container">
          <img src="https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80" alt="cabin ontop of mountain"
          />
           <div class="overlay">
            <span className="text">Mountain retreat</span>
            <button type="button"><a href="save-button" class="save-button">Save</a></button>
          </div>
        </div>
        <div className="card_content">
          <div className="icon-wrapper">
            <span className="paperclip-icon"><a href="#"><Paperclip /></a></span>
          </div>
          <div className="card_info">
            <img src="/afterglow-logo.png" alt="designer logo" className="designer-logo"></img>
            <span className="text--medium">Outsourced<sup className="company-info">PRO</sup></span>
                <span className="card_engagement text--medium"><a href="#"><Eye /></a>4910</span>
                <span className="card_engagement text--medium"><a href="#"><MessageCircle /></a>27</span>
                <span className="card_engagement text--medium"><a href="#"><Heart /></a>543</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card_image-container">
          <img src="https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80" alt="cabin ontop of mountain"
          />
           <div class="overlay">
            <span className="text">Mountain retreat</span>
            <button type="button"><a href="save-button" class="save-button">Save</a></button>
          </div>
        </div>
        <div className="card_content">
          <div className="icon-wrapper">
            <span className="video-icon"><a href="#"><Video /></a></span>
          </div>
          <div className="card_info">
            <img src="/afterglow-logo.png" alt="designer logo" className="designer-logo"></img>
            <span className="text--medium">Outsourced<sup className="company-info">PRO</sup></span>
                <span className="card_engagement text--medium"><a href="#"><Eye /></a>4910</span>
                <span className="card_engagement text--medium"><a href="#"><MessageCircle /></a>27</span>
                <span className="card_engagement text--medium"><a href="#"><Heart /></a>543</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card_image-container">
          <img src="https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80" alt="cabin ontop of mountain"
          />
           <div class="overlay">
            <span className="text">Mountain retreat</span>
            <button type="button"><a href="save-button" class="save-button">Save</a></button>
          </div>
        </div>
        <div className="card_content">
          <div className="icon-wrapper">
            <span className="image-icon"><a href="#"><Image /></a></span>
          </div>
          <div className="card_info">
            <img src="/afterglow-logo.png" alt="designer logo" className="designer-logo"></img>
            <span className="text--medium">Outsourced<sup className="company-info">PRO</sup></span>
                <span className="card_engagement text--medium"><a href="#"><Eye /></a>4910</span>
                <span className="card_engagement text--medium"><a href="#"><MessageCircle /></a>27</span>
                <span className="card_engagement text--medium"><a href="#"><Heart /></a>543</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card_image-container">
          <img src="https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80" alt="cabin ontop of mountain"
          />
           <div class="overlay">
            <span className="text">Mountain retreat</span>
            <button type="button"><a href="save-button" class="save-button">Save</a></button>
          </div>
        </div>
        <div className="card_content">
          <div className="icon-wrapper">
            <span className="paperclip-icon"><a href="#"><Paperclip /></a></span>
          </div>
          <div className="card_info">
            <img src="/afterglow-logo.png" alt="designer logo" className="designer-logo"></img>
            <span className="text--medium">Outsourced<sup className="company-info">PRO</sup></span>
                <span className="card_engagement text--medium"><a href="#"><Eye /></a>4910</span>
                <span className="card_engagement text--medium"><a href="#"><MessageCircle /></a>27</span>
                <span className="card_engagement text--medium"><a href="#"><Heart /></a>543</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card_image-container">
          <img src="https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80" alt="cabin ontop of mountain"
          />
           <div class="overlay">
            <span className="text">Mountain retreat</span>
            <button type="button"><a href="save-button" class="save-button">Save</a></button>
          </div>
        </div>
        <div className="card_content">
          <div className="icon-wrapper">
            <span className="image-icon"><a href="#"><Image /></a></span>
          </div>
          <div className="card_info">
            <img src="/afterglow-logo.png" alt="designer logo" className="designer-logo"></img>
            <span className="text--medium">Outsourced<sup className="company-info">PRO</sup></span>
                <span className="card_engagement text--medium"><a href="#"><Eye /></a>4910</span>
                <span className="card_engagement text--medium"><a href="#"><MessageCircle /></a>27</span>
                <span className="card_engagement text--medium"><a href="#"><Heart /></a>543</span>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}

export default Content;
