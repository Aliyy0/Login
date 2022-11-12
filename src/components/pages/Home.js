import { useAuth } from "../../context/UserContex";

export default function Home() {
  const { user } = useAuth();
  const a = localStorage.getItem("username");
  return (
    <div>
      Giriş başarılı React deneme "SBB-01"{" "}
      {user ? <bold>HOŞ GELDİN {a}</bold> : <bold>Kullancı yok</bold>}
      <br />
      <i>"Ali & Mustafa"</i>
    </div>
  );
}
