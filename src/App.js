import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from './page/authentication/signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
