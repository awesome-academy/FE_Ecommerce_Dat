import _ from 'lodash';
import React from 'react';
import cn from 'classnames';
import FeedbackItem from '../../components/FeedbackItem';
import './Feedback.scss';

class Feedback extends React.Component {
  renderFeedback = () => {
    return _.map(this.props.feedbacks, (feedback, index) => {
      return <FeedbackItem
        key={index}
        name={feedback.name}
        speech={feedback.speech}
        img={feedback.img}
        postion={feedback.postion}
      />
    })
  }
  render() {
    return (
      <div className={cn("container feedback")}>
        <div className={cn("feedback-container")}>
          {this.renderFeedback()}
        </div>
      </div>
    )
  }
}

export default Feedback;
