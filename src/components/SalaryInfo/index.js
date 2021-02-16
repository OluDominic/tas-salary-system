import React, { useState } from 'react'
import Button from '../forms/Button'
import FormInput from '../forms/FormInput'
import './index.scss'


const SalaryInfo =()=> {

    const [netSalary, setNetSalary] = useState('')

    //addition
    const [leaveAllow, setLeaveAllow] = useState(0);
    const [monthlyAllow, setMonthlyAllow] = useState(0);
    const [transportAllowance, setTransportAllowance] = useState(0);
    const [hodAllowance, setHodAllowance] = useState(0);
    const [classTeacherAllow, setClassTeacherAllow] = useState(0);
    const [arrears, setArrears] = useState(0);
    const [compensation, setCompesation] = useState(0);
    const [otherAllowance, setOtherAllowance] = useState(0);

    //dedection
    const [social, setSocial] = useState(300);
    const [lateness, setLateness] = useState(0);
    const [cooperative, setCooperative] = useState(0);
    const [childFees, setChildFees] = useState(0);
    const [absentism, setAbsentism] = useState(0);
    const [health, setHealth] = useState(0);
    const [otherDec, setOtherDec] = useState(0);

    const handleSubmit =(event)=> {
        event.preventDefault()
    }

    return (
        <div className="salaryInfo">
            <h1>Salary Profile</h1>
            <div className="info-header">
                <h2>Olu Dom</h2>
                <p>Admin Department</p>
                <p>SS School</p>
                <h3>Software Development</h3>
                <p>Date of Join : Jan, 2021</p>
            </div>

            <div className="wrap">
            <form onSubmit={handleSubmit}>
                <div className="net">
                        <label>Net Salary (N)</label>
                        <FormInput 
                        name="netsalary"
                        value={netSalary}
                        type="text"
                        handleChange={e => setNetSalary(e.target.value)}
                        />
                </div>
                <div className="info-fill">
                    <h3>addition</h3>
                        <label>HOD Allowance</label>
                        <FormInput 
                        name="hod allowance"
                        value={hodAllowance}
                        type="text"
                        handleChange={e => setHodAllowance(e.target.value)}
                        />
                        <label>Class Teacher Allowance</label>
                        <FormInput 
                        name="class teacher allowance"
                        value={classTeacherAllow}
                        type="text"
                        handleChange={e => setClassTeacherAllow(e.target.value)}
                        />
                        <label>Monthly Allowance</label>
                        <FormInput 
                        name="monthlyAllowance"
                        value={monthlyAllow}
                        type="text"
                        handleChange={e => setMonthlyAllow(e.target.value)}
                        />
                        <label>Leave Allowance</label>
                        <FormInput 
                        name="leaveAllowance"
                        value={leaveAllow}
                        type="text"
                        handleChange={e => setLeaveAllow(e.target.value)}
                        />
                        <label>Transport Allowance</label>
                        <FormInput 
                        name="transport allowance"
                        value={transportAllowance}
                        type="text"
                        handleChange={e => setTransportAllowance(e.target.value)}
                        />
                        <label>Other Allowance</label>
                        <FormInput 
                        name="other allowance"
                        value={otherAllowance}
                        type="text"
                        handleChange={e => setOtherAllowance(e.target.value)}
                        />
                        <label>Arrears</label>
                        <FormInput 
                        name="arrears"
                        value={arrears}
                        type="text"
                        handleChange={e => setArrears(e.target.value)}
                        />
                        <label>Compensations</label>
                        <FormInput 
                        name="compensation"
                        value={compensation}
                        type="text"
                        handleChange={e => setCompesation(e.target.value)}
                        />
                </div>
                <div className="info-fill">
                    <h3>Deduction</h3>
                    <label>Social</label>
                        <FormInput 
                        name="social"
                        value={social}
                        type="text"
                        readOnly
                        />
                        <label>Lateness</label>
                        <FormInput 
                        name="lateness"
                        value={lateness}
                        type="text"
                        handleChange={e => setLateness(e.target.value)}
                        />
                        <label>Co-operative</label>
                        <FormInput 
                        name="cooperative"
                        value={cooperative}
                        type="text"
                        handleChange={e => setCooperative(e.target.value)}
                        />
                        <label>Child Fees</label>
                        <FormInput 
                        name="childfees"
                        value={childFees}
                        type="text"
                        handleChange={e => setChildFees(e.target.value)}
                        />
                        <label>Absentism</label>
                        <FormInput 
                        name="absentism"
                        value={absentism}
                        type="text"
                        handleChange={e => setAbsentism(e.target.value)}
                        />
                        <label>Health</label>
                        <FormInput 
                        name="health"
                        value={health}
                        type="money"
                        handleChange={e => setHealth(e.target.value)}
                        />
                        <label>Others</label>
                        <FormInput 
                        name="others"
                        value={otherDec}
                        type="money"
                        handleChange={e => setOtherDec(e.target.value)}
                        />
                    </div>
                    
                    <Button style={{width: "60%", alignItem: "center"}} type="submit">
                            Submit
                        </Button>
                </form>
            </div>
        </div>
    )
}

export default SalaryInfo;