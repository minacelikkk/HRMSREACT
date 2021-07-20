import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { Table, Header, Menu, Icon,Button } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";

export default function JobAdvertisementConfirm() {
    let jobAdvertisementService=new JobAdvertisementService();
    const [jobAdvertisements, setJobAdvertisements] = useState([])
    useEffect(() => {
        jobAdvertisementService.getJobAdvertisements().then(result=>setJobAdvertisements(result.data.data))
    },[jobAdvertisements])
       const handleConfirm=(jobAdvertisementId)=>{
           let employeeId=1
           const values={
               employeeId,
               jobAdvertisementId
           }
           jobAdvertisementService.JobAdvertisementConfirm(values).then((result) => console.log(result.data.data))
           toast.success(`${jobAdvertisementId} İş ilanı geçerli`)

       };

     return (
    <div>
      <Header as="h2">İŞ İLANLARI ONAY</Header>
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
                                    <Button as={Link} to={`/jobAdvertisement/${jobAdvertisement.jobAdvertisementId}`}
                                        content="Show Details"
                                        icon="right arrow"
                                        labelPosition="right"
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    {jobAdvertisement.confirmed ?
                                        <Button
                                            color="grey"
                                            content="Confirmed"
                                            icon="check"
                                            labelPosition="right"
                                        />
                                        :
                                        <Button onClick={() => handleConfirm(jobAdvertisement.jobAdvertisementId)}
                                            color="green"
                                            content="Confirm"
                                            icon="check"
                                            labelPosition="right"
                                        />
                                    }</Table.Cell>
                            </Table.Row>
                        ))
                    }
          </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
                </Table>
        </div >
    )
}