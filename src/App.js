import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/authentication/signup';
import { SignIn } from './pages/authentication/signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
