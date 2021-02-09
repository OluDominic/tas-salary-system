import React, { useState } from 'react'
import Button from '../forms/Button'
import FormInput from '../forms/FormInput'
import FormWrapper from '../forms/FormWrapper'
import './index.scss'

const Login =()=> {

    const [id, setId] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit =(event)=> {
        event.preventDefault();
    }

    const headline = {
        headline : "Login Here"
    }

    return (
        <div className="login">
        <FormWrapper {...headline}>
            <div>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                    type="text"
                    name="id"
                    value={id}
                    placeholder="Enter ID"
                    handleChange={e => setId(e.target.value)}
                    />
                    <FormInput 
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    handleChange={e => setPassword(e.target.value)}
                    />
                    <Button type="submit">
                        Sign In
                    </Button>
                </form>
            </div>
        </FormWrapper>
        </div>
    );
}

export default Login