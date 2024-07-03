
import "../styles/globals.css";
import { signIn } from "next-auth/react";
// import "~/styles/login.css";

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>
                <button onClick={() => signIn("google")} className="login-button">
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
