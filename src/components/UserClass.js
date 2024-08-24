import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log("child constru");

    this.state = {
      userInfo: "Name",
      Location: "loc",
    };
  }

  async componentDidMount() {
    //console.log("Child comp did mount");

    const data = await fetch("https://api.github.com/users/MohitKeshri");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("did update");
  }

  render() {
    //console.log("child render");
    const { name, location, avatar_url, login } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:{login}</h4>
      </div>
    );
  }
}

export default UserClass;
