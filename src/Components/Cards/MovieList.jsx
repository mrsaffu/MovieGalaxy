import { Fragment, useEffect, useState } from "react";
import "../StyleCss/MovieList.css";

function MovieList() {
  let [defaultMovie, setDefaultMovie] = useState([]);
  let [page, setPage] = useState(1);

  let FetchApi = async () => {
    let ApiUrl = `https://www.omdbapi.com/?s=movies&page=${page}&apikey=91b78565`;
    let response = await fetch(ApiUrl);
    // console.log(response);
    let data = await response.json();
    console.log(data);
    setDefaultMovie(data.Search);
    // setPage(page)
  };
  console.log(defaultMovie);

  useEffect(() => {
    FetchApi();
  }, [page]);

  return (
    <>
      <div className="MovieList">
        <h1 style={{ color: "red" }}>Movie List</h1>
        <br />
        <h1 style={{ color: "red" }}> Page {page}</h1>
        {/* <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button id="searchButton">
            <img
              src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
              alt="Search"
            />
          </button>
        </div> */}
      </div>

      <section className="Dmcont">
        {defaultMovie.map((m) => {
          return (
            <Fragment key={m.imdbID}>
              <div className="card">
                <img src={m.Poster} alt="" />
                <h4>{m.Title}</h4>
                <div>
                  <p>Year : {m.Year}</p>
                  <p> Type : {m.Type}</p>
                </div>{" "}
              </div>
            </Fragment>
          );
        })}
      </section>

      <div className="box5">
        <button
          onClick={() => {
            setPage((page)=>{
              return page-=1;
            });
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setPage((page) => {
              return (page += 1);
            });
            console.log(page);
            console.log("on click");
          }}
        >
          Next 
        </button>
      </div>
    </>
  );
}

export default MovieList;
