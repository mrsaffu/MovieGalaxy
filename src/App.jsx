import "./App.css";
import Card1 from "./Components/Cards/Card1.jsx";
import Footer from "./Components/Cards/Footer.jsx";
import MovieList from "./Components/Cards/MovieList.jsx";
import NavBar from "./Components/Cards/NavBar.jsx";
function App() {
  return(
    <div className="mainContainer">
    <NavBar/>
    <Card1/>
    <MovieList/>
    <Footer/>
    </div>
  )
}

export default App;
