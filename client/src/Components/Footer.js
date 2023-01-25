import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";


export default class Footer extends Component {
  render() {
    return (
      <>
      <div>
         &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      </div>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="/"> Изображение </Nav.Link>
                <Nav.Link href="/about"> Рама </Nav.Link>
                <Nav.Link href="/contacts"> Заголовок </Nav.Link>
                <Nav.Link href="/blog"> Цвет отпечатков </Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>


     </>
    );
  }
}
