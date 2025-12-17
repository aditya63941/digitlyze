export default function Topbar() {
  return (
    <header className="topbar">
      <span>Admin Panel</span>
      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </header>
  );
}
