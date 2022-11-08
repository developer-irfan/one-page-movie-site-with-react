import React from "react";
import MoviesData from "./MoviesData";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MoviesPage from "./MoviesPage";
import Form from './Form';
const App = () => {
  return (
    <>
      <h1
        style={{ textAlign: "center", fontFamily: "arial" }}
        className="m-lg-3"
      >
        List Of Top Movies
      </h1>
      <div className="row">
        {MoviesData.map((val, index) => {
          return (
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <MoviesPage
                card_Title={val.card_Title}
                movies_img_src={val.movies_img_src}
                about_movie={val.about_movie}
                btn_txt={val.btn_txt}
                watching_Link={val.watching_Link}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default App;
