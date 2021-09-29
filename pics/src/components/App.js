import React from "react";
import unsplash from "../api/unsplash"; //Fetch APT
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  //dùng async await thay .then() promise
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    //console.log(response.data.results);
    this.setState({ images: response.data.results }); //lỗi this => dùng arrow vào async
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
