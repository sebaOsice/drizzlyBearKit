import React from "react";
import { newContextComponents } from "./newContext/src";
import logo from "./logo.png";
import fav from "./fav.png";
import bg1 from "./bg1.png";
import bg2 from "./bg2.png";
import bg3 from "./bg3.png";
import { Button, Nav, Navbar, NavItem, Form } from 'reactstrap';
import { Blockie, EthAddress } from "rimble-ui";
const FontAwesome = require('react-fontawesome');

const { ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">
      <header>
        <Nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
          <Button className="navbar-brand bg-light" href="#" >
            <img src={logo} alt="hempire" style={{ height: "2em" }} />
          </Button>
          <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Navbar className="collapse navbar-collapse" id="navbarCollapse">
            <NavItem>
              <Button className="btn btn-outline-success btn-light ml-2 my-2 my-sm-0">TUTORIALS <FontAwesome
                className='super-crazy-colors'
                name='graduation-cap'
                size='1x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              /></Button>
              <Button className="btn btn-outline-success btn-light ml-2 my-2 my-sm-0">PROJECTS <FontAwesome
                className='super-crazy-colors'
                name='rocket'
                size='1x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              /></Button>
              <Button className="btn btn-outline-success btn-light ml-2 my-2 my-sm-0">SPONSORING <FontAwesome
                className='super-crazy-colors'
                name='heart'
                size='1x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              /></Button>
            </NavItem>



            <Form className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              <Button className="btn btn-outline-success btn-light my-2 my-sm-0" type="submit">Search <FontAwesome
                className='super-crazy-colors'
                name='search'
                size='1x'
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              /></Button>
            </Form>
            <Button className="btn btn-outline-warning btn-light ml-2 my- my-sm-0">< Blockie className="col d-inline"
              opts={{
                seed: drizzleState.accounts[0],
                color: 'cyan',
                bgcolor: 'magenta',
                size: 5,
                scale: 3,
                spotcolor: 'orange'
              }}

            /><p className="col d-inline" style={{ margin: 0, padding: 0, width: "auto", marginLeft: "0.5rem", marginBottom: "1rem" }}> {drizzleState.accounts[0].slice(0, 7)} ...  {drizzleState.accounts[0].slice(38, 42)} </p></Button>
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
              <img className="bd-placeholder-img" width="100%" height="430px" src={bg1} preserveAspectRatio="xMidYMid slice" focusable="false" role="img" />
              <div className="container">
                <div className="carousel-caption text-left">
                  <h1>Edit a Number on the BlockChain</h1>
                  <div className="col-1 bg-info rounded-pill text-center d-inline-block"><h1># <ContractData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    contract="SimpleStorage"
                    method="storedData"
                  /></h1></div><div className="col-4 bg-info text-center rounded d-inline-block p-2 ml-3">

                    <ContractForm drizzle={drizzle} contract="SimpleStorage" method="set" /></div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="bd-placeholder-img" width="100%" height="430px" src={bg2} preserveAspectRatio="xMidYMid slice" focusable="false" role="img" />              <div className="container">
                <div className="carousel-caption">
                  <h1>Dynamic and Static Data on the Chain</h1>
                  <div className="section">
                    <div className="col-2 bg-info d-inline m-2">
                      <ContractData
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract="ComplexStorage"
                        method="owner"

                      />
                    </div><div className="col-2 bg-info d-inline m-2">

                      <ContractData
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract="ComplexStorage"
                        method="cntrct"

                      />
                    </div><div className="col-4 d-inline-block m-2" style={{ fontSize: "0.5em" }}>
                      <ContractData
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract="ComplexStorage"
                        method="rumbleBB"
                      />
                    </div>
                    <div className="col-4 d-inline-block m-2" style={{ fontSize: "0.5em" }}>
                      <ContractData
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract="ComplexStorage"
                        method="getStrings"
                      // methodArgs={[drizzleState.accounts[0]]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="bd-placeholder-img" width="100%" height="430px" src={bg3} preserveAspectRatio="xMidYMid slice" focusable="false" role="img" />              <div className="container">
                <div className="carousel-caption text-right">
                  <h1>You want to go decentral with your Buisiness ?!?</h1>
                  <p>Decentralized Applications socalled dApps are the undisputable Future of the digital and phiscal Industry. Blockchain Technology has revolutionized the World !</p>
                  <p><a className="btn btn-lg btn-warning" href="#https://t.me/drizzlyBearSupportDojo" role="button">T.Me <FontAwesome
                    className='super-crazy-colors'
                    name='mobile'
                    size='1x'
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                  /></a></p>
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

        <div className="container section mb-5 pb-5">
          <h2 className="btn-success rounded- p-2 col-8 text-center">drizzlyBERC20 Dancefloor is 0xOpen !</h2>
          <p>
            Everybody grab a bear and shake a lil sum to the beat ... xD
            <br /><br />
              You'll find the Smart Contract for the Tutorial Token in <i className="alert-warning">./contracts/TutorialToken.sol</i>
              Go ahead and Copy Paste and Rename the whole thing ... grab your Solidity Skillset and hack th ooops out of it !<br /><br />

              Don't forget to adjust your <i className="alert-warning">./migrations/2_deploy_contracts.js</i> , <i className="alert-warning">./app/src/drizzleOptions.js</i> and
              <i className="alert-warning">./app/src/MyComponents.js</i> ... Finally run <i className="alert-info">truffle compile</i> then <i className="alert-info">truffle migrate --reset</i>
              &nbsp;in your root dir from the console to deploy the new version of your contract to your blockchain !
            <br /><br />
            Wowzers ... drizzlyBearAlistiCaliKushPiffinDopyeah !
        </p>
          <p className="col-4 d-inline-block alert-success">
            <strong>My Balance: </strong>
            <h1 style={{ fontSize: "4em" }}><ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="TutorialToken"
              method="balanceOf"
              methodArgs={[drizzleState.accounts[0]]}
            />{" "}
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="TutorialToken"
                method="symbol"
                hideIndicator
              /></h1>
          </p>
          <p className="col-4 d-inline-block alert-info" >
            <strong>Total Supply: </strong>
            <h1 style={{ fontSize: "4em" }}><ContractData
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
              /></h1>
          </p>
          <p className="col-4 d-inline-block">
            <h3>Send Tokens</h3>
            <ContractForm
              drizzle={drizzle}
              contract="TutorialToken"
              method="transfer"
              labels={["To Address", "Amount to Send"]}
            /></p>
        </div>



        <div class="container marketing">


          <div class="row">
            <div class="col-lg-4" style={{ textAlign: "center" }}>
              <img class="bd-placeholder-img rounded-circle" width="140" height="140" src={fav} preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140" />
              <h2>ANONYMOUS</h2>
              <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
              <p><a class="btn btn-danger" href="#" role="button">View details »</a></p>
            </div>
            <div class="col-lg-4" style={{ textAlign: "center" }}>
              <img class="bd-placeholder-img rounded-circle" width="140" height="140" src={fav} preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140" />
              <h2>DECENTRAL</h2>
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
              <p><a class="btn btn-warning" href="#" role="button">View details »</a></p>
            </div>
            <div class="col-lg-4" style={{ textAlign: "center" }}>
              <img class="bd-placeholder-img rounded-circle" width="140" height="140" src={fav} preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140" />
              <h2>AUTONOMOUS</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><a class="btn btn-success" href="#" role="button">View details »</a></p>
            </div>
          </div>

          <hr class="featurette-divider" />

          <div className="container section mb-5 pb-5">
            <h2>I think my Drizzly's going all Nifty !</h2>
            <p>
              Explore the Endless possibilities of ERC721 or socalled NFT's Non Fungible Tokens in this Sandbox
              Same as above copy and paste the oops out of the <i className="alert-warning">./contracts/NFToken.sol</i> you know the rest ... So pick up a shovel if you wanna get dirty o0 <br /><br />
            Jump right in !
        </p>
            <p className="col-4 d-inline-block">

              <strong>My Collectibles : <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="NFToken"
                method="totalSupply"


              /> cllc</strong>
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="NFToken"
                method="getTypes"
              />
            </p>
            <p className="col-4 d-inline-block">
              <strong>All Collectibles : <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="NFToken"
                method="balanceOf"
                methodArgs={[drizzleState.accounts[0]]}

              /> cllc</strong>
              <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract="NFToken"
                method="ownerTokens"
                methodArgs={[drizzleState.accounts[0]]}


              />
            </p>


            <h3>Mint Tokens</h3>
            <ContractForm
              drizzle={drizzle}
              contract="NFToken"
              method="mintGovTokenStock"
              labels={["To Address", "Token Data"]}
            />
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
              <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div class="col-md-5">
              <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
              <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div class="col-md-5 order-md-1">
              <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
              <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div class="col-md-5">
              <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
            </div>
          </div>

          <hr class="featurette-divider" />



        </div>
        <footer className="container">
          <p className="float-right"><a href="#">Back to top</a></p>
          <p>© 2020-2024 HEMPIRE DAO · <a href="#">The Green Paper</a> · <a href="#">Grow'd'Map</a> · <a href="#">Support</a></p>
        </footer>
      </main>
    </div >
  );
};
