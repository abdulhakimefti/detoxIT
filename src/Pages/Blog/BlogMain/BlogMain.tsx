import React from "react";
import detox from "../../../Media/android-icon-192x192.png";
import news from "../../../Media/news.jpg";
import news2 from "../../../Media/news2.jpg";
import "./BlogMain.css";

const BlogMain = () => {
  return (
    <div className="mainNewsContaner">
     
      <div className="newsContainer">
      <h2 className="news-title">
        News
      </h2>
        <div className="blog-posts">
          <div className="post">
            <img src={detox} alt="" className="post-img" />
            <div className="post-content">
              <h3 className="h3N">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
                soluta?
              </h3>
              <span className="date">July 13, 2020</span>
            </div>
          </div>

          <div className="post">
            <img src={news} alt="" className="post-img" />
            <div className="post-content">
              <h3 className="h3N">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
                soluta?
              </h3>
              <span className="date">July 13, 2020</span>
            </div>
          </div>

          <div className="post">
            <img src={news2} alt="" className="post-img" />
            <div className="post-content">
              <h3 className="h3N">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
                soluta?
              </h3>
              <span className="date">July 13, 2020</span>
            </div>
          </div>
          <div className="post">
            <img src={detox} alt="" className="post-img" />
            <div className="post-content">
              <h3 className="h3N">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
                soluta?
              </h3>
              <span className="date">July 13, 2020</span>
            </div>
          </div>

          <div className="post">
            <img src={news} alt="" className="post-img" />
            <div className="post-content">
              <h3 className="h3N">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
                soluta?
              </h3>
              <span className="date">July 13, 2020</span>
            </div>
          </div>

          <div className="post">
            <img src={news2} alt="" className="post-img" />
            <div className="post-content">
              <h3 className="h3N">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
                soluta?
              </h3>
              <span className="date">July 13, 2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
