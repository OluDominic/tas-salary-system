import logo from './logo.svg';
import { Switch, Route} from 'react-router-dom';
import MainLayout from './layouts/mainLay/mainLay';
import LoginPage from './pages/LoginPage';
import HomeLayout from './layouts/homeLay';
import Homepage from './pages/Homepage';
import SignUp from './pages/Signup';import './default.scss'
import AdminLayout from './layouts/adminLay';
import Adminpage from './pages/AdminPage';
import Admin from './components/admin';
import AdminDash from './pages/AdminDash';
import Employees from './components/employees';
import BirthdayPage from './pages/BirthdayPage';
import UserProfilePage from './pages/UserProfilePage';
import SalaryEditPage from './pages/SalaryEditPage';
//import './App.css';

function App() {
  return (
    <div className="App">
      {/*<Admin />*/}
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
      </Switch>
    </div>
  );
}

export default App;
