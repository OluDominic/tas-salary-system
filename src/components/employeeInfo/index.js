import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Modal from './../modal'
import FormWrapper from '../forms/FormWrapper';
import FormInput from '../forms/FormInput';
import FormSelect from '../forms/FormSelect'
import { CountryDropdown } from 'react-country-region-selector';
import NaijaStates from 'naija-state-local-government';
import Button from '../forms/Button';
import States from './states'
//import naijaStateLocalGovernment from 'naija-state-local-government';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizaitonProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import axios from 'axios';

const EmployeeInfo =()=> {
    let [userdata,setUserdata] = useState({});
    const [startDate, setStartDate] =  useState(new Date());
    const [country, setCountry] = useState([])
    const [hideModal, setHideModal] = useState(true);
    const [id, setID] = useState('');
    const [sot, setSot] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surName, setSurname] = useState('');
    const [lastName, setLastName] = useState('');
    const [department, setDepartment] = useState('');
    const [school, setSchool] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState(new Date());
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');

    const [passport, setPassport] = useState('');
    const [tel, setTel] = useState('')
    const [religion, setReligion] = useState('')
    const [marital, setMarital] = useState('')

    //bank informations
    const [bankName, setBankName] = useState('');
    const [accName, setAccName] = useState('');
    const [accNo, setAccNo] = useState('');
    const [bvn, setBvn] = useState('');

    //emergency contact
    const [contactName1, setContactName1] = useState('');
    const [contactRela1, setContactRela1] = useState('');
    const [contactPhone1, setContactPhone1] = useState('');

    const [contactName2, setContactName2] = useState('');
    const [contactRela2, setContactRela2] = useState('');
    const [contactPhone2, setContactPhone2] = useState('');

    
    //next of kin
    const [kinName, setKinName] = useState('');
    const [kinRela, setKinRela] = useState('');
    const [kinPhone, setKinPhone] = useState('');


    const toggleModal =()=> setHideModal(!hideModal);

    const configModal = {
        hideModal,
        toggleModal
    }

    const handleSubmit =(e)=> {
        e.preventDefault();
        reset()
    }

    const handleCountryChange = (country) => {
        setCountry(country)
    }

    useEffect(() => {
        let data = localStorage.getItem('userdata')

        if (!data) {
           // history.push('/')
        }
        else{
            data=JSON.parse(data);
            console.log(data,'popop')
      setUserdata(data);
        }
    },[]);

    console.log(NaijaStates.all());

    const reset =()=> {
        setID('');
        setSurname('');
        setFirstName('');
        setSurname('');
        setLastName('');
        setDepartment('');
        setSchool('');
        setEmail('');
        setPhone('');
        setAddress('');
        setGender('');
        setStartDate('');
        setPassport('');
        setTel('');
        setSot('');
        setCountry('');
        setReligion('');
        setMarital('');
        setBankName('');
        setAccNo('')
        setAccName('');
        setBvn('');
        setKinName('');
        setKinRela('');
        setKinPhone('');
        setContactPhone1('');
        setContactName1('');
        setContactRela1('');
        setContactRela2('');
        setContactPhone2('');
        setContactName2('');
    }

    const profileAPI =()=> {
        axios.post("http://localhost:8000/profile", {
            staffid: id,
            surname: surName,
            firstname: firstName,
            lastname: lastName,
            department: department,
            school: school,
            email: email,
            phone: phone,
            birthday: birthday,
            address: address,
            gender: gender,
            dateofjoin: startDate,
            identificationo: passport,
            telephone: tel,
            stateoforigin: sot,
            nationality: country,
            religion: religion,
            maritalstatus: marital,
            bankname: bankName,
            accountname: accName,
            accountnumber: accNo,
            bvn:bvn,
            nameofkin: kinName,
            relationshipofkin: kinRela,
            phoneofkin: kinPhone,
            ecname: contactName1,
            ecrelathionship: contactRela1,
            ecphone: contactPhone1,
            ecsname: contactName2,
            ecsrelationship: contactRela2,
            ecsphone: contactPhone2
        })
    }

    

    const headline = {
        headline : "Edit Profile"
    }

    return (
        <div className="employeeInfo">
            <Modal {...configModal}>
                <FormWrapper {...headline}>
                    <div>
                        <form className={handleSubmit}>
                            <FormInput
                            name="id"
                            value={userdata.usertype=='admin'?'Admin':userdata.staffid}
                            type="text"
                            />
                            <FormInput
                            name="surname"
                            value={userdata.usertype=='admin'?'Admin':userdata.surname}
                            type="text"
                            ref={input => surName = input}
                            />
                            <FormInput
                            name="firstname"
                            value={userdata.usertype=='admin'?'Admin':userdata.firstname}
                            type="text"
                            ref={input => firstName = input}
                            />
                            <FormInput
                            name="lastname"
                            value={userdata.usertype=='admin'?'Admin':userdata.lastname}
                            type="text"
                            />
                            <FormInput
                            name="department"
                            value={userdata.usertype=='admin'?'Admin':userdata.department}
                            type="text"
                            />
                            <FormInput
                            name="school"
                            value={userdata.usertype=='admin'?'Admin':userdata.school}
                            type="text"
                            />
                            <FormInput
                            name="email"
                            value={userdata.usertype=='admin'?'Admin':userdata.email}
                            type="text"
                            />
                            <FormInput
                            name="phone"
                            value={phone}
                            placeholder="Phone No"
                            type="text"
                            handleChange={e => setPhone(e.target.value)}
                            />

                        <LocalizaitonProvider dateAdapter={AdapterDateFns}>
                            <div style={{width: 300, padding: 20}}>
                                <DatePicker
                                views={['year', 'date']}
                                label="Year and Month only"
                                value={startDate}
                                onChange={(date) => {
                                    setStartDate(date);
                                }}
                                renderInput={(params) => (
                                    <TextField
                                    {...params}
                                    margin="normal"
                                    helperText={null}
                                    variant="standard"
                                    />
                                )}
                                />
                            </div> 
                            </LocalizaitonProvider>
                            <FormInput
                            name="address"
                            value={address}
                            placeholder="Address"
                            type="text"
                            handleChange={e => setAddress(e.target.value)}
                            />
                            <FormSelect
                            options={[ 
                            {
                            value: "gender",
                            name: "Gender"
                            }
                            ,
                            {
                            value: "male",
                            name: "Male"
                            }
                            , {
                            value: "female",
                            name: "Female"
                            }
                            ]}
                            handleChange={e => setGender(e.target.value)}
                            />
                            



                            <div className="formRow checkoutInput">

                                <h2>Personal Informations</h2>
                            <FormInput
                            type="text"
                            value={passport}
                            placeholder="Identification No (passport, national id, etc..)"
                            name="passport"
                            handleChange={e=> setPassport(e.target.value)}
                            />
                            <FormInput
                            type="text"
                            value={tel}
                            placeholder="Phone 2"
                            name="tel"
                            handleChange={e=> setTel(e.target.value)}
                            />

                            <States />

                            <CountryDropdown
                            required
                            onChange={handleCountryChange}
                            value={country}
                            valueType="short"
                            /> 
                            <FormSelect
                            options={[ 
                            {
                            value: "religion",
                            name: "Religion"
                            }
                            ,
                            {
                            value: "Christianity",
                            name: "Christian"
                            }
                            , 
                            {
                            value: "Muslim",
                            name: "Muslim"
                            }
                            , {
                                value: "Others",
                                name: "Others"
                                }
                            ]}
                            handleChange={e => setReligion(e.target.value)}
                            />
                        <FormSelect
                            options={[ 
                            {
                            value: "status",
                            name: "Marital Status"
                            }
                            ,
                            {
                            value: "Single",
                            name: "Single"
                            }
                            , {
                            value: "Married",
                            name: "Married"
                            }
                            ,{
                                value: "Others",
                                name: "Others"
                            }
                            ]}
                            handleChange={e => setReligion(e.target.value)}
                            />
                            <label>Date of join</label>
                            <div style={{width: 300}}>
                                <DatePicker
                                views={['year', 'month', 'date']}
                                label="Year, month and date"
                                minDate={new Date('1996-01-01')}
                                value={birthday}
                                onChange={(date) => {
                                    setBirthday(date);
                                }}
                                renderInput={(params) => (
                                    <TextField
                                    {...params}
                                    margin="normal"
                                    helperText={null}
                                    variant="standard"
                                    />
                                )}
                                />
                            </div>

                            
                            </div>

                            <div>
                                <h2>Emergency Contact</h2>
                                <h3>Primary</h3>
                                <FormInput
                                type="text"
                                name="econtactname"
                                value={contactName1}
                                placeholder="Name"
                                handleChange={e=> setContactName1(e.target.value)}
                                />
                                <FormInput
                                type="text"
                                name="contact rela"
                                value={contactRela1}
                                placeholder="Name"
                                handleChange={e=> setContactRela1(e.target.value)}
                                />
                                <FormInput
                                type="text"
                                name="contact phone1"
                                value={contactPhone1}
                                placeholder="Name"
                                handleChange={e=> setContactName1(e.target.value)}
                                />
                                <h3>Secondary</h3>
                                <FormInput
                                type="text"
                                name="econtactname"
                                value={contactName2}
                                placeholder="Name"
                                handleChange={e=> setContactName2(e.target.value)}
                                />
                                <FormInput
                                type="text"
                                name="contact rela"
                                value={contactRela2}
                                placeholder="Name"
                                handleChange={e=> setContactRela2(e.target.value)}
                                />
                                <FormInput
                                type="text"
                                name="contact phone1"
                                value={contactPhone2}
                                placeholder="Name"
                                handleChange={e=> setContactPhone2(e.target.value)}
                                />
                            </div>

                            <div>
                                <h2>Bank Informations</h2>
                                <FormInput
                                type="text"
                                name="bankname"
                                placeholder="Bank Name"
                                value={bankName}
                                handleChange={e => setBankName(e.target.value)}
                                />
                                <FormInput
                                type="text"
                                name="account name"
                                placeholder="Account Name"
                                value={accName}
                                handleChange={e => setAccName(e.target.value)}
                                />
                                <FormInput
                                type="text"
                                name="acc no"
                                placeholder="Account Number"
                                value={accNo}
                                handleChange={e => setAccNo(e.target.value)}
                                />
                                <FormInput
                                type="text"
                                name="bvn"
                                placeholder="BVN"
                                value={bvn}
                                handleChange={e => setBvn(e.target.value)}
                                />
                            </div>

                            <br />
                            <br />

                            <div>
                                <h2>Next of kin</h2>
                                <FormInput
                                type="text"
                                name="kinname"
                                placeholder="Name"
                                value={kinName}
                                handleChange={e => setKinName(e.target.value)}
                                />
                                <FormInput
                                type="text"
                                name="kinrel"
                                placeholder="Relationship"
                                value={kinRela}
                                handleChange={e => setKinRela(e.target.value)}
                                />
                                <FormInput
                                type="text"
                                name="kinphone"
                                placeholder="Phone"
                                value={kinPhone}
                                handleChange={e => setKinPhone(e.target.value)}
                                />
                            </div>

                            <Button onClick={profileAPI} type="submit">
                                Update
                            </Button>
                        </form>
                    </div>
                </FormWrapper>
            </Modal>
            
            <h1>Employee Info</h1>
            <div className="user-info">
                <div className="user-names">
                    <div className="fontAwesome">
                    <h2>Profile</h2>
                    <FontAwesomeIcon onClick={()=> toggleModal()} icon={faEdit} />
                    </div>
                    <p>ID: <h3 style={{display: 'inline'}}>{userdata.usertype=='admin'?'Admin':userdata.staffid}</h3></p>
                    <p>Surname: <h3 style={{display: 'inline'}}>{userdata.usertype=='admin'?'Admin':userdata.surname}</h3></p>
                    <p>Firstname: <h3 style={{display: 'inline'}}>{userdata.usertype=='admin'?'Admin':userdata.firstname}</h3></p>
                    <p>Lastname: <h3 style={{display: 'inline'}}>{userdata.usertype=='admin'?'Admin':userdata.lastname}</h3></p>
                    <p>Department: <h3 style={{display: 'inline'}}>{userdata.usertype=='admin'?'Admin':userdata.department}</h3></p>
                    <p>School: <h3 style={{display: 'inline'}}>{userdata.usertype=='admin'?'Admin':userdata.school}</h3></p>
                    <p>Email: <h3 style={{display: 'inline', textTransform: 'lowercase'}}>{userdata.usertype=='admin'?'Admin':userdata.email}</h3></p>
                </div>
                <div className="user-infos">
                    <p>Phone: <h3 style={{display: 'inline'}}></h3></p>
                    <p>Birthday: <h3 style={{display: 'inline'}}></h3></p>
                    <p>Address: <h3 style={{display: 'inline'}}></h3></p>
                    <p>Gender: <h3 style={{display: 'inline'}}></h3></p>
                    <p>Date Of Join: <h3 style={{display: 'inline'}}></h3></p>
                </div>
            </div>
            <div className="personal">
                <div className="personal-first">
                    <div className="fontAwesome">
                    <h2>Personal Informations</h2>
                    <FontAwesomeIcon icon={faEdit} />
                    </div>
                    <p>Passport No: </p>
                    <p>Tel 2: </p>
                    <p>State of Origin</p>
                    <p>Nationality</p>
                    <p>Religion</p>
                    <p>Marital Status</p>
                </div>
                <div className="personal-second">
                    <div className="fontAwesome">
                    <h2>Emergency Contact</h2>
                    <FontAwesomeIcon icon={faEdit} />
                    </div>
                    <label>Primary </label>
                    <p>Name </p>
                    <p>Relationship</p>
                    <p>Phone</p>
                    <label>Secondary</label>
                    <p>Name </p>
                    <p>Relationship</p>
                    <p>Phone</p>
                </div>
            </div>
            <div className="user-bank">
                <div className="userBankfirst">
                    <div className="fontAwesome">
                    <h2>Bank Informations</h2>
                    <FontAwesomeIcon icon={faEdit} />
                    </div>
                    <p>Bank Name </p>
                    <p>Account Name</p>
                    <p>Account Number</p>
                    <p>Bank Verification Number(BVN)</p>
                </div>
                <div className="userBankSecond">
                    <div className="fontAwesome">
                    <h2>Next Of Kin</h2>
                    <FontAwesomeIcon icon={faEdit} />
                    </div>
                    <p>Name </p>
                    <p>Relationship</p>
                    <p>Phone</p>
                </div>
            </div>
        </div>
    );
}

export default EmployeeInfo;