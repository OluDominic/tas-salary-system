import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Modal from './../modal';
import { Helmet } from 'react-helmet'
import FormWrapper from '../forms/FormWrapper';
import FormInput from '../forms/FormInput';
import FormSelect from '../forms/FormSelect'
import { CountryDropdown } from 'react-country-region-selector';
import Button from '../forms/Button';
//import States from './states'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Avatar from 'react-avatar-edit';
// import { useParams } from 'react-router-dom'
import {APPCONFIG} from './../../config/config'
import axios from 'axios';
import moment from 'moment';

const EmployeeInfo =()=> {
    let [userdata,setUserdata] = useState({});
    let [useData, setUsedata] = useState({});
    const [preview, setPreview] = useState(null);
    const [startDate, setStartDate] =  useState(new Date());
    const [country, setCountry] = useState([])
    const [hideModal, setHideModal] = useState(true);
    const [id, setID] = useState('');
    const [state, setState] = useState('');
    const [firstName, setFirstName] = useState('');
    const [getEmployee, setGetEmployee] = useState([]);
    const [lastName, setLastName] = useState('');
    const [department, setDepartment] = useState('');
    const [school, setSchool] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState(new Date());
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');

    //avatar upload
    const [file, setFile] = useState('');
    const [avatar, setAvatar] = useState('Your File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPer, setUploadPer] = useState(0);

    const [passport, setPassport] = useState('');
    const [tel, setTel] = useState('')
    const [religion, setReligion] = useState('')
    const [marital, setMarital] = useState('')

    //bank informations
    const [bankName, setBankName] = useState('');
    const [accName, setAccName] = useState('');
    const [accNo, setAccNo] = useState('');

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

    //edu
    const [ssce, setSsce] = useState('');
    const [bsc, setBsc] = useState('');
    const [msc, setMsc] = useState('');
    const [phd, setPhd] = useState('');

    const toggleModal =()=> setHideModal(!hideModal);

    const configModal = {
        hideModal,
        toggleModal
    }

    const handleSubmit =(e)=> {
        e.preventDefault();
        reset()
        hideModal(true);
    }

    const handleCountryChange = (country) => {
        setCountry(country)
    }

    const onBeforeFileLoad=(elem)=> {
        if (elem.target.files[0].size > 2000000) {
            alert("File is too big!");
            elem.target.value = "";
          }
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

    const onClose =()=> {
        setPreview(null);
    }

    const SubmitButton =()=> {
        if (userdata.staffid, userdata.surname, userdata.firstname, 
            userdata.lastname, userdata.department, userdata.school, 
            userdata.email,phone, birthday, address,gender,startDate,passport,
            tel, marital , country, religion, bankName, accName, 
            accNo, state, kinName, kinRela, kinPhone, contactName1, 
            contactRela1, contactPhone1, contactName2, contactRela2,
            contactPhone2, ssce, bsc, msc, phd
            ) {
                return <Button onClick={profileAPI} type="submit">
                                Update
                            </Button>
            } else {
                return <Button onClick={profileAPI} disabled type="submit">
                                Update
                            </Button>
            }
    }

    useEffect(()=> {
        fetchUser()
    }, [])

    const fetchUser = () => {
        let data = localStorage.getItem('userdata')

        if (!data) {
            console.log('Data Fetched')
        }
        else{
            data=JSON.parse(data);
            //history.push('/admin')
           
        setUsedata(data);
        }
        axios.get(`${APPCONFIG.appapi}/employeedetails?id=${data.id}`, {
          
        }).then((data) => {
           
            setGetEmployee(data.data[0]);
        }).catch((error) => {
            console.log(error);
        })
    }

    const onCrop =(pv)=> {
        setPreview(pv);
    }

    const onChange =(e)=> {
        setFile(e.target.files[0]);
        setAvatar(e.target.files[0].name.replace(/ /g, '-'));

    }

    const reset =()=> {
        setPhone('');
        setAddress('');
        setGender('');
        setStartDate('');
        setPassport('');
        setTel('');
        setState('');
        setCountry('');
        setReligion('');
        setMarital('');
        setBankName('');
        setAccNo('')
        setAccName('');
        setKinName('');
        setKinRela('');
        setKinPhone('');
        setContactPhone1('');
        setContactName1('');
        setContactRela1('');
        setContactRela2('');
        setContactPhone2('');
        setContactName2('');
        setSsce('');
        setBsc('');
        setMsc('');
        setPhd('');
    }

    const profileAPI =()=> {
        axios.post("http://192.168.43.9:3000/profile", {
            id: userdata.id,
            staffid: userdata.staffid,
            surname: userdata.surname,
            firstname: userdata.firstname,
            lastname: userdata.lastname,
            department: userdata.department,
            school: userdata.school,
            email: userdata.email,
            phone: phone,
            birthday: birthday,
            address: address,
            gender: gender,
            dateofjoin: startDate,
            identificationno: passport,
            telephone: tel,
            stateoforigin: state,
            nationality: country,
            religion: religion,
            maritalstatus: marital,
            bankname: bankName,
            accountname: accName,
            accountnumber: accNo,
            nameofkin: kinName,
            relationshipofkin: kinRela,
            phoneofkin: kinPhone,
            ecname: contactName1,
            ecrelationship: contactRela1,
            ecphone: contactPhone1,
            ecsname: contactName2,
            ecsrelationship: contactRela2,
            ecsphone: contactPhone2,
            ssce: ssce,
            uni: bsc,
            msc: msc,
            phd: phd
        })
    }

    

    const headline = {
        headline : "Edit Profile"
    }

    return (
        <div className="employeeInfo">
            <Helmet>
                    <title>HR Management | Employees Info</title>
            </Helmet>
            <Modal {...configModal}>
                <FormWrapper {...headline}>
                    <div>
                        <form className={handleSubmit}>
                        <FormInput
                            name="id"
                            value={userdata.id}
                            type="hidden"
                            />
                            <FormInput
                            name="id"
                            value={userdata.staffid}
                            type="text"
                            />
                            <FormInput
                            name="surname"
                            value={userdata.surname}
                            type="text"
                            />
                            <FormInput
                            name="firstname"
                            value={userdata.firstname}
                            type="text"
                            ref={input => firstName = input}
                            />
                            <FormInput
                            name="lastname"
                            value={userdata.lastname}
                            type="text"
                            />
                            <FormInput
                            name="department"
                            value={userdata.department}
                            type="text"
                            />
                            <FormInput
                            name="school"
                            value={userdata.school}
                            type="text"
                            />
                            <FormInput
                            name="email"
                            value={userdata.email}
                            type="text"
                            />
                            

                            <div className="formRow checkoutInput">

                                <h2>Personal Informations</h2>
                                <FormInput
                            name="phone"
                            value={phone}
                            placeholder="Phone No"
                            type="text"
                            handleChange={e => setPhone(e.target.value)}
                            />

                            <label>Birthday</label>
                            <div className="date">
                                <DatePicker 
                                dateFormat="MMMM dd"
                                showMonthYearPicker
                                monthsShown
                                selected={birthday}
                                onChange={date => setBirthday(date)}
                                />
                            </div> 

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
                            <CountryDropdown
                            required
                            onChange={handleCountryChange}
                            value={country}
                            valueType="short"
                            /> 
                            <br />
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
                            handleChange={e => setMarital(e.target.value)}
                            />
                            <label>Date of join</label>
                            <div className="date">
                                <DatePicker 
                                dateFormat="MMMM yyyy"
                                showMonthYearPicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                dropdownMode= "scroll"
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
                                placeholder="Relationship"
                                handleChange={e=> setContactRela1(e.target.value)}
                                />
                                <FormInput
                                type="text"
                                name="contact phone1"
                                value={contactPhone1}
                                placeholder="Phone No"
                                handleChange={e=> setContactPhone1(e.target.value)}
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
                                placeholder="Relationship"
                                handleChange={e=> setContactRela2(e.target.value)}
                                />
                                <FormInput
                                type="text"
                                name="contact phone1"
                                value={contactPhone2}
                                placeholder="Phone No"
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

                            <div>
                                <h2>Educational Background</h2>
                            <FormSelect
                            options={[ 
                            {
                            value: "SSCE",
                            name: "Select ssce"
                            }
                            ,
                            {
                            value: "Yes",
                            name: "Yes"
                            }
                            , {
                            value: "No",
                            name: "No"
                            }
                            ]}
                            handleChange={e => setSsce(e.target.value)}
                            />
                            <FormSelect
                            options={[ 
                            {
                            value: "University Degree",
                            name: "University Degree"
                            }
                            ,
                            {
                            value: "Yes",
                            name: "Yes"
                            }
                            , {
                            value: "No",
                            name: "No"
                            }
                            ]}
                            handleChange={e => setBsc(e.target.value)}
                            />
                            <FormSelect
                            options={[ 
                            {
                            value: "MSc",
                            name: "Msc"
                            }
                            ,
                            {
                            value: "Yes",
                            name: "Yes"
                            }
                            , {
                            value: "No",
                            name: "No"
                            }
                            ]}
                            handleChange={e => setMsc(e.target.value)}
                            />
                            <FormSelect
                            options={[ 
                            {
                            value: "Phd",
                            name: "Phd"
                            }
                            ,
                            {
                            value: "Yes",
                            name: "Yes"
                            }
                            , {
                            value: "No",
                            name: "No"
                            }
                            ]}
                            handleChange={e => setPhd(e.target.value)}
                            />
                            </div>

                            <SubmitButton />
                        </form>
                    </div>
                </FormWrapper>
            </Modal>
            
            <h1>Employee Info</h1>
            <div className="user-info">
                    {/* <div>
                        <Avatar
                        width={150}
                        height={150}
                        label="Avatar Upload"
                        labelStyle={{fontSize: '16px'}}
                        onCrop={onCrop}
                        onClose={onClose}
                        onBeforeFileLoad={onBeforeFileLoad}
                        
                        src={null}
                        />
                        {preview && <img src={preview} alt="Preview" />}
                    </div> */}
                <div className="user-names">
                    <div className="fontAwesome">
                    <h2>Profile</h2>
                    <FontAwesomeIcon onClick={()=> toggleModal()} icon={faEdit} />
                    </div>
                    <p>ID: <h3 style={{display: 'inline'}}>{userdata.staffid}</h3></p>
                    <p>Surname: <h3 style={{display: 'inline'}}>{userdata.surname}</h3></p>
                    <p>Firstname: <h3 style={{display: 'inline'}}>{userdata.firstname}</h3></p>
                    <p>Lastname: <h3 style={{display: 'inline'}}>{userdata.lastname}</h3></p>
                    <p>Department: <h3 style={{display: 'inline'}}>{userdata.department}</h3></p>
                    <p>School: <h3 style={{display: 'inline'}}>{userdata.school}</h3></p>
                    <p>Email: <h3 style={{display: 'inline', textTransform: 'lowercase'}}>{userdata.email}</h3></p>
                </div>
                <div className="user-infos">
                        <p>Phone: <h3 style={{display: 'inline'}}>{getEmployee.phone}</h3></p>
                        <p>Birthday: <h3 style={{display: 'inline'}}>{getEmployee.birthday}</h3></p>
                    <p>Address: <h3 style={{display: 'inline'}}>{getEmployee.address}</h3></p>
                    <p>Gender: <h3 style={{display: 'inline'}}>{getEmployee.gender}</h3></p>
                    <p>Date Of Join: <h3 style={{display: 'inline'}}>{getEmployee.dateofjoin}</h3></p>
                </div>
            </div>
            <div className="personal">
                <div className="personal-first">
                    <div className="fontAwesome">
                    <h2>Personal Informations</h2>
                    {/* <FontAwesomeIcon icon={faEdit} /> */}
                    </div>
                    <p>Passport No: <h3 style={{display: 'inline'}}>{getEmployee.identificationno}</h3></p>
                    <p>Tel 2: <h3 style={{display: 'inline'}}>{getEmployee.telephone}</h3></p>
                    <p>State of Origin <h3 style={{display: 'inline'}}>{getEmployee.stateoforigin}</h3></p>
                    <p>Nationality <h3 style={{display: 'inline'}}>{getEmployee.nationality}</h3></p>
                    <p>Religion: <h3 style={{display: 'inline'}}>{getEmployee.religion}</h3></p>
                    <p>Marital Status <h3 style={{display: 'inline'}}>{getEmployee.maritalstatus}</h3></p>
                </div>
                <div className="personal-second">
                    <div className="fontAwesome">
                    <h2>Emergency Contact</h2>
                    {/* <FontAwesomeIcon icon={faEdit} /> */}
                    </div>
                    <label>Primary </label>
                    <p>Name: <h3 style={{display: 'inline'}}>{getEmployee.ecname}</h3> </p>
                    <p>Relationship: <h3 style={{display: 'inline'}}>{getEmployee.ecrelationship}</h3></p>
                    <p>Phone: <h3 style={{display: 'inline'}}>{getEmployee.ecphone}</h3></p>
                    <label>Secondary</label>
                    <p>Name: <h3 style={{display: 'inline'}}>{getEmployee.ecsname}</h3></p>
                    <p>Relationship: <h3 style={{display: 'inline'}}>{getEmployee.ecrelationship}</h3></p>
                    <p>Phone: <h3 style={{display: 'inline'}}>{getEmployee.ecphone}</h3></p>
                </div>
            </div>
            <div className="user-bank">
                <div className="userBankfirst">
                    <div className="fontAwesome">
                    <h2>Bank Informations</h2>
                    {/* <FontAwesomeIcon icon={faEdit} /> */}
                    </div>
                    <p>Bank Name: <h3 style={{display: 'inline'}}>{getEmployee.bankname}</h3> </p>
                    <p>Account Name: <h3 style={{display: 'inline'}}>{getEmployee.accountname}</h3></p>
                    <p>Account Number: <h3 style={{display: 'inline'}}>{getEmployee.accountnumber}</h3></p>
                </div>
                <div className="userBankSecond">
                    <div className="fontAwesome">
                    <h2>Next Of Kin</h2>
                    {/* <FontAwesomeIcon icon={faEdit} /> */}
                    </div>
                    <p>Name: <h3 style={{display: 'inline'}}>{getEmployee.nameofkin}</h3> </p>
                    <p>Relationship: <h3 style={{display: 'inline'}}>{getEmployee.relationshipofkin}</h3></p>
                    <p>Phone: <h3 style={{display: 'inline'}}>{getEmployee.phoneofkin}</h3></p>
                </div>
            </div>
        </div>
    );
}

export default EmployeeInfo;