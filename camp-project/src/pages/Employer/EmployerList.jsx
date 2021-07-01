import React, { useState, useEffect } from "react";
import { Table, Header, Menu, Icon } from "semantic-ui-react";
import EmployerService from "../../services/employerService";
import { Link } from "react-router-dom";
export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);
  return (
    <div>
      <Header as="h2">İŞ VERENLER</Header>
      <Table celled textAlign="center" inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>WebAddress</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {employers.map((employer) => (
            <Table.Row key={employer.id}>
              <Table.Cell>
                <Link to={`/employers/${employer.companyName}`}></Link>
              </Table.Cell>
              <Table.Cell singleLine>{employer.webAddress}</Table.Cell>
              <Table.Cell singleLine>{employer.phoneNumber}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
