import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Employees =()=> {

    return (
        <div className="employees">
            <h1>Register Employees</h1>
            <ul>
                <li>
                    <Link to="/register">
                        Add
                    </Link>
                </li>
            </ul>
            <div className="employeesTable">
                    <h2>All Employees table</h2>
                    <table>
                    <table border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <td>
                                <table className="paymentHeader" border="0" cellPadding="10" cellSpacing="0">
                                    <tbody>
                                        <tr>
                                            <th>
                                               ID
                                            </th>
                                            <th>
                                                Fullname
                                            </th>
                                            <th>
                                                School
                                            </th>
                                            <th>
                                                Department
                                            </th>
                                            <th>
                                               Actions
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table border="0" cellSpacing="0" cellPadding="10">
                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            id
                                                        </td>
                                                        <td>
                                                            fullname
                                                        </td>
                                                        <td>
                                                            school
                                                        </td>
                                                        <td>
                                                            department
                                                        </td>
                                                        <td>
                                                            <ul>
                                                                <li>
                                                                    <Link>Edit</Link>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                   
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                    </table>
                </div>
        </div>
    );
}

export default Employees;