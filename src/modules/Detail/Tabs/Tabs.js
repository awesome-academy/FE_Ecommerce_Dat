import React from 'react';
import cn from 'classnames';

export default ({ }) => {
  return (
    <div className={cn("tabs col-md-9")}>
      <ul className={cn("tabs-name line-dashed-under")}>
        <li><a className={cn("active")}>Đặc điểm nổi bật</a></li>
        <li><a>Thông tin sản phẩm</a></li>
        <li><a>Đánh giá</a></li>
      </ul>
      <div className={cn("tabs-content")}>
        <div className={cn("product")}>
          <div className={cn("name-description")}>
            <div className={cn("title")}>The mark of a legend</div>
            <p className={cn("description")}> Tự hào được ghi là năm mà Tiffany & Co là
                thành lập, bộ sưu tập mang tính biểu tượng này cung cấp cho một cái gật đầu với
                qua trong khi thể hiện một cảm giác hiện đại với kiểu dáng đẹp
                                    đường cong và đường nét mượt mà.</p>
          </div><img src={require("../../../assets/images/t-co6.jpg")} />
        </div>
        <div className={cn("product right")}>
          <div className={cn("name-description")}>
            <div className={cn("title")}>The mark of a legend</div>
            <p className={cn("description")}> Tự hào được ghi là năm mà Tiffany & Co là
                thành lập, bộ sưu tập mang tính biểu tượng này cung cấp cho một cái gật đầu với
                qua trong khi thể hiện một cảm giác hiện đại với kiểu dáng đẹp
                                    đường cong và đường nét mượt mà.</p>
          </div><img className={cn("img-right")} src={require("../../../assets/images/t-co5.jpg")} />
        </div>
        <div className={cn("product")}>
          <div className={cn("name-description")}>
            <div className={cn("title")}>The mark of a legend</div>
            <p className={cn("description")}> Tự hào được ghi là năm mà Tiffany & Co là
                thành lập, bộ sưu tập mang tính biểu tượng này cung cấp cho một cái gật đầu với
                qua trong khi thể hiện một cảm giác hiện đại với kiểu dáng đẹp
                                    đường cong và đường nét mượt mà.</p>
          </div><img src={require("../../../assets/images/t-co7.jpg")} />
        </div>
        <div className={cn("product right")}>
          <div className={cn("name-description")}>
            <div className={cn("title")}>The mark of a legend</div>
            <p className={cn("description")}> Tự hào được ghi là năm mà Tiffany & Co là
                thành lập, bộ sưu tập mang tính biểu tượng này cung cấp cho một cái gật đầu với
                qua trong khi thể hiện một cảm giác hiện đại với kiểu dáng đẹp
                                    đường cong và đường nét mượt mà.</p>
          </div><img className={cn("img-right")} src={require("../../../assets/images/t-co8.jpg")} />
        </div>
      </div>
    </div>
  )
}
