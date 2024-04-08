import React from 'react';

const NewsItem = (props) => {
    return (
        <div className={"row rowItem box"}>
            <div className={"col-lg-4 box"}>
                <p className='title'>Company name: <p className='text'>{props.company.name}</p></p>
            </div>
            <div className={"col-lg-4 box "}>
                <p className='title'>Email: <p className='text'>{props.company.email}</p></p>

            </div>
            <div className={"col-lg-4  box"}>
            <p className='title'>Snifim: </p>
            </div>
        </div>
    );
};

export default NewsItem;