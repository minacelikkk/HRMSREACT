import React from "react";
import { Input, Menu } from 'semantic-ui-react'
import { Container } from "semantic-ui-react";

export default function SideBar() {
  return (
    <div>
      <Menu inverted pointing vertical  >
        <Container>
        <Menu.Item name="JobAdvertisement">
          <a href="../pages/JobAdvertisement/JobAdvertisementList.jsx">JobAdvertisement</a>
        </Menu.Item>

        <Menu.Item name="Employer">
          
        <a href="../pages/Employer/EmployerList.jsx">Employer</a>
        </Menu.Item>

        <Menu.Item name="Employees">
          
        <a href="../pages/Employee/EmployeeList.jsx">Employee</a>
        </Menu.Item>
        <Menu.Item>
          <Input icon="JobTitle" placeholder="Search title..." />
        </Menu.Item>
        </Container>
        
      </Menu>
    </div>
  );
}