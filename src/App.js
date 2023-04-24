import { Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePage';
import LoginPage from "./Pages/LoginPage";
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage/>} />
    </Routes>
  );
}

export default App;
