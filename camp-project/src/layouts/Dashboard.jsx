import React from "react";
import JobTitleList from "../pages/JobTitle/JobTitleList";
import JobAdvertisementList from "../pages/JobAdvertisement/JobAdvertisementList";
import { Route } from 'react-router-dom'
import JobAdvertisementAdd from "../pages/JobAdvertisement/JobAdvertisementAdd";
import { ToastContainer } from "react-toastify";
import { Grid} from "semantic-ui-react";
import EmployerList from "../pages/Employer/EmployerList";

export default function Dashboard() {
  return (
    <div>
     <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
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
