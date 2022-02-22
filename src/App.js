import {Routes, BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import {Navbar, Container, Nav} from 'react-bootstrap';

import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
      <>
          <Router>
              <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Container>
                      <Navbar.Brand>React Test App</Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                      <Navbar.Collapse id="responsive-navbar-nav">
                          <Nav className="me-auto"/>
                          <Nav>
                              <NavLink className="nav-link" to="/">Home</NavLink>
                              <NavLink className="nav-link" to="/users">Users</NavLink>
                          </Nav>
                      </Navbar.Collapse>
                  </Container>
              </Navbar>
              <Container style={{marginTop: '71px'}}>
                  <Routes>
                      <Route path="/" element={<HomePage/>}/>
                      <Route path="/users" element={<UsersPage/>}/>
                      <Route path="/users/:id" element={<UserPage/>}/>
                      <Route path="*" element={<NotFoundPage/>}/>
                  </Routes>
              </Container>
          </Router>
      </>
  );
}

export default App;
