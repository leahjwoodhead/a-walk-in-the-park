import React, { Component, Fragment } from "react";
import Talk from "talkjs";
import firebase from "firebase/app";
import { AuthContext } from "../Authentication";

class Messages extends Component {
  static contextType = AuthContext;
  state = {
    id: "grandpajoe",
    name: "Joe Bucket",
    role: "Member",
    photoUrl:
      "https://static.wikia.nocookie.net/roalddahl/images/b/b9/Illmannered.jpg/revision/latest/top-crop/width/360/height/450?cb=20140911174536"
  };

  componentDidMount() {
    let user = firebase.auth().currentUser;
    console.log(user);
    this.setState({ id: "charlotte" });
    console.log(this.state);
    Talk.ready
      .then(() => {
        const me = new Talk.User(this.state);

        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: "tP8HPC7p",
            me: me
          });
        }

        this.inbox = window.talkSession.createInbox();
        this.inbox.mount(this.container);
      })
      .catch((e) => console.error(e));
  }

  render() {
    console.log(this.context);
    return (
      <Fragment>
        <div
          style={{ height: "500px" }}
          className='inbox-container'
          ref={(c) => (this.container = c)}
        >
          Loading...
        </div>
      </Fragment>
    );
  }
}

export default Messages;
