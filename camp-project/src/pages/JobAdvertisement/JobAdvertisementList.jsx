import React, { useState, useEffect } from "react";
import { Table, Header, Menu, Icon } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);
  const handleaddToJobAdvertisement= (jobAdvertisement) => {
    dispatch(AddToJobAdvertisement(jobAdvertisement));
    toast.success(`${jobAdvertisement.description} iş ilanı eklendi!`)
  };
  return (
    <div>
      
      <Header as="h2">İŞ İLANLARI</Header>
      <Table celled textAlign="center" inverted >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Descriptions</Table.HeaderCell>
            <Table.HeaderCell>Open Positions</Table.HeaderCell>
            <Table.HeaderCell>Minimum Salary</Table.HeaderCell>
            <Table.HeaderCell>Maximum Salary</Table.HeaderCell>
            <Table.HeaderCell>Application Deadline</Table.HeaderCell>
            <Table.HeaderCell>Is Active</Table.HeaderCell>
            <Table.HeaderCell>Release Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            {jobAdvertisements.map((jobAdvertisement) => (
              <Table.Row key={jobAdvertisement.id}>
                <Table.Cell>
                  <Link
                    to={`/jobAdvertisements/${jobAdvertisement.description}`}
                  ></Link>
                </Table.Cell>
                <Table.Cell>{jobAdvertisement.openPositions}</Table.Cell>
                <Table.Cell>{jobAdvertisement.minimumSalary}</Table.Cell>
                <Table.Cell>{jobAdvertisement.maximumSalary}</Table.Cell>
                <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
                <Table.Cell>{jobAdvertisement.isActive}</Table.Cell>
                <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>
                <Table.Cell>
                <Button onClick={()=>handleaddToJobAdvertisement(jobAdvertisement)}>iŞ İLANI EKLE</Button>
              </Table.Cell>
              </Table.Row>
            ))}
          </Table.Row>
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
