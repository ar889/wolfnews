import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, desc, imageUrl,url, author, publishedDate,source } = this.props;
    // console.log(title);
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <img src={imageUrl} alt="rover" />
          </div>
          <div className="card-body">
            <h4>{title}</h4><span style={{backgroundColor:"#359535",color:'white',borderRadius:'3px',padding:'1px 8px'}}>{source}</span>
            <p>{desc}</p>
                        <span className="tag tag-teal"><a href={url} target='_blank' rel="noreferrer">Read more</a></span>

            <div className="user">
              <div className="user-info">
                <h5>{author}</h5>
                <small>{new Date(publishedDate).toUTCString() }</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
