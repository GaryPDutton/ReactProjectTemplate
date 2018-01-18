import React from "react";
import {Link} from "react-router";

class HomePage extends React.Component {
  render(){
    return(
            <div className="jumbotron">
                <h1>Demo application</h1>
                <p>Cool demo application</p>
                <Link to="about" className="btn btn-primary btn-lr" >Learn more</Link>
            </div>
        );
  }
}

export default HomePage;