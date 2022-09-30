import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description,imageUrl,newsUrl,publishDate,authore} = this.props;
    return (
      <div className="my-3">
      
        <div className="card">
         {/*<div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:0}}>
          <span class="badge rounded-pill bg-danger">dnget</span>
          </div>*/}
          <img src={!imageUrl?"https://talksport.com/wp-content/uploads/sites/5/2022/06/TALKSPORT-LANDSCAPE-DE-JONG-UNITED.jpg?strip=all&quality=100&w=1500&h=1000&crop=1":imageUrl}className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text ">{description}</p>
            <p className="card-text"><small className="text-muted">By {!authore?"unknown":authore} on {new Date (publishDate).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

