import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './login/Register.jsx'
import Login from "./login/Login.jsx";
function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App;
