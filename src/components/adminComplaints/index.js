import React from 'react'
import './index.scss'
import {APPCONFIG} from './../../config/config';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell, makeStyles
  } from '@material-ui/core';
  import Paper from '@material-ui/core/Paper';

const AdminComplaints =()=> {

    const [complaints, setComplaints] = useState([]);

    useEffect(()=> {
        fetchComplaints()
    },[])

    const fetchComplaints=()=> {

        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer 111`,
            "Access-Control-Allow-Origin":"*"
        }

        axios.get(`${APPCONFIG.appapi}/fetchcomplaints`, {
            headers
        })
        .then((data)=> {
            setComplaints(data.data);
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    return (
        <div>
            <h1>Complaints Page</h1>
            <div className="birthday-sub">
            <h2>Mail</h2>
            <TableContainer component={Paper}>
                <Table className={useStyles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={stylesHead}># </TableCell>
                            <TableCell style={stylesHead}>Surname </TableCell>
                            <TableCell style={stylesHead}>firstname </TableCell>
                            <TableCell style={stylesHead}>Department </TableCell>
                            <TableCell style={stylesHead}>School </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {complaints.map((data, i)=> (
                            <TableRow key={i}>
                                <TableCell style={stylesBody}>{data.staffid}</TableCell>
                                <TableCell style={stylesBody}>{data.surname}</TableCell>
                                <TableCell style={stylesBody}>{data.firstname}</TableCell>
                                <TableCell style={stylesBody}>{data.department}</TableCell>
                                <TableCell style={stylesBody}>{data.school}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </div>
    );
}

export default AdminComplaints;