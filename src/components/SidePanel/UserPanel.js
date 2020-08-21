import React from "react";
import { Grid, Header, Icon, Dropdown } from "semantic-ui-react";
import { connect } from 'react-redux';
import firebase from "../../firebase";


class UserPanel extends React.Component {
  state = {
      user: this.props.currentUser
  };
  dropdownOptions = () => [
    {
      key: "user",
      text: (
        <span>
          Signed in as <strong>{this.state.user.displayName}</strong>
        </span>
      ),
      disabled: true
    },
    {
      key: "avatar",
      text: <span>Change Avatar</span>
    },
    {
      key: "signout",
      text: <span onClick={this.handleSignOut}>Sign Out</span>
    }
  ];

  handleSignOut = () => {
      firebase.auth()
              .signOut()
              .then(() => console.log('sign out'))
  }

  render() {
      
      
    return (
      <Grid style={{ background: "#4c3c4c" }}>
        <Grid.Column>
          <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
            {/* App Header */}
            <Header inverted floated="left" as="h2">
              <Icon name="code" />
              <Header.Content>DevChat</Header.Content>
            </Header>
          </Grid.Row>

          {/* User Dropdown  */}
          <Header style={{ padding: "0.25em" }} as="h4" inverted>
            <Dropdown
              trigger={<span>User</span>}
              options={this.dropdownOptions()}
            />
          </Header>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapToStateProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapToStateProps)(UserPanel);
