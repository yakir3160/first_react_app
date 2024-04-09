import React, {useState} from 'react';
import Backdrop from "bootstrap/js/src/util/backdrop";

const NewsItem = (props) => {
    const [addresses,setAddresses] = useState([])

    return (
        <div className={"row rowItem box "}>
            <div className={"col-lg-4 box"}>
                <p className='title'>{props.company.name}</p>
                <p><span className={"fw-bold"}>Company email:</span> {props.company.email}</p>
                <p className='country'>{props.company.country}</p>
            </div>
            <div className={"col-lg-4 box "}>
                <p className='title'>Contact representative:</p>
                <h4 className={"icons"}>
                    <i className={"fa fa-user man"}></i>
                </h4>

                <p><span
                    className={"fw-bold"}>Name:</span> {props.company.contact.firstname} {props.company.contact.lastname}
                </p>
                <p><span className={"fw-bold"}>Email:</span> {props.company.contact.email}</p>
                <p><span className={"fw-bold"}>Phone:</span> {props.company.contact.phone}</p>


            </div>
            <div className="col-lg-4 box">
                <p className="title">Addresses:</p>
                {props.company.addresses.map((address) => (
                    <div className={"address"}>
                        <p key={address.id} className="text">
                            <span className={"fw-bold city"}>{address.city + "  "} </span>
                            {address.street}
                        </p>
                    </div>
                ))}
            </div>
        </div>
                    );
                };

export default NewsItem;