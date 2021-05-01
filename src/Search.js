import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input
            style={{ width: "400px" }}
            type="text"
            onChange={(e) => {
              this.setState({ term: e.target.value });
              this.props.onInputChange(e.target.value);
            }}
            placeholder="Search Users..."
            value={this.state.term}
          />
          <i class="search icon"></i>
        </div>
      </div>
    );
  }
}

export default SearchBar;
