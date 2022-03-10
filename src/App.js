// import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";

function App() {
    return (
        <>
            <h1>User</h1>

            <User
                first_name="Roby"
                last_name="Daniele"
                email="Roby@gmail.com"
                password="pass"
                confirm_password="conf_pass"
            />
        </>
    );
}

export default App;
