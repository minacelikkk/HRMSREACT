import React from "react";
import { Input, Menu } from 'semantic-ui-react'
import { Container } from "semantic-ui-react";

export default function SideBar() {
  return (
    <div>
      <Menu inverted pointing vertical  >
        <Container>
        <Menu.Item>
          <Input icon="JobTitle" placeholder="Search JobTitle..." />
        </Menu.Item>
        </Container>
        
      </Menu>
    </div>
  );
}