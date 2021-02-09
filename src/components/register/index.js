import React, { useState } from 'react'
import FormInput from '../forms/FormInput'
import FormSelect from '../forms/FormSelect'
import FormWrapper from '../forms/FormWrapper'
import Button from '../forms/Button'
import './index.scss'

const Register =()=> {

    const [firstName, setFirstName] = useState("")
    const [surName, setSurName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmite =(event)=> {
        event.preventDefault()
    }

    const data = [
        {
            id: "1",
            name: "Senior School"
        },
        {
            id: "2",
            name: "Junior School"
        },
        {
            id: "3",
            name: "Day School"
        },
        {
            id: "4",
            name: "Primary School"
        }
    ]

    const onSelectChange =(e)=> {
        console.log(e.target.checked)
    }

    const headline = {
        headline : "Registeration Page"
    }

    return (
        
        
            <FormWrapper {...headline}>
                <div>
                <form onSubmit={handleSubmite}>
                <FormInput 
                type="text"
                placeholder="Firstname"
                name="firstName"
                value={firstName}
                handleChange={ e=> setFirstName(e.target.value)}
                />
                <FormInput 
                type="text"
                placeholder="Surname"
                name="surname"
                value={surName}
                handleChange={ e=> setSurName(e.target.value)}
                />
                <FormInput 
                type="text"
                placeholder="Lastname"
                name="lastname"
                value={lastName}
                handleChange={ e=> setLastName(e.target.value)}
                />
                <FormInput 
                type="text"
                placeholder="Email Address"
                name="email"
                value={email}
                handleChange={ e=> setEmail(e.target.value)}
                />
                <FormInput 
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                handleChange={ e=> setPassword(e.target.value)}
                />
                <FormSelect data={data} onSelectChange={onSelectChange} />
                <Button type="submit">
                    Sign Up
                </Button>
                </form>
                </div>
                
            </FormWrapper>
    );
}

export default Register;