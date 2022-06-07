import React from "react";

export default class CatBreedList extends React.Component {
  state = {
    breed: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://catfact.ninja/breeds")
      .then((response) => response.json())
      .then((jsonData: any) => {
        this.setState({ breed: jsonData.data, loading: false });
      });
  }

  loadingIndicator = () => (this.state.loading ? <div>loading...</div> : null);
  renderCatBreedData = () => {
    if (!this.state.loading) {
      if (this.state.breed.length > 0) {
        return this.state.breed.map((breedData: any) => {
          return (
            <div style={{ display: "flex" }} key={breedData.breed}>
              <div>{breedData.breed}</div>
              <div>{breedData.country}</div>
              <div>{breedData.origin}</div>
              <div>{breedData.coat}</div>
              <div>{breedData.pattern}</div>
            </div>
          );
        });
      }
    }
    return <div>No data</div>;
  };

  render() {
    return (
      <div>
        <h1>Cat Breed Information</h1>
        {this.loadingIndicator()}
        {this.renderCatBreedData()}
      </div>
    );
  }
}
