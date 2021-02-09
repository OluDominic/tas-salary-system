import logo from './logo.svg';
import { Switch, Route} from 'react-router-dom';
import MainLayout from './layouts/mainLay/mainLay';
import LoginPage from './pages/LoginPage';
import HomeLayout from './layouts/homeLay';
import Homepage from './pages/Homepage';
import SignUp from './pages/Signup';

import './default.scss'
//import './App.css';

function App() {
  return (
    <div className="App">
      
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
            <MainLayout>
              <SignUp />
            </MainLayout>
          )}
          />
      </Switch>
    </div>
  );
}

export default App;
