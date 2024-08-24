import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("parent constr");
  }

  componentDidMount() {
    //console.log("parent component didmount");
  }

  render() {
    //console.log("parent render ");
    return (
      <div>
        <h1>Namaste React</h1>
        <h1>This is a About page</h1>
        <UserClass name={"MohitC"} location={"dehradunC"} />
      </div>
    );
  }
}

export default About;
