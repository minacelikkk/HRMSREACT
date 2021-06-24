import React from "react";
import JobTitleList from "../pages/JobTitleList";
import JobAdvertisementList from "../pages/JobAdvertisementList";

import { Grid } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={5}>
            <JobTitleList />
          </Grid.Column>
          <Grid.Column width={11}>
            <JobAdvertisementList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
