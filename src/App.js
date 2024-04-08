import React, {useState} from 'react'
import {toast, ToastContainer} from 'react-toastify'
import NewsItem from "./components/NewsItem";
import axios from "axios";

const App = () => {
    const [companies,setCompanies] = useState([])

    const handleClick = async() => {
        await axios.get("https://fakerapi.it/api/v1/companies?_quantity=10")
            .then(results => {
                console.log(results.data.data);
                setCompanies(results.data.data)
            })
            .catch(err => {
                toast.error(err)
            })
    }


    return (
        <>
            <ToastContainer/>

            <div className={"container"}>
                <button onClick={handleClick} className={"btn btn-success"}>Load data</button>
                <h1 className={"h1"}>Companies</h1>
                <div className={"row"}>
                    <div className='col-lg-12 col-12 col-md-6'>
                        {
                            companies.map((company) => (<NewsItem key={company.id} company={company}/>))
                        }
                    </div>

                </div>

            </div>
        </>

    )
}
export default App