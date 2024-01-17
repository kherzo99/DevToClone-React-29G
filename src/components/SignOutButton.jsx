export default function SignOutButton() {
  const singOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userLastName");
    localStorage.removeItem("userImg");
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <button
      onClick={() => {
        singOut();
        handleReload();
      }}
    >
      Sign Out
    </button>
  );
}
