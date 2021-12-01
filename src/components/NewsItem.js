import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="card my-2">
            <span className="position-absolute badge rounded-pill bg-danger" style={{ display: 'flex', justifyContent: "center", right: '-1vh', top: '-1vh' }}>{source}</span>
            <img src={imageUrl ? imageUrl : "https://i0.wp.com/whatsupnewp.com/wp-content/uploads/2016/06/maxresdefault.jpg?fit=1920%2C1080&ssl=1"} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-success">by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsItem
