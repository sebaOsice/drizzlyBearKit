import React, { Component } from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem } from "reactstrap";
const FontAwesome = require('react-fontawesome');

class ContractData extends Component {
  constructor(props) {
    super(props);

    // Fetch initial value from chain and return cache key for reactive updates.
    var methodArgs = this.props.methodArgs ? this.props.methodArgs : [];

    this.contracts = props.drizzle.contracts;
    this.state = {
      dataKey: this.contracts[this.props.contract].methods[
        this.props.method
      ].cacheCall(...methodArgs),
    };
  }

  // TODO refactor this
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { methodArgs, contract, method } = this.props;

    const didContractChange = contract !== nextProps.contract;
    const didMethodChange = method !== nextProps.method;
    const didArgsChange =
      JSON.stringify(methodArgs) !== JSON.stringify(nextProps.methodArgs);

    if (didContractChange || didMethodChange || didArgsChange) {
      this.setState({
        dataKey: this.contracts[nextProps.contract].methods[
          nextProps.method
        ].cacheCall(...nextProps.methodArgs),
      });
    }
  }

  render() {
    const { drizzle, drizzleState } = this.props;

    // Contract is not yet intialized.
    if (!drizzleState.contracts[this.props.contract].initialized) {
      return <span>Initializing...</span>;
    }

    // If the cache key we received earlier isn't in the store yet; the initial value is still being fetched.
    if (
      !(
        this.state.dataKey in
        drizzleState.contracts[this.props.contract][this.props.method]
      )
    ) {
      return <span>Fetching...</span>;
    }

    // Show a loading spinner for future updates.
    var pendingSpinner = drizzleState.contracts[this.props.contract].synced
      ? ""
      : " 🔄";

    // Optionally hide loading spinner (EX: ERC20 token symbol).
    if (this.props.hideIndicator) {
      pendingSpinner = "";
    }

    var displayData =
      drizzleState.contracts[this.props.contract][this.props.method][
        this.state.dataKey
      ].value;

    // Optionally convert to UTF8
    if (this.props.toUtf8) {
      displayData = drizzle.web3.utils.hexToUtf8(displayData);
    }

    // Optionally convert to Ascii
    if (this.props.toAscii) {
      displayData = drizzle.web3.utils.hexToAscii(displayData);
    }

    // If a render prop is given, have displayData rendered from that component
    if (this.props.render) {
      return this.props.render(displayData);
    }

    // If return value is an array
    if (Array.isArray(displayData)) {
      const displayListItems = displayData.map((datum, index) => {
        return (
          <ListGroupItem key={index} className="m-0 p-1 bg-none w-100">
            {
              <div>
                <div className="col-6 d-inline-block" style={{ fontWeight: 900, color: "tomato" }}> {datum[3]}</div>
                <div className="col-6 d-inline-block" style={{ textAlign: "right" }}> {datum[2]} </div>
                <div className=" d-inline-block col-10"> {datum[4]}</div>
                <div className="btn d-inline-block col-1"><FontAwesome
                  className='super-crazy-colors'
                  name='heart-o'
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
                </div><div className="d-inline-block col-1">{datum[5]}</div>
              </div>}
            {pendingSpinner}
          </ListGroupItem>
        );
      });

      return <ListGroup className="m-1 p-1 bg-none autoformatted">{displayListItems}</ListGroup>;
    }

    // If retun value is an object
    if (typeof displayData === "object") {
      var i = 0;
      const displayObjectProps = [];

      Object.keys(displayData).forEach(key => {
        if (i !== key) {
          displayObjectProps.push(
            <ListGroupItem key={i} className="m-0 p-1 bg-none w-100">
              <strong>{key}</strong>
              {pendingSpinner}
              <br />
              {`${displayData[key]}`}
            </ListGroupItem>
          );
        }

        i++;
      });

      return <ListGroup className="m-1 p-1 bg-none">{displayObjectProps}</ListGroup>;
    }

    return (
      <span>
        {`${displayData}`}
        {pendingSpinner}
      </span>
    );
  }
}

ContractData.propTypes = {
  drizzle: PropTypes.object.isRequired,
  drizzleState: PropTypes.object.isRequired,
  contract: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  methodArgs: PropTypes.array,
  hideIndicator: PropTypes.bool,
  toUtf8: PropTypes.bool,
  toAscii: PropTypes.bool,
  render: PropTypes.func,
};

export default ContractData;
