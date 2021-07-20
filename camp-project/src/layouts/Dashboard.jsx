import React from "react";
import JobTitleList from "../pages/JobTitle/JobTitleList";
import JobAdvertisementList from "../pages/JobAdvertisement/JobAdvertisementList";
import { Route } from 'react-router-dom'
import JobAdvertisementAdd from "../pages/JobAdvertisement/JobAdvertisementAdd";
import { ToastContainer } from "react-toastify";
import { Grid} from "semantic-ui-react";
import EmployerList from "../pages/Employer/EmployerList";
import SideBar from "../layouts/SideBar";
import jobAdvertisementConfirm from "../pages/JobAdvertisement/JobAdvertisementConfirm";


export default function Dashboard() {
  return (
    <div>
     <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <SideBar />
            
          </Grid.Column>
          <Grid.Column width={10}>
            <Route exact path="/" component={JobAdvertisementList}/>
            <Route exact path="/jobTitle" component={JobTitleList}/>
            <Route exact path="/jobTitle/:title" component={JobTitleList}/>
            <Route exact path="/jobAdvertisement:description" component={JobAdvertisementList}/>
            <Route exact path="/employer" component={EmployerList}/>
            <Route exact path="/jobAdvertisement/add" component={JobAdvertisementAdd}/>
            <Route exact path="/jobAdvertisementConfirm" component={jobAdvertisementConfirm}/>


          </Grid.Column>
       
          
        </Grid.Row>
      </Grid>
    </div>
  );
}