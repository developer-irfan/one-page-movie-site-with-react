import React from 'react';
const MoviesPage = (props) => {
    return (
        <>
            <div className="card m-lg-6">
                <img
                    src={props.movies_img_src}
                    className="card-img-top"
                    alt="..."
                    style={{height:"300px"}}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.card_Title}</h5>
                    <p className="card-text">
                        {props.about_movie}
                    </p>
                    <a href={props.watching_Link} className="btn btn-primary">{props.btn_txt}</a>
                </div>
            </div>
        </>
    )
}
export default MoviesPage;