import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Navigation.css"

function Navigation() {
//  const [search, setSearch] = useState("")

  // const searchInput = document.querySelector("[data-search]");
  // searchInput.addEventListener("input", e => {
  //   const value = e.target.value;
  //   console.log(value);

  // })
  return (
    // <Container>
      <Navbar expand="lg" >
        <Container>
          <Navbar.Brand href="#">Gong</Navbar.Brand>
        </Container>
        {/* <input type="text" value={search} data-search onChange={(e) => setSearch(e.target.value)} /> */}
      </Navbar>
    // </Container>
  );
}

export default Navigation;