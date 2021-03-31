import React from "react";

export const SinglePost = (props) => {
    return (
        <div className="blog_card">
            <div className="blog_card__top_side">
                <div className="blog_card__img">
                    <img src={props.data.imgSrc} alt={props.data.imgAlt}/>
                </div>
                <div className="blog_card__content">
                    <h4 className="blog_card__title">{props.data.titleText}</h4>
                    <p className="blog_card__desc">{props.data.description}</p>
                </div>
            </div>
            <div className="blog_card__bottom_part">
                <div className="blog_card__progress">
                    <div className="blog_card__colored" style={{background : props.data.statusText, width : `${props.data.progressAmount}%`}} />
                </div>
                <div className="blog_card__footer">
                    <span className="blog_card__left_text">{props.data.category}</span>
                    <span className="blog_card__right_text" style={{background : props.data.statusText}}>{props.data.statusText}</span>
                </div>
            </div>
        </div>
    )
}