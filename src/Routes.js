import { Route } from 'react-router-dom'
import HomePage from './main/HomePage.jsx'
import Login from './main/Login.jsx'

export default () => {
    <>
        <Route path="/">
            <HomePage />
        </Route >
        <Route path="/login">
            <Login />
        </Route >
    </>
}