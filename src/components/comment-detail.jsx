import React from 'react';

const ComponentDetail = ({name, date, text, src}) => {
  return (
    <div className="comment">
    <a className="avatar" href="/">
      <img src={src} alt="avatar"/>
    </a>
    <div className="content">
      <a className="author" href="/">{name}</a>
      <div className="metadata">
        <span className="date">{date}</span>
      </div>
      <div className="text">
        {text}
      </div>     
    </div>
  </div>
  )
}

export default ComponentDetail