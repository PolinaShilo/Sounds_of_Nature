import React from "react";
import ReactDOM from "react-dom";

 class PlayerButton extends React.Component {
    onClick () {
      window.open('localhost:3000/player');
    }

    render() {
      return (<button  onClick={(e) => this.onClick(e)}>Sign In</button>);
    }
  }
export default PlayerButton;