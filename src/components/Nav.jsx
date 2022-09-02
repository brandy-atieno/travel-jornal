import React, {useState} from 'react'
import {
  MDBNavbar,
  MDBContainer,
 
  MDBNavbarBrand,

} from 'mdb-react-ui-kit';
  const Nav = () => {
 
   
    //      </div>
    return(
    <>
    <MDBNavbar expand='lg' dark bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>BRANDY ADVENTURES</MDBNavbarBrand>
         
         </MDBContainer>
      </MDBNavbar>

    </>
  )
}

export default Nav