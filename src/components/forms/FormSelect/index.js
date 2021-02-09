import React, {useState} from 'react'
import './index.scss'

const FormSelect =(props)=> {

    const [data]= useState(props.data);
    const [selectedData, updateSelectedData] = useState("");

    const handleChange =(e)=> {
        updateSelectedData(e.target.value);
        if (props.onSelectChange) props.onSelectChange(selectedData)
    }

    let options = data.map(data => (
        <option key={data.id} value={data.id}>
            {data.name}
        </option>
    ));

    return (

        <div className="formSelect">
            
            <select
                name="customSearch"
                className="custom-search-select"
                onChange={handleChange}
                >
                    <option>Select Item </option>
                    {options}
            </select>
        </div>
    );
}

export default FormSelect