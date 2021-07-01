import React from "react";
import JobTitleList from "../pages/JobTitle/JobTitleList";
import JobAdvertisementList from "../pages/JobAdvertisement/JobAdvertisementList";
import { Route } from 'react-router-dom'
import JobAdvertisementAdd from "../pages/JobAdvertisement/JobAdvertisementAdd";

import { Grid} from "semantic-ui-react";
import EmployerList from "../pages/Employer/EmployerList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={5}>
            <JobTitleList />
          </Grid.Column>
          <Grid.Column width={11}>
            <Route exact path="/" component={JobAdvertisementList}/>
            <Route exact path="/jobTitle" component={JobTitleList}/>
            <Route exact path="/jobTitle/:title" component={JobTitleList}/>
            <Route exact path="/jobAdvertisement:description" component={JobAdvertisementList}/>
            <Route exact path="/employer" component={EmployerList}/>
            <Route exact path="/jobAdvertisement/add" component={JobAdvertisementAdd}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
