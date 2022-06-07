import React from "react";

export class CatFactsList extends React.Component {
  state = {
    catFacts: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://catfact.ninja/facts")
      .then((response) => response.json())
      .then((jsonData) =>
        this.setState({ catFacts: jsonData.data, loading: false })
      );
  }

  loadingIndicator = () => (this.state.loading ? <div>loading...</div> : null);
  renderCatFactData = () => {
    if (!this.state.loading) {
      if (this.state.catFacts.length > 0) {
        return this.state.catFacts.map((catFact: any) => (
          <div key={catFact.fact}>{catFact.fact}</div>
        ));
      }
    }
    return <div>No data</div>;
  };

  render() {
    return (
      <div>
        <h1>Cat Facts</h1>
        {this.loadingIndicator()}
        {this.renderCatFactData()}
      </div>
    );
  }
}
