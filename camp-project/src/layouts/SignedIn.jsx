import React from 'react'
import { Dropdown, Menu , Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item >
                <Image avatar spaced="right" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png"/>
                <Dropdown pointing="top left" text="Giriş">
                    <Dropdown.Menu>
                        <Dropdown.Item text="My Info" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out" />
                    </Dropdown.Menu>
               </Dropdown>
            </Menu.Item>
        </div>
    )
}