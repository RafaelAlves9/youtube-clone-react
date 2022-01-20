import { Switch, Route } from 'react-router-dom'
import HomePage from './main/HomePage.jsx'
import HomePage from './main/Login.jsx'

export default () => {
    <Switch >
        <Route path="/">
            <HomePage />
        </Route >
        <Route path="/login">
            <Login />
        </Route >
    </Switch>
}