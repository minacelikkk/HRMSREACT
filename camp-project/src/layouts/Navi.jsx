import React from "react";
import { Menu } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import SignedIn from"./SignedIn";
import SignedOut from"./SignedOut";
export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            <Menu.Item>
              <SignedIn/>
              <SignedOut/>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
