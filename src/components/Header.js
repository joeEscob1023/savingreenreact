import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <div className="row">
              <div className="col-4 col-sm-3 col-md-2 align-self-center">
                <i className="fa fa-money fa-5x header-logo" />
              </div>
              <div className="col">
                <h1>Savin Green</h1>
                <h2>Start tracking your expenses and saving your money!</h2>
              </div>
              <div className="col-md-4 col-xl-2 mt-4">
                <a role="button" href="/" className="btn btn-lg btn-success">
                  Try It Out!
                </a>
              </div>
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
