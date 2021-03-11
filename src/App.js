import logo from './logo.svg';
import { Switch, Route} from 'react-router-dom';
import MainLayout from './layouts/mainLay/mainLay';
import LoginPage from './pages/LoginPage';
import HomeLayout from './layouts/homeLay';
import Homepage from './pages/Homepage';
import SignUp from './pages/Signup';
import AdminLayout from './layouts/adminLay';
import Adminpage from './pages/AdminPage';
import Admin from './components/admin';
import AdminDash from './pages/AdminDash';
import Employees from './components/employees';
import BirthdayPage from './pages/BirthdayPage';
import UserProfilePage from './pages/UserProfilePage';
import SalaryEditPage from './pages/SalaryEditPage';
import './default.scss'
import SsLay from './layouts/ssLay';
import ProfilePage from './pages/Profile';
import SalaryPage from './pages/SalaryPage';
import EmployeeInformation from './pages/EmployeeInformation';
import Employee from './components/employee';
import SalaryInfoPage from './pages/SalaryInfoPage';
import UserProfileEditPage from './pages/UserProfileEditPage';
import WithAdminAuth from './hoc/withAdminAuth';
import School from './pages/School';
import DepartmentPage from './pages/DepartmentPage';
import {useState,useEffect} from 'react'
import PayslipPage from './pages/PayslipPage';
import ComplaintForm from './pages/ComplaintPage';
import RecoveryPage from './pages/RecoveryPage';
import UpdateEmployee from './pages/UpdateEmployeePage';
import AdminComplaintsPage from './pages/AdminComplaintsPage';
//import './App.css';

function App() {
 
  const [useData, setuseData] = useState(null);
    
  useEffect(()=> {
      let userdata = localStorage.getItem('userdata');
      setuseData(JSON.parse(userdata))
  },[])
  return (
    <div className="App">
      {useData && useData.usertype=='admin'?   <Admin />:null}
      {useData && useData.usertype=='employee'?   <Employee />:null}
      <Switch>
        <Route exact path="/" render={()=> (
            <HomeLayout>
              <Homepage />
            </HomeLayout>
          )}
          />
          <Route path="/login" render={()=> (
            <MainLayout>
              <LoginPage />
            </MainLayout>
          )}
          />
          <Route path="/register" render={()=> (
            <AdminLayout>
              <SignUp />
            </AdminLayout>
          )}
          />
          <Route path="/admin" render={()=> (
            
              <AdminLayout>
                <Adminpage />
              </AdminLayout>
          )}
          />
          <Route path="/admindash" render={()=> (
            <AdminLayout>
              <AdminDash />
            </AdminLayout>
          )}
          />
          <Route path="/employees" render={()=> (
            <AdminLayout>
              <Employees />
            </AdminLayout>
          )}
          />
          <Route path="/birthday" render={()=> (
            <AdminLayout>
              <BirthdayPage />
            </AdminLayout>
          )}
          />
          <Route path="/userprofile" render={()=> (
            <AdminLayout>
              <UserProfilePage />
            </AdminLayout>
          )}
          />
          <Route path="/salaryedit" render={()=> (
            <AdminLayout>
              <SalaryEditPage />
            </AdminLayout>
          )}
          />
          <Route path="/salaryinfo/:id" render={()=> (
            <AdminLayout>
              <SalaryInfoPage />
            </AdminLayout>
          )}
          />
          <Route path="/userprofileedit" render={()=> (
            <AdminLayout>
              <UserProfileEditPage />
            </AdminLayout>
          )}
          />
          <Route path="/schools" render={()=> (
            <AdminLayout>
              <School />
            </AdminLayout>
          )}
          />
          <Route path="/departments" render={()=> (
            <AdminLayout>
              <DepartmentPage />
            </AdminLayout>
          )}
          />
          <Route path="/update/:id" render={()=> (
            <AdminLayout>
              <UpdateEmployee />
            </AdminLayout>
          )}
          />
          <Route path="/admincomplaints" render={()=> (
            <AdminLayout>
              <AdminComplaintsPage />
            </AdminLayout>
          )}
          />
          <Route path="/profile" render={()=> (
            <SsLay>
              <ProfilePage />
            </SsLay>
          )}
          />
          <Route path="/salary" render={()=> (
            <SsLay>
              <SalaryPage />
            </SsLay>
          )}
          />
          <Route path="/info" render={()=> (
            <SsLay>
              <EmployeeInformation />
            </SsLay>
          )}
          />
          <Route path="/payslip/:staffid" render={()=> (
            <SsLay>
              <PayslipPage />
            </SsLay>
          )}
          />
          <Route path="/complaint" render={()=> (
            <SsLay>
              <ComplaintForm />
            </SsLay>
          )}
          />
          <Route path="/recovery/:id" render={()=> (
            <SsLay>
              <RecoveryPage />
            </SsLay>
          )}
          />
      </Switch>
    </div>
  );
}

export default App;
