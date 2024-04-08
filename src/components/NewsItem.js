import React, {useState} from 'react';

const NewsItem = (props) => {
    const [addresses,setAddresses] = useState(props.company.addresses||[])

    return (
        <div className={"row rowItem box text-center"}>
            <div className={"col-lg-4 box"}>
                <p className='title'>Company name: <p className='text'>{props.company.name}</p></p>
                <p className='country'>{props.company.country}</p>
            </div>
            <div className={"col-lg-4 box "}>
                <p className='title'>Email: <p className='text'>{props.company.email}</p></p>

            </div>
            <div className="col-lg-4 box">
                <p className="title">Addresses:</p>
                {addresses.map((address) => (
                    <p key={address.id} className="text">
                        {address.streetName + "  "}
                        {address.zipcode}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default NewsItem;