import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Register() {
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const randomId = Math.floor(Math.random() * 100000);
  const navigate = useNavigate();
  const gay = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  const KullaniciOlustur = (e) => {
    e.preventDefault();
    localStorage.setItem("username", UserName);
    localStorage.setItem("password", password);
    /*localStorage.setItem(
      "users",
      JSON.stringify([
        ...gay,
        { id: randomId, username: UserName, password: password }
      ])
    );*/
    navigate("/login");
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h1>Register</h1>
      <br />
      <br />
      <br />
      <form style={{ textAlign: "center" }} onSubmit={KullaniciOlustur}>
        <input
          placeholder="UserName"
          type="Text"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br /> <br /> <br /> <br /> <br />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br /> <br /> <br /> <br />
        <button type="submit">Register</button>
      </form>
      <hr />
      <br />
      <NavLink to="/login"> Login </NavLink>
    </div>
  );
}
