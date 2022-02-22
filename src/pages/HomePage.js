import Error from "../components/Error";
import {NavLink} from "react-router-dom";
import {Nav} from "react-bootstrap";

function HomePage() {
  return (
      <Error>
          <div>
              Home Page
              <hr/>
          </div>
          <div style={{fontSize: '16px'}}>
              <Nav>
                  <NavLink className="nav-link" to="/">Home</NavLink>
                  <NavLink className="nav-link" to="/users">Users</NavLink>
              </Nav>
          </div>
      </Error>
  );
}

export default HomePage;
