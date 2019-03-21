import React from 'react';
import cn from 'classnames';
import './ContentTabs.scss';
import Tabs from '../../../components/Tabs';

class ContentTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1
    }
  }

  render() {
    const { features, information, id } = this.props;
    return (
      <div className={cn("tabs col-md-9")}>
        <Tabs>
          <div className={cn("tabs-content")} label="Đặc điểm nổi bật">
            <div dangerouslySetInnerHTML={{ __html: features }} />
          </div>
          <div className={cn("tabs-content")} label="Thông tin sản phẩm">
            <div dangerouslySetInnerHTML={{ __html: information }} />
          </div>
          <div className={cn("tabs-content")} label="Đánh giá">
            <div className="fb-comments" data-href={`/detail/${id}`} data-numposts="5"></div>
          </div>
        </Tabs>
      </div>
    )
  }
}
export default ContentTabs;
