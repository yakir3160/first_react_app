import React from 'react'
import {toast, ToastContainer} from 'react-toastify'

const App = () => {
    const handleClick =()=> {
        toast.success("Hello from reactJS")
    }

    return (
        <>
            <ToastContainer/>
            <div>App</div>
            <button onClick={handleClick} className = "btn btn-warning">Click Me!</button>
        </>

    )
}
export default App