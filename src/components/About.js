import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
        loggedInUser
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <div>
          <h1>Namaste React</h1>
          <h1>This is a About page</h1>
          <UserClass name={"MohitC"} location={"dehradunC"} />
        </div>
      </div>
    );
  }
}

export default About;
