import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ id, title, desciption, image, author, date, numberOfComment }) => {
  return (
    <div className="blog-item">
      <img src={image} />
      <div className="title line-dashed-under">
        <Link to={`blog/${id}`}>{title}</Link>
      </div>
      <p className="description">
        {desciption}
      </p>
      <div className="more-info line-dashed-under">
        <span className="by">Bởi {author}</span>
        <span className="date">({date})</span>
      </div>
      <div className="option">
        <span className="readmore"><Link to={`blog/${id}`}>Đọc thêm</Link></span>
        <span className="times-comment">{numberOfComment} Bình luận</span>
      </div>
    </div>
  )
}

export default BlogItem;
