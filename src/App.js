import logo from "./logo.svg";
import "./App.css";
import { withFrontegg } from "./withFrontegg";
import { Link } from "react-router-dom";
import {
  Team,
  useAuth,
  useIsAuthenticated,
  UserApiTokens,
} from "@frontegg/react-auth";

function App() {
  const isAuthenticated = useIsAuthenticated();
  const { user } = useAuth();
  console.log({ authorization: `Bearer ${user?.accessToken}` });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {console.log(user)}
        {/* if user not authenticated show links to signup and login */}
        {!isAuthenticated ? (
          <>
            Sign-up to argonaut-frontegg. <br></br>
            <Link to={"/account/sign-up"}>
              <button>Sign Up</button>
            </Link>
            <br></br>
            Log-in to argonaut-frontegg.{" "}
            <Link to={"/account/login"}>
              <button>Login</button>
            </Link>
            <br></br>
          </>
        ) : (
          <></>
        )}

        {/* if user authenticated show link to logout */}
        {isAuthenticated ? (
          <>
            <Link to={"/account/logout"}>
              <button>Logout</button>
            </Link>
          </>
        ) : (
          <></>
        )}
      </header>
      {isAuthenticated && (
        <>
          <div>
            <UserApiTokens.Page />
          </div>
        </>
      )}
      {isAuthenticated && (
        <div>
          <Team.Page />
        </div>
      )}
    </div>
  );
}

export default withFrontegg(App);
