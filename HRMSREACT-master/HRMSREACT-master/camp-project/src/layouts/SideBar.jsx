import React from "react";
import { Input, Label, Menu } from 'semantic-ui-react'
import { Container } from "semantic-ui-react";

export default function SideBar() {
  return (
    <div>
      <Menu inverted pointing vertical  >
        <Container>
        <Menu.Item name="inbox">
          <Label color="teal">0</Label>
          Inbox
        </Menu.Item>

        <Menu.Item name="spam">
          <Label>0</Label>
          Spam
        </Menu.Item>

        <Menu.Item name="updates">
          <Label>0</Label>
          Updates
        </Menu.Item>
        <Menu.Item>
          <Input icon="search" placeholder="Search mail..." />
        </Menu.Item>
        </Container>
        
      </Menu>
    </div>
  );
}
