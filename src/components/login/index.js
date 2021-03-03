import React, { useState } from 'react'
import Button from '../forms/Button'
import FormInput from '../forms/FormInput'
import FormWrapper from '../forms/FormWrapper'
import axios from 'axios'
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom'
import './index.scss'

const Login =()=> {

    const history = useHistory();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [loginMessage, setMessage] = useState('');

    const handleSubmit = async event=> {
        event.preventDefault();
        await loginUser({
            id,
            password
        })
    }

    const loginUser =()=> {
        axios.post("http://localhost:8000/login", {
            email : id,
            password: password
        },{
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        })
        .then((response) => {
            let data = response.data;
            localStorage.setItem("userdata",JSON.stringify(data));
            if (data.usertype=='admin') {
               window.location.replace('http://localhost:3000/admin')
            } else {
                window.location.replace('http://localhost:3000/profile')
            }

            if (response.data.message) {
                setMessage(response.data.message)
            } else {
                setMessage(response.data[0])
            }
            console.log(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    const headline = {
        headline : "Login Here"
    }

    return (
        <div className="login">
        <FormWrapper {...headline}>
            <div>
                <form onSubmit={handleSubmit}>
                    <h3 style={{color: 'red'}}>{loginMessage}</h3>
                    <FormInput 
                    type="text"
                    name="id"
                    value={id}
                    placeholder="Enter Email"
                    handleChange={e => setId(e.target.value)}
                    />
                    <FormInput 
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    handleChange={e => setPassword(e.target.value)}
                    />
                    <Button onClick={loginUser} type="submit">
                        Sign In
                    </Button>

                    <div className="recovery">
                        <Link to="/recovery">
                            Reset Password
                        </Link>
                    </div>
                </form>
            </div>
        </FormWrapper>
        </div>
    );
}

export default Login

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}