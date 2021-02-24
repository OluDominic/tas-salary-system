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
//import './App.css';

function App() {
  return (
    <div className="App">
      {/*<Admin />*/}
      <Employee />
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
          <Route path="/salaryinfo" render={()=> (
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
      </Switch>
    </div>
  );
}

export default App;
