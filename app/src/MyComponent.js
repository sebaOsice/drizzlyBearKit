import React from "react";
import { newContextComponents } from "./newContext/src";
import logo from "./logo.png";
import { Button, Nav, Navbar, NavItem, Form } from 'reactstrap';
import { Blockie, EthAddress } from "rimble-ui";

const { AccountData, ContractData, ContractForm, LoadingContainer } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">
      <header>
        <Nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <Button className="navbar-brand bg-dark" href="#" >
            <img src={logo} alt="hempire" style={{ height: "2em" }} />
          </Button>
          <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Navbar className="collapse navbar-collapse" id="navbarCollapse">
            <NavItem>
              <Button className="btn btn-outline-success ml-2 my-2 my-sm-0">STRAIN MARKET</Button>
              <Button className="btn btn-outline-success ml-2 my-2 my-sm-0">ASSET EXCHANGE</Button>
            </NavItem>



            <Form className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
            </Form>
            <Button className="btn btn-outline-warning ml-2 my-2 my-sm-0">< Blockie
              opts={{
                seed: drizzleState.accounts[0],

                size: 16,
                scale: 1,

              }}
            /> {drizzleState.accounts[0].slice(0, 7)} ...  {drizzleState.accounts[0].slice(38, 42)}</Button>
          </Navbar>
        </Nav>
      </header>
      <main role="main">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1" className=""></li>
            <li data-target="#myCarousel" data-slide-to="2" className=""></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <svg className="bd-placeholder-img" width="100%" height="330px" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"></rect></svg>
              <div className="container">
                <div className="carousel-caption text-left">
                  <h1>Example headline.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="330px" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"></rect></svg>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="330px" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"></rect></svg>
              <div className="container">
                <div className="carousel-caption text-right">
                  <h1>One more for good measure.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="section">
          <h2>SimpleStorage</h2>
          <p>
            This shows a simple ContractData component with no arguments, along
            with a form to set its value.
        </p>
          <p>
            <strong>Stored Value: </strong>
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="SimpleStorage"
              method="storedData"
            />
          </p>
          <ContractForm drizzle={drizzle} contract="SimpleStorage" method="set" />
        </div>

        <div className="section">
          <h2>TutorialToken</h2>
          <p>
            Here we have a form with custom, friendly labels. Also note the token
            symbol will not display a loading indicator. We've suppressed it with
          the <code>hideIndicator</code> prop because we know this variable is
          constant.
        </p>
          <p>
            <strong>Total Supply: </strong>
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="TutorialToken"
              method="totalSupply"
              methodArgs={[{ from: drizzleState.accounts[0] }]}
            />{" "}
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="TutorialToken"
              method="symbol"
              hideIndicator
            />
          </p>
          <p>
            <strong>My Balance: </strong>
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="TutorialToken"
              method="balanceOf"
              methodArgs={[drizzleState.accounts[0]]}
            />
          </p>
          <h3>Send Tokens</h3>
          <ContractForm
            drizzle={drizzle}
            contract="TutorialToken"
            method="transfer"
            labels={["To Address", "Amount to Send"]}
          />
        </div>

        <div className="section">
          <h2>ComplexStorage</h2>
          <p>
            Finally this contract shows data types with additional considerations.
            Note in the code the strings below are converted from bytes to UTF-8
            strings and the device data struct is iterated as a list.
        </p>
          <p>
            <strong>String 1: </strong>
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="ComplexStorage"
              method="string1"
              toUtf8
            />
          </p>
          <p>
            <strong>String 2: </strong>
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="ComplexStorage"
              method="string2"
              toUtf8
            />
          </p>
          <strong>Single Device Data: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="ComplexStorage"
            method="singleDD"
          />
        </div>
        <footer className="container">
          <p className="float-right"><a href="#">Back to top</a></p>
          <p>© 2020-2024 HEMPIRE DAO · <a href="#">The Green Paper</a> · <a href="#">Grow'd'Map</a> · <a href="#">Support</a></p>
        </footer>
      </main>
    </div>
  );
};
