import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/authentication/signup';
import { Dashboard } from './pages/app/dashboard';
import { Membership } from './pages/app/membership';
import { SignIn } from './pages/authentication/signin';
import { Events } from './pages/app/events';
import { Booking } from './pages/app/booking';
import { Services } from './pages/app/services';
import { Billing } from './pages/app/billing';
import { AllMembers } from './pages/app/allmembers';
import { Facilities } from './pages/app/facilities';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/events' element={<Events />} />
        {/* route for facilities goes under here */}
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/facilities/booking/:id' element={<Booking />} />
        <Route path='/services' element={<Services />} />
        <Route path='/billing' element={<Billing />} />
        <Route path='/allmembers' element={<AllMembers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;