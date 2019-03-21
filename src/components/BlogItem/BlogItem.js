import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ id, title, desciption, image, author, date, numberOfComment }) => {
  return (
    <div class="blog-item">
      <img src={image} />
      <div class="title line-dashed-under">
        <Link to={`blog/${id}`}>{title}</Link>
      </div>
      <p class="description">
        {desciption}
      </p>
      <div class="more-info line-dashed-under">
        <span class="by">Bởi {author}</span>
        <span class="date">({date})</span>
      </div>
      <div class="option">
        <span class="readmore"><Link to={`blog/${id}`}>Đọc thêm</Link></span>
        <span class="times-comment">{numberOfComment} Bình luận</span>
      </div>
    </div>
  )
}

export default BlogItem;
