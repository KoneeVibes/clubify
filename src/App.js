import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/authentication/signup';
import { Dashboard } from './pages/dashboard';
import { Membership } from './containers/membership';
import { SignIn } from './pages/authentication/signin';
import { Events } from './containers/events';
import { Facilities } from './containers/facilities';
import { Services } from './containers/services';
import { Billing } from './containers/billing';
import { AllMembers } from './containers/allmembers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/events' element={<Events />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/services' element={<Services />} />
        <Route path='/billing' element={<Billing />} />
        <Route path='/allmembers' element={<AllMembers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;