import "../StyleCss/NavBar.css";
import appLogo from "../../assets/movieLogo.png"
function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img className='Logo' src={appLogo} alt="marvelLogo" />
          {/* <h1>MovieGelexy</h1> */}
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Movies</a>
          <a href="#">TV Shows</a>
          <a href="#">Characters</a>
          <a href="#">About</a>
        </div>
        {/* <div className="search-container">
          <input type="text" placeholder="Search..." id="movieInput">
          <button id="searchButton"><img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="Search"></button>
      </div> */}
      </div>
    </>
  );
}
export default NavBar;
