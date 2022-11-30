import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      {props.isAuth ? (
        <div>
          <div>
            <h1> {props.login} </h1>
          </div>
          <div>
            <h1> {props.email} </h1>
          </div>
          <button onClick={props.logout}>logout</button>
        </div>
      ) : (
        <Link to="/Login">Login</Link>
      )}
      <Link to="/">Profile</Link>
      <Link to="/Users">Users</Link>
    </div>
  );
};

export default Header;