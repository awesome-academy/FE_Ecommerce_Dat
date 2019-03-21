import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import './Blog.scss';

class Blog extends React.Component {
  render() {
    return (
      <div className={cn("col-sm-6 col-md-4 blog")}>
        <h4 className="title-g"><Link to="/blog">Blog</Link></h4>
        <div className="title-line">
          <hr /><div className="more-slash"></div><hr />
        </div>
        <div className="content-container">
          {/* Render BlogItem Component with data then */}
        </div>
      </div>
    )
  }
}

export default Blog;
