import { useState } from "react"
import FormSelect from './../../forms/FormSelect'


const States =()=> {
    const [state, setState] = useState('')

    return (
        <div>
            <FormSelect
                            options={[ 
                            {
                            value: "states",
                            name: "Select State"
                            }
                            ,
                            {
                            value: "Abia",
                            name: "Abia"
                            }
                            ,
                            {
                            value: "Adamawa",
                            name: "Adamawa"
                            }
                            , {
                            value: "Akwa Ibom",
                            name: "Akwa Ibom"
                            }
                            , 
                            {
                            value: "Anambra",
                            name: "Anambra"
                            }
                            ,
                            {
                            value: "Bauchi",
                            name: "Bauchi"
                            }
                            , 
                            {
                            value: "Bayelsa",
                            name: "Bayelsa"
                            }
                            , 
                            {
                            value: "Benue",
                            name: "Benue"
                            }
                            , 
                            {
                            value: "Borno",
                            name: "Borno"
                            }
                            , 
                            {
                            value: "Cross River",
                            name: "Cross River"
                            }
                            , 
                            {
                            value: "Delta",
                            name: "Delta"
                            }
                            , 
                            {
                            value: "Ebonyi",
                            name: "Ebonyi"
                            }
                            , 
                            {
                            value: "Edo",
                            name: "Edo"
                            }
                            , 
                            {
                            value: "Ekiti",
                            name: "Ekiti"
                            }
                            , 
                            {
                            value: "Enugu",
                            name: "Enugu"
                            }
                            , 
                            {
                            value: "Gombe",
                            name: "Gombe"
                            }
                            , 
                            {
                            value: "Imo",
                            name: "Imo"
                            }
                            , 
                            {
                            value: "Jigawa",
                            name: "Jigawa"
                            }
                            , 
                            {
                            value: "Kaduna",
                            name: "Kaduna"
                            }
                            , 
                            {
                            value: "Kano",
                            name: "Kano"
                            }
                            , 
                            {
                            value: "Katsina",
                            name: "Katsina"
                            }
                            , 
                            {
                            value: "Kebbi",
                            name: "Kebbi"
                            }
                            , 
                            {
                            value: "Kogi",
                            name: "Kogi"
                            }
                            , 
                            {
                            value: "Kwara",
                            name: "Kwara"
                            }
                            , 
                            {
                            value: "Lagos",
                            name: "Lagos"
                            }
                            , 
                            {
                            value: "Nasarawa",
                            name: "Nasarawa"
                            }
                            , 
                            {
                            value: "Niger",
                            name: "Niger"
                            }
                            , 
                            {
                            value: "Ogun",
                            name: "Ogun"
                            }
                            , 
                            {
                            value: "Ondo",
                            name: "Ondo"
                            }
                            , 
                            {
                            value: "Osun",
                            name: "Osun"
                            }
                            , 
                            {
                            value: "Oyo",
                            name: "Oyo"
                            }
                            , 
                            {
                            value: "Plateau",
                            name: "Plateau"
                            }
                            , 
                            {
                            value: "Rivers",
                            name: "Rivers"
                            }
                            , 
                            {
                            value: "Sokoto",
                            name: "Sokoto"
                            }
                            , 
                            {
                            value: "Taraba",
                            name: "Taraba"
                            }
                            , 
                            {
                            value: "Yobe",
                            name: "Yobe"
                            }
                            , 
                            {
                            value: "Zamfara",
                            name: "Zamfara"
                            }
                            , 
                            {
                            value: "FCT",
                            name: "Federal Capital Territory"
                            }
                            ]}
                            handleChange={e => setState(e.target.value)}
                            />
        </div>
    );
}

export default States;