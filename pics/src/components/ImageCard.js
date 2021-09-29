import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };

    this.imageRef = React.createRef(); //ref dùng để truy cập vào single DOM
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans); //chờ khi ảnh đã được load => mới get được kích thước
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10); //grid-auto-rows - càng nhỏ thì tỉ lệ ảnh được chia càng chuẩn hơn, không chiếm qua row khác quá nhiều
    this.setState({ spans: spans });
  };

  render() {
    const { urls, description } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
