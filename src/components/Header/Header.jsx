import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <h1>github finder</h1>
      <div className="done-by-link">
        <p>
          by{" "}
          <a
            href="https://github.com/WeBstwr"
            target="_
                blank"
          >
            webster ifedha
          </a>
        </p>
      </div>
      <div className="search-box">
        <input type="text" placeholder="enter a username" />
        <button>Search</button>
      </div>
    </header>
  );
};

export default Header;
