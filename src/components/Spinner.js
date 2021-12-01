import React from 'react'
// import loading from './loading.gif'

const Spinner = ()=>{
        return (
            <div className="text-center">
                {/* <img src={loading} alt="loading"/> */}

                {/* OR */}
                <div className="spinner-grow text-primary mx-1" role="status"></div>
                <div className="spinner-grow text-secondary mx-1" role="status"></div>
                <div className="spinner-grow text-success mx-1" role="status"></div>
                <div className="spinner-grow text-danger mx-1" role="status"></div>
                <div className="spinner-grow text-warning mx-1" role="status"></div>
                <div className="spinner-grow text-dark mx-1" role="status"></div>
            </div>
        )
}

export default Spinner