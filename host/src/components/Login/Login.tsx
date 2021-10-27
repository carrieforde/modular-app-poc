import { useHistory } from "react-router-dom";
import { login, logout, useAuth } from "../../redux";

const Login = () => {
    const auth = useAuth();
    const history = useHistory();


    const handleLogin = () => {
        login();
        history.push("/todo")
    }

    if (!auth) {
        return <button onClick={handleLogin}>Login</button>
    }

    return <button onClick={logout}>Sign Out</button>
}

export default Login;
