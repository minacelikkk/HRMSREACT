import React, { useState } from 'react'
import { Menu,Container} from "semantic-ui-react";
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';
import SignedIn from"./SignedIn";
import SignedOut from"./SignedOut";

export default function Navi() {
  const {jobAdvertisementItems} = useSelector(state => state.jobAdvertisement)
  const[isAuthenticated,setIsAuthenticated]=useState(true);
  const history = useHistory()
  function handleSignOut(){
    setIsAuthenticated(false)
    history.push("/")
  }
  function handleSignIn(){
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
              {isAuthenticated?<SignedIn signOut={handleSignOut}/>
              :<SignedOut signIn={handleSignIn} bisey="1"/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
