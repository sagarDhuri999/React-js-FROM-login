import React, { useEffect, useState } from 'react'
// import { LoginContext } from '../Context/LoginContext'

const Login = () => {
    // const { setUserName, setShowProfile } = useContext(LoginContext)
    const [form, setFrom] = useState({ names: "", email: "", password: "" });
    const [error, setError] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [show, setSHOW] = useState(false)

    const handleFrom = (e) => {

        setFrom({
            ...form,
            [e.target.name]: e.target.value
            //name:names,email:email.value
        })

    }

    // console.log(form)

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(validation(form))
        setIsSubmit(true)





    }
    const validation = (form) => {
        const error = {};
        if (!form.names) {
            error.names = "Name is not available."
        }
        if (!form.email) {
            error.email = "email is not available"
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            error.email = "Give proper email id"
        }
        if (!form.password) {
            error.password = "Password is not available"
        } else if (form.password.length < 3) {
            error.password = "Password length must be more than 3"
        } //else if (form.password.length < 10) {
        //     error.password = "Password length must be minimum 10"
        // }
        return error;
    }

    useEffect(() => {
        if (Object.keys(error).length === 0 && isSubmit) {
            setSHOW(true)
            console.log(form);
            setFrom({ email: "", names: "", password: "" })

        }
    }, [error])

    return (
        <div className='container'>

            <form className='container' onSubmit={handleSubmit} >

                <input type="text" placeholder='userName' name='names' value={form.names} onChange={handleFrom} />
                {error.names && <p>{error.names}</p>}
                <input type="text" name='email' placeholder='E-mail' value={form.email} onChange={handleFrom} />
                {error.email && <p>{error.email}</p>}
                <input type="Password" placeholder='Password' name='password' value={form.password} onChange={handleFrom} />
                {error.password && <p>{error.password}</p>}
                <button onClick={handleSubmit}>Login</button>

            </form>

            {show && <h1>successful</h1>}

        </div >
    )
}

export default Login
