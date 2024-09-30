import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/authentication/signup';
import { Dashboard } from './pages/dashboard';
import { Membership } from './containers/membership';
// import { Events } from './containers/events';
// import { Facilities } from './containers/facilities';
// import { Services } from './containers/services';
// import { Billings } from './containers/billings';
import { SignIn } from './pages/authentication/signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/membership' element={<Membership />} />
        {/* <Route path='/events' element={<Events />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/services' element={<Services />} />
        <Route path='/billings' element={<Billings />} /> */}
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
