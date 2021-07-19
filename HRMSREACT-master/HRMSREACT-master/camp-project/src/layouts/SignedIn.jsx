import React from 'react'
import { Dropdown, Menu , Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item >
                <Image avatar spaced="right" src="https://tr.wikipedia.org/wiki/Kullan%C4%B1c%C4%B1#/media/Dosya:User_icon_2.svg"/>
                <Dropdown pointing="top left" >
                    <Dropdown.Menu>
                        <Dropdown.Item text="My Info" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out" />
                    </Dropdown.Menu>
               </Dropdown>
            </Menu.Item>
        </div>
    )
}