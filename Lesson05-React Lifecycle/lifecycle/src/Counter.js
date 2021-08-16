import React, { Component } from "react";
import "./CounterStyle.css";

export default class Counter extends Component {
  // rconst
  constructor(props) {
    super(props);

    this.state = {
      name: "Emre",
      count: 0,
    };
    console.log("1-Constructor line");
  }
  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps:", state);
    return null;
  }
  shouldComponentUpdate() {
    console.log("Schould Update  (true  value is given!)");
    return true;
    //return false //countu update eder ama ekranda counter in degerini degistirmez. ama databese de artis olur
  }
  componentDidMount = () => {
    // (Ekranin geldigi anda, "componentDidMount" metodu calisiyor, cunku lifecycle da en son sirada (mounting asamasinda))'
    console.log("3-Component mounted....");
  };
  componentDidUpdate = () => {
    console.log("Updated");
  };
  getSnapshotBeforeUpdate(prevprops, prevstate) {
    console.log("Snapshot", prevstate);
    return null;
  }
  componentWillUnmount() {
    console.log("Will unmount Bye!");
  }
  render() {
    console.log("2-Render line");
    return (
      <div className="container">
        <p>Counter:{this.state.count} </p>
        <button onClick={() => this.increase()}>Increase</button>
        <button onClick={()=> this.componentWillUnmount()}>Close</button>
      </div>
    );
  }
}
