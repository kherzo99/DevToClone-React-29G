export default function SignOutButton() {
  const singOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userLastName");
    localStorage.removeItem("userImg");
  };
  return <button onClick={() => singOut()}>Sign Out</button>;
}
