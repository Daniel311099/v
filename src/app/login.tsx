import { signIn } from "next-auth/react";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     await signIn("credentials", {
//       redirect: false,
//       username,
//       password
//     });
//   };

  return (
    <div>
      <h1>Login</h1>
      <form 
    //   onSubmit={handleSubmit}
      >
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
