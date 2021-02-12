import React from 'react'
import './index.scss'


const Birthday =()=> {

    return (
        <div className="birthday">
            <h1>Birthday's</h1>
            <div className="birthday-sub">
            <h2>Today's Birthday</h2>
            <table border="0" cellPadding="10" cellSpacing="10">
                    <tbody>
                        <tr>
                            <td>
                                <table className="paymentHeader" border="0" cellPadding="10" cellSpacing="0">
                                    <tbody>
                                        <tr>
                                            <th>
                                               Staff
                                            </th>
                                            <th>
                                                department
                                            </th>
                                            <th>
                                                school
                                            </th>
                                            <th>
                                                birth date
                                            </th>
                                            <th>
                                                celebration
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table border="0" cellSpacing="10" cellPadding="10">
                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            Staff
                                                        </td>
                                                        <td>
                                                            Olu Dom
                                                        </td>
                                                        <td>
                                                            school
                                                        </td>
                                                        <td>
                                                            Sunday, 14 April
                                                        </td>
                                                        <td>
                                                            Celebrated
                                                        </td>
                                                    </tr>
                                   
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
           
        </div>
    );
}

export default Birthday;