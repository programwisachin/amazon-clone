import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from './features/Items/userSlice'

const Authenticate = () => {

    const dispatch = useDispatch()
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let history = useNavigate()

    //Function to handle signUp action 
    const handleSignUp = async (e) => {
        e.preventDefault()
        const { name, email, password } = credentials
        //POST request 
        const response = await fetch(`http://localhost:5000/api/auth/createUser`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })

        })
        const json = await response.json()
        console.log(json)
        console.log(json.userName);

        if (json.success) {
            localStorage.setItem('token', json.authToken)
            history("/") //Serve homepage to the user after signUp
            dispatch(addUser({ isLoggedIn: true, userName: json.userName })) //Send user name and update login status to redux store
            alert("You have been Signed in")
        }
        else {
            alert("Invalid credentials")
        }
    }

    //Function to handle signUp action
    const handleLogin = async (e) => {
        e.preventDefault()
        const { email, password } = credentials
        //POST request
        const response = await fetch(`http://localhost:5000/api/auth/login`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email, password: password })

        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            localStorage.setItem('token', json.authToken)
            history("/") //Serve homepage to the user after login
            dispatch(addUser({ isLoggedIn: true, userName: json.userName })) //Send user name and update login status to redux store
            alert("You have been Logged in")
        }
        else {
            alert("Invalid credentials")
        }
    }

    //Function to handle input
    const onChange = (e) => {

        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (

        <div className="container mt-2" style={{ top: "14%", position: "absolute", backgroundColor: "white", borderRadius: "9px", marginLeft: "253px", padding: "47px", border: "2px solid orange" }}>
            <h2 className="mx-3">Create or Login to your amazon account</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="text" name="name" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required />
                </div>

                <button type="submit" className="btn btn-primary mx-3" onClick={handleSignUp}>Sign Up</button>
                <button type="submit" className="btn btn-primary" onClick={handleLogin}>Log in</button>
            </form>
        </div>
    )
}

export default Authenticate