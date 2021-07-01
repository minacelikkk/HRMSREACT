import React, { useState, useEffect } from "react";
import { Table, Header, Menu, Icon } from "semantic-ui-react";
import JobTitleService from "../../services/jobTitleService";
import { Link } from "react-router-dom";
export default function JobTitleList() {
  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getJobTitles()
      .then((result) => setJobTitles(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2">İŞ POZİSYONLARI</Header>
      <Table celled  textAlign="center" inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title Id</Table.HeaderCell>
            <Table.HeaderCell>Title </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {jobTitles.map((jobTitle) => (
            <Table.Row key={jobTitle.id}>
              <Table.Cell>
                <Link to={`/jobTitle/${jobTitle.title}`}></Link>
              </Table.Cell>
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
