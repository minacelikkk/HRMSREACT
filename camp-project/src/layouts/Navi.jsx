import React, { useState } from 'react'
import { Menu,Container} from "semantic-ui-react";
import { NavLink, useHistory } from 'react-router-dom'
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
        <Menu.Item as={NavLink} to="/" name='HRMS'/>
        <Menu.Item as={NavLink} to="/" name='İş Ara'/>
        <Menu.Item as={NavLink} to="/" name='Profil'/>
        <Menu.Item as={NavLink} to="/" name='Özgeçmişler'/>
                    
          <Menu.Menu position="right">
              {isAuthenticated?<SignedIn signOut={handleSignOut}/>
              :<SignedOut signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
