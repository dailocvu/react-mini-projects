import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    //=> sửa lỗi this underfine, có thể thay thế = bind(this) hoặc dùng => trong props
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term} //sau đó lấy giá trị này làm value
              onChange={(e) => this.setState({ term: e.target.value })} //Bất cứ khi nào input thay đổi => update State với term = input
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
