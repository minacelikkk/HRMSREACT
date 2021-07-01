import React, { useState ,useEffect} from "react";
import { useParams } from "react-router";
import { Button, Card, Image } from 'semantic-ui-react'
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementDetail() {
  let { description } = useParams();
  
  const [jobAdvertisement, setJobAdvertisement] = useState({});

  useEffect(()=>{
    let jobAdvertisementService = new JobAdvertisementService()
    jobAdvertisementService.getByDescription(description).then(result=>setJobAdvertisement(result.data.data))
  },[])


  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>{jobAdvertisement.description}</Card.Header>
            <Card.Meta>{jobAdvertisement.jobTitle.jobTitle}</Card.Meta>
            <Card.Meta>{jobAdvertisement.openPositions}</Card.Meta>
            <Card.Meta>{jobAdvertisement.minSalary}</Card.Meta>
            <Card.Meta>{jobAdvertisement.maxSalary}</Card.Meta>
            <Card.Meta>{jobAdvertisement.applicationDeadline}</Card.Meta>
            <Card.Meta>{jobAdvertisement.isActive}</Card.Meta>
            <Card.Meta>{jobAdvertisement.releaseDate}</Card.Meta>
            <Card.Meta>{jobAdvertisement.city.cityName}</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}