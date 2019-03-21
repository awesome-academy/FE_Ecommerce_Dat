import React from 'react';
import cn from 'classnames';
import AboutWidget from './About';
import BlogWidget from './Blog';
import SendEmailWidget from './SendEmail';
import './Others.scss';

class Others extends React.Component {
  render() {
    return (
      <div className={cn("other")}>
        <div className={cn("container")}>
          <div className={cn("row")}>
            <AboutWidget />
            <BlogWidget />
            <SendEmailWidget />
          </div>
        </div>
      </div>
    )
  }
}

export default Others;
