import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './main/HomePage.jsx'
import Login from './main/Login.jsx'

export default () => {
    <Router>
        <Routes>
            <Route exact path="/">
                <HomePage />
            </Route >
            <Route exact path="/login">
                <Login />
            </Route >
        </Routes>
    </Router>
}