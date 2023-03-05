import React from 'react'
// STYLES
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from "./StyledNavbarMobile";

export default function NavbarMobile() {
    return (
        <ActionIconsContainerMobile style={{ background: "linear-gradient(to right top, #370528, #5f083d, #8c0950, #bb0b5e, #eb1267)", color: "black"}}>
            <MyList type="row">
NavbarMobile
            </MyList>
            
        </ActionIconsContainerMobile>
    )
}
