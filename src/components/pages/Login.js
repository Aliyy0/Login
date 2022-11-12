import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/UserContex";
import toast from "react-hot-toast";
export default function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const gay = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  console.log(typeof data);
  const KullaniciGiris = (e) => {
    e.preventDefault();
    const us = localStorage.getItem("username");
    const pass = localStorage.getItem("password");
    if (us == UserName && pass == password) {
      toast.success("Giriş Başarılı");
      setUser(true);
      navigate("/");
    } else {
      toast.error("Giriş Hatalı");
    }
    /*gay?.map((user) => {
      if (user?.username == UserName && user.password == password) {
        console.log("Giriş Başarılı");
      } else {
        console.log("Giriş Başarısız amk");
      }
    });*/
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
      <h1>Login</h1>
      <br />
      <br />
      <br />
      <form style={{ textAlign: "center" }} onSubmit={KullaniciGiris}>
        <input
          placeholder="cu"
          type="Text"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br /> <br /> <br /> <br /> <br />
        <input
          placeholder="cu1"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br /> <br /> <br /> <br />
        <button type="submit">Login</button>
      </form>
      <hr />
      <br />
      <NavLink to="/register"> Register </NavLink>
    </div>
  );
}
