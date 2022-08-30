import React from 'react'
import { MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  const Nav = () => {
  return (
    <div className='nav'>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>BRANDY ADVENTURES</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

         </div>
  )
}

export default Nav