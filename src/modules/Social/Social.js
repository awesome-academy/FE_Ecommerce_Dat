import _ from 'lodash';
import React from 'react';
import cn from 'classnames';
import './Social.scss';
import { Link } from 'react-router-dom';

class Social extends React.Component {
  render() {
    return (
      <div className={cn("container social")}>
        <ul className={cn("list-social")}>
          <li><Link to='#' target="_blank"><i className={cn("fab fa-facebook-f")}></i><span>Facebook</span></Link></li>
          <li><Link to='#' target="_blank"><i className={cn("fab fa-twitter")}></i><span>Twitter</span></Link></li>
          <li><Link to='#' target="_blank"><i className={cn("fab fa-instagram")}></i><span>Instagram</span></Link></li>
          <li><Link to='#' target="_blank"><i className={cn("fab fa-google-plus-g")}></i><span>Google</span></Link></li>
          <li><Link to='#' target="_blank"><i className={cn("fab fa-pinterest")}></i><span>Pinterest</span></Link></li>
          <li><Link to='#' target="_blank"><i className={cn("fab fa-linkedin-in")}></i><span>Linkedin</span></Link></li>
        </ul>
      </div>
    )
  }
}

export default Social;
